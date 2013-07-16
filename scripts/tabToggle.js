(function($){
    var litab = $('li.tab'),
        setup = null;

    setup = function setup(){
         litab.click(function(){
            litab.toggleClass('current')
         });
    }

    $(document).ready(setup);

}(jQuery))