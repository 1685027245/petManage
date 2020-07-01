$(function(){
	$.ajax({
		type:"get",
		url:"/petShop/showAllPetShopMemberRecord.html",
		dataType:'json',
		data:{},
		success:function(data){
			var columns = [
				{field: 'cardNumber', title: '会员账号', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'userName', title: '用户名称', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'amount', title: '充值金额(￥)', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'time', title: '充值时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (value, row, index) {
						return changeDateFormat(value)
					}
				},
				{field: 'management', title: '充值办理人', sortable: true, align: 'center', halign: 'center', valign: 'middle',}];
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

})

