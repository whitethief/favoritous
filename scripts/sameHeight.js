
(function($){
    var divday = $('div.day'),
        setup = null;

    setup = function setup(){
        divday.each(columnSize);  
        $(window).resize(columnSize);

        function columnSize(){
            var divlinks = $(this).find('div.links'),
                divimages = $(this).find('div.images'),                
                linksHeight = divlinks.height(),
                imagesHeight = divimages.height();

            if(imagesHeight >= linksHeight){
             divlinks.height(imagesHeight);
            } else {
              divimages.height(linksHeight);
            }
        }      
    }

    $(window).load(setup);
    



}(jQuery))