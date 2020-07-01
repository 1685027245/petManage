$(function(){
	$.ajax({
		type:"get",
		url:"/petShop/getPetShopFoodStock.html",
		dataType:'json',
		data:{},
		success:function(data){
			var columns = [
				{field: 'name', title: '食品名称', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'category', title: '类别', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'brand', title: '品牌', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'flavor', title: '产品风味', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'specification', title: '产品规格', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'dateOfManufacture', title: '生产日期', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'shelfLife', title: '保质期限', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'price', title: '单价', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'sold', title: '已售', sortable: true, align: 'center', halign: 'center', valign: 'middle',visible: false},
				{field: 'stock', title: '库存量', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
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

				}
			});
		}
	})

	$("#addFoodToFoodPage").click(function () {
		loadPage("/petShop/addGoods.html/addFood")
	})
})

function EditViewById (data,name){

	if(name=="view"){
		//弹窗
		var html =
			"<div class='row'>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>食品名称:"+data.name+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>食品编号:"+data.foodSerialNumber+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>类别:"+(data.category==0?"犬粮":data.category==1?"猫量":"鱼粮")+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>单价:"+data.price+"元(￥)</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>库存数量:"+data.stock+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>品牌:"+data.brand+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>产品风味:"+data.flavor+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>产品规格:"+data.specification+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>保质期限:"+data.shelfLife+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>产地:"+data.placeOfOrigin+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>存储方式:"+data.storageMode+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>使用说明:"+data.instructions+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>生产日期:"+data.dateOfManufacture+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>生产厂家名称:"+data.nameOfManufacturer+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>生产厂家地址:"+data.addressOfManufacturer+"</label></div>" +
			"<div class='col-lg-12 shop-member-dialog-title'><label>备注:"+data.remarks+"</label></div>" +
			"</div>";
		var opt = {
			title: '食品库存详情',
			width: 750,
			content: html,
			cancelBtnText: '关闭',
			okBtnText:'',
			onOk: function () {

			}
		};
		$("#showDialog1").showDialog(opt,300,"btn btn-info");
	}
}

function actionFormatter(value, row, index) {
	var data = JSON.stringify(row);
	var result = "";
	result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"view\")' title='查看'>查看</a>";
	return result;
}
