$(function () {
    //预约
    $("#orderPetShop").click(function () {
        if(isNull($("#userCenterName").text())){
            var opt = {
                title: '宠物店预约',
                width: 400,
                content: "预约请先登录！",
                okBtnText: '登录',
                cancelBtnText: '取消',
                onOk: function () {
                    loadPage("/login")
                }
            };
            $("#showDialog1").showDialog(opt,150)
        }else {
            //弹窗
            var html ="<div class='shop-member-input-all'>" +
                "<div class='row shop-member-input'>" +
                "<div class='col-lg-3  shop-member-title'>" +
                "<label>预约类别</label>" +
                "</div>" +
                "<div class='col-lg-8'>" +
                "<select id='orderCategory' class='form-control'>" +
                "    <option value='购买商品'>购买商品</option>" +
                "    <option value='宠物寄养'>宠物寄养</option>" +
                "</select>" +
                "</div>" +
                "</div>" +
                "<div class='row shop-member-input'>" +
                "<div class='col-lg-3  shop-member-title'>" +
                "<label>预约时间</label>" +
                "</div>" +
                "<div class='col-lg-8'>" +
                "<input type='text' id='orderTime' class='form-control date-input' style='font-size: 14px'  placeholder='请说明预约时间'>" +
                "</div>" +
                "</div>" +
                "<div class='row shop-member-input'>" +
                "<div class='col-lg-3  shop-member-title'>" +
                "<label>预约备注</label>" +
                "</div>" +
                "<div class='col-lg-8'>" +
                "<textarea rows='4' id='orderRemarks' style='width: 100%'></textarea>" +
                "</div>" +
                "</div>" +
                "</div>";
            var opt = {
                title: '预约宠物店业务',
                width: 600,
                content: html,
                okBtnText: '确定',
                cancelBtnText: '取消',
                onOk: function () {
                    var orderCategory = $("#orderCategory option:selected").val();
                    var orderTime = $("#orderTime").val();
                    var orderRemarks = $("#orderRemarks").val();
                    var shopId = $("#shopMsg").attr("data");
                    $.ajax({
                        type:"post",
                        url:"/open/addOrder.html",
                        dataType:"json",
                        data:{
                            shopId:shopId,
                            category:orderCategory,
                            timeExplain:orderTime,
                            remarks:orderRemarks
                        },
                        success:function(data){
                            if(data=="success"){
                                window.location.href = "/open/petShopDetails.html/"+shopId
                                /*var opt = {
                                    title: '预约宠物店业务',
                                    width: 400,
                                    content: "预约发起成功！",
                                    okBtnText: '',
                                    cancelBtnText: '确定',
                                    onOk: function () {}
                                };
                                setTimeout(function () {
                                    $("#showDialog1").showDialog(opt,150)
                                },400)*/
                            }
                        }
                    })
                }
            };
            $("#showDialog1").showDialog(opt,300)
        }
    })

    //评分展开
    /*$("#showComment").click(function () {
        /!* class引用评分样式，min最小评分数，max最大评分数，data-size分分大小(大小可选 lg,sm,xl,xs),value初始分分数量； *!/
        $('#rate').rating({
            clearButton:"",
            step: 0.1,
            size: 'lg',//分分大小可选lg,sm,xl,xs
            starCaptions: getRateName(),
            starCaptionClasses: getRateColor(),
            hoverEnabled: true //是否经过时有效果
        });
        if($(this).text()=="评分"){
            $("#commentAll").show();
            $(this).text("收起评分");
        }else {
            $("#commentAll").hide();
            $(this).text("评分");
        }
    })*/

    //初始化所有评论得分
    getAllComment();

    //提交评分
    /*$("#submitComment").click(function () {
        var rate = $("#rate").val();
        var commentContent = $("#commentContent").val();
        var shopId = $("#shopMsg").attr("data");

        if(isNull(rate)){
            var opt = {
                title: '宠物店评分',
                width: 400,
                content: "请先进行评分！",
                okBtnText: '确定',
                cancelBtnText: '',
                onOk: function () {}
            };
            $("#showDialog1").showDialog(opt,150)
            return;
        }
        if(isNull(commentContent)){
            var opt = {
                title: '宠物店评分',
                width: 400,
                content: "评论内容不能为空！",
                okBtnText: '确定',
                cancelBtnText: '',
                onOk: function () {}
            };
            $("#showDialog1").showDialog(opt,150);
            return;
        }

        $.ajax({
            type:"post",
            url:"/open/addComment.html",
            dataType:"json",
            data:{
                commentContent:commentContent,
                starRating:rate,
                shopId:shopId
            },
            success:function(data){
                if(data=="success"){
                    var opt = {
                        title: '宠物店评分',
                        width: 400,
                        content: "评分成功！",
                        okBtnText: '确定',
                        cancelBtnText: '',
                        onOk: function () {}
                    };
                    $("#showDialog1").showDialog(opt,150);
                    $("#allCommentData").empty();
                    getAllComment();
                }
            }
        })
    })*/

    //更多评论
    $("#moreComment").click(function () {
        if($(this).text()=="没有更多了"){
            return;
        }else {
            var pageNum = parseInt($(this).attr("pageNum"))+1;
            getAllComment(pageNum)
        }
    })

    //初始化是否有预约
    $.ajax({
        type:"post",
        url:"/open/getPetShopOrder.html",
        dataType:'json',
        data:{
            result:"预约中",
            replyStatus:"待答复"
        },
        success:function(data){
            if (data.length==0){
                $("#infoMsg").hide();
            } else {
                $("#infoMsg").text(data.length)
                $("#infoMsg").show();
            }
        }
    })

    $(".shop-content img").addClass("pimg");
    $(".pimg").click(function () {
        var _this = $(this);//将当前的pimg元素作为_this传入函数
        $.seeImg("#outerdiv", "#innerdiv", "#bigimg", _this);
    })

    $("#showMapBtn").click(function () {
        if($(this).text()=="显示地图"){
            getAMap();
            $("#mapSelect").show();
            $(this).text("隐藏地图")
        }else {
            $("#mapSelect").hide();
            $(this).text("显示地图")
        }

    })

})

function getAMap() {
    //初始化地图
    var map = new AMap.Map('mapSelect', {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom: 11, //初始地图级别
    });

    var marker = new AMap.Marker({});
    setMyMarker(marker,$("#mapSelect").attr("longitude"),$("#mapSelect").attr("latitude"))
    marker.setMap(map);
}


function setMyMarker(marker,longitude,latitude) {
    // 自定义点标记内容
    var markerContent = document.createElement("div");

    // 点标记中的图标
    var markerImg = document.createElement("img");
    markerImg.className = "markerlnglat";
    markerImg.src = "http://webapi.amap.com/theme/v1.3/markers/n/mark_r.png";
    markerContent.appendChild(markerImg);

    // 点标记中的文本
    var markerSpan = document.createElement("span");
    markerSpan.className = 'marker';
    markerSpan.innerHTML = $("#mapSelect").attr("shopName");
    markerContent.appendChild(markerSpan);

    marker.setContent(markerContent); //更新点标记内容
    marker.setPosition([longitude,latitude]); //更新点标记位置
}

//获取所有评论
function getAllComment(pageNum,pageSize) {

    var shopId = $("#shopMsg").attr("data");
    $.ajax({
        type:"post",
        url:"/open/getPetshopComment.html",
        dataType:"json",
        data:{
            shopId:shopId,
            pageNum:isNull(pageNum)?1:pageNum,
            pageSize:isNull(pageSize)?5:pageSize
        },
        success:function(data){
            console.info("顶顶顶顶顶",data)
            if(data.list.length<data.limit){
                $("#moreComment").empty();
                $("#moreComment").text("没有更多了")
            }
            $("#commentTotalSize").text(data.total);
            $("#moreComment").attr("pageNum",data.pageNumber)
            $.each(data.list, function(i,comment){
                $("#allCommentData").append("<div class=\"row comment-one\">\n" +
                    "            <div class=\"ztlb_nr_blockc_l\">\n" +
                    "                <img src="+comment.userImg+" alt=\"\">\n" +
                    "            </div>\n" +
                    "            <div class=\"ztlb_nr_blockc_r\">\n" +
                    "                <div class=\"ztlb_nr_blockc_r_title\">\n" +
                    "                    "+comment.userName+" <span class=\"comment-time\">"+changeDateFormat(comment.createTime)+"</span>\n" +
                    "                    <input name='dictLevel' value='"+comment.starRating+"' class='rateShow rating-loading'>\n" +
                    "                </div>\n" +
                    "                <div class=\"ztlb_nr_blockc_r_nr\">"+comment.commentContent+"</div>\n" +
                    "            </div>\n" +
                    "        </div>")
            });
            $('.rateShow').rating({
                clearButton:"",
                step: 0.5,
                size: 'sm',//分分大小可选lg,sm,xl,xs
                starCaptions: getRateName() ,
                starCaptionClasses: getRateColor(),
                hoverEnabled: true, //是否经过时有效果
                readonly: true
            });
        }
    })
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

//获取评分名称样式
function getRateName() {
    var map = {};
    for(var i=0;i<=5;){
        map[i] = i+"分";
        i = numAdd(i,0.1)
    }
    return map;
}

//获取评分颜色样式
function getRateColor() {
    var map = {};
    for(var i=0;i<=5;){
        if(i>=4.5){
            map[i] = "label label-success badge-success";
        }else if(i>=4&&i<4.5){
            map[i] = "label label-primary badge-primary";
        }else if(i>=3&&i<4){
            map[i] = "label label-info badge-info";
        } else {
            map[i] = "label label-danger badge-danger";
        }
        i = numAdd(i,0.1)
    }
    return map;
}


/**
 * 加法运算，避免数据相加小数点后产生多位数和计算精度损失。
 * @param num1加数1 | num2加数2
 */
function numAdd(num1, num2) {
    var baseNum, baseNum1, baseNum2;
    try {
        baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
};