$(function(){
	$.ajax({
		type:"get",
		url:"/petShop/getPetShopService.html",
		dataType:'json',
		data:{},
		success:function(data){
			var columns = [
				{field: 'serviceNum', title: '编号', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'serviceCategory', title: '服务名称', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'price', title: '价格', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'priceUnit', title: '价格说明', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'createTime', title: '创建时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (value, row, index) {
						return changeDateFormat(value)
					}
				},
				{field: 'status', title: '状态', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
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

	$("#addShopMemberUser").click(function () {
		//弹窗
		var html ="<div class='shop-member-input-all'>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>编号</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='text' class='form-control' id='serviceNum' placeholder='请输入编号'>" +
			"</div>" +
			"</div>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>服务名称</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='text' class='form-control' id='serviceCategory' placeholder='请输入服务名称'>" +
			"</div>" +
			"</div>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>价格</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='number' class='form-control'   id='price' placeholder='请输入价格'>" +
			"</div>" +
			"</div>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>价格说明</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='text'  class='form-control' id='priceUnit' placeholder='请输入价格说明' >" +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>";
		var opt = {
			title: '新增宠物服务',
			width: 500,
			content: html,
			cancelBtnText: '关闭',
			okBtnText: '保存',
			onOk: function () {
				var serviceCategory = $("#serviceCategory").val();
				var price = $("#price").val();
				var priceUnit = $("#priceUnit").val();
				var serviceNum = $("#serviceNum").val();

				if (isNull(serviceNum)){
					var opt = {
						title: '宠物服务',//提示框标题
						width: 400,//提示框宽度
						content: '编号不能为空!'//提示文本
					};
					setTimeout(function(){
						$("#showDialog1").showMsg(opt,150);
					},400);
					return;
				}
				if (isNull(serviceCategory)){
					var opt = {
						title: '宠物服务',//提示框标题
						width: 400,//提示框宽度
						content: '名称不能为空!'//提示文本
					};
					setTimeout(function(){
						$("#showDialog1").showMsg(opt,150);
					},400);
					return;
				}
				if (isNull(price)){
					var opt = {
						title: '宠物服务',//提示框标题
						width: 400,//提示框宽度
						content: '价格不能为空!'//提示文本
					};
					setTimeout(function(){
						$("#showDialog1").showMsg(opt,150);
					},400);
					return;
				}

				$.ajax({
					type:"post",
					url:"/petShop/addShopService.html",
					dataType:'json',
					data:{
						serviceCategory:serviceCategory,
						price:price,
						priceUnit:priceUnit,
						serviceNum:serviceNum
					},
					success:function(data){
						if(data=="success"){
							var opt = {
								title: '宠物服务',//提示框标题
								width: 400,//提示框宽度
								content: '新增服务成功!'//提示文本
							};
							setTimeout(function(){
								$("#showDialog1").showMsg(opt,150);
								$("#petShpMemberTable").bootstrapTable('refresh', {url:"/petShop/getPetShopService.html"});
							},400);
						}
					}
				})

			}
		};
		$("#showDialog1").showDialog(opt,230,"btn btn-success");

		$("#shopMemberDuration").bind("input propertychange",function(event){
			var shopMemberDuration = $(this).val();
			if(shopMemberDuration<=0){
				$(this).val("1")
			}
		});
	})
})

function EditViewById (data,name){

	if (name=="addOrder"){
		var opt = {
			title: '宠物服务',
			width: 400,
			content: "确定添加<span style='color: red;'>"+data.serviceCategory+"</span>到当前订单?",
			okBtnText: '确定',
			cancelBtnText: '取消',
			onOk: function () {
				var balance = $("#shopMemberRecharge").val();
				$.ajax({
					type:"post",
					url:"/petShop/addGoodsToSalesRecords.html",
					dataType:'json',
					data:{
						id:data.id,
						category:"service"
					},
					success:function(data){
						if(data=="success"){
							var opt = {
								title: '宠物服务',//提示框标题
								width: 400,//提示框宽度
								content: '添加订单成功!'//提示文本
							};
							setTimeout(function(){
								$("#showDialog1").showMsg(opt,150);
								$("#petShpMemberTable").bootstrapTable('refresh', {url:"/petShop/getPetShopService.html"});
							},400);
						}
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,150)
	}else if(name=="delOrder"){
		var opt = {
			title: '宠物服务',
			width: 400,
			content: "确定取消<span style='color: red;'>"+data.serviceCategory+"</span>订单?",
			okBtnText: '确定',
			cancelBtnText: '取消',
			onOk: function () {
				$.ajax({
					type:"post",
					url:"/petShop/delGoodsToSalesRecords.html",
					dataType:'json',
					data:{
						id:data.id,
						category:"service"
					},
					success:function(data){
						if(data=="success"){
							var opt = {
								title: '宠物服务',//提示框标题
								width: 400,//提示框宽度
								content: '取消订单成功!'//提示文本
							};
							setTimeout(function(){
								$("#showDialog1").showMsg(opt,150);
								$("#petShpMemberTable").bootstrapTable('refresh', {url:"/petShop/getPetShopService.html"});
							},400);

						}
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,150)
	}else if(name=="delService"){//删除服务
		var opt = {
			title: '宠物服务',
			width: 400,
			content: "确定删除该服务?",
			okBtnText: '确定',
			cancelBtnText: '取消',
			onOk: function () {
				$.ajax({
					type:"post",
					url:"/petShop/delService.html",
					dataType:'json',
					data:{
						id:data.id,
					},
					success:function(data){
						if(data=="success"){
							var opt = {
								title: '宠物服务',//提示框标题
								width: 400,//提示框宽度
								content: '删除服务成功!'//提示文本
							};
							setTimeout(function(){
								$("#showDialog1").showMsg(opt,150);
								$("#petShpMemberTable").bootstrapTable('refresh', {url:"/petShop/getPetShopService.html"});
							},400);
						}
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,150)
	}
}

function actionFormatter(value, row, index) {
	var data = JSON.stringify(row);
	var result = "";
	/*result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"view\")' title='查看'>" +
		"<span class='glyphicon glyphicon-eye-open'></span></a>";*/
	if(row.status=="当前订单"){
		result += "<a href='javascript:;' class='btn btn-xs green' " +
			"onclick='EditViewById("+data+",\"delOrder\")' title='取消订单'>取消订单</a>";
	}else {
		result += "<a href='javascript:;' class='btn btn-xs green' " +
			"onclick='EditViewById("+data+",\"addOrder\")' title='添加订单'>添加订单</a>";
	}
	result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"delService\")' title='删除服务'>删除</a>";

	return result;
}
