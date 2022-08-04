$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown();
    },
    function(){
        $(".sub").stop().slideUp();
    }
)

$(".tab1").click(/* $(".tab li:eq(0) a") */
    function(){
        $(".notice").show();
        $(".gallery").hide();
    }
)
$(".tab2").click(/* $(".tab li:eq(1) a") */
    function(){
        $(".notice").hide();
        $(".gallery").css("display","flex");
    }
)

$(".open").click(
    function(){
        $("#popup").fadeIn();
    }
)
$(".close").click(
    function(){
        $("#popup").fadeOut();
    }
)