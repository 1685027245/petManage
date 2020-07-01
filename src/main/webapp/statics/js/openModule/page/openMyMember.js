$(function () {

    getData();

    $(document).on("click",".shopDetails",function () {
        loadPage("/open/petShopDetails.html/"+$(this).attr("data"))
    })

    $(document).on("click",".opinionBtn",function () {
        //弹窗
        var html ="<div class='shop-member-input-all'>" +
            "<div class='row shop-member-input'>" +
            "<div class='col-lg-12'>" +
            "<textarea rows='4' id='opinionInput'  placeholder='这里填写反馈内容'></textarea>" +
            "</div>" +
            "</div>";
        var $this = $(this);
        var opt = {
            title: '反馈意见--'+$(this).attr("shopName"),
            width: 600,
            content: html,
            cancelBtnText: '取消',
            okBtnText: '提交',
            onOk: function () {
                var shopId = $this.attr("data");
                var shopMemberId = $this.attr("memberId");
                var opinionContent = $("#opinionInput").val();
                $.ajax({
                    type:"post",
                    url:"/open/addOpinion.html",
                    dataType:'json',
                    data:{
                        shopId:shopId,
                        shopMemberId:shopMemberId,
                        opinionContent:opinionContent
                    },
                    success:function(data){
                        if(data=="success"){
                            var opt = {
                                title: '反馈意见',//提示框标题
                                width: 400,//提示框宽度
                                content: '反馈意见提交成功!'//提示文本
                            };
                            setTimeout(function(){
                                $("#showDialog1").showMsg(opt,150);
                            },400);
                        }
                    }
                })
            }
        };
        $("#showDialog1").showDialog(opt,230);
    })

    $(document).on("click","#seeOpinion",function () {
        if($(this).text()=="查看反馈意见"){
            getOpinion();
            $(this).text("查看会员卡");
        }else {
            getData();
            $(this).text("查看反馈意见");
        }

    })

})

function getOpinion() {
    $.ajax({
        type:"post",
        url:"/open/getMyOpinion.html",
        dataType:"json",
        data:{},
        success:function(data){
            $(".memberDataItem").remove();
            $("#nameTitle").text("我的反馈意见（"+data.length+"）")
            $.each(data,function (index,opinion) {
               $("#allData").append("<div class=\"row memberDataItem\">\n" +
                    "            <div class=\"col-lg-2 \" >\n" +
                    "                宠物店名称：<span class='shopDetails' title='查看宠物店详情' data='"+opinion.shopId+"'>"+opinion.shopName+"</span>\n" +
                    "            </div>\n" +
                    "            <div class='col-lg-3 opinion-content' title='"+opinion.opinionContent+"'>\n" +
                    "                反馈意见内容："+opinion.opinionContent+"\n" +
                    "            </div>\n" +
                    "            <div class=\"col-lg-2\">\n" +
                    "                反馈时间："+changeDateFormat(opinion.createTime)+"\n" +
                    "            </div>\n" +
                    "            <div class=\"col-lg-3 opinion-content\" title='"+opinion.replyContent+"'>\n" +
                    "                回复内容："+(isNull(opinion.replyContent)?'暂无回复':opinion.replyContent)+"\n" +
                    "            </div>\n" +
                    "            <div class=\"col-lg-2\">\n" +
                    "                回复时间："+(isNull(opinion.replyTime)?'暂无回复':changeDateFormat(opinion.replyTime))+"" +
                    "            </div>\n" +
                    "            </div>\n" +
                    "        </div>")
            })
        }
    })
}

//所有会员卡数据
function getData() {
    $.ajax({
        type:"post",
        url:"/open/getMyMember.html",
        dataType:"json",
        data:{},
        success:function(data){
            $(".memberDataItem").remove();
            $("#totalMoments").text(data.length)
            $("#nameTitle").text("我的会员卡")
            $.each(data,function (index,member) {
                $("#allData").append("<div class=\"row memberDataItem\">\n" +
                    "            <div class=\"col-lg-2 \" >\n" +
                    "                宠物店名称：<span class='shopDetails' title='查看宠物店详情' data='"+member.shopId+"'>"+member.shopName+"</span>\n" +
                    "            </div>\n" +
                    "            <div class=\"col-lg-2\">\n" +
                    "                会员卡号："+member.memberNumber+"\n" +
                    "            </div>\n" +
                    "            <div class=\"col-lg-2\">\n" +
                    "                会员积分："+member.score+"\n" +
                    "            </div>\n" +
                    "            <div class=\"col-lg-2\">\n" +
                    "                办理时间："+changeDateFormat(member.processingTime)+"\n" +
                    "            </div>\n" +
                    "            <div class=\"col-lg-2\">\n" +
                    "                账户余额：<span style='color: red'>"+member.balance+"</span> 元\n" +
                    "            </div>\n" +
                    "            <div class=\"col-lg-2\">\n" +
                    "                消费总金额：<span style='color: red'>"+member.total+"</span> 元\n" +
                    "            <div class=\"pull-right myOpinion\"><button class='btn btn-primary opinionBtn' memberId='"+member.id+"' data='"+member.shopId+"' shopName='"+member.shopName+"'>反馈</button></div>\n" +
                    "            </div>\n" +
                    "        </div>")
            })

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

