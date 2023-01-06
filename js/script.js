// fix Header
$(function(){
    var scrollNum=0;
    scrollNum=$(document).scrollTop();
    fixHeader();

    function fixHeader(){
        if(scrollNum>150){
            $("header").addClass("on");
        } else{
            $("header").removeClass("on");
        }
    };

    //윈도우 창 조절 시 이벤트
    $(window).on('scroll resize',function(){
        scrollNum=$(document).scrollTop();
        fixHeader();
    });
});

// scroll animation
$(function(){
    $('.animate').scrolla({
        moblie : true,  //모바일버전시 활성화
        once: true //스크롤시 딱 한번만 하고 싶을 때 true, 반복하고 싶을 때 false
    });
});

// visual image slide
$(function() {
    $(".visual .slide").slick({ 
         infinite: true, //무한재생
         arrows: false, //화살표
         dots: false, //닷츠
         autoplay: true, //자동재생
         fade: true, //페이드인 효과        
         autoplaySpeed: 5000, //재생시간
         pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
         pauseOnFocus:false, //포커스시 슬라이드 멈춤 해제
         speed: 2000 //이미지가 넘어가는 속도
    });
}); 

// offer image slide
$(function() {
    $(".offers .slide").slick({ 
         infinite: true, //무한재생
         arrows: true, //화살표
         dots: false, //닷츠
         autoplay: true, //자동재생      
         autoplaySpeed: 5000, //재생시간
         pauseOnHover:true, //마우스 오버시 슬라이드 멈춤 해제
         pauseOnFocus:true, //포커스시 슬라이드 멈춤 해제
        slidesToShow: 3
    });
}); 

// gallery swiper
$(function(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 'auto', //'따옴표!!!'
        centeredSlides: false,
        slidesOffsetBefore : 384, // 슬라이드 시작 부분 여백
        slidesOffsetAfter : 384 // 슬라이드 끝나는 부분 여백
    });
});

// dinning simply scroll
$(function(){
    $("#scroller").simplyScroll({
        pauseOnHover:true
    });
});

// index accordion
$(function(){
    $('.accordion>div').on('mouseenter focus',function(){
        $('.accordion>div').removeClass('on');
        $(this).addClass('on');
    });
});

// location accordion menu
$(function(){
    $(".location .inner .transport>p").click(function(){
        $(this).next("ul.open").stop().slideToggle(300);
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).next("ul.open").siblings("ul.open").slideUp(300); // 1개씩 펼치기
    });
});

//메뉴오픈
$(function(){
    $("nav .right .menu").on("click",function(){
        $(".menuOpen").addClass("on");
        $(".menuOpen .close").on("click",function(){
            $(".menuOpen").removeClass("on");
        });
    });
});

