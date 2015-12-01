(function($){
    
    var $header     =   $("header"),
        $nav        =   $header.find("nav"),
        $menuToggle =   $nav.find(".menu-toggle"),
        $menu       =   $nav.find("ul.menu"),
        $sliderWrap =   $("section.slider"),
        $sliderCar  =   $sliderWrap.find("ul.slides-container");
  
    
    function stickyHeader( offset )
    {
        if( offset > $header.height() )
        {
            $header.addClass("sticky");
        }
        if( offset < $header.height() )
        {
            $header.removeClass("sticky");
        }
    }
    
    function toggleMenu( $toggle )
    {
        $menuToggle.toggleClass("active");
        $menu.toggleClass("active");
        
        return false;
    }
    
    function sliderinit( options )
    {
        $sliderCar.owlCarousel( options );
    }
    
    $(window).scroll(function(){
    
        var offset = $(window).scrollTop();

        stickyHeader(offset);

    });
    
    $menuToggle.on("click", function(){
        toggleMenu();
    });
    
    sliderinit({
        autoPlay : true,
        navigation : false,
        slideSpeed : 300,
        pagination : false,
        paginationSpeed : 400,
        singleItem: true,
        stopOnHover: true,
        addClassActive: false
    });
    
})(jQuery)