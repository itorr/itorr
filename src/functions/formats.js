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