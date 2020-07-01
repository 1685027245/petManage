$(function () {

    $.ajax({
        type:"get",
        url:"/userCount",
        dataType:'json',
        data:{},
        success:function(data){
            //@首页 数字跳动
            var options = {
                useEasing : true,
                useGrouping : true,
                separator : '',
                decimal : '.',
                prefix : '',
                suffix : ''
            };
            var banner_num = new CountUp("banner_num", (data>100?(data-100):0), data, 0, 5, options);
            banner_num.start();
        }
    })

    /*首页更多显示*/
    $(".about-more").click(function(){
        if($(this).text()=="更多"){
            $(".about-us-1").css("-webkit-line-clamp","50");
            $(this).text("收起");
        }else{
            $(".about-us-1").css("-webkit-line-clamp","7");
            $(this).text("更多")
            $(".about-all").css("overflow","hidden")
        }
    })


    $(".animal").click(function () {
        loadPage("/open/encyclopedias.html")
    })
})
