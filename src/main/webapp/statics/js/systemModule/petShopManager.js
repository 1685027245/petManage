$(function(){
	$.ajax({
		type:"get",
		url:"/system/petShopListManager.html",
		dataType:'json',
		data:{},
		success:function(data){
			console.info("dddd",data)
			var columns = [
				{field: 'shopName', title: '宠物店名称', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'category', title: '类型', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'shopPhone', title: '电话号码', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'address', title: '宠物店地址', sortable: true, align: 'center', halign: 'center', valign: 'middle',visible: false},
				{field: 'businessHours', title: '营业时间段', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'acceptAppointmentOrNot', title: '是否接受预约', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (index, row) {
						    var d = row['acceptAppointmentOrNot'];
						    if (d == true) {
						        return '是'
						    }
						    return '否';
						},
				},
				{field: 'businessStatus', title: '营业状态', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (index, row) {
						var d = row['businessStatus'];
						if (d == true) {
							return '正常营业'
						}
						return '暂停营业中';
					},
				},
				{field: 'createTime', title: '开店申请创建时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (value, row, index) {
						return changeDateFormat(value)
					}
				},
				{field: 'auditTime', title: '审核通过时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (value, row, index) {
						return changeDateFormat(value)
					}
				},
				{field: 'detailedDescription', title: '详细描述', sortable: true, align: 'center', halign: 'center', valign: 'middle',visible: false},
				{field: 'isForbidden', title: '平台状态', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
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

	if(name=="forbidden"){
		if(data.isForbidden=='禁用'){
			var opt = {
				title: '宠物店管理',
				width: 400,
				content: "是否启用该宠物店",
				cancelBtnText: '取消',
				okBtnText: "确定",
				onOk: function () {
					$.ajax({
						type:"get",
						url:"/system/changePetShopStatus.html",
						dataType:'json',
						data:{
							id:data.id,
							isForbidden:"启用"
						},
						success:function(data){
							var opt = {
								title: '宠物店管理',
								width: 400,
								content: "启用成功",
								cancelBtnText: '确定',
								okBtnText: "",
								onOk: function () {

								},
							};
							setTimeout(function () {
								$("#showDialog1").showDialog(opt,150,"");
								$("#petShpMemberTable").bootstrapTable('refresh', {url:"/system/petShopListManager.html"});
							},400)
						}
					})
				},
			};
			$("#showDialog1").showDialog(opt,150,"");
		}else if(data.isForbidden=='启用'){
			var opt = {
				title: '宠物店管理',
				width: 400,
				content: "是否禁用该宠物店",
				cancelBtnText: '取消',
				okBtnText: "确定",
				onOk: function () {
					$.ajax({
						type:"get",
						url:"/system/changePetShopStatus.html",
						dataType:'json',
						data:{
							id:data.id,
							isForbidden:"禁用"
						},
						success:function(data){
							var opt = {
								title: '宠物店管理',
								width: 400,
								content: "禁用成功",
								cancelBtnText: '确定',
								okBtnText: "",
								onOk: function () {

								},
							};
							setTimeout(function () {
								$("#showDialog1").showDialog(opt,150,"");
								$("#petShpMemberTable").bootstrapTable('refresh', {url:"/system/petShopListManager.html"});
							},400)
						}
					})
				},
			};
			$("#showDialog1").showDialog(opt,150,"");
		}else{
			var opt = {
				title: '宠物店管理',
				width: 400,
				content: "该宠物店审核不通过，操作无效",
				cancelBtnText: '确定',
				okBtnText: "",
				onOk: function () {

				},
			};
			$("#showDialog1").showDialog(opt,150,"","","btn btn-primary");
		}

	}
}

function actionFormatter(value, row, index) {
	var data = JSON.stringify(row);
	var result = "";
	console.info("顶顶顶顶",row.isForbidden)
	result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"forbidden\")' title=''>"+(row.isForbidden=='启用'?'禁用':row.isForbidden=='审核不通过'?'未开启':'启用')+"</a>";
	/*result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"recharge\")' title='审核'>" +
		"<span class='glyphicon glyphicon-plus-sign'></span></a>";*/

	return result;
}
