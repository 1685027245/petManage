$(function(){

    //导航添加样式
    var pageUrl = window.location.pathname;
    $.each($(".am-topbar-nav li a"),function (index,value) {
        if(pageUrl==$(this).attr("href")){
            $(this).parent().addClass("am-active");
            return;
        }
    })

    // $('.am-dropdown').on('mouseover',function(){
    //     $(this).addClass('am-active');
    // });
    // $('.am-dropdown').on('mouseout',function(){
    //     $(this).removeClass('am-active');
    // });
//     if($('.get').width() < 640){
//     $('.get').height($('.get').width() / ( 1920 / 278 ));
//     alert($('.get').height());
// }

  //     var mobile_prtscn_width  = $('.am-max540').width();
  // var mobile_views_width   =  mobile_prtscn_width;
  // var mobile_views_heigth  =  mobile_views_width / (1200 / 220);
  // $('.am-bottom-don2').css({'height':mobile_views_heigth,'width':mobile_views_width});
$(window).resize(function(){
    $('.am_listimg_info .am_imglist_time').css('display', $('.am_list_block').width() <= 170 ?  'none' : 'block');
});

//@首页 图片滑动效果
$(".am_list_block").on('mouseover', function(){
    $('.am_img_bg').removeClass('am_img_bg');
    $(this).find('.am_img').addClass('bounceIn');
});
$('.am_img').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $('.am_img').removeClass('bounceIn');
});
if($(window).width() < 700 ){
  $('.am_list_block').off();
}

//@首页 底部下载按钮

   // function mouse_over_out(obj, style, overcss, outcss) {
   //      obj.bind('mouseover', function() {
   //          $(this).css(style, overcss);
   //      });
   //      obj.bind('mouseout', function() {
   //          $(this).css(style, outcss);
   //      });
   //  }



//@首页 图片列表长宽相等

$(window).resize(function(){
$('.am_img_bg').height($('.am_img_bg').width());
});
//@首页 用户名截取
$('.am_imglist_user_font').each(
  function(){
     if($(this).text().length >= 13){
        $(this).html($(this).text().substr(0,13));
     }
  }
  );

//@懒加载
  $("img.am_img").lazyload();
  $("a.am_img_bg").lazyload({
  effect : 'fadeIn'
});

//@首页 数字跳动
/*  var options = {
  useEasing : true,
  useGrouping : true,
  separator : '',
  decimal : '.',
  prefix : '',
  suffix : ''
};
var banner_num = new CountUp("banner_num", 850, 1000, 0, 5, options);
banner_num.start();*/


    $(".my-img-value").hover(function () {
        $(".user-center").show();
    },function () {
        $(".user-center").hide();
    })

});

//动画效果
function OpenDonghua( Chufa,Mubiao,Xiaoguo){
Chufa.on('mouseover', function(){
    $(this).find(Mubiao).addClass(Xiaoguo);
});
}
function CloseDonghua(Chufa,Mubiao,Xiaoguo){
    Chufa.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    Mubiao.removeClass(Xiaoguo);
});
}


//获取项目路径
/*function getRootPath(){
    // 1、获取当前全路径，如： http://localhost:8080/springmvc/page/frame/test.html
    var curWwwPath = window.location.href;
    // 获取当前相对路径： /springmvc/page/frame/test.html
    var pathName = window.location.pathname;    // 获取主机地址,如： http://localhost:8080
    var local = curWwwPath.substring(0,curWwwPath.indexOf(pathName));
    // 获取带"/"的项目名，如：/springmvc
    var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
    var rootPath = local + projectName;
    return rootPath;
}*/
//加载页面
function loadPage(url){
    window.location.href=/*getRootPath()+"/"+*/url;
}

function isNull(val){
    if(val instanceof Array) {
        if(val.length === 0) return true
    } else if(val instanceof Object) {
        if(JSON.stringify(val) === '{}') return true
    } else {
        if(val === 'null' || val == null || val === 'undefined' || val === undefined || val === '') return true
        return false
    }
    return false
}



