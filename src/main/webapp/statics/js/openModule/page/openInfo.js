$(function () {

    //初始化
    getData(1);
    getData(1,"新鲜事");
    getData(1,"涨知识");

    //全部
    $("#moreInfoAll").click(function () {
        if($(this).text()=="没有更多了"){
            return;
        }else {
            var pageNum = parseInt($(this).attr("pageNum"))+1;
            getData(pageNum);
        }
    })
    //新鲜事
    $("#moreInfoNews").click(function () {
        if($(this).text()=="没有更多了"){
            return;
        }else {
            var pageNum = parseInt($(this).attr("pageNum"))+1;
            getData(pageNum,"新鲜事");
        }
    })
    //涨知识
    $("#moreInfoKnowledge").click(function () {
        if($(this).text()=="没有更多了"){
            return;
        }else {
            var pageNum = parseInt($(this).attr("pageNum"))+1;
            getData(pageNum,"涨知识");
        }
    })


})

//获取数据
function getData(pageNum,category,status,pageSize) {
    $.ajax({
        type:"post",
        url:"/open/getInformation.html",
        dataType:"json",
        data:{
            pageNum:isNull(pageNum)?1:pageNum,
            status:isNull(status)?'已发布':status,
            pageSize:isNull(pageSize)?5:pageSize,
            category:isNull(category)?'':category,
        },
        success:function(data){
            var page;
            if(isNull(category)){
                page = $("#allData");
                $("#moreInfoAll").attr("pageNum",data.pageNumber)
                if(data.list.length<data.limit){
                    $("#moreInfoAll").empty();
                    $("#moreInfoAll").text("没有更多了")
                }
            }else {
                if(category=="新鲜事"){
                    page = $("#newsData");
                    $("#moreInfoNews").attr("pageNum",data.pageNumber)
                    if(data.list.length<data.limit){
                        $("#moreInfoNews").empty();
                        $("#moreInfoNews").text("没有更多了")
                    }
                }else {
                    page = $("#knowledgeData");
                    $("#moreInfoKnowledge").attr("pageNum",data.pageNumber)
                    if(data.list.length<data.limit){
                        $("#moreInfoKnowledge").empty();
                        $("#moreInfoKnowledge").text("没有更多了")
                    }
                }
            }

            $.each(data.list, function(i,petInformation){
                page.append("<li class=\"am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left am_list_li\">\n" +
                    "                        <div class=\"am-u-sm-2 am-list-thumb am_list_thumb\">\n" +
                    "                            <a href=\"###\" class=\"\">\n" +
                    "                                <img src='"+(isNull(petInformation.picPath)?'/statics/img/noPic.png':petInformation.picPath)+"' class=\"am_news_list_img\" alt=\"我很囧，你保重....晒晒旅行中的那些囧！\"/>\n" +
                    "                            </a>\n" +
                    "                        </div>\n" +
                    "                        <div class=\" am-u-sm-10 am-list-main am_list_main\">\n" +
                    "                            <h3 class=\"am-list-item-hd am_list_title\">\n" +
                    "                                <a href=\"/open/informationDetails.html/"+petInformation.id+"\" target='_blank' >"+petInformation.title+"</a><span class=\"info-category\">"+petInformation.category+"</span>\n" +
                    "                            </h3>\n" +
                    "                            <div class=\"am_list_author\"><a href=\"javascript:void(0)\"><span class=\"am_list_author_ico\" style=\"background-image: url('"+petInformation.imgPath+"\")></span><span class=\"name\">"+petInformation.userName+"</span></a><span class=\"am_news_time\">&nbsp;•&nbsp;<time class=\"timeago\" title="+petInformation.createTime+" > "+changeDateFormat(petInformation.createTime)+"</time></span></div>\n" +
                    "                            <div class=\"am-list-item-text am_list_item_text \">"+petInformation.content+"</div>\n" +
                    "                        </div>\n" +
                    "                    </li>")
            })
            $(".am_list_item_text").css("height","35px");

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