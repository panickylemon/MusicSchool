$(document).ready(function(){

    $(".menuToggle").click(function() {
        $(".menuToggle").hide();
        $(".menuOpen").toggle("slide", {direction:"right"}, 500);
        $(".menuClose").delay(400).fadeIn(100);
    });

    $(document).click(function (e){ // событие клика по веб-документу
        var menu = $(".menuOpen");
        var burger = $(".menuToggle");
        if (!menu.is(e.target) && !burger.is(e.target)// если клик был не по нашему блоку
            && menu.has(e.target).length === 0
        && menu.is(':visible')) { // и не по его дочерним элементам
            $(".menuClose").hide();
            burger.show();
            menu.toggle("slide", {direction:"right"}, 500);
        }
    });
});

