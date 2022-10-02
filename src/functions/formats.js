const cdn = 'https://t.magiconch.com';
export const imageFormat = (src,suffix = 'h1200')=>{
	if(!src) return;
	
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



import mardownIt from 'markdown-it';
const md = mardownIt({
    html:         true,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />).
    breaks:       true,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
    linkify:      true,        // Autoconvert URL-like text to links
    typographer:  false,
    quotes: '“”‘’',
    // highlight: function (/*str, lang*/) { return ''; }
});
export const contentFormat = text=>{
    if(!text) return '';
    // text = text.replace(/(https?\:\/\/[\w\/.#&!?%:;=\-_]+\.)(gif|jpg|jpeg|png)/g, '<div class="content-image"><img src="$1$2"></div>')
    text = text.replace(/(https?\:\/\/ww[0-9]{1}\.sinaimg\.cn\/)([\w]{4,10})(\/[\w]{16,32}\.)(gif|jpg|jpeg|png)/g, "$1mw1024$3$4")

	text = text.replace(/(^|\n)(https?:\/\/[\w\-_\/\.]+?\.jpe?g)/ig,(_,a,url,b)=>{

		return `${a}![](${url})`;
	})

    text = md.render(text)
	text = text.replace(/<br ?\/?>\s+?<img/g,'<img')
	text = text.replace(/<br( \/)?>/ig,'<br><span class=br></span>');
	text = text.replace(/<img /g,t=>`${t}referrerpolicy="no-referrer" `)
    return text;
}