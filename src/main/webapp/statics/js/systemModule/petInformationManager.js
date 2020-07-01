$(function(){
	$.ajax({
		type:"get",
		url:"/system/getPetInformation.html",
		dataType:'json',
		data:{},
		success:function(data){
			var columns = [
				{field: 'title', title: '资讯标题', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'content', title: '内容主体', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (index, row) {
						var value = $(row['content']).text();
						if(isNull(value)){
							return "<span title="+row['content']+">"+row['content'].substring(0,25)+"...</span>"
						}
						if (value.length>40) {
							return "<span title="+value+">"+value.substring(0,25)+"...</span>"
						}
						return value;
					},
				},
				{field: 'category', title: '分类', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'userName', title: '作者', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'createTime', title: '发表时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (value, row, index) {
						return changeDateFormat(value)
					}
				},
				{field: 'status', title: '发布状态', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'operate', title: '操作', width: 180, align: 'center', valign: 'middle', formatter: actionFormatter,} ];
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
					/*var id = row.ID;
					EditViewById(id, 'view');*/
				}
			});
		}
	})

	$("#addPetInfo").click(function () {
		loadPage("/system/addPetInformation.html/0");
	})
})

function EditViewById (data,name){

	if(name=="view"){
		//弹窗
		var html =
			"<div class='row'>" +
			"<div class='col-lg-6 shop-member-dialog-title'><label>标题: "+data.title+"</label></div>" +
			"<div class='col-lg-6 shop-member-dialog-title'><label>作者: "+data.userName+"</label></div>" +
			"<div class='col-lg-6 shop-member-dialog-title'><label>分类: "+data.category+"</label></div>" +
			"<div class='col-lg-6 shop-member-dialog-title'><label>发表时间: "+changeDateFormat(data.createTime)+"</label></div>" +
			"<div class='col-lg-12 shop-member-dialog-title' style='word-wrap: break-word;word-break: break-all;'><label>内容主体: "+data.content+"</label></div>" +
			"</div>" +
			"</div>";
		var opt = {
			title: '宠物资讯',
			width: 900,
			content: html,
			cancelBtnText: '关闭',
			okBtnText: data.status=="待发布"?"发布":"",
			onOk: function () {
				$.ajax({
					type: "post",
					url: "/system/changePetInformationStatus.html",
					dataType: 'json',
					data: {
						id:data.id,
						status:"已发布"
					},
					success: function (data) {
						var opt = {
							title: '宠物资讯',
							width: 400,
							content: "发布成功！",
							cancelBtnText: '确定',
							okBtnText: "",
							onOk: function () {}
						};
						setTimeout(function () {
							$("#showDialog1").showDialog(opt,150,"");
							$("#petShpMemberTable").bootstrapTable('refresh', {url:"/system/getPetInformation.html"});
						},400)
					}
				})
			},
		};
		$("#showDialog1").showDialog(opt,400,"btn btn-primary");
	}else if(name=="publish"){
		if(data.status=="已发布"){
			var opt = {
				title: '宠物资讯',
				width: 400,
				content: "对该条宠物资讯进行下架?",
				cancelBtnText: '取消',
				okBtnText: "确定",
				onOk: function () {
					$.ajax({
						type: "post",
						url: "/system/changePetInformationStatus.html",
						dataType: 'json',
						data: {
							id:data.id,
							status:"已下架"
						},
						success: function (data) {
							var opt = {
								title: '宠物资讯',
								width: 400,
								content: "下架成功！",
								cancelBtnText: '确定',
								okBtnText: "",
								onOk: function () {}
							};
							setTimeout(function () {
								$("#showDialog1").showDialog(opt,150,"");
								$("#petShpMemberTable").bootstrapTable('refresh', {url:"/system/getPetInformation.html"});
							},400)
						}
					})
				},
			};
			$("#showDialog1").showDialog(opt,150);
		} else {
			var opt = {
				title: '宠物资讯',
				width: 400,
				content: "对该条宠物资讯进行发布?",
				cancelBtnText: '取消',
				okBtnText: "确定",
				onOk: function () {
					$.ajax({
						type: "post",
						url: "/system/changePetInformationStatus.html",
						dataType: 'json',
						data: {
							id:data.id,
							status:"已发布"
						},
						success: function (data) {
							var opt = {
								title: '宠物资讯',
								width: 400,
								content: "发布成功！",
								cancelBtnText: '确定',
								okBtnText: "",
								onOk: function () {}
							};
							setTimeout(function () {
								$("#showDialog1").showDialog(opt,150,"");
								$("#petShpMemberTable").bootstrapTable('refresh', {url:"/system/getPetInformation.html"});
							},400)
						}
					})
				},
			};
			$("#showDialog1").showDialog(opt,150);
		}
	}else if(name=="edit"){
		var opt = {
			title: '宠物资讯',
			width: 400,
			content: "对该条宠物资讯进行编辑?",
			cancelBtnText: '取消',
			okBtnText: "确定",
			onOk: function () {
				loadPage("/system/addPetInformation.html/"+data.id);
			},
		};
		$("#showDialog1").showDialog(opt,150);
	}else if(name=="viewTop"){//置顶
		var opt = {
			title: '宠物资讯',
			width: 400,
			content: "将该条资讯置顶?",
			cancelBtnText: '取消',
			okBtnText: "确定",
			onOk: function () {
				$.ajax({
					type: "post",
					url: "/system/changePetInformationStatus.html",
					dataType: 'json',
					data: {
						id:data.id,
						status:"置顶"
					},
					success: function (data) {
						var opt = {
							title: '宠物资讯',
							width: 400,
							content: "置顶成功！",
							cancelBtnText: '',
							okBtnText: "确定",
							onOk: function () {}
						};
						setTimeout(function () {
							$("#showDialog1").showDialog(opt,150,"");
							$("#petShpMemberTable").bootstrapTable('refresh', {url:"/system/getPetInformation.html"});
						},400)
					}
				})
			},
		};
		$("#showDialog1").showDialog(opt,150);
	} else {
		var opt = {
			title: '宠物资讯',
			width: 400,
			content: "确定删除该条宠物资讯?",
			cancelBtnText: '取消',
			okBtnText: "确定",
			onOk: function () {
				$.ajax({
					type: "post",
					url: "/system/delPetInformation.html",
					dataType: 'json',
					data: {
						id:data.id
					},
					success: function (data) {
						var opt = {
							title: '宠物资讯',
							width: 400,
							content: "删除成功！",
							cancelBtnText: '确定',
							okBtnText: "",
							onOk: function () {}
						};
						setTimeout(function () {
							$("#showDialog1").showDialog(opt,150,"");
							$("#petShpMemberTable").bootstrapTable('refresh', {url:"/system/getPetInformation.html"});
						},400)
					}
				})
			},
		};
		$("#showDialog1").showDialog(opt,150);
	}
}

function actionFormatter(value, row, index) {
	var data = JSON.stringify(row);
	var result = "";

	if(row['status']!='置顶'&&row['status']=="已发布"){
		result += "<a href='javascript:;' class='btn btn-xs green' " +
			"onclick='EditViewById("+data+",\"viewTop\")' title='置顶'>置顶" +
			"</a>";
	}
	result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"view\")' title='查看'>查看" +
		"</a>";
	if(row['status']!='置顶'){
		result += "<a href='javascript:;' class='btn btn-xs green' " +
			"onclick='EditViewById("+data+",\"publish\")' title='修改发布状态'>"+(row['status']=='已发布'?'下架':row['status']=='置顶'?'下架':'发布')+"" +
			"</a>";
	}
	if(row['status']=="待发布"||row['status']=="已下架"){
		result += "<a href='javascript:;' class='btn btn-xs green' " +
			"onclick='EditViewById("+data+",\"edit\")' title='编辑'>编辑" +
			"</a>";
	}
	result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"del\")' title='删除'>删除" +
		"</a>";


	return result;
}
