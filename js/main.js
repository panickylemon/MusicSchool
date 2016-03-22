$(document).ready(function(){

    $(".menuToggle").click(function() {
        $(".menuToggle").hide();
        $(".menuOpen").toggle("slide", {direction:"right"}, 500);
        $(".menuClose").delay(400).fadeIn(100);
        $(".menu").addClass("zIndex");
    });

    $(document).click(function (e){ // событие клика по веб-документу
        var menu = $(".menuOpen");
        var burger = $(".menuToggle");
        if (!menu.is(e.target) && !burger.is(e.target)// если клик был не по нашему блоку
            && menu.has(e.target).length === 0 // и не по его дочерним элементам
        && menu.is(':visible')) {
            $(".menuClose").hide();

            setTimeout(function() {
                $(".menu").removeClass("zIndex");
            }, 500);

            //burger.show();
            burger.delay(400).fadeIn(100);
            menu.toggle("slide", {direction:"right"}, 500);
        }
    });

    $(".buttonEnroll").click(function() {
        $(".fillWindow").show();

    });

    $(".fillWindow").click(function (e){ // событие клика по веб-документу
        var dialog = $(".wrapperForm");
        var fill_window = $(".fillWindow");
        var close = $(".closeForm");
        if (!dialog.is(e.target) // если клик был не по нашему блоку
            && dialog.has(e.target).length === 0 // и не по его дочерним элементам
            && fill_window.is(':visible') || close.is(e.target) || close.has(e.target).length) {
                fill_window.hide();
        }
    });

});


$(document).ready(function(){

    $("#loginform").validate({
        rules:{
            inpName:{
                required: true,
            },
            inpPhone:{
                required: true,
                minlength: 11,
                maxlength: 15,
            },
        },
        messages:{
            inpName:{
                required: "Обязательное поле!",
            },
            inpPhone:{
                required: "Обязательное поле!",
                minlength: "Укажите правильный номер телефона",
                maxlength: "Укажите правильный номер телефона",
            },
        }
    });

    $("#nameInput").inputmask("Regex");
    $("#phoneInput").inputmask("Regex");
    wow = new WOW(
        {
            mobile:       false,
        }
    );
    wow.init();
});







