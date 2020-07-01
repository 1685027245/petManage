$(function(){
	$.ajax({
		type:"get",
		url:"/petShop/petAllSalesRecords.html",
		dataType:'json',
		data:{},
		success:function(data){
			var columns = [
				{field: 'productNumber', title: '产品编号', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'productName', title: '产品名称', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'category', title: '类别', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (index, row) {
						if (row["category"] == "pet") {
							return '宠物'
						}else if(row["category"] == "food"){
							return '食品'
						}else if(row["category"] == "service"){
							return '服务'
						}else if(row["category"] == "periphery"){
							return '周边商品'
						}
					},},
				{field: 'price', title: '单价', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'foldingRate', title: '打折率', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'number', title: '数量', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'total', title: '结算金额', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'salesTime', title: '销售时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
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
				pageList: [10,20, 30], //可供选择的每页的行数（*）
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

	$("#addPetToPetPage").click(function () {
		loadPage("/petShop/addGoods.html/addPet")
	})
})

function EditViewById (data,name){

	console.info("fff",data)
	if(name=="view"){
		var opt = {
			title: '销售记录',
			width: 400,
			content: "确定跳转查看商品详情?",
			cancelBtnText: '取消',
			okBtnText:'确定',
			onOk: function () {
				if(data.category=="pet"){
					loadPage("/petShop/toPetDetails.html/"+data.productId);
				}else if(data.category=="food"){
					loadPage("/petShop/toFoodDetails.html/"+data.productId);
				}else if(data.category=="periphery"){
					loadPage("/petShop/toPeripheryDetails.html/"+data.productId);
				}else if(data.category=="service"){
					loadPage("/petShop/storefrontAllBusiness.html");
				}
			}
		};
		$("#showDialog1").showDialog(opt,150);
	}else {
		var opt = {
		title: '销售记录处理',
		width: 400,
		content: "确定删除<span style='color: red;padding: 3px'>"+data.productNumber+"</span>销售记录?",
		cancelBtnText: '取消',
		okBtnText:'确定',
		onOk: function () {
			$.ajax({
				type:"get",
				url:"/petShop/delSalesRecords.html",
				dataType:'json',
				data:{
					salesRecordsId:data.id
				},
				success:function(data){
					var opt = {
						title: '销售记录处理',
						width: 400,
						content: "销售记录删除成功!",
						cancelBtnText: '',
						okBtnText:'确定',
						onOk: function () {}
					};
					setTimeout(function () {
						$("#showDialog1").showDialog(opt,150);
						$("#petShpMemberTable").bootstrapTable('refresh', {url:"/petShop/petAllSalesRecords.html"});
					},400)
				}
			})
		}
	};
	$("#showDialog1").showDialog(opt,150);
	}


}

function actionFormatter(value, row, index) {
	var data = JSON.stringify(row);
	var result = "";
	result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"view\")' title='查看商品'>查看详情</a>";
	result += "<a href='javascript:;' class='btn btn-xs red' " +
		"onclick='EditViewById("+data+",\"del\")' title='删除'>删除</a>";

	return result;
}
