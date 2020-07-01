$(function(){
	$.ajax({
		type:"post",
		url:"/open/getPetshopComment.html",
		dataType:'json',
		data:{
			shopId:'',
			pageNum:1,
			pageSize:20
		},
		success:function(data){
			var columns = [
				{field: 'userName', title: '用户名', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'commentContent', title: '评论内容', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'starRating', title: '评分', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'createTime', title: '评论时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (value, row, index) {
						return changeDateFormat(value)
					}
				},
				];
			$('#petShpMemberTable').bootstrapTable('destroy');
			$('#petShpMemberTable').bootstrapTable({
				data: data.list,
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
			"<label>用户账号</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='text' class='form-control' id='userNumber' placeholder='请输入用户账号'>" +
			"</div>" +
			"</div>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>会员账号</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='number' class='form-control' minlength='6'  id='memberNumber' placeholder='请输入会员账号'>" +
			"</div>" +
			"</div>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>会员等级</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='text'  class='form-control' value='普通会员' disabled>" +
			"</div>" +
			"</div>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>会员积分</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='text' class='form-control' id='memberScore' value='0' disabled>" +
			"</div>" +
			"</div>" +
			"</div>";
		var opt = {
			title: '新增会员用户',
			width: 500,
			content: html,
			cancelBtnText: '关闭',
			okBtnText: '保存',
			onOk: function () {
				var userNumber = $("#userNumber").val();
				var memberNumber = $("#memberNumber").val();
				var memberLevel = 1; //1:默认一级会员
				var memberScore = $("#memberScore").val();

				if(isNull(memberNumber)){
					var opt = {
						title: '新增用户会员',//提示框标题
						width: 400,//提示框宽度
						content: '会员账号不能为空!'//提示文本
					};
					setTimeout(function(){
						$("#showDialog1").showMsg(opt,150);
					},400);
				}else{
					$.ajax({
						type:"post",
						url:"/petShop/addShopMemberUser.html",
						dataType:'json',
						data:{
							userNumber:userNumber,
							memberNumber:memberNumber,
							level:memberLevel,
							score:memberScore,
						},
						success:function(data){
							if(data=="success"){
								var opt = {
									title: '新增用户会员',//提示框标题
									width: 400,//提示框宽度
									content: '会员用户新增成功!'//提示文本
								};
								setTimeout(function(){
									$("#showDialog1").showMsg(opt,150);
									$("#petShpMemberTable").bootstrapTable('refresh', {url:"/petShop/petShopMemberInfo.html"});
								},400);
							}else if(data=="hasMember"){
								var opt = {
									title: '新增用户会员',//提示框标题
									width: 400,//提示框宽度
									content: '该用户账号已经存在!'//提示文本
								};
								setTimeout(function(){
									$("#showDialog1").showMsg(opt,150);
								},400);
							} else if(data=="hasMemberNumber"){
								var opt = {
									title: '新增用户会员',//提示框标题
									width: 400,//提示框宽度
									content: '该会员账号已经存在!'//提示文本
								};
								setTimeout(function(){
									$("#showDialog1").showMsg(opt,150);
								},400);
							} else{
								var opt = {
									title: '新增用户会员',//提示框标题
									width: 400,//提示框宽度
									content: '会员用户新增失败，没有该用户账号!'//提示文本
								};
								setTimeout(function(){
									$("#showDialog1").showMsg(opt,150);
								},400);
							}

						}
					})
				}

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

	if(name=="view"){
		//弹窗
		var html =
			"<div class='row'>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>会员账号:"+data.memberNumber+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>用户名称:"+(isNull(data.userName)?"--":data.userName)+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>会员等级:"+(data.level==1?"普通会员":data.level==2?"vip会员":data.level==3?"资深会员":"尊享会员")+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>会员积分:"+data.score+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>办理时间:"+data.processingTime+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>会员余额:"+data.balance+"(￥)</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>消费总额:"+data.total+"(￥)</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>联系电话:"+(isNull(data.phone)?"--":data.phone)+"</label></div>" +
			"<div class='col-lg-4 shop-member-dialog-title'><label>电子邮箱:"+(isNull(data.email)?"--":data.email)+"</label></div>" +
			"<div class='col-lg-8 shop-member-dialog-title'><label>联系地址:"+(isNull(data.address)?"--":data.address)+"</label></div>" +
			"</div>";
		var opt = {
			title: '用户会员详情',
			width: 750,
			content: html,
			cancelBtnText: '关闭',
			okBtnText: (isNull(data.userName)?"绑定用户":""),
			onOk: function () {
				//弹窗
				var html ="<div class='shop-member-input-all'>" +
					"<div class='row shop-member-input'>" +
					"<div class='col-lg-3  shop-member-title'>" +
					"<label>用户账号</label>" +
					"</div>" +
					"<div class='col-lg-8'>" +
					"<input type='text' class='form-control' id='addUserNumber' placeholder='请输入用户账号' >" +
					"</div>" +
					"</div>" +
					"<div class='row shop-member-input'>" +
					"<div class='col-lg-3  shop-member-title'>" +
					"<label>会员账号</label>" +
					"</div>" +
					"<div class='col-lg-8'>" +
					"<input type='text' class='form-control'  value='"+data.memberNumber+"' disabled>" +
					"</div>" +
					"</div>" +
					"<div class='row shop-member-input'>" +
					"<div class='col-lg-3  shop-member-title'>" +
					"<label>会员等级</label>" +
					"</div>" +
					"<div class='col-lg-8'>" +
					"<input type='text' class='form-control'  value='"+(data.level==1?"普通会员":data.level==2?"vip会员":data.level==3?"资深会员":"尊享会员")+"' disabled>" +
					"</div>" +
					"</div>" +
					"<div class='row shop-member-input'>" +
					"<div class='col-lg-3  shop-member-title'>" +
					"<label>会员积分</label>" +
					"</div>" +
					"<div class='col-lg-8'>" +
					"<input type='text' class='form-control'  value='"+data.score+"' disabled>" +
					"</div>" +
					"</div>" +
					"</div>";
				var opt = {
					title: '绑定用户',
					width: 500,
					content: html,
					cancelBtnText: '关闭',
					okBtnText: '保存',
					onOk: function () {
						var addUserNumber = $("#addUserNumber").val();
						$.ajax({
							type:"post",
							url:"/petShop/addShopMemberUserNumber.html",
							dataType:'json',
							data:{
								shopMemberUserId:data.id,
								userNumber:addUserNumber
							},
							success:function(data){
								if(data=="success"){
									var opt = {
										title: '绑定用户',//提示框标题
										width: 400,//提示框宽度
										content: '绑定用户成功!'//提示文本
									};
									setTimeout(function(){
										$("#showDialog1").showMsg(opt,150);
										$("#petShpMemberTable").bootstrapTable('refresh', {url:"/petShop/petShopMemberInfo.html"});
									},400);
								}else if(data=="hasMember"){
									var opt = {
										title: '绑定用户',//提示框标题
										width: 400,//提示框宽度
										content: '该用户账号已经存在!'//提示文本
									};
									setTimeout(function(){
										$("#showDialog1").showMsg(opt,150);
									},400);
								} else {
									var opt = {
										title: '绑定用户',//提示框标题
										width: 400,//提示框宽度
										content: '绑定用户账号不存在，请重新绑定!'//提示文本
									};
									setTimeout(function(){
										$("#showDialog1").showMsg(opt,150);
									},400);
								}

							}
						})
					}
				};
				setTimeout(function(){
					$("#showDialog1").showDialog(opt,230,"btn btn-success");
				},400);

			}
		};
		$("#showDialog1").showDialog(opt,230,"btn btn-info");
	}else if (name=="recharge"){
		var html =
			"<div class='row' style='height: 40px'>" +
			"<div class='col-lg-3 shop-member-recharge'><label>充值账号</label></div>" +
			"<div class='col-lg-8 shop-member-number'><label>"+data.memberNumber+"</label></div>" +
			"</div>"+
			"<div class='row' style='height: 40px'>" +
			"<div class='col-lg-3 shop-member-recharge'><label>充值金额</label></div>" +
			"<div class='col-lg-8 shop-member-recharge-input'>" +
			"<input type='number' class='form-control' id='shopMemberRecharge' placeholder='请输入充值金额，单位(￥)' min='1'  step='1' />"+
			"</div>" +
			"</div>";
		var opt = {
			title: '会员充值',
			width: 400,
			content: html,
			okBtnText: '确定',
			cancelBtnText: '取消',
			onOk: function () {
				var balance = $("#shopMemberRecharge").val();
				$.ajax({
					type:"post",
					url:"/petShop/shopMemberRecharge.html",
					dataType:'json',
					data:{
						id:data.id,
						balance:balance
					},
					success:function(data){
						if(data=="success"){
							var opt = {
								title: '会员充值',//提示框标题
								width: 400,//提示框宽度
								content: '会员充值成功!'//提示文本
							};
							setTimeout(function(){
								$("#showDialog1").showMsg(opt,150);
								$("#petShpMemberTable").bootstrapTable('refresh', {url:"/petShop/petShopMemberInfo.html"});
							},400);
						}else {
							var opt = {
								title: '会员充值',//提示框标题
								width: 400,//提示框宽度
								content: '会员充值失败，请重新充值!'//提示文本
							};
							setTimeout(function(){
								$("#showDialog1").showMsg(opt,150);
							},400);
						}
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,150,"btn btn-danger")
	}
}

function actionFormatter(value, row, index) {
	var data = JSON.stringify(row);
	var result = "";
	result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"view\")' title='查看'>" +
		"<span class='glyphicon glyphicon-eye-open'></span></a>";
	result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"recharge\")' title='充值'>" +
		"<span class='glyphicon glyphicon-plus-sign'></span></a>";

	return result;
}
