(function($){
    function setup(){
      var winHeight = $(window).height(); 
      $('div.day').first().addClass('selected');

      $('button.navButton').on('click', function(e) {
            
          if ($(this).hasClass('next') && $('.selected').next('div.day').length > 0 ) {
              var $next = $('.selected').next('.day');
              var top = $next.offset().top;
              
              $('.selected').removeClass('selected');
            
              $('body').animate({
                scrollTop: top     
              }, function () {
                     $next.addClass('selected');
              });
          } else if ($(this).hasClass('prev') && $('.selected').prev('div.day').length > 0 ) {
              var $prev = $('.selected').prev('.day');
              var top = $prev.offset().top;
              
              $('.selected').removeClass('selected');
            
              $('body').animate({
                scrollTop: top     
              }, function () {
                     $prev.addClass('selected');
              });
          } 

      });

    }

    function scrollCheck(){
      //funcion que encontre en internet modificada por mi
      //no sirve y rompe la anterior
/*      $('div.day').each(function(){
        var this = $(this)
        function isScrolledIntoView(this)
        {
          var docViewTop = $(window).scrollTop();
          var docViewBottom = docViewTop + $(window).height();

          var elemTop = $(this).offset().top;
          var elemBottom = elemTop + $(this).height();

          return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }
        if(isScrolledIntoView){
          this.toggleClass('selected');
        }
      });
*/


      //mi funcion que no sirve
/*      $('div.day').each(function(){

        if($(this).offset().top < winHeight/2 && !$(this).hasClass('selected') ){          

            $('.selected').removeClass('selected');
            $(this).addClass('selected');

        }

      });
    }
*/
    $(window).load(setup);
    $(window).scroll(scrollCheck);
}(jQuery));
