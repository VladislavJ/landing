//Слайдер

$(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            autoplay:true,
            items:1,
            itemsScaleUp: true,
            margin:0,
            stagePadding:0,
            smartSpeed:450,
            slideSpeed: 1,
            mouseDrag:false,
            navigation: true,
            navigationText: ["",""],
            transitionStyle : "fade",
            pagination: true,
            responsiveClass:true,
            singleItem: true
        });
    });

//Плавный переход

    $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

//Форма

$("#contact-from").submit(function () { 
$.ajax({ 
type: "GET", 
url: "sendmail.php", 
data: $("#contact-from").serialize() 
}).done(function () { 
alert("Сообщение отправлено!"); 
//setTimeout(function() { 
// $.fancybox.close(); 
//}, 1000); 
$("#contact-from").trigger('reset'); 
}); 
return false; 
});

//Меню
$('#onclick').on('click',function(){
    $('.header__list').addClass('open');
});

$('#exit').on('click',function(){
    $('.header__list').removeClass('open');
});
