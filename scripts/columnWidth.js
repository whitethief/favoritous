

(function($){
    

    setup = function setup(){
            var windowWidth;       	

       		$('.day').each(function(){

	            var $this = $(this),
	                links = $('.links', $this),
	                images = $('.images', $this),
                    largeWidth,
                    smallWidth,
	                linksWidth,
            		imagesWidth;

                               		

            		images.click(function(){
                       
                        windowWidth = $(window).width();
                        linksWidth = $('.links', $this).width();
                        imagesWidth = $('.images', $this).width();

                        largeWidth = Math.max(linksWidth,imagesWidth);
                        smallWidth = Math.min(linksWidth,imagesWidth);

                        if (windowWidth < 850){
    		            	images.width(largeWidth);
    		            	links.width(smallWidth);
                        }


		            });

            		 links.click(function(){
                       
                        windowWidth = $(window).width();
                        linksWidth = $('.links', $this).width();
                        imagesWidth = $('.images', $this).width();

                        largeWidth = Math.max(linksWidth,imagesWidth);
                        smallWidth = Math.min(linksWidth,imagesWidth);

                        if (windowWidth < 850){
    		            	links.width(largeWidth);
    		            	images.width(smallWidth);
                        }
		            });


        	});
	         
     	
    };


    $(document).ready(setup);

}(jQuery));