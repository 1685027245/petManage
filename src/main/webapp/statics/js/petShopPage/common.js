$(function(){
    //点击头像实现的效果
    $(document).bind('click', function(e) {
        var e = e || window.event; //浏览器兼容性
        var elem = e.target || e.srcElement;
        if ((elem.id && elem.id == 'my-img')||(elem.id && elem.id == 'person-name')) {
            if(elem.id && elem.id == 'person-name'){
                $('.personal-msg').css({'display': 'block'});
            }else{
                if($('.personal-msg').css('display') === 'none'){
                    $('.personal-msg').css({'display': 'block'});
                }else{
                    $('.personal-msg').hide();
                }
            }
        }else{
            $('.personal-msg').css('display', 'none');//点击的不是div或其子元素
        }
    });


    //主页菜单显示样式跳转页面时
    var pageUrl = window.location.pathname;
    if(pageUrl=="/petShop/petIndex.html"){
        pageUrl="/petIndex.html"
    }
    var pageMenu = $('#side-menu');
    pageMenu.find('li').children('a').each(function(){
        if(pageUrl==$(this).attr("href")){
            $(this).addClass("active");
            if($(this).parent().parent().attr("class").indexOf("nav-second-level")>0){
                $(this).parent().parent().parent().addClass("active");
                $(this).parent().parent().addClass("collapse in");
            }
        }
    });

    //添加商品页面时
    if(pageUrl.indexOf("addGoods.html")>0){
        $("#goodsManager").addClass("active");
        if(pageUrl.indexOf("addPet")>0){//宠物
            $("#petInformationPage").addClass("active")
            $("#petInformationPage").parent().parent().addClass("collapse in");
        }else if(pageUrl.indexOf("addFood")>0){
            $("#foodInformationPage").addClass("active")
            $("#foodInformationPage").parent().parent().addClass("collapse in");
        }else {
            $("#peripheryInformationPage").addClass("active")
            $("#peripheryInformationPage").parent().parent().addClass("collapse in");
        }
    }

    //宠物详情页
    if((pageUrl.indexOf("toPetDetails.html")!=-1)||pageUrl.indexOf("updateGoods.html/pet")!=-1){
        $("#petInformationPage").addClass("active")
        $("#petInformationPage").parent().parent().addClass("collapse in");
    }
    //食品详情页
    if((pageUrl.indexOf("toFoodDetails.html")!=-1)||pageUrl.indexOf("updateGoods.html/food")!=-1){
        $("#foodInformationPage").addClass("active")
        $("#foodInformationPage").parent().parent().addClass("collapse in");
    }


    //会员反馈
    getOpinionMsgShow();
    $("#opinionMsg").click(function () {
        loadPage("/petShop/petShopMemberOpinion.html")
    })

    //获取预约中信息
    getOrderMsgShow();
    $("#orderMsg").click(function () {
        loadPage("/petShop/petShopMemberOrder.html")
    })

    //获取待处理信息
    /*$.ajax({
        type:"post",
        url:"/open/getPetShopOrder.html",
        dataType:"json",
        data:{
            result:"接受",
            replyStatus:"已答复"
        },
        success:function(data){
            if(data.length!=0){
                $("#infoMsg").css("display","block");
                var num = parseInt($("#infoMsg").text())+data.length;
                $("#infoMsg").text(num);
                $("#orderNum").text(num);
            }
        }
    })*/

    //获取宠物店信息
    $.ajax({
        type:"post",
        url:"/petShop/getPetShopMsg.html",
        dataType:"json",
        data:{},
        success:function(data){
            $("#petShopBigName").text(data.shopName)
            $("#person-name").attr("shopId",data.id)
        }
    })

    $(".table-footer").text("更新于: "+getNowTime())


    y = $('.swap');
    h = $('.news_li li').length * 50; //19为每个li的高度
    x = $('.news_li');
    moveDoc();
})

//获取预约中信息
function getOrderMsgShow() {
    $.ajax({
        type:"post",
        url:"/open/getPetShopOrder.html",
        dataType:"json",
        data:{
            result:"预约中",
        },
        success:function(data){
            if(data.length!=0){
                $("#orderMsg").children("span").show();
                $("#orderMsg").children("span").text(data.length);
                $("#orderNum").text(data.length);
                $('.news_li').find('li').each(function(index,value) {
                    if ($(this).attr("data")=="order"){
                        $(this).remove();
                    }
                })
                $.each(data,function (index,value) {
                    $(".news_li").append("<li title='预约信息' data='order' id='"+value.id+"'>"+value.remarks+"</li>");
                })

                $('.swap').html($('.news_li').html());
                h = $('.news_li li').length * 50; //19为每个li的高度
                x.css('top',"0px");


            }
        }
    })
}

//会员反馈
function getOpinionMsgShow() {
    $.ajax({
        type:"get",
        url:"/petShop/getPetShopMemberOpinion.html",
        dataType:'json',
        data:{
            replyStatus:0
        },
        success:function(data){
            if(data.length!=0){
                $("#opinionMsg").children("span").show();
                $("#opinionMsg").children("span").text(data.length);
                /*$(".news_li").empty();*/
                $('.news_li').find('li').each(function(index,value) {
                    if ($(this).attr("data")=="opinion"){
                        $(this).remove();
                    }
                });
                $.each(data,function (index,value) {
                    $(".news_li").append("<li title='会员反馈信息' data='opinion' id='"+value.id+"'>"+value.content+"</li>");
                });

                $('.swap').html($('.news_li').html());
                h = $('.news_li li').length * 50; //19为每个li的高度
                x.css('top',"0px");

                $('.news_li li').hover(function () {
                    clearInterval(timer);
                },function () {
                    $('.swap').html($('.news_li').html());
                    y = $('.swap');
                    x = $('.news_li');
                    h = $('.news_li li').length * 50; //19为每个li的高度
                    moveDoc();
                })
                $('.news_li li').click(function () {
                    if ($(this).attr("data")=="opinion"){
                        loadPage("/petShop/petShopMemberOpinion.html")
                    }else {
                        loadPage("/petShop/petShopMemberOrder.html")
                    }
                })
            }
        }
    })
}

var timer;
function moveDoc() {
    //setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
    timer = setInterval(function(){
        y.hide();
        t = parseInt(x.css('top'));
        x.animate({top: t - 50 + 'px'},'slow');	//19为每个li的高度
        y.css('top','50px');
        if(Math.abs(t) == (h-50)){ //19为每个li的高度
            y.show();
            y.animate({top:'0px'},'slow');
            z=x;
            x=y;
            y=z;
        }
    },1500);
}


//获取项目路径
function getRootPath(){
    // 1、获取当前全路径，如： http://localhost:8080/springmvc/page/frame/test.html
    var curWwwPath = window.location.href;
    // 获取当前相对路径： /springmvc/page/frame/test.html
    var pathName = window.location.pathname;    // 获取主机地址,如： http://localhost:8080
    var local = curWwwPath.substring(0,curWwwPath.indexOf(pathName));
    // 获取带"/"的项目名，如：/springmvc
    return local;
}
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


//转换日期格式(时间戳转换为datetime格式)
function changeDateFormat(cellval) {
    var dateVal = cellval + "";
    if (cellval != null) {
        var date = new Date(parseInt(dateVal.replace("/Date(", "").replace(")/", ""), 10));
        var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        return date.getFullYear() + "-" + month + "-" + currentDate + " " + hours + ":" + minutes + ":" + seconds;
    }
}


function getFirstImg(imgPath) {
    return imgPath.substring(0,imgPath.indexOf(';'));
}

function getAllImg(imgPath) {
    var imgHtml='';
    var strArray = imgPath.split(';');
    for(var i in strArray){
        if(strArray[i]!=null&&strArray[i]!=''){
            imgHtml+= "<img src='"+strArray[i]+"'>";

        }
    }
    return imgHtml;
}

//获取时间
function getNowTime() {
    //判断是否在前面加0
    function getNow(s) {
        return s < 10 ? '0' + s: s;
    }
    var myDate = new Date();
    var year=myDate.getFullYear();        //获取当前年
    var month=myDate.getMonth()+1;   //获取当前月
    var date=myDate.getDate();            //获取当前日

    var h=myDate.getHours();              //获取当前小时数(0-23)
    var m=myDate.getMinutes();          //获取当前分钟数(0-59)
    var s=myDate.getSeconds();

    var now=year+'-'+getNow(month)+"-"+getNow(date)+" "+getNow(h)+':'+getNow(m)+":"+getNow(s);
    return now;
}
