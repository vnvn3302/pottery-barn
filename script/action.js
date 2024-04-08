 let prodactor = setInterval(prodRolling,2000)

let i = 0
function prodRolling(){
    i++ 
    if(i >= 4){
        i=0
    }
    $('.prod_box li').eq(i).addClass('on').siblings().removeClass();
}

$('.prod_box li').mouseenter(function(){
    clearInterval(prodactor)
    $(this).addClass('on').siblings().removeClass()
    
});
$('.prod_box li').mouseleave(function(){
    prodactor = setInterval(prodRolling,2000)
    i = $(this).index()
})

// 새로고침했을때
$('.favorite').each(function(){
    favorite.call(this)
})

$('.favorite').click(function(){
    $(this).toggleClass('on')
    favorite.call(this)
    return false;
})

function favorite(){
    if($(this).hasClass('on')){
        $(this).text('♥').css({color:'red'});
    } else {
        $(this).text('♡').css({color:''});
    }
}

// parseInt() 숫자로 바꿔주는 함수
let todayTop = parseInt($('.prod_today').css('top'));

// 서브페이지변수
let prodNavPosi
if($('#section_sub').length > 0){
    prodNavPosi = $('.prod_nav').offset().top;
}

$(window).scroll(function(){
    let scrT = $(window).scrollTop();

    $('.prod_today').stop().animate({top:scrT+todayTop},1000)

    if(scrT >= prodNavPosi){
        $('.prod_nav').addClass('active');
    } else{
        $('.prod_nav').removeClass('active')
    }
})

$('.small_img li').mouseenter(function(){
    let imgSrc = $(this).find('img').attr('src');
    $('.big_img img').attr('src',imgSrc);
    $(this).addClass('active').siblings().removeClass();
})

$('.prod_nav a').click(function(){
    let prodNavHref = $(this).attr('href');

    let prodNavTop = $(prodNavHref).offset().top;

    $('html').animate({scrollTop:prodNavTop - 70})
})