

(function($){
    

    setup = function setup(){
    	var windowWidth = $(window).width();

       	if (windowWidth < 850){

       		$('.day').each(function(){

	            var $this = $(this),
	                links = $('.links', $this),
	                images = $('.images', $this),
	                linksWidth = $('.links', $this).width(),
            		imagesWidth = $('.images', $this).width();

            		largeWidth = Math.max(linksWidth,imagesWidth);
            		smallWidth = Math.min(linksWidth,imagesWidth);

            		 images.click(function(){
		            	images.width(largeWidth);
		            	links.width(smallWidth);
		            })

            		 links.click(function(){
		            	links.width(largeWidth);
		            	images.width(smallWidth);
		            })


        	});
	         
     	}
    }

    $(document).ready(setup);

}(jQuery))