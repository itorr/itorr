
export const onRequest = function(xhr, onOver) {
	var r = xhr.response;

	if (r) {
		if ((xhr.getResponseHeader("Content-Type") || "").match(/json/)) {
			try {
				r = JSON.parse(r);
				if(r.error){
					return ui.alert(r.error);
				}
			} catch (e) {
				//
			}
		}

		// if(r.error){
		// 	error(r);
		// 	return;
		// }
	}

	if (onOver) {
		onOver(r);
	}
};
export const get = async (url,query)=> {
    if(query){
        const searchParams = new URLSearchParams(query);
        url = url + (/\?/.test(url)?'&':'?') + searchParams.toString();
    }
    try {
        const res = await fetch(url,{
            method: 'GET',
            headers:{
                'Content-type': 'application/json'
            },
            credentials: 'omit',
        });
        const data = res.json();
        return data;
    } catch (e) {
        console.log(e);
        return null;
    }
};
export const post = (url, data, onOver, onError)=> {
	const x = new XMLHttpRequest();

	x.open("POST", url, 1);
	x.withCredentials = true;
	x.setRequestHeader("Content-type", "application/json; charset=utf-8");
	x.onload = _ => {
		onRequest(x, onOver);
	};
	if (onError) {
		x.onerror = onError;
	}
	x.send(JSON.stringify(data));

	return x;
};
let articles;
const ArticleIds = {};
const ArticleURLs = {};

export const getBaseData = async _=>{
    articles = await get('/data/articles.json');
    articles.forEach(article=>{
        ArticleIds[article.id] = article;
        ArticleURLs[article.url] = article;
    });
};
export const getArticles = (query)=>{
    let { 
        type, 
        types =[],
        sortBy = 'created', 
        sortType = -1,
        keyword 
    } = query;

    let _articles = articles;

    if(type) types = [ type ];

    if(types) _articles = _articles.filter(a=>types.includes(a.type));

    if(sortBy === 'created'){
        _articles = _articles.sort((a,b)=>{
            return (a['created'] - b['created']) * sortType
        });
    }

    if(keyword){
        const keywordRegex = new RegExp(keyword);
        _articles = _articles.filter(a=>keywordRegex.test(a.title));
    }

    return _articles;
    
};
export const getArticle = (id)=>{
    return ArticleIds[id]
};
export const getArticleByURL = (url)=>{
    return ArticleURLs[url]
};