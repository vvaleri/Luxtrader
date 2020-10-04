//menu
let user_icon = document.querySelector('.user-header__icon'),
    user_menu = document.querySelector('.user-header__menu'); 

user_icon.addEventListener("click", () => {     
    user_menu.classList.toggle('_active');  
});

document.documentElement.addEventListener("click", (e) => {
    if (!e.target.closest('.user-header')) {
    user_menu.classList.remove('_active');
    }
});


let burger_menu = document.querySelector('.header__burger'),
    burger_list = document.querySelector('.header__list'),
    main = document.body;

burger_menu.addEventListener("click", () => {
    burger_list.classList.toggle('active');
    burger_menu.classList.toggle('active');
    main.classList.toggle('lock');

});

//перемещение копирайта на мобильных
let copyright = document.querySelector('.footer__copyright'),
    footer = document.querySelector('.footer__content'),
    logotype = document.querySelector('.footer__logo');

window.addEventListener("resize", () => {
    if (window.innerWidth >= 320 && window.innerWidth <= 750) {
        footer.append(copyright);
    } else {
        logotype.append(copyright);
    }
})



$(document).ready(function(){
    $('.main-slider__body').slick({
        appendArrows: $('.main-slider__control'),
        
    });
});


  $(document).ready(function(){
        $('.slider-lots__body').slick({
            slidesToShow: 3,
            appendArrows: $('.control-slider-lots'),
            prevArrow: '<div class="control-slider-lots__arrow-prev"><span></span></div>',
            nextArrow: '<div class="control-slider-lots__arrow-next"><span></span></div>',
            responsive:[
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1, 
                        centerPadding: '40px',   
                    }
                },
                {
                    breakpoint: 570,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1, 
                    }
                }   
            ],
             
        });
    });


    $(document).ready(function(){
        $('.slider-quotes__body').slick({
            nextArrow: $('.control-slider-quotes__btn'),
            prevArrow: 'none',
            fade: true,
            speed: 200,
        });
    });

       //адаптив изображений
        function ibg(){
            $.each($('._ibg'), function(index, val) {
            if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
            }
            });
            }
         
            ibg();
    
    
    
    
    
    
