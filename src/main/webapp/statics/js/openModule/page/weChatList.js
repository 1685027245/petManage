$(function () {

    $.ajax({
        type:"post",
        url:"/open/getWechatMoments.html",
        dataType:'json',
        data:{},
        success:function(data){
            $("#allData").empty();
            $.each(data, function(i,moments){
                $("#allData").append("<div class='ztlb_nr_blockc'>" +
                    "            <div class='ztlb_nr_blockc_l'>" +
                    "                <img src="+moments.userImg+" alt=''>" +
                    "            </div>" +
                    "            <div class='ztlb_nr_blockc_r weChatDetails' style='cursor: pointer' data='"+moments.id+"'>" +
                    "                <div class='ztlb_nr_blockc_r-user-name ' ><a href='#' class='ztlb_nr_blockc_r_title'>"+moments.userName+"</a></div>" +
                    ""                   +getAllImg(moments.imgPath)+
                    "                    <div class='am_tuya_oneword am_tuya_oneword-noborder am_tuya_oneword-nopadding'>"+moments.content+"</div>" +
                    "                <div class='ztlb_nr_blockc_r_user'  >" +
                    /*"                    <div class='user-about '>点赞: 5</div>" +
                    "                    <div class='user-about'>评论: 102</div>" +
                    "                    <div class='user-about'>收藏: 15</div>" +
                    "                    <div class='user-about'>转发: 15</div>" +*/
                    "                    <div class='user-about'>发表时间: "+changeDateFormat(moments.createTime)+"</div>" +
                    "                </div>" +
                    "            </div>" +
                    "        </div>");
            })

        }
    })
    //发表朋友圈
    $("#addMoments").click(function () {
        loadPage("/open/addMoments.html")
    })

    //发表文章
    $("#addArticle").click(function () {
        loadPage("/open/addArticle.html")
    })

    //跳转到宠物详情
    $("body").on("click",".weChatDetails",function(){
        var id = $(this).attr("data");
        loadPage("/open/weChatDetails.html/"+id);
    })

})

function getAllImg(imgPath) {
    var imgHtml='';
    if(imgPath!=null){
        var strArray = imgPath.split(';');
        for(var i in strArray){
            if(strArray[i]!=null&&strArray[i]!=''){
                imgHtml+= "<img class='mymomentsImg' src='"+strArray[i]+"'>";
            }
        }
    }
    return imgHtml;
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
