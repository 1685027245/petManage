$(function(){
	//获取所有用户
	$.ajax({
		type:"post",
		url:"/showUser",
		dataType:'json',
		data:{},
		success:function(data){
			var columns = [
				{field: 'userName', title: '用户昵称', align: 'center',width:200, halign: 'center', valign: 'middle', sortable: true},
				/*{field: 'userNumber', title: '用户账号', sortable: true, align: 'center', halign: 'center', valign: 'middle',},*/
				{field: 'userRoles', title: '角色', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (index, row) {
						if(isNull(row["userRoles"])){
							return "普通用户;";
						}
						var result = "";
						$.each(row["userRoles"],function (index,value) {
							result+=value.alias+";"
						})
						return result;
					},
				},
				{field: 'phone', title: '联系电话', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'email', title: '邮箱', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'sex', title: '性别', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (index, row) {
						if (row['sex']==1) {
							return '男'
						}else if(row['sex']==2){
							return '女'
						}
						return '保密';
					},
				},
				{field: 'age', title: '年龄', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'status', title: '用户状态', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (index, row) {
						    if (row['status']==1) {
						        return '有效'
						    }
						    return '已注销';
						},
				},
				{field: 'createTime', title: '创建时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (index, row) {
						return changeDateFormat(row["createTime"])
					},
				},
				{field: 'lastLoginTime', title: '最后登录时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (index, row) {
						return changeDateFormat(row["lastLoginTime"])
					},
				},
				{field: 'forbidden', title: '是否禁用', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (index, row) {
						if (row['forbidden']==true) {
							return '<span style="color: red">禁用</span>'
						}
						return '启用';
					},
				},
				{field: 'operate', title: '操作', width: 150, align: 'center', valign: 'middle', formatter: userActionFormatter,}];
			$('#userMsg').bootstrapTable('destroy');
			$('#userMsg').bootstrapTable({
				data: data,
				classes: 'table table-hover',
				/*height: 680,*/
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

	//获取所有角色
	$.ajax({
		type:"post",
		url:"/system/getAllRole.html",
		dataType:'json',
		data:{},
		success:function(data){
			var columns = [
				{field: 'roleName', title: '角色英文名称', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'alias', title: '角色中文名', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'status', title: '状态', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (index, row) {
						if (row['status']==1) {
							return '有效'
						}else if(row['status']==2){
							return '禁用';
						}
					},},
				{field: 'createTime', title: '创建时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (index, row) {
						return changeDateFormat(row["createTime"])
					},
				},
				{field: 'operate', title: '操作', width: 150, align: 'center', valign: 'middle', formatter: roleActionFormatter,} ];
			$('#roleMsg').bootstrapTable('destroy');
			$('#roleMsg').bootstrapTable({
				data: data,
				classes: 'table table-hover',
				/*height: 580,*/
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

	/*//获取所有权限
	$.ajax({
		type:"post",
		url:"/system/getAllPermission.html",
		dataType:'json',
		data:{},
		success:function(data){
			var columns = [
				{field: 'selectItem', checkbox: true},
				{field: 'name', title: '权限名称', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'url', title: '权限访问路径', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'perms', title: '权限标识', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'description', title: '权限描述', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'create_time', title: '创建时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'type', title: '类型', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (index, row) {
						if (row['type']==0) {
							return '目录'
						}else if(row['status']==1){
							return '菜单'
						}else if(row['status']==2){
							return '按钮'
						}
					},
				},
				{field: 'status', title: '状态', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (index, row) {
						if (row['status']==1) {
							return '有效'
						}
						return '已删除';
					},
				},
				{field: 'operate', title: '操作', width: 150, align: 'center', valign: 'middle', formatter: actionFormatter,} ];
			$('#permissionMsg').bootstrapTable('destroy');
			$('#permissionMsg').bootstrapTable({
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
					/!*alert("点击了" + $element.text().trim())*!/
				},
				onDblClickRow: function(row, $element) {
					var id = row.ID;
					EditViewById(id, 'view');
				}
			});
		}
	})*/

	//获取所有拦截规则
	$.ajax({
		type:"post",
		url:"/system/getResource.html",
		dataType:'json',
		data:{},
		success:function(data){
			var columns = [
				{field: 'value', title: '拦截路径', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'perms', title: '拦截规则', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'orderNum', title: '排序', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'operate', title: '操作', width: 150, align: 'center', valign: 'middle', formatter: resourceActionFormatter,} ];
			$('#resourceMsg').bootstrapTable('destroy');
			$('#resourceMsg').bootstrapTable({
				data: data,
				classes: 'table table-hover',
				/*height: 580,*/
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

	//新增拦截规则
	$("#addResource").click(function () {
		var html =
			"<div class='row update-user-msg'>" +
			"<div class='form-group'>" +
			"<label class='col-sm-3 control-label shop-member-dialog-title2'>拦截路径</label>" +
			"    <div class='col-sm-8'>" +
			"      <input type='text' class='form-control' id='resourceUrl' placeholder='请输入URL路径'>" +
			"    </div>" +
			"</div>" +
			"<div class='form-group'>" +
			"<label class='col-sm-3 control-label shop-member-dialog-title2'>拦截权限</label>" +
			"    <div class='col-sm-8'>" +
			"      <input type='text' class='form-control' id='resourceRole' placeholder='请输入拦截权限'>" +
			"    </div>" +
			"</div>" +
			"<div class='form-group'>" +
			"<label class='col-sm-3 control-label shop-member-dialog-title2'>排序</label>" +
			"    <div class='col-sm-8'>" +
			"      <input type='number' class='form-control' id='sort' placeholder='请输入排序编号'>" +
			"    </div>" +
			"</div>" +
			"</div>";
		var opt = {
			title: '新增拦截规则',
			width: 550,
			content: html,
			cancelBtnText: '关闭',
			okBtnText: "保存",
			onOk: function () {
				var resourceUrl = $("#resourceUrl").val();
				var resourceRole = $("#resourceRole").val();
				var sort = $("#sort").val();
				$.ajax({
					type: "post",
					url: "/system/addResource.html",
					dataType: 'json',
					data: {
						value:resourceUrl,
						perms:resourceRole,
						orderNum:sort
					},
					success: function (data) {
						var opt = {
							title: '新增拦截规则',
							width: 400,
							content: "新增成功！",
							cancelBtnText: '确定',
							okBtnText: "",
							onOk: function () {}
						};
						setTimeout(function () {
							$("#showDialog1").showDialog(opt,150,"");
							$("#resourceMsg").bootstrapTable('refresh', {url:"/system/getResource.html"});
						},400)
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,230,"");
	})
	//新增角色
	$("#addUserRoles").click(function () {
		//弹窗
		var html =
			"<div class='row update-user-msg'>" +
			"<div class='form-group'>" +
			"<label class='col-sm-3 control-label shop-member-dialog-title2'>角色英文名称</label>" +
			"    <div class='col-sm-8'>" +
			"      <input type='text' class='form-control' id='addRoleName' placeholder='请输入角色英文名称' required >" +
			"    </div>" +
			"</div>" +
			"<div class='form-group'>" +
			"<label class='col-sm-3 control-label shop-member-dialog-title2'>角色中文名</label>" +
			"    <div class='col-sm-8'>" +
			"      <input type='text' class='form-control' id='addRoleAlias'  placeholder='请输入角色中文名' required >" +
			"    </div>" +
			"</div>" +
			"</div>" +
			"</div>";
		var opt = {
			title: '角色新增',
			width: 550,
			content: html,
			cancelBtnText: '关闭',
			okBtnText: "保存",
			onOk: function () {
				var roleName = $("#addRoleName").val();
				var roleAlias = $("#addRoleAlias").val();
				$.ajax({
					type:"post",
					url:"/system/addUserRole.html",
					dataType:'json',
					data:{
						roleName:roleName,
						alias:roleAlias,
					},
					success:function(data){
						var opt = {
							title: '角色新增',
							width: 400,
							content: "角色新增成功！",
							cancelBtnText: '',
							okBtnText: "确定",
							onOk: function () {}
						};
						setTimeout(function () {
							$("#showDialog1").showDialog(opt,150);
							$("#roleMsg").bootstrapTable('refresh', {url:"/system/getAllRole.html"});
						},400)
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,200);
	});

})
/*
function EditViewById (data,name){

	if(name=="view"){
		//弹窗
		var html =
			"<div class='row'>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>宠物店名称:"+data.shopName+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>类型:"+data.category+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>电话号码:"+data.shopPhone+"</label></div>" +
			"<div class='col-lg-12 shop-member-dialog-title'><label>宠物店地址:"+data.address+"</label></div>" +
			"<div class='col-lg-12 shop-member-dialog-title'><label>宠物店描述:"+data.detailedDescription+"</label></div>" +
			"<div class='col-lg-12 shop-member-dialog-title'><label>宠物店图片:</label></div>" +
			"<div class='col-lg-12 shop-member-dialog-title'>" +
			"<div class='col-lg-4'><img src='/statics/img/logo.png'/></div>" +
			"<div class='col-lg-4'><img src='/statics/img/logo.png'/></div>" +
			"<div class='col-lg-4'><img src='/statics/img/logo.png'/></div>" +
			"<div class='col-lg-4'><img src='/statics/img/logo.png'/></div>" +
			"<div class='col-lg-4'><img src='/statics/img/logo.png'/></div>" +
			"<div class='col-lg-4'><img src='/statics/img/logo.png'/></div>" +
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
		$("#showDialog1").showDialog(opt,400,"","1","btn btn-danger");
	}
}
*/

//用户操作
function userEditViewById (data,name,forbiddenName){
	if(name=="isForbidden"){
		var opt = {
			title: '用户管理',
			width: 400,
			content: "是否"+(data.forbidden==true?"启用":"禁用")+"该用户?",
			cancelBtnText: '取消',
			okBtnText: "确定",
			onOk: function () {
				$.ajax({
					type: "get",
					url: "/updateUserMsg.html",
					dataType: 'json',
					data: {
						id: data.id,
						forbidden: (data.forbidden==true?false:true)
					},
					success: function (data) {
						var opt = {
							title: '用户管理',
							width: 400,
							content: (data.forbidden==true?"启用":"禁用")+"成功!",
							cancelBtnText: '',
							okBtnText: "确定",
							onOk: function () {}
						};
						setTimeout(function () {
							$("#showDialog1").showDialog(opt,150);
							$("#userMsg").bootstrapTable('refresh', {url:"/showUser"});
						},400)
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,150);
	}else if(name=="bindRoles"){
		$.ajax({
			type: "get",
			url: "/system/getAllRole.html",
			dataType: 'json',
			data: {},
			success: function (allRoles) {
				var roleHtml='';
				$.each(allRoles,function (index,value) {
					roleHtml +="<label class='col-lg-4'>\n" +
						"<input type=\"checkbox\" data='"+value.id+"' value='"+value.roleName+"' >"+value.alias+"\n" +
						"</label>\n";
				})
				$.ajax({
					type: "get",
					url: "/system/getRoleByUserId.html",
					dataType: 'json',
					data: {
						userId: data.id,
					},
					success: function (data) {
						if(isNull(data)){
							$("input[type=checkbox][value='general']").prop("checked",'checked');
						}
						$.each(data,function (index,value) {
							$("input[type=checkbox][value="+value.roleName+"]").prop("checked",'checked');
						})
					}
				})
				//弹窗
				var html =
					"<div class='row update-user-msg'>" +
					"<div class='col-lg-10 col-lg-offset-1' >" +
					"<div class=\"checkbox\" id='checkUserRoles'>"+roleHtml+"</div>" +
					"</div>" +
					"</div>";
				var opt = {
					title: '用户角色绑定',
					width: 550,
					content: html,
					cancelBtnText: '取消',
					okBtnText: "保存",
					onOk: function () {
						$.ajax({
							type:"post",
							url:"/system/delUserRoleRelation.html",
							dataType:'json',
							data:{
								userId:data.id,
							},
							success:function(){
								$.each($('#checkUserRoles input:checkbox'),function(){
									if(this.checked){
										$.ajax({
											type:"post",
											url:"/system/bindUserRole.html",
											dataType:'json',
											data:{
												userId:data.id,
												roleId:$(this).attr("data")
											},
											success:function(data){}
										})
									}
								});
								var opt = {
									title: '角色绑定',
									width: 400,
									content: "角色绑定成功！",
									cancelBtnText: '',
									okBtnText: "确定",
									onOk: function () {}
								};
								setTimeout(function () {
									$("#showDialog1").showDialog(opt,150);
									$("#userMsg").bootstrapTable('refresh', {url:"/showUser"});
								},400)
							}
						})
					}
				};
				$("#showDialog1").showDialog(opt,200);
			}
		})


	}
}
function userActionFormatter(value, row, index) {
	var data = JSON.stringify(row);
	var result = "";
	result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='userEditViewById("+data+",\"isForbidden\")' title='"+(row["forbidden"]?'启用':'禁用')+"'>"+(row["forbidden"]?'启用':'禁用')+"</a>";
	result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='userEditViewById("+data+",\"bindRoles\")' title='用户角色绑定'>用户角色</a>";
	return result;
}


//角色操作
function roleEditViewById (data,name){

	if(name=="edit"){
		//弹窗
		var html =
			"<div class='row update-user-msg'>" +
			"<div class='form-group'>" +
			"<label class='col-sm-3 control-label shop-member-dialog-title2'>角色英文名称</label>" +
			"    <div class='col-sm-8'>" +
			"      <input type='text' class='form-control' id='roleName' value='"+data.roleName+"' >" +
			"    </div>" +
			"</div>" +
			"<div class='form-group'>" +
			"<label class='col-sm-3 control-label shop-member-dialog-title2'>角色中文名</label>" +
			"    <div class='col-sm-8'>" +
			"      <input type='text' class='form-control' id='roleAlias' value='"+data.alias+"' >" +
			"    </div>" +
			"</div>" +
			"<div class='form-group'>" +
			"<label class='col-sm-3 control-label shop-member-dialog-title2'>状态</label>" +
			"    <div class='col-sm-8 radio-input'>" +
			"      <input type='radio' name='roleStatus' "+(data.status==1?'checked':'')+" value='1'>启用 " +
			"      <input type='radio' name='roleStatus' "+(data.status==2?'checked':'')+" value='2'>禁用" +
			"    </div>" +
			"</div>" +
			"</div>" +
			"</div>";
		var opt = {
			title: '角色管理',
			width: 550,
			content: html,
			cancelBtnText: '关闭',
			okBtnText: "保存",
			onOk: function () {
				var roleName = $("#roleName").val();
				var roleAlias = $("#roleAlias").val();
				var roleStatus = $("input[name='roleStatus']:checked").val();
				$.ajax({
					type:"post",
					url:"/system/updateUserRole.html",
					dataType:'json',
					data:{
						id:data.id,
						roleName:roleName,
						alias:roleAlias,
						status:roleStatus,
					},
					success:function(data){
						var opt = {
							title: '角色管理',
							width: 400,
							content: "修改成功！",
							cancelBtnText: '',
							okBtnText: "确定",
							onOk: function () {}
						};
						setTimeout(function () {
							$("#showDialog1").showDialog(opt,150,"");
							$("#roleMsg").bootstrapTable('refresh', {url:"/system/getAllRole.html"});
						},400)
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,200);
	}else if(name=="del"){
		var opt = {
			title: '角色管理',
			width: 400,
			content: "确定删除该角色?",
			cancelBtnText: '取消',
			okBtnText: "删除",
			onOk: function () {
				$.ajax({
					type:"post",
					url:"/system/delUserRole.html",
					dataType:'json',
					data:{
						roleId:data.id,
					},
					success:function(data){
						var opt = {
							title: '角色管理',
							width: 400,
							content: "角色删除成功！",
							cancelBtnText: '',
							okBtnText: "确定",
							onOk: function () {}
						};
						setTimeout(function () {
							$("#showDialog1").showDialog(opt,150);
							$("#roleMsg").bootstrapTable('refresh', {url:"/system/getAllRole.html"});
						},400)
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,200);
	}
}
function roleActionFormatter(value, row, index) {
	var data = JSON.stringify(row);
	var result = "";
	/*result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='roleEditViewById("+data+",\"view\")' title='查看角色权限'>查看</a>";*/
	if(!row.replyStatus){
		result += "<a href='javascript:;' class='btn btn-xs blue' " +
			"onclick='roleEditViewById("+data+",\"edit\")' title='修改'>修改</a>";
	}
	result += "<a href='javascript:;' class='btn btn-xs red' " +
		"onclick='roleEditViewById("+data+",\"del\")' title='删除'>删除</a>";

	return result;
}


//拦截规则操作
function resourceEditViewById (data,name){
	if(name=="edit"){
		//弹窗
		var html =
			"<div class='row update-user-msg'>" +
			"<div class='form-group'>" +
			"<label class='col-sm-3 control-label shop-member-dialog-title2'>拦截路径</label>" +
			"    <div class='col-sm-8'>" +
			"      <input type='text' class='form-control' id='resourceValue' value='"+data.value+"' >" +
			"    </div>" +
			"</div>" +
			"<div class='form-group'>" +
			"<label class='col-sm-3 control-label shop-member-dialog-title2'>拦截规则</label>" +
			"    <div class='col-sm-8'>" +
			"      <input type='text' class='form-control' id='resourcePerms' value='"+data.perms+"' >" +
			"    </div>" +
			"</div>" +
			"<div class='form-group'>" +
			"<label class='col-sm-3 control-label shop-member-dialog-title2'>排序</label>" +
			"    <div class='col-sm-8'>" +
			"      <input type='text' class='form-control' id='resourceOrderNum' value='"+data.orderNum+"' >" +
			"    </div>" +
			"</div>" +
			"</div>"+
			"</div>";
		var opt = {
			title: '拦截规则管理',
			width: 550,
			content: html,
			cancelBtnText: '关闭',
			okBtnText: "保存",
			onOk: function () {
				var resourceValue = $("#resourceValue").val();
				var resourcePerms = $("#resourcePerms").val();
				var resourceOrderNum = $("#resourceOrderNum").val();
				$.ajax({
					type:"post",
					url:"/system/updateResource.html",
					dataType:'json',
					data:{
						id:data.id,
						value:resourceValue,
						perms:resourcePerms,
						orderNum:resourceOrderNum,
					},
					success:function(data){
						var opt = {
							title: '拦截规则管理',
							width: 400,
							content: "拦截规则修改成功！",
							cancelBtnText: '确定',
							okBtnText: "",
							onOk: function () {}
						};
						setTimeout(function () {
							$("#showDialog1").showDialog(opt,150,"");
							$("#resourceMsg").bootstrapTable('refresh', {url:"/system/getResource.html"});
						},400)
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,200,"");
	}else {
		var opt = {
			title: '删除拦截规则',
			width: 400,
			content: "确定删除拦截规则?",
			cancelBtnText: '取消',
			okBtnText: "确定",
			onOk: function () {
				$.ajax({
					type: "post",
					url: "/system/delResource.html",
					dataType: 'json',
					data: {
						id:data.id,
					},
					success: function (data) {
						var opt = {
							title: '删除拦截规则',
							width: 400,
							content: "删除成功！",
							cancelBtnText: '确定',
							okBtnText: "",
							onOk: function () {}
						};
						setTimeout(function () {
							$("#showDialog1").showDialog(opt,150,"");
							$("#resourceMsg").bootstrapTable('refresh', {url:"/system/getResource.html"});
						},400)
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,150,"");

	}
}
function resourceActionFormatter(value, row, index) {
	var data = JSON.stringify(row);
	var result = "";
	/*result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='resourceEditViewById("+data+",\"view\")' title='查看角色权限'>" +
		"<span class='glyphicon glyphicon-eye-open'></span></a>";*/
	result += "<a href='javascript:;' class='btn btn-xs blue' " +
		"onclick='resourceEditViewById("+data+",\"edit\")' title='修改'>修改</a>";
	result += "<a href='javascript:;' class='btn btn-xs red' " +
		"onclick='resourceEditViewById("+data+",\"del\")' title='删除'>删除</a>";

	return result;
}



/*
function actionFormatter(value, row, index) {
	var data = JSON.stringify(row);
	var result = "";
	result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"view\")' title='查看'>查看</a>";
	/!*result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"recharge\")' title='审核'>" +
		"<span class='glyphicon glyphicon-plus-sign'></span></a>";*!/

	return result;
}
*/
