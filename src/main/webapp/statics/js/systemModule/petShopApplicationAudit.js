$(function(){
	$.ajax({
		type:"get",
		url:"/system/getPetShopApplicationAudit.html",
		dataType:'json',
		data:{},
		success:function(data){
			var columns = [
				{field: 'shopName', title: '宠物店名称', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'category', title: '类型', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'shopPhone', title: '电话号码', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'address', title: '宠物店地址', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'createTime', title: '提交申请时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (value, row, index) {
						return changeDateFormat(value)
					}
				},
				{field: 'operate', title: '操作', width: 150, align: 'center', valign: 'middle', formatter: actionFormatter,} ];
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
					var id = row.ID;
					EditViewById(id, 'view');
				}
			});
		}
	})

})

function EditViewById (data,name){
	if(name=="view"){
		//弹窗
		var html =
			"<div class='row '>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>宠物店名称:"+data.shopName+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>类型:"+data.category+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>电话号码:"+data.shopPhone+"</label></div>" +
			"<div class='col-lg-12 shop-member-dialog-title'><label>宠物店地址:"+data.address+"</label></div>" +
			"<div class='col-lg-12 shop-member-dialog-title'><label>宠物店描述:"+data.detailedDescription+"</label></div>" +
			"<div class='col-lg-12 shop-member-dialog-title'><label>宠物店图片:</label></div>" +
			"<div class='col-lg-12 shop-member-dialog-title'>" +
			"<div class='col-lg-12 audit-img'>"+getAllImg(data.shopImgPath)+"</div>" +
			"</div>" +
			"</div>";
		var opt = {
			title: '宠物店审核',
			width: 750,
			content: html,
			cancelBtnText: '审核不通过',
			okBtnText: "审核通过",
			onOk: function () {
				$.ajax({
					type: "get",
					url: "/system/petShopToExamine.html",
					dataType: 'json',
					data: {
						id:data.id,
						userId:data.userId,
						isPass:"pass"
					},
					success: function (data) {
						if (data=="success"){
							var opt = {
								title: '宠物店审核',
								width: 400,
								content: "审核成功！",
								cancelBtnText: '',
								okBtnText: "确定",
								onOk: function () {}
							};
							setTimeout(function () {
								$("#showDialog1").showDialog(opt,150);
							},400);
						}else {
							var opt = {
								title: '宠物店审核',
								width: 400,
								content: "审核失败，请重新审核！",
								cancelBtnText: '',
								okBtnText: "确定",
								onOk: function () {}
							};
							setTimeout(function () {
								$("#showDialog1").showDialog(opt,150);
							},400);
						}
						$("#petShpMemberTable").bootstrapTable('refresh', {url:"/system/getPetShopApplicationAudit.html"});
					}
				})
			},
			onCancel:function () {
				$.ajax({
					type: "get",
					url: "/system/petShopToExamine.html",
					dataType: 'json',
					data: {
						id:data.id,
						userId:data.userId,
						isPass:"notPass"
					},
					success: function (data) {
						if (data=="success"){
							var opt = {
								title: '宠物店审核',
								width: 400,
								content: "审核成功！",
								cancelBtnText: '',
								okBtnText: "确定",
								onOk: function () {}
							};
							setTimeout(function () {
								$("#showDialog1").showDialog(opt,150);
							},400);
						}else {
							var opt = {
								title: '宠物店审核',
								width: 400,
								content: "审核失败，请重新审核！",
								cancelBtnText: '',
								okBtnText: "确定",
								onOk: function () {}
							};
							setTimeout(function () {
								$("#showDialog1").showDialog(opt,150);
							},400);
						}
						$("#petShpMemberTable").bootstrapTable('refresh', {url:"/system/getPetShopApplicationAudit.html"});
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,300,"","1","btn btn-danger");
	}
}

function actionFormatter(value, row, index) {
	var data = JSON.stringify(row);
	var result = "";
	result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"view\")' title='审核'>审核</a>";
	/*result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"recharge\")' title='审核'>" +
		"<span class='glyphicon glyphicon-plus-sign'></span></a>";*/

	return result;
}
