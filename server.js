
const express = require('express');
const app = express();

const dateFormat = require('./functions/date-format');

const {readFileSync, mkdirSync, writeFileSync, existsSync, readdirSync} = require('fs');
const md = require('markdown-it')({
    html:         true,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                                // This is only for full CommonMark compatibility.
    breaks:       true,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                                // useful for external highlighters.
    linkify:      false,        // Autoconvert URL-like text to links
  
    // Enable some language-neutral replacement + quotes beautification
    // For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js
    typographer:  false,
  
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: '“”‘’',
  
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externally.
    // If result starts with <pre... internal wrapper is skipped.
    highlight: function (/*str, lang*/) { return ''; }
  });
app.disable('x-powered-by');

app.use(express.json({
	limit: '10mb',
	strict: false
}));

app.use(express.urlencoded({
	extended: true
}));



const articles = JSON.parse(readFileSync('./data/articles.json','utf-8'));
const ArticlesByURL = {};

articles.forEach(article=>{
    ArticlesByURL[article.url] = article;
});

var encodeHTML =  str => str.replace(/[&<>'"]/g, 
  tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag]));

app.get('/',(req,res)=>{
    const html = articles.map(article=>{
        const {url ,title, type,created } = article;
        return `<a href="/${url}">
        ${article.cover?`<img src="${imageFormat(article.cover,'sq512')}">`:''}
            <time>${dateFormat(created)}</time>
            <b>${type}</b>
            <span>${encodeHTML(title)}</span>
        </a>`;
    }).join('<br>\n');
    res.send(html);
});
const contentFormat = text=>{
    if(!text) return '';
    text = text.replace(/(https?\:\/\/[\w\/.#&!?%:;=_]+\.)(gif|jpg|jpeg|png)/g, '<div class="content-image"><img src="$1$2"></div>')
    text = text.replace(/(https?\:\/\/ww[0-9]{1}\.sinaimg\.cn\/)([\w]{4,10})(\/[\w]{16,32}\.)(gif|jpg|jpeg|png)/g, "$1mw1024$3$4")

    text = md.render(text)
	text = text.replace(/<br( \/)?>/ig,'<br><span class=br></span>');
    return text;
}
const cdn = 'https://t.magiconch.com';
const imageFormat = (src,suffix = 'h1200')=>{
	// console.log(src,suffix);
	if(src.match(/^attach/)){
		src='/'+src;
	}
	// if(!config.alpha && config.cdn){
		var 
		m=src.match(/^\/?((attach|static)\/\w+\/[\w-_\.]+\.(jpe?g|png))$/i);

		if(m){

			src=cdn+'/'+m[1];

			if(suffix){
				src=src+'!'+suffix;
			}
		}
	// }
	return src;
};
app.get('/:url([0-9a-z/\\-_]+)',(req,res,next)=>{
    const {url} = req.params;
    console.log(url)
    const article = ArticlesByURL[url];
    if(!article) return next();

    // res.json(article);

    // console.log(article);
    // sq512

    const html = `
    <header>
        <a href="/">home</a>
    </header>
    ${article.cover?`<img src="${imageFormat(article.cover,'sq512')}">`:''}
    <h1>${article.title}</h1>
    <article>${contentFormat(article.text)}</article>
    <div class="images">
        ${article.images?article.images.map(image=>{
            return `<img src="${imageFormat(image.src,'h1200')}">`;
        }).join(''):''}
    </div>
`;

    res.send(html)
});

app.use((req,res)=>{
    res.send('404');
})

const http = require('http');
const server = http.createServer(app);

const port = 19503;
server.listen(port);
console.log(`博客 ${new Date()} http://localhost:${port}/ `);