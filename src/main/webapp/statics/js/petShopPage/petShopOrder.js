$(function(){
    //处理中的预约
	$.ajax({
		type:"post",
		url:"/open/getPetShopOrder.html",
        dataType:'json',
		data:{
            result:"接受",
            replyStatus:"已答复"
		},
		success:function(data){
			var columns = [
                {field: 'userName', title: '预约用户', align: 'center', halign: 'center', valign: 'middle', sortable: true},
                {field: 'userPhone', title: '用户联系电话', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'category', title: '预约类别', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'timeExplain', title: '预约时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'result', title: '预约状态', sortable: true, align: 'left', halign: 'center', valign: 'middle',},
				{field: 'remarks', title: '预约备注', sortable: true, align: 'center', halign: 'center', valign: 'middle',
                    formatter: function (index, row) {
				        if(row['remarks'].length>20){
                            return "<span title="+row['remarks']+">"+row['remarks'].substring(0,20)+"...</span>"
                        }
                        return row['remarks'];

                    },
                },
				{field: 'replyStatus', title: '答复状态', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
                {field: 'createTime', title: '预约发起时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
                    formatter: function (value, row, index) {
                        return changeDateFormat(value)
                    }
                },
                {field: 'operate', title: '操作', width: 130, align: 'center', valign: 'middle', formatter: actionFormatter,},];
			$('#petShopOrderHandle').bootstrapTable('destroy');
			$('#petShopOrderHandle').bootstrapTable({
				data: data,
				classes: 'table table-hover',
                height: 680,
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
				showExport: true,
				columns: columns,
				onLoadSuccess: function() {},
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

    //待答复的预约
    $.ajax({
        type:"post",
        url:"/open/getPetShopOrder.html",
        dataType:'json',
        data:{
            result:"预约中",
            replyStatus:"待答复"
        },
        success:function(data){
            var columns = [
                {field: 'userName', title: '预约用户', align: 'center', halign: 'center', valign: 'middle', sortable: true},
                {field: 'userPhone', title: '用户联系电话', align: 'center', halign: 'center', valign: 'middle', sortable: true},
                {field: 'category', title: '预约类别', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
                {field: 'timeExplain', title: '预约时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
                {field: 'result', title: '预约状态', sortable: true, align: 'left', halign: 'center', valign: 'middle',},
                {field: 'remarks', title: '预约备注', sortable: true, align: 'center', halign: 'center', valign: 'middle',
                    formatter: function (index, row) {
                        if(row['remarks'].length>20){
                            return "<span title="+row['remarks']+">"+row['remarks'].substring(0,20)+"...</span>"
                        }
                        return row['remarks'];

                    },
                },
                {field: 'replyStatus', title: '答复状态', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
                {field: 'createTime', title: '预约发起时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
                    formatter: function (value, row, index) {
                        return changeDateFormat(value)
                    }
                },
                {field: 'operate', title: '操作', width: 130, align: 'center', valign: 'middle', formatter: actionFormatter,},];
            $('#petShopOrderReply').bootstrapTable('destroy');
            $('#petShopOrderReply').bootstrapTable({
                data: data,
                classes: 'table table-hover',
                // height: 400,
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
                showExport: true,
                columns: columns,
                onLoadSuccess: function() {},
                onPostBody:function(data){},
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
    //已完成预约
    $.ajax({
        type:"post",
        url:"/open/getPetShopOrder.html",
        dataType:'json',
        data:{
            replyStatus:"已完成"
        },
        success:function(data){
            var columns = [
                {field: 'userName', title: '预约用户', align: 'center', halign: 'center', valign: 'middle', sortable: true},
                {field: 'userPhone', title: '用户联系电话', align: 'center', halign: 'center', valign: 'middle', sortable: true},
                {field: 'category', title: '预约类别', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
                {field: 'timeExplain', title: '预约时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
                {field: 'result', title: '预约状态', sortable: true, align: 'left', halign: 'center', valign: 'middle',},
                {field: 'remarks', title: '预约备注', sortable: true, align: 'center', halign: 'center', valign: 'middle',
                    formatter: function (index, row) {
                        if(row['remarks'].length>20){
                            return "<span title="+row['remarks']+">"+row['remarks'].substring(0,20)+"...</span>"
                        }
                        return row['remarks'];
                    },
                },
                {field: 'replyStatus', title: '答复状态', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
                {field: 'createTime', title: '预约发起时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
                    formatter: function (value, row, index) {
                        return changeDateFormat(value)
                    }
                },
                {field: 'operate', title: '操作', width: 130, align: 'center', valign: 'middle', formatter: actionFormatter,},];
            $('#petShopOrderFinish').bootstrapTable('destroy');
            $('#petShopOrderFinish').bootstrapTable({
                data: data,
                classes: 'table table-hover',
                // height: 400,
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
                showExport: true,
                columns: columns,
                onLoadSuccess: function() {},
                onPostBody:function(data){},
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
})

function EditViewById (data,name){
    if(name=="view"){
        var html = "<div class='row pet-all-dialog' id='shopMemberOpinion'>" +
            "<div class='col-lg-4 pet-value-dialog'>是否会员: 非会员</div>" +
            "<div class='col-lg-4 pet-value-dialog'>用户名称："+data.userName+"</div>" +
            "<div class='col-lg-4 pet-value-dialog'>答复状态："+data.replyStatus+"</div>" +
            "<div class='col-lg-8 pet-value-dialog'>预约发起时间："+changeDateFormat(data.createTime)+"</div>" +
            "<div class='col-lg-8 pet-value-dialog'>预约时间："+data.timeExplain+"</div>" +
            "<div class='col-lg-12 pet-value-dialog'>预约内容："+data.remarks+"</div>" +
            "</div>";

        var vipHtml = "<div class='row pet-all-dialog' id='shopMemberOpinion'>" +
            "<div class='col-lg-4 pet-value-dialog'>会员账号: "+data.memberNumber+"</div>" +
            "<div class='col-lg-4 pet-value-dialog'>用户名称："+data.userName+"</div>" +
            "<div class='col-lg-4 pet-value-dialog'>会员等级："+data.level+"</div>" +
            "<div class='col-lg-4 pet-value-dialog'>答复状态："+data.replyStatus+"</div>" +
            "<div class='col-lg-8 pet-value-dialog'>预约发起时间："+changeDateFormat(data.createTime)+"</div>" +
            "<div class='col-lg-8 pet-value-dialog'>预约时间："+data.timeExplain+"</div>" +
            "<div class='col-lg-12 pet-value-dialog'>预约内容："+data.remarks+"</div>" +
            "</div>";

        var opt = {
            title: "会员预约详情",
            width: 600,
            content: isNull(data.memberNumber)?html:vipHtml,
            cancelBtnText: '关闭',
            okBtnText: data.result=='预约取消'?'':data.replyStatus=='待答复'?'答复':'',
            onOk: function () {
                replyUserOrder(data);
            }
        };
        $("#showDialog1").showDialog(opt,250,"btn btn-primary");
        if(data.replyStatus=="已答复"||data.replyStatus=="已完成"){
            $("#shopMemberOpinion").append("" +
                "<div class='col-lg-8 pet-value-dialog'>回复时间："+changeDateFormat(data.replyTime)+"</div>" +
                "<div class='col-lg-12 pet-value-dialog'>回复内容："+(isNull(data.replyContent)?'无':data.replyContent)+"</div>")
        }
    }else if (name=="edit"){
        replyUserOrder(data);
    } else if(name=="finish"){
        var opt = {
            title: "会员预约",
            width: 400,
            content: "预约完成是否完成?",
            cancelBtnText: '关闭',
            okBtnText: '完成',
            onOk: function () {
                $.ajax({
                    type:"post",
                    url:"/petShop/replyOrder.html",
                    dataType:'json',
                    data:{
                        id:data.id,
                        replyStatus:"已完成"
                    },
                    success:function(data){
                        var opt = {
                            title: "会员预约",
                            width: 400,
                            content: "预约完成！",
                            cancelBtnText: '确定',
                            okBtnText: '',
                            onOk: function () {},
                        };
                        setTimeout(function () {
                            $("#showDialog1").showDialog(opt,200);
                            $("#petShopOrderHandle").bootstrapTable('refresh', {url:"/open/getPetShopOrder.html",query:{result:"接受", replyStatus:"已答复"}});
                            $("#petShopOrderReply").bootstrapTable('refresh', {url:"/open/getPetShopOrder.html",query:{result:"预约中", replyStatus:"待答复"}});
                            $("#petShopOrderFinish").bootstrapTable('refresh', {url:"/open/getPetShopOrder.html",query:{replyStatus:"已完成"}});
                        },400)
                    }
                })
            },
        };
        $("#showDialog1").showDialog(opt,150);

    } else {//删除
        var opt = {
            title: "会员预约",
            width: 400,
            content: "删除会员账号<span style='color: red;padding:3px'>"+data.memberNumber+"</span>反馈意见?",
            cancelBtnText: '取消',
            okBtnText: '确定',
            onOk: function () {
                $.ajax({
                    type:"post",
                    url:"/petShop/delPetShopMemberOpinion.html",
                    dataType:'json',
                    data:{
                        id:data.id,
                    },
                    success:function(data){
                        if(data=="success"){
                            var opt = {
                                title: "会员反馈意见处理",
                                width: 400,
                                content: "删除成功！",
                                cancelBtnText: '',
                                okBtnText: '确定',
                                onOk: function () {}
                            };
                            setTimeout(function () {
                                $("#showDialog1").showDialog(opt,200);
                                $("#petShpMemberTable").bootstrapTable('refresh', {url:"/petShop/getPetShopMemberOpinion.html?replyStatus=0"});
                                $("#petShpMemberTable2").bootstrapTable('refresh', {url:"/petShop/getPetShopMemberOpinion.html?replyStatus=1"});
                            },400)
                        }else{
                            var opt = {
                                title: "会员反馈意见处理",
                                width: 400,
                                content: "删除失败！",
                                cancelBtnText: '',
                                okBtnText: '确定',
                                onOk: function () {}
                            };
                            setTimeout(function () {
                                $("#showDialog1").showDialog(opt,200);
                            },400)
                        }
                    }
                })

            }
        };
        setTimeout(function () {
            $("#showDialog1").showDialog(opt,200,"btn btn-danger");
        },100)
    }
}


//表格超出宽度鼠标悬停显示td内容
function paramsMatter(value, row, index) {
    var span = document.createElement("span");
    span.setAttribute("title", value);
    span.innerHTML = value;
    return span.outerHTML;
}
//td宽度以及内容超过宽度隐藏
function formatTableUnit(value, row, index) {
    return {
        css: {
            "white-space": "nowrap",
            "text-overflow": "ellipsis",
            "overflow": "hidden",
            "max-width": "60px",
            "font-size":"16px"
        }
    }
}

function actionFormatter(value, row, index) {
    var data = JSON.stringify(row);
    var result = "";
    result += "<a href='javascript:;' class='btn btn-xs green' " +
        "onclick='EditViewById("+data+",\"view\")' title='查看'>查看</a>";
    if(row.replyStatus=="待答复"&&row.result!="预约取消"){
        result += "<a href='javascript:;' class='btn btn-xs blue' " +
            "onclick='EditViewById("+data+",\"edit\")' title='回复'>回复</a>";
    }
    if(row.replyStatus=="已答复"||row.result=="预约取消"){
        if(row.replyStatus!="已完成"){
            result += "<a href='javascript:;' class='btn btn-xs blue' " +
                "onclick='EditViewById("+data+",\"finish\")' title='完成'>完成</a>";
        }
    }
    result += "<a href='javascript:;' class='btn btn-xs red' " +
        "onclick='EditViewById("+data+",\"del\")' title='删除'>删除</a>";
    return result;
}

//会员答复
function replyUserOrder(data) {
    var html = "<div class='row pet-all-dialog'>" +
        "<div class='col-lg-4 pet-value-dialog'>是否会员: 非会员</div>" +
        "<div class='col-lg-4 pet-value-dialog'>用户名称："+data.userName+"</div>" +
        "<div class='col-lg-4 pet-value-dialog'>答复状态："+data.replyStatus+"</div>" +
        "<div class='col-lg-8 pet-value-dialog'>预约时间："+changeDateFormat(data.createTime)+"</div>" +
        "<div class='col-lg-12 pet-value-dialog'>预约内容："+(isNull(data.remarks)?'无':data.remarks)+"</div>" +
        "<div class='col-lg-12 pet-value-dialog'>回复内容：" +
        "<textarea style='width: 100%;padding:10px;font-size: 14px' rows='5' id='replyContent'></textarea>" +
        "</div>" +
        "</div>";
    var vipHtml = "<div class='row pet-all-dialog'>" +
        "<div class='col-lg-4 pet-value-dialog'>会员账号: "+data.memberNumber+"</div>" +
        "<div class='col-lg-4 pet-value-dialog'>用户名称："+data.userName+"</div>" +
        "<div class='col-lg-4 pet-value-dialog'>会员等级："+data.level+"</div>" +
        "<div class='col-lg-4 pet-value-dialog'>答复状态："+data.replyStatus+"</div>" +
        "<div class='col-lg-8 pet-value-dialog'>预约时间："+changeDateFormat(data.createTime)+"</div>" +
        "<div class='col-lg-12 pet-value-dialog'>预约内容："+(isNull(data.remarks)?'无':data.remarks)+"</div>" +
        "<div class='col-lg-12 pet-value-dialog'>回复内容：" +
        "<textarea style='width: 100%;padding:10px;font-size: 14px' rows='5' id='replyContent'></textarea>" +
        "</div>" +
        "</div>";

    var opt = {
        title: "会员预约答复",
        width: 600,
        content: isNull(data.memberNumber)?html:vipHtml,
        cancelBtnText: '拒接',
        okBtnText: '接受',
        onOk: function () {
            replyContent(data.id,"接受")
        },
        onCancel:function () {
            replyContent(data.id,"拒接")
        }
    };
    setTimeout(function () {
        $("#showDialog1").showDialog(opt,300,"","1","btn btn-danger");
    },400)


    function replyContent(orderId,status) {
        var replyContent = $("#replyContent").val();
        $.ajax({
            type:"post",
            url:"/petShop/replyOrder.html",
            dataType:'json',
            data:{
                id:orderId,
                replyContent:replyContent,
                result:status
            },
            success:function(data){
                var opt = {
                    title: "会员预约答复",
                    width: 400,
                    content: "预约答复成功！",
                    cancelBtnText: '',
                    okBtnText: '确定',
                    onOk: function () {},
                };
                setTimeout(function () {
                    $("#showDialog1").showDialog(opt,200);
                    $("#petShopOrderHandle").bootstrapTable('refresh', {url:"/open/getPetShopOrder.html",query:{result:"接受", replyStatus:"已答复"}});
                    $("#petShopOrderReply").bootstrapTable('refresh', {url:"/open/getPetShopOrder.html",query:{result:"预约中", replyStatus:"待答复"}});
                    $("#petShopOrderFinish").bootstrapTable('refresh', {url:"/open/getPetShopOrder.html",query:{replyStatus:"已完成"}});
                    getOrderMsgShow();
                },400)
            }
        })
    }
}