(function($){

    var $body             =   $("body"),
        $header           =   $("header"),
        $nav              =   $header.find("nav"),
        $menuToggle       =   $nav.find(".menu-toggle"),
        $menu             =   $nav.find("ul.menu"),
        $sliderWrap       =   $("section.slider"),
        $sliderCar        =   $sliderWrap.find("ul.slides-container"),
        $galleryWrap      =   $("section.gallery > .contents"),
        $Images           =   $galleryWrap.find("figure"),
        $PPO              =   $body.find(".productPopup-overlay"),
        $PP               =   $body.find(".productPopup");


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


    $Images.each(function(){

        var img = $(this).find("img").attr("src");

        $(this).find("a.zoom").on("click", function(){

            $PPO.css({
                'display' : 'block'
            });

            $PP.css({
                'display' : 'block'
            });

            $PP.find(".contents img").attr("src", img);

            return false;

        });

    });

    $PPO.on("click", function(){

            $PPO.css({
                'display' : 'none'
            });

            $PP.css({
                'display' : 'none'
            });

            $PP.find(".contents img").attr("src", "");

    });

    $PP.find("a.toggle").on("click", function(){

            $PPO.css({
                'display' : 'none'
            });

            $PP.css({
                'display' : 'none'
            });

            $PP.find(".contents img").attr("src", "");

    });


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

     $.scrollIt();

})(jQuery)
