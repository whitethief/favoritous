//con esta funcion queda un hoyito feo
/*
(function($){
    var divlinks = $('div.links'),
    	divimages = $('div.images'),
    	linksHeight = divlinks.height(),
    	imagesHeight = divimages.height(),
        setup = null;

    setup = function setup(){
    	if(imagesHeight >= linksHeight){
         divlinks.height(divimages.height());
     	} else {
     	  divimages.height(divlinks.height());
     	}
    }

    $(document).ready(setup);

}(jQuery))*/

//es porque la verdadera altura no es todo lo que se muestra


//con esta no queda hoyito pero se come un pedazo

(function($){
    var divlinks = $('div.links'),
    	divimages = $('div.images'),
    	linksHeight = divlinks.height(),
    	imagesHeight = divimages.height(),
    	columnHeight = 0,
        setup = null;

    setup = function setup(){
    	if(imagesHeight >= linksHeight){
         columnHeight = imagesHeight;
     	} else {
     	  columnHeight = linksHeight;
     	}
     	divimages.height(columnHeight);
     	divlinks.height(columnHeight);
    }

    $(document).ready(setup);

}(jQuery))
