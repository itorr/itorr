
const {readFileSync, mkdirSync, writeFileSync, existsSync, readdirSync} = require('fs');
const {dirname,basename,extname} = require('path');
const md5 = require('md5');
const dateFormat = require('./functions/date-format');

const articlesPath = './articles/';

const typeRegex = /^\w+$/;
const ignoreRegex = /^\./;
const articleFileNameRegex = /\.(json|md)$/i;
const types = readdirSync(articlesPath).filter(t=>typeRegex.test(t));

console.log(types);
const articles = [];

const parseArticleByJSON = filePath=>{
    try{
        const data = JSON.parse(readFileSync(filePath,'utf-8'));

        // if(data.images){
        //     data.images = data.images.map(image=>{
        //         image.size = +image.size;
        //         image.width = +image.width;
        //         image.height = +image.height;
        //         image.status = +image.status;
        //         image.type = +image.type;
        //         image.created = +image.created;
        //         image.modified = +image.modified;
        //         return image;
        //     });
        // }
        // writeFileSync(filePath,JSON.stringify(data,0,2),'utf-8')
        return data;
    }catch(e){
        return null;
    }
};

const mdFileNameRegex = /^(\d{4}-\d{2}-\d{2})_(.+)\.md$/i;
const titleRegex = /(\n|^)#(.+)/;

// const urlRegex = /^[\u4e00-\u9fa5\w-]+$/;
const urlRegex = /^[\w-]+$/;

const generatorURL = article=>{
    const { id, type, title, created , url } = article;
    if(/^\d+$/.test(id)) return `${type}/${id}`;

    const idReplaced = String(id).replace(/\s+/g,'-').toLowerCase();
    if(urlRegex.test(idReplaced)) return `${type}/${encodeURIComponent(idReplaced)}`;

    const titleReplaced = title.replace(/\s+/g,'-').toLowerCase();
    if(urlRegex.test(titleReplaced)) return `${type}/${encodeURIComponent(titleReplaced)}`;

    const hash = md5([
        id,
        title,
    ].join(','));

    return `${type}/${dateFormat(created,'yyyy-MM-dd')}_${hash.substr(0,8)}`;

};
const afterImageRegex = /!\[(.+?)\]\((.+?)\)\s{0,}$/m;
const parseArticleByMarkDown = filePath=>{
    let text = readFileSync(filePath,'utf-8');
    const fileName = basename(filePath);

    const fileNameMatch = fileName.match(mdFileNameRegex);
    if(!fileNameMatch) return console.log(filePath,'文章解析出错');
    
    const created = Math.floor(+new Date(fileNameMatch[1]+' 00:00:01 GMT+0800')/1000);
    
    const titleMatch = text.match(titleRegex);

    let title = titleMatch ? titleMatch[2]: fileNameMatch[2];

    text = text.replace(titleRegex,'').trim();
    title = title.trim();
    const path = dirname(filePath);
    const type = basename(path);

    let id = fileName.replace(articleFileNameRegex,'');

    let cover;

    const coverMatch = text.match(/https.+?\.(jpe?g|png)/ig);
    
    if(coverMatch){
        cover = coverMatch[0]
    }

    let images = [];

    while(true){
        const afterImageMatch = text.match(afterImageRegex);
        if(!afterImageMatch) break;

        const title = afterImageMatch[1];
        const src = afterImageMatch[2];
        // console.log(title,src);
        images.push({
            src
        });
        text = text.replace(afterImageRegex,'');
    }

    return {
        id,
        type,
        title,
        cover,
        created,
        text,
        images,
        ext: 'md'
    }
};

types.forEach(type=>{
    const typePath = `${articlesPath}${type}/`;

    const articleFileNames = readdirSync(typePath).filter(t=>!ignoreRegex.test(t)).filter(t=>articleFileNameRegex.test(t));

    articleFileNames.forEach(fileName=>{
        const path = `${typePath}${fileName}`
        const ext = extname(fileName).toLowerCase().substr(1);

        let article;
        if(ext === 'json'){
            article = parseArticleByJSON(path);
        }else if(ext === 'md'){
            article = parseArticleByMarkDown(path);
        }

        if(!article) return;

        article.type = type;

        article.url = generatorURL(article);
        article.file = `${type}/${fileName}`;

        articles.push(article);
    });

});

const dataPath = './data/';

if(!existsSync(dataPath)) mkdirSync(dataPath);

writeFileSync(
    dataPath + 'articles.json',
    JSON.stringify(articles,0,2),
    'utf-8'
);

console.log(articles.length);