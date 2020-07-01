$(function(){
	var data = [{
			"id": 0,
			"name": "Item 0",
			"price": "$0"
		},
		{
			"id": 12,
			"name": "Item 1",
			"price": "$1"
		},
		{
			"id": 2,
			"name": "Item 2",
			"price": "$2"
		},
		{
			"id": 3,
			"name": "Item 3",
			"price": "$3"
		},
		{
			"id": 3,
			"name": "Item 3",
			"price": "$3"
		},
		{
			"id": 3,
			"name": "Item 3",
			"price": "$3"
		},
		{
			"id": 3,
			"name": "Item 3",
			"price": "$3"
		},
		{
			"id": 3,
			"name": "Item 3",
			"price": "$3"
		},
		{
			"id": 3,
			"name": "Item 3",
			"price": "$3"
		},
		{
			"id": 3,
			"name": "Item 3",
			"price": "$3"
		},
		{
			"id": 31,
			"name": "Item 12",
			"price": "$11"
		}
	]
	
	var columns = [
	{field: 'selectItem', checkbox: true},
	{
		field: 'id',
		title: '编号',
		align: 'center',
		halign: 'center',
		valign: 'middle',
		sortable: true
	}, {
		field: 'name',
		title: '施工状态',
		sortable: true,
		// formatter: function (index, row) {
		//     var d = row['realval'];
		//     if (d == 1.0) {
		//         return '完工'
		//     }
		//     return '未完工';
		// },
		align: 'center',
		halign: 'center',
		valign: 'middle',
		// width: '50%'
	}, {
		field: 'price',
		title: '施工状态',
		sortable: true,
		align: 'center',
		halign: 'center',
		valign: 'middle',
	}, {
		field: 'operate',
		title: '操作',
		width: 120,
		align: 'center',
		valign: 'middle',
		formatter: actionFormatter,
	}, ];
	$('#table').bootstrapTable('destroy');
	$('#table').bootstrapTable({
		data: data,
		classes: 'table table-hover',
		// height: 400,
		//url: queryUrl,                      //请求后台的URL（*）
		//method: 'GET',                      //请求方式（*）
		toolbar: '#toolbar', //工具按钮用哪个容器
		striped: true, //是否显示行间隔色
		cache: true, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
		pagination: true, //是否显示分页（*）
		sortable: true, //是否启用排序
		sortOrder: "asc", //排序方式
		sidePagination: "client", //分页方式：client客户端分页，server服务端分页（*）
		pageNumber: 1, //初始化加载第一页，默认第一页,并记录
		pageSize: 5, //每页的记录行数（*）
		pageList: [7, 8, 9, 10], //可供选择的每页的行数（*）
		search: true, //是否显示表格搜索
		strictSearch: false, //是否开启精确查询
		showColumns: true, //是否显示所有的列（选择显示的列）
		showRefresh: true, //是否显示刷新按钮
		minimumCountColumns: 2, //最少允许的列数
		clickToSelect: true, //是否启用点击选中行
		uniqueId: "fid", //每一行的唯一标识，一般为主键列
		showToggle: true, //是否显示详细视图和列表视图的切换按钮
		// cardView: true,                    //是否显示详细视图
		// detailView: false,                  //是否显示父子表
		showExport: true,
		// exportTypes: ['csv','txt','xml'],
		//得到查询的参数
		//queryParams: function (params) {
		//    //这里的键的名字和控制器的变量名必须一致，这边改动，控制器也需要改成一样的
		//    var temp = {
		//        rows: params.limit,                         //页面大小
		//        page: (params.offset / params.limit) + 1,   //页码
		//        sort: params.sort,      //排序列名
		//        sortOrder: params.order //排位命令（desc，asc）
		//    };
		//    return temp;
		//},
		columns: columns,
		onLoadSuccess: function() {},
		onLoadError: function() {
			showTips("数据加载失败！");
		},
		onClickRow: function(row, $element) {
			alert("点击了" + $element.text().trim())
			// return;
			// var featureid = row.fid;
			// var realval = row.realval;
			// if (realval == 1) {
			//     realval = 0;
			// } else {
			//     realval = 1;
			// }
			// updatePlanVal(featureid, realval);
		},
		onDblClickRow: function(row, $element) {
			var id = row.ID;
			EditViewById(id, 'view');
		}
	});
	// $('#table').on('post-body.bs.table', function(e) { //渲染完成，重新设置高度
	// 	var h = $('#table').height();
	// 	if (h > 500) {
	// 		$('#table').bootstrapTable('resetView', {
	// 			'height': 300
	// 		});
	// 	}
	// });
})

// var data = $('#table').bootstrapTable('getData');
// $('#table').bootstrapTable('load', newData);
function actionFormatter(value, row, index) {
	var id = index;
	var data = JSON.stringify(row);
	var result = "";
	result += "<a href='javascript:;' class='btn btn-xs green' onclick=\"EditViewById('" + id +
		"', view='view')\" title='查看'><span class='glyphicon glyphicon-search'></span></a>";
	result += "<a href='javascript:;' class='btn btn-xs blue' onclick=\"EditViewById('" + row + "','" + id +
		"')\" title='编辑'><span class='glyphicon glyphicon-pencil'></span></a>";
	result += "<a href='javascript:;' class='btn btn-xs red' onclick=\"DeleteByIds('" + id +
		"')\" title='删除'><span class='glyphicon glyphicon-remove'></span></a>";
	return result;
}
