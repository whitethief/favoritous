// JavaScript Document
var imgs = $('div.images > ul > li > div.imageContainer > a > img');
var tabs = $('div.button');
// asldkfhaksdfh
for(j=0; j<3; j++){
	var string =(j+1)+'.png'; 
	$(imgs[j]).attr('src', string);
}

if($(tabs[1]).hasClass('tabSelected')){
	$(tabs[1]).removeClass('tabSelected');
	$(tabs[1]).addClass('tabNotSelected');
}
