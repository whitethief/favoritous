
(function($){
    function setup(){
        var windowWidth = $(window).width();
        $('.day').each(function(){
            var $this = $(this),
                columns = $('.column', $this),
                linksHeight = null,
                imagesHeight = null;
            
            columns.css('height', 'auto');
            linksHeight = $('.links', $this).height();
            imagesHeight = $('.images', $this).height();
                
            columns.height(Math.max(linksHeight,imagesHeight));
        }); 

        if (windowWidth < 850 && windowWidth > 450) {
            $("li#recent").html('<i class="icon-time"> </i> Recent'); 
 
        }
        else if (windowWidth <= 450){
            $("li#recent").html('<i class="icon-time"> </i>');
            $("li#archive").html('<i class="icon-folder-close"> </i>');
        }  else {
                        
            $("li#recent").html('<i class="icon-time"> </i> Recent (last 24 hours)');
            $("li#archive").html('<i class="icon-folder-close"> </i> Archive');
            

        }
    }
    $(window).load(setup);
    $(window).resize(setup);  
}(jQuery));
