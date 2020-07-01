$(function(){
	//当前积分活动
	$.ajax({
		type:"get",
		url:"/petShop/getPetShopMemberActivity.html",
		dataType:'json',
		data:{
			isEnd:false
		},
		success:function(data){
			var columns = [
				{field: 'name', title: '活动名称', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'remarks', title: '活动内容', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'activityTime', title: '活动时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'score', title: '所需积分', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'createTime', title: '创建时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (value, row, index) {
						return changeDateFormat(value)
					}
				},
				{field: 'end', title: '是否结束', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (value, row, index) {
						if(value==true){
							return "已结束"
						}else {
							return "活动进行中"
						}
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

	//已结束积分活动
	$.ajax({
		type:"get",
		url:"/petShop/getPetShopMemberActivity.html",
		dataType:'json',
		data:{
			isEnd:true
		},
		success:function(data){
			var columns = [
				{field: 'name', title: '活动名称', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'remarks', title: '活动内容', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'activityTime', title: '活动时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'score', title: '所需积分', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'createTime', title: '创建时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (value, row, index) {
						return changeDateFormat(value)
					}
				},
				{field: 'end', title: '是否结束', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (value, row, index) {
						if(value==true){
							return "已结束"
						}else {
							return "活动进行中"
						}
					}
				},
				/*{field: 'operate', title: '操作', width: 150, align: 'center', valign: 'middle', formatter: actionFormatter,}*/ ];
			$('#petShpMemberTable2').bootstrapTable('destroy');
			$('#petShpMemberTable2').bootstrapTable({
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
	//兑换记录
	$.ajax({
		type:"post",
		url:"/petShop/getPetShopMemberActivityRecord.html",
		dataType:'json',
		data:{},
		success:function(data){
			var columns = [
				{field: 'activityName', title: '活动名称', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'memberNumber', title: '会员账号', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'score', title: '所需积分', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'number', title: '兑换数量', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'totalScore', title: '花费总积分', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'createTime', title: '兑换时间', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (value, row, index) {
						return changeDateFormat(value)
					}
				},
				/*{field: 'operate', title: '操作', width: 150, align: 'center', valign: 'middle', formatter: actionFormatter,} */];
			$('#petShpMemberTable3').bootstrapTable('destroy');
			$('#petShpMemberTable3').bootstrapTable({
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

	$("#addActivity").click(function () {
		//弹窗
		var html ="<div class='shop-member-input-all'>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>活动名称</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='text' class='form-control' id='activityName' placeholder='请输入活动名称' required>" +
			"</div>" +
			"</div>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>活动内容</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<textarea rows='5'  id='activityRemarks' style='max-width: 100%;width: 100%;padding: 5px;' placeholder='请输入活动内容' required></textarea>" +
			"</div>" +
			"</div>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>活动时间</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='text'  id='activityTime'  class='form-control' placeholder='请说明活动时间' required>" +
			"</div>" +
			"</div>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>所需积分</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='number'  id='activityScore' class='form-control' value='1' min='0' required>" +
			"</div>" +
			"</div>" +
			"</div>";
		var opt = {
			title: '创建推广积分活动',
			width: 600,
			content: html,
			cancelBtnText: '关闭',
			okBtnText: '保存',
			onOk: function () {
				$.ajax({
					type:"post",
					url:"/petShop/addActivity.html",
					dataType:'json',
					data:{
						name:$("#activityName").val(),
						activityTime:$("#activityTime").val(),
						score:$("#activityScore").val(),
						remarks:$("#activityRemarks").val(),
					},
					success:function(data){
						var opt = {
							title: '创建推广积分活动',
							width: 400,
							content: "推广积分活动创建成功！",
							cancelBtnText: '',
							okBtnText: '确定',
							onOk: function () {}
						};
						setTimeout(function () {
							$("#showDialog1").showDialog(opt,150);
							$("#petShpMemberTable").bootstrapTable('refresh', {url:"/petShop/getPetShopMemberActivity.html",query:{isEnd:false}});
						},400)
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,300,"btn btn-success");
	})
})

function EditViewById (data,name){

	if(name=="view"){
		var html =
			"<div class='row' style='height: 50px'>" +
			"<div class='col-lg-3 shop-member-recharge'><label>活动名称</label></div>" +
			"<div class='col-lg-8 shop-member-number'><label>"+data.name+"</label></div>" +
			"</div>"+
			"<div class='row' style='height: 50px'>" +
			"<div class='col-lg-3 shop-member-recharge'><label>会员账号</label></div>" +
			"<div class='col-lg-8 shop-member-recharge-input'>" +
			"<input type='text' class='form-control' id='shopMemberNumber' onKeypress=\"return (/[\\d]/.test(String.fromCharCode(event.keyCode)))\" placeholder='请输入会员账号'  />"+
			"</div>" +
			"<div class='col-lg-1' style='margin-left: -85px'><button class='btn btn-primary' id='sureBtn'>确定</button></div>" +
			"</div>"+
			"<div class='row hidden text-center noPerson' style='height: 50px;color: red' ></div>" +
			"<div class='row hidden memberScoreAll' style='height: 50px' >" +
			"<div class='col-lg-3 shop-member-recharge'><label>会员积分</label></div>" +
			"<div class='col-lg-8 shop-member-number' ><label id='memberScore' style='color: red;'></label></div>" +
			"</div>" +
			"<div class='row hidden memberScoreAll' style='height: 50px' >" +
			"<div class='col-lg-3 shop-member-recharge'><label>兑换个数</label></div>" +
			"<div class='col-lg-8 shop-member-number' style='padding-top: 0'>" +
			"<input type='number' class='form-control' id='needNum' min='0' step='1'  placeholder='请输入兑换个数' value='1'  />"+
			"</div>" +
			"</div>";
		$(document).on("click","#sureBtn",function () {
			var memberNumber = $("#shopMemberNumber").val();
			if(isNull(memberNumber)){
				$(".noPerson").removeClass("hidden");
				$(".noPerson").text("会员账号不能为空！");
				$(".memberScoreAll").addClass("hidden");
			}else {
				$.ajax({
					type:"post",
					url:"/petShop/petShopMemberInfo.html",
					data:{
						memberNumber:memberNumber,
					},
					dataType:"json",
					success:function(data){
						if(data.length!=0){
							$(".memberScoreAll").removeClass("hidden");
							$("#memberScore").text(data[0].score);
							$("#memberScore").attr("memberId",data[0].id);
							$("#memberScore").attr("surplusScore",data[0].score);
							$(".noPerson").addClass("hidden");
						}else{
							$(".noPerson").removeClass("hidden");
							$(".noPerson").text("该会员用户不存在！");
							$(".memberScoreAll").addClass("hidden");
						}
					}
				})
			}
		})

		/*$("#shopMemberNumber").on("keypress",function(event){
			if(event.keyCode == 13) {
				var memberNumber = $("#shopMemberNumber").val();
				if(isNull(memberNumber)){
					$(".noPerson").removeClass("hidden");
					$(".noPerson").text("会员账号不能为空！");
					$(".memberScoreAll").addClass("hidden");
				}else {
					$.ajax({
						type:"post",
						url:"/petShop/petShopMemberInfo.html",
						data:{
							memberNumber:memberNumber,
						},
						dataType:"json",
						success:function(data){
							if(data.length!=0){
								$(".memberScoreAll").removeClass("hidden");
								$("#memberScore").text(data[0].score);
								$("#memberScore").attr("memberId",data[0].id);
								$("#memberScore").attr("surplusScore",data[0].score);
								$(".noPerson").addClass("hidden");
							}else{
								$(".noPerson").removeClass("hidden");
								$(".noPerson").text("该会员用户不存在！");
								$(".memberScoreAll").addClass("hidden");
							}
						}
					})
				}
			}
		});*/

		var opt = {
			title: '积分兑换',
			width: 500,
			content: html,
			okBtnText: '兑换',
			cancelBtnText: '取消',
			onOk: function () {
				var activityId = data.id;
				var memberId = $("#memberScore").attr("memberId");
				var number = $("#needNum").val();
				var score = data.score;
				var totalScore = data.score*$("#needNum").val();
				var surplusScore = $("#memberScore").attr("surplusScore");

				if($(".noPerson").text()=="该会员用户不存在！"){
					var opt = {
						title: '积分兑换',//提示框标题
						width: 400,//提示框宽度
						content: '请输入有效用户信息!'//提示文本
					};
					setTimeout(function(){
						$("#showDialog1").showMsg(opt,150);
					},400);
					return;
				}
				if(totalScore>surplusScore){
					var opt = {
						title: '积分兑换',//提示框标题
						width: 400,//提示框宽度
						content: '积分兑换不足!'//提示文本
					};
					setTimeout(function(){
						$("#showDialog1").showMsg(opt,150);
					},400);
					return;
				}else {
					$.ajax({
						type:"post",
						url:"/petShop/petShopMemberActivityScore.html",
						dataType:'json',
						data:{
							activityId:activityId,
							memberId:memberId,
							number:number,
							score:score,
							totalScore:totalScore
						},
						success:function(data){
							if(data=="success"){
								var opt = {
									title: '积分兑换',//提示框标题
									width: 400,//提示框宽度
									content: '积分兑换成功!'//提示文本
								};
								setTimeout(function(){
									$("#showDialog1").showMsg(opt,150);
									$("#petShpMemberTable3").bootstrapTable('refresh', {url:"/petShop/getPetShopMemberActivityRecord.html"});
								},400);
							}else {
								var opt = {
									title: '积分兑换',//提示框标题
									width: 400,//提示框宽度
									content: '积分兑换失败，请重新兑换!'//提示文本
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

		$("#showDialog1").showDialog(opt,200)
	}else if(name=="end"){
		var opt = {
			title: '积分兑换',
			width: 400,
			content: "确定结束该活动?",
			okBtnText: '确定',
			cancelBtnText: '取消',
			onOk: function () {
				var activityId = data.id;
				$.ajax({
					type:"post",
					url:"/petShop/changePetShopMemberActivityStatus.html",
					dataType:'json',
					data:{
						isEnd:true,
						activityId:activityId
					},
					success:function(data) {
						if (data == "success") {
							var opt = {
								title: '积分兑换',//提示框标题
								width: 400,//提示框宽度
								content: '成功结束该活动!'//提示文本
							};
							setTimeout(function () {
								$("#showDialog1").showMsg(opt, 150);
								$("#petShpMemberTable").bootstrapTable('refresh', {url:"/petShop/getPetShopMemberActivity.html",query:{isEnd:false}});
								$("#petShpMemberTable2").bootstrapTable('refresh', {url:"/petShop/getPetShopMemberActivity.html",query:{isEnd:true}});
							}, 400);
						} else {
							var opt = {
								title: '积分兑换',//提示框标题
								width: 400,//提示框宽度
								content: '操作失败，请重新操作!'//提示文本
							};
							setTimeout(function () {
								$("#showDialog1").showMsg(opt, 150);
							}, 400);
						}
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,150)
	}else if(name=="edit"){
		//弹窗
		var html ="<div class='shop-member-input-all'>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>活动名称</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='text' class='form-control' id='activityUpdateName' value='"+data.name+"' placeholder='请输入活动名称'>" +
			"</div>" +
			"</div>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>活动内容</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<textarea rows='5'  id='activityUpdateRemarks' style='max-width: 100%;width: 100%;padding: 5px;' placeholder='请输入活动内容' required>"+data.remarks+"</textarea>" +
			"</div>" +
			"</div>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>活动时间</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='text'  id='activityUpdateTime'  class='form-control' placeholder='请说明活动时间' value='"+data.activityTime+"' required>" +
			"</div>" +
			"</div>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>所需积分</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='number'  id='activityUpdateScore' class='form-control' value='"+data.score+"' min='0'  required>" +
			"</div>" +
			"</div>" +
			"</div>";
		var opt = {
			title: '修改推广积分活动',
			width: 600,
			content: html,
			cancelBtnText: '关闭',
			okBtnText: '保存',
			onOk: function () {
				$.ajax({
					type:"post",
					url:"/petShop/updateActivity.html",
					dataType:'json',
					data:{
						id:data.id,
						name:$("#activityUpdateName").val(),
						activityTime:$("#activityUpdateTime").val(),
						score:$("#activityUpdateScore").val(),
						remarks:$("#activityUpdateRemarks").val(),
					},
					success:function(data){
						var opt = {
							title: '修改推广积分活动',
							width: 400,
							content: "推广积分活动修改成功！",
							cancelBtnText: '',
							okBtnText: '确定',
							onOk: function () {}
						};
						setTimeout(function () {
							$("#showDialog1").showDialog(opt,150);
							$("#petShpMemberTable").bootstrapTable('refresh', {url:"/petShop/getPetShopMemberActivity.html",query:{isEnd:false}});
						},400)
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,300,"btn btn-success");
	}
}

function actionFormatter(value, row, index) {
	var data = JSON.stringify(row);
	var result = "";
	result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"view\")' title='兑换'>兑换</a>";
	result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"edit\")' title='修改活动内容'>修改</a>";
	result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"end\")' title='结束活动'>结束活动</a>";

	return result;
}
