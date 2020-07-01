$(function(){
	$.ajax({
		type:"get",
		url:"/petShop/getPetShopMemberOpinion.html",
        dataType:'json',
		data:{
			replyStatus:0
		},
		success:function(data){
			var columns = [
				{field: 'memberNumber', title: '会员账号', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'userName', title: '用户名称', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'level', title: '会员等级', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'content', title: '反馈意见', sortable: true, align: 'left', halign: 'center',
                    valign: 'middle', width:400,cellStyle: formatTableUnit,
                    formatter: paramsMatter,
                },
				{field: 'createTime', title: '反馈时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
                    formatter: function (value, row, index) {
                        return changeDateFormat(value)
                    }
                },
				{field: 'replyStatus', title: '回复状态', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (index, row) {
						    if (row["replyStatus"] == 0) {
						        return '待回复'
						    }
						    return '已回复';
						},
				},{field: 'operate', title: '操作', width: 130, align: 'center', valign: 'middle', formatter: actionFormatter,},];
			$('#petShpMemberTable').bootstrapTable('destroy');
			$('#petShpMemberTable').bootstrapTable({
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

    $.ajax({
        type:"get",
        url:"/petShop/getPetShopMemberOpinion.html",
        dataType:'json',
        data:{
            replyStatus:1
        },
        success:function(data){
            var columns = [
                {field: 'memberNumber', title: '会员账号', align: 'center', halign: 'center', valign: 'middle', sortable: true},
                {field: 'userName', title: '用户名称', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
                {field: 'level', title: '会员等级', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
                {field: 'content', title: '反馈意见', sortable: true, align: 'left', halign: 'center',
                    valign: 'middle', width:400,cellStyle: formatTableUnit,
                    formatter: paramsMatter,
                },
                {field: 'createTime', title: '反馈时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
                {field: 'replyStatus', title: '回复状态', sortable: true, align: 'center', halign: 'center', valign: 'middle',
                    formatter: function (index, row) {
                        if (row["replyStatus"] == 0) {
                            return '待回复'
                        }
                        return '已回复';
                    },
                },{field: 'operate', title: '操作', width: 130, align: 'center', valign: 'middle', formatter: actionFormatter,},];
            $('#petShpMemberTable2').bootstrapTable('destroy');
            $('#petShpMemberTable2').bootstrapTable({
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
    var opinionId = data.id;
    if(name=="view"){
        var html = "<div class='row pet-all-dialog' id='shopMemberOpinion'>" +
            "<div class='col-lg-4 pet-value-dialog'>会员账号: "+data.memberNumber+"</div>" +
            "<div class='col-lg-4 pet-value-dialog'>用户名称："+data.userName+"</div>" +
            "<div class='col-lg-4 pet-value-dialog'>会员等级："+data.level+"</div>" +
            "<div class='col-lg-4 pet-value-dialog'>回复状态："+(data.replyStatus==0?"待回复":"已回复")+"</div>" +
            "<div class='col-lg-8 pet-value-dialog'>反馈时间："+changeDateFormat(data.createTime)+"</div>" +
            "<div class='col-lg-12 pet-value-dialog'>反馈内容："+data.content+"</div>" +
            "</div>";
        var opt = {
            title: "会员反馈意见详情",
            width: 600,
            content: html,
            cancelBtnText: '关闭',
            okBtnText: (data.replyStatus==0?"回复":""),
            onOk: function () {
                replyOpinion(opinionId,data);
            }
        };
        $("#showDialog1").showDialog(opt,250,"btn btn-primary");
        if(data.replyStatus==1){
            $("#shopMemberOpinion").append("" +
                "<div class='col-lg-8 pet-value-dialog'>回复时间："+data.replyTime+"</div>" +
                "<div class='col-lg-12 pet-value-dialog'>回复内容："+data.replyContent+"</div>")
        }
    }else if (name=="edit"){
        replyOpinion(opinionId,data);
    } else {//删除
        var opt = {
            title: "会员反馈意见处理",
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

function replyOpinion(opinionId,data) {
    var html = "<div class='row pet-all-dialog'>" +
        "<div class='col-lg-4 pet-value-dialog'>会员账号: "+data.memberNumber+"</div>" +
        "<div class='col-lg-4 pet-value-dialog'>用户名称："+data.userName+"</div>" +
        "<div class='col-lg-4 pet-value-dialog'>会员等级："+data.level+"</div>" +
        "<div class='col-lg-4 pet-value-dialog'>回复状态："+(data.replyStatus==0?"待回复":"已回复")+"</div>" +
        "<div class='col-lg-8 pet-value-dialog'>反馈时间："+changeDateFormat(data.createTime)+"</div>" +
        "<div class='col-lg-12 pet-value-dialog'>反馈内容："+data.content+"</div>" +
        "<div class='col-lg-12 pet-value-dialog'>回复内容：" +
        "<textarea style='width: 100%;padding:10px;font-size: 14px' rows='5' id='replyContent'></textarea>" +
        "</div>" +
        "</div>";
    var opt = {
        title: "会员反馈意见回复",
        width: 600,
        content: html,
        cancelBtnText: '关闭',
        okBtnText: '提交',
        onOk: function () {
            var replyContent = $("#replyContent").val();
            $.ajax({
                type:"post",
                url:"/petShop/replyPetShopMember.html",
                dataType:'json',
                data:{
                    id:opinionId,
                    replyContent:replyContent
                },
                success:function(data){
                    var opt = {
                        title: "会员反馈意见回复",
                        width: 400,
                        content: "回复成功！",
                        cancelBtnText: '',
                        okBtnText: '确定',
                        onOk: function () {}
                    };
                    setTimeout(function () {
                        $("#showDialog1").showDialog(opt,200);
                        $("#petShpMemberTable").bootstrapTable('refresh', {url:"/petShop/getPetShopMemberOpinion.html?replyStatus=0"});
                        $("#petShpMemberTable2").bootstrapTable('refresh', {url:"/petShop/getPetShopMemberOpinion.html?replyStatus=1"});
                        getOpinionMsgShow();
                    },400)
                }
            })
        }
    };
    setTimeout(function () {
        $("#showDialog1").showDialog(opt,300,"btn btn-success");
    },400)
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
    if(!row.replyStatus){
        result += "<a href='javascript:;' class='btn btn-xs blue' " +
            "onclick='EditViewById("+data+",\"edit\")' title='回复'>回复</a>";
    }
    result += "<a href='javascript:;' class='btn btn-xs red' " +
        "onclick='EditViewById("+data+",\"del\")' title='删除'>删除</a>";
    return result;
}
