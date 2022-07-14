//스크롤을 내리면 header>div에 activated가 추가된다
$(function(){
    $(window).scroll(function(){
    var navbar = $(this).scrollTop();
    console.log(navbar);
    var $header = $('header>div');
    if(navbar > 1){
        $header.addClass('activated');
    }else{
        $header.removeClass('activated');
    }
    });
});

var now_text;
        var last_text;

        window.onload = function(){
            setInterval("text_ch()",2000);
        }
        function text_ch(){
            now_text =$('.text_area>span').eq(0);
            last_text =$('.text_area>span').eq(-1);

            last_text.addClass("z-idx").stop().animate({},1000, function(){
                $(".text_area").prepend(last_text);
                now_text.removeClass("z-idx");
            });

        }

//작은 이미지 클릭시 큰이미지 변경
        $(function(){
            var smallImg=$('#button>label'); //작은이미지
            var bigImg=$('.reviewImg>img'); //큰이미지
            
            smallImg.click(function(){
    
                var path=$(this).attr('href');
                bigImg.attr('src',path);
                bigImg.css('opacity','0').stop().animate({'opacity':'1'},500);
    
            });
        });

//검색버튼 클릭시 검색박스 나오게
        $(function(){
            var S1=$('.allMenu_search');
            var B1=$('.search_bar');
            var X1=$('.search_X');
    
            S1.click(function(){
                B1.fadeIn(300);
                S1.css('opacity','0');
            });
            X1.click(function(){
                B1.fadeOut(300);
                S1.css('opacity','1');
            });
        });

        //햄버거버튼 클릭시 햄버거박스 나오게
        $(function(){
            var burger=$('.allMenu_burger');
            var burgerX=$('.allMenu_burgerX');
            var BOX=$('.burgerBOX');
            var header=$('header>div>div');
            var B1=$('.search_bar');
            var my=$('.allMenu_my');
    
            burger.click(function(){
                BOX.slideDown(300);
                burgerX.css('display','block');
                burger.css('display','none');
                header.css('background','rgba(0, 0, 0, 0.9)');
                B1.css('display','block');
                my.css('display','block');
    
            });
            burgerX.click(function(){
                BOX.fadeOut(100);
                burgerX.css('display','none');
                burger.css('display','block');
                header.css('background','none');
                B1.css('display','none');
                my.css('display','none');

            });
        });

//페이지 width가 100보다 작으면 AOS 실행 X
        AOS.init({
            disable: function() {
                var maxWidth = 100;
                return window.innerWidth < maxWidth;
            }
            });



            var $slider;
    
            function buildSliderConfiguration() {
            
                var deviceWidth = $(window).width();
                
                /* 반응형으로 설정할 옵션 정의 */
                var slideNum;  
                var slideMargin;
            
                /* 화면 사이즈별 슬라이드 갯수, 마진 설정, 기타 옵션도 설정 가능 */
                if (deviceWidth < 767) {
                    slideNum = 1;
                    slideMargin = 30;
                } else if (deviceWidth < 1181) {
                    slideNum = 2;
                    slideMargin = 0;
                } else {
                    slideNum = 3;
                    slideMargin = 0;
                }
            
                return {
                    slideWidth: 1000,
                    auto: true,
                    autoHover: true,
                    adaptiveHeight: true,
                    pager: false,
                    moveSlides: 1,
                    slideMargin: slideMargin, /*반응형 옵션*/
                    minSlides: slideNum,  /*반응형 옵션*/
                    maxSlides: slideNum,   /*반응형 옵션*/
                    controls: true
                };
            }
            
            function configureSlider() {
                var config = buildSliderConfiguration();
            
                if ($slider && $slider.reloadSlider) {
                    $slider.reloadSlider(config);
                } else {
                    $slider = $('.stadium-list').bxSlider(config);  /* 슬라이더 클래스 또는 아이디 입력 */
                }
            }
            
            $('.bx-prev').click(function () {
                var current = $slider.getCurrentSlide();
                $slider.goToPrevSlide(current) - 1;
            });
            
            $('.bx-next').click(function () {
                var current = $slider.getCurrentSlide();
                $slider.goToNextSlide(current) + 1;
            });
            
            $(window).on("orientationchange resize", configureSlider);
            configureSlider();