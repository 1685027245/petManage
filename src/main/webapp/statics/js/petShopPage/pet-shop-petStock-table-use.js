$(function(){
	$.ajax({
		type:"get",
		url:"/petShop/getPetShopStock.html",
		dataType:'json',
		data:{},
		success:function(data){
			var columns = [
				{field: 'name', title: '宠物名称', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'alias', title: '别名', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'englishName', title: '英文名称', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'countryOfOrigin', title: '原产地', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'category', title: '类别', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (index, row) {
						    if (row["category"] == 0) {
						        return '狗狗'
						    }else if(row["category"] == 1){
								return '猫'
							}else if(row["category"] == 2){
								return '老鼠'
							}else if(row["category"] == 3){
								return '兔子'
							}else if(row["category"] == 4){
								return '宠物鸟'
							}else if(row["category"] == 5){
								return '宠物龟'
							}else{
						    	return '其他'
							}
						},},
				{field: 'intelligenceQuotient', title: '智商', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'stockCount', title: '库存量', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
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

	$("#addPetToPetPage").click(function () {
		loadPage("/petShop/addGoods.html/addPet")
	})
})

function EditViewById (data,name){

	if(name=="view"){
		//弹窗
		var html =
			"<div class='row'>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>宠物名称:"+data.name+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>别名:"+data.alias+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>英文名:"+data.englishName+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>类别:"+(data.category==0?"狗狗":data.category==1?"猫":"兔子")+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>体型:"+data.shape+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>毛长:"+data.hairLength+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>智商:"+data.intelligenceQuotient+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>原产地:"+data.countryOfOrigin+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>体重:"+data.weight+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>寿命:"+data.life+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>毛色:"+data.coatColor+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>功能:"+(isNull(data.function)?"--":data.function)+"</label></div>" +
			"<div class='col-lg-12 shop-member-dialog-title'><label>详情特征:"+data.detailCharacterities+"</label></div>" +
			"<div class='col-lg-12 shop-member-dialog-title'><label>起源:"+data.origin+"</label></div>" +
			"</div>";
		var opt = {
			title: '宠物库存详情',
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
