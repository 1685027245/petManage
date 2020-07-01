$(function () {

    //处理中的预约
    $.ajax({
        type:"post",
        url:"/open/getUserOrder.html",
        dataType:'json',
        data:{},
        success:function(data){
            var nowOrder = 0;
            $.each(data, function(i,order){
                if(order.replyStatus!="已完成"){
                    nowOrder++;
                }
            })
            $("#nowOrder").text(nowOrder);

            var columns = [
                {field: 'category', title: '预约类别', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
                {field: 'timeExplain', title: '预约时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
                {field: 'result', title: '预约状态', sortable: true, align: 'left', halign: 'center', valign: 'middle',},
                {field: 'remarks', title: '预约备注', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
                {field: 'replyStatus', title: '答复状态', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
                {field: 'createTime', title: '预约发起时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
                    formatter: function (value, row, index) {
                        return changeDateFormat(value)
                    }
                },
                {field: 'replyContent', title: '答复内容', sortable: true, align: 'center', halign: 'center', valign: 'middle',visible: false,
                    formatter: function (value, row, index) {
                        if(value==null||value==''){
                            return "--"
                        }
                        return value
                    }
                },
                {field: 'replyTime', title: '答复时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',visible: false,
                    formatter: function (value, row, index) {
                        if(value==null||value==''){
                            return "--"
                        }
                        return changeDateFormat(value)
                    }
                },
                {field: 'operate', title: '操作', width: 160, align: 'center', valign: 'middle', formatter: actionFormatter,},];
            $('#petShopOrderHandle').bootstrapTable('destroy');
            $('#petShopOrderHandle').bootstrapTable({
                data: data,
                classes: 'table table-hover',
                height: 600,
                //url: queryUrl,  //请求后台的URL（*）
                //method: 'GET',  //请求方式（*）
                toolbar: '#toolbar', //工具按钮用哪个容器
                striped: true, //是否显示行间隔色
                cache: true, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
                pagination: true, //是否显示分页（*）
                sortable: true, //是否启用排序
                sortOrder: "asc", //排序方式
                sidePagination: "client", //分页方式：client客户端分页，server服务端分页（*）
                pageNumber: 1, //初始化加载第一页，默认第一页,并记录
                pageSize: 10, //每页的记录行数（*）
                pageList: [10, 20, 30, 50], //可供选择的每页的行数（*）
                search: true, //是否显示表格搜索
                strictSearch: false, //是否开启精确查询
                showColumns: true, //是否显示所有的列（选择显示的列）
                showRefresh: false, //是否显示刷新按钮
                minimumCountColumns: 2, //最少允许的列数
                clickToSelect: true, //是否启用点击选中行
                uniqueId: "fid", //每一行的唯一标识，一般为主键列
                showToggle: false, //是否显示详细视图和列表视图的切换按钮
                showExport: false,
                columns: columns,
                onLoadSuccess:function(data){

                },
                onPostBody:function(data){
                },
                onLoadError: function() {
                    showTips("数据加载失败！");
                },
                onClickRow: function(row, $element) {
                    /*alert("点击了" + $element.text().trim())*/
                },
                onDblClickRow: function(row, $element) {

                }
            });
        }
    })

    //提交评分
    $("#submitComment").click(function () {
        var rate = $("#rate").val();
        var commentContent = $("#commentContent").val();
        var shopId = $("#commentAll").attr("shopId");
        var orderId = $("#commentAll").attr("orderId")
        var isComment =  $("#commentAll").attr("isComment");
        var commentId = $("#commentAll").attr("commentId");;

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
        if(isComment=="true"){//修改评论
            $.ajax({
                type:"post",
                url:"/open/updateComment.html",
                dataType:"json",
                data:{
                    id:commentId,
                    commentContent:commentContent,
                    starRating:rate,
                },
                success:function(data){
                    if(data=="success"){
                        var opt = {
                            title: '宠物店评分',
                            width: 400,
                            content: "修改评分成功！",
                            okBtnText: '确定',
                            cancelBtnText: '',
                            onOk: function () {}
                        };
                        $("#showDialog1").showDialog(opt,150);
                    }
                }
            })
        }else {//新增评论
            $.ajax({
                type:"post",
                url:"/open/addComment.html",
                dataType:"json",
                data:{
                    commentContent:commentContent,
                    starRating:rate,
                    shopId:shopId,
                    orderId:orderId
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
                    }
                }
            })
        }

    })

    $("#cancleComment").click(function () {
        $("#commentAll").hide();
    })
})

function EditViewById (data,name){
    if(name=="del"){
        var opt = {
            title: "会员预约",
            width: 400,
            content: "取消当前预约?",
            cancelBtnText: '关闭',
            okBtnText: '确定',
            onOk: function () {
                $.ajax({
                    type:"post",
                    url:"/open/cancelOrder.html",
                    dataType:'json',
                    data:{
                        id:data.id,
                    },
                    success:function(data){
                        var opt = {
                            title: "会员预约",
                            width: 400,
                            content: "预约取消操作成功！",
                            cancelBtnText: '',
                            okBtnText: '确定',
                            onOk: function () {},
                        };
                       setTimeout(function () {
                           $("#showDialog1").showDialog(opt,150);
                           $("#petShopOrderHandle").bootstrapTable('refresh', {url:"/open/getUserOrder.html"});
                       },400)
                    }
                })
            },
        };
        $("#showDialog1").showDialog(opt,150);
    }else if(name=="edit"){
        //弹窗
        var html ="<div class='shop-member-input-all'>" +
            "<div class='row shop-member-input'>" +
            "<div class='col-lg-3  shop-member-title'>" +
            "<label>预约类别</label>" +
            "</div>" +
            "<div class='col-lg-8'>" +
            "<select id='orderCategory' class='form-control'>" +
            "    <option "+(data.category=='购买商品'?'selected="selected"':'')+" value='购买商品'>购买商品</option>" +
            "    <option "+(data.category=='宠物寄养'?'selected="selected"':'')+" value='宠物寄养'>宠物寄养</option>" +
            "</select>" +
            "</div>" +
            "</div>" +
            "<div class='row shop-member-input'>" +
            "<div class='col-lg-3  shop-member-title'>" +
            "<label>预约时间</label>" +
            "</div>" +
            "<div class='col-lg-8'>" +
            "<input type='text' id='orderTime' class='form-control date-input' style='font-size: 14px' value='"+data.timeExplain+"' placeholder='请说明预约时间'>" +
            "</div>" +
            "</div>" +
            "<div class='row shop-member-input'>" +
            "<div class='col-lg-3  shop-member-title'>" +
            "<label>预约备注</label>" +
            "</div>" +
            "<div class='col-lg-8'>" +
            "<textarea rows='4' id='orderRemarks' style='width: 100%'>"+data.remarks+"</textarea>" +
            "</div>" +
            "<div class='row shop-member-input'>" +
            "<div class='col-lg-3  shop-member-title'></div>" +
            "<div class='col-lg-8' style='padding-left: 25px;color: red'>注意：修改预约内容需要重新审核预约</div>" +
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
                $.ajax({
                    type:"post",
                    url:"/open/updateOrder.html",
                    dataType:"json",
                    data:{
                        id:data.id,
                        category:orderCategory,
                        timeExplain:orderTime,
                        remarks:orderRemarks
                    },
                    success:function(data){
                        if(data=="success"){
                            var opt = {
                                title: "会员预约",
                                width: 400,
                                content: "预约修改成功！",
                                cancelBtnText: '',
                                okBtnText: '确定',
                                onOk: function () {},
                            };
                            setTimeout(function () {
                                $("#showDialog1").showDialog(opt,150);
                                $("#petShopOrderHandle").bootstrapTable('refresh', {url:"/open/getUserOrder.html"});
                            },400)
                        }
                    }
                })
            }
        };
        $("#showDialog1").showDialog(opt,300)
    }else if(name=="comment"){
        $.ajax({
            type:"post",
            url:"/open/getPetshopCommentByOrderId.html",
            dataType:"json",
            data:{
                orderId:data.id,
            },
            success:function(data){
                if(isNull(data)){
                    $("#commentAll").attr("isComment",false);
                }else {
                    $("#commentAll").attr("isComment",true);
                    $("#commentAll").attr("commentId",data.id);
                }
                $("#rate").val(isNull(data)?0:data.starRating);
                $('#rate').rating('refresh', {readonly: false, showClear: false, showCaption: true,starCaptions:getRateName()})
                $("#commentContent").val(isNull(data)?'':data.commentContent);
                /* class引用评分样式，min最小评分数，max最大评分数，data-size分分大小(大小可选 lg,sm,xl,xs),value初始分分数量； */
            }
        })
        $('#rate').rating({
            clearButton:"",
            step: 0.1,
            size: 'lg',//分分大小可选lg,sm,xl,xs
            starCaptions: getRateName(),
            starCaptionClasses: getRateColor(),
            hoverEnabled: true //是否经过时有效果
        });
        $("#commentAll").attr("shopId",data.shopId)
        $("#commentAll").attr("orderId",data.id)
        $("#commentAll").show();
    }
}


function actionFormatter(value, row, index) {
    var data = JSON.stringify(row);
    var result = "";
    if(row.result=="预约中"||row.result=="接受"&&row.replyStatus!="已完成"){
        result += "<a href='javascript:;' class='btn btn-xs red' " +
            "onclick='EditViewById("+data+",\"edit\")' title='修改预约'>修改预约</a>";
        result += "<a href='javascript:;' class='btn btn-xs red' " +
            "onclick='EditViewById("+data+",\"del\")' title='取消预约'>取消预约</a>";
    }
    if(row.result=="预约取消"&&(row.replyStatus=="待答复"||row.replyStatus=="已答复")){
        result += "<span style='color: orange'>预约取消中</span>";
    }
    if(row.replyStatus=="已完成"){
        /*result += "<span style='color: orange'>已完成</span>";*/
        result += "<a href='javascript:;' class='btn btn-xs red' " +
            "onclick='EditViewById("+data+",\"comment\")' title='评分'>评分</a>";
    }
    /*result += "<a href='javascript:;' class='btn btn-xs red' " +
        "onclick='EditViewById("+data+",\"del\")' title='取消预约'>取消预约</a>";*/
    return result;
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

