$(function(){
	//初始化用户访问量
	getUserBrowse();

	//用户访问量-按月天
	$("#userMonth").click(function () {
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default')
		$("#selectTime").hide();
		getUserBrowse(getSelectTime("year")+"-"+getSelectTime("month")+"-01",getSelectTime("year")+"-"+getSelectTime("month")+"-"+(getSelectTime("date")+1)+"","day");
	})
	//本年
	$("#userYear").click(function () {
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default')
		$("#selectTime").hide();
		getUserBrowse();
	})

	//选择时间
	$("#userSelect").click(function () {
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default');
		$("#selectTime").css("display","inline-block");
		//初始化日期组件
		$('.date-input').datetimepicker({
			language:  'zh-CN',
			format : 'yyyy-mm-dd',//hh:00:00
			timeFormat: '',//时间显示格式
			weekStart: 1,
			todayBtn:  1,
			autoclose: true,
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0,
			viewDate:new Date() //也可以通过function函数获得值
		});
		$("#selectStartTime").val("");
		$("#selectEndTime").val("");
	})
	//金额确定选择日期
	$("#sureSelectTime").click(function () {
		var startTime = $("#selectStartTime").val();
		var endTime = $("#selectEndTime").val();
		var selectUnit = $("#selectUnit").val();

		if(!isNull(startTime)&&!isNull(endTime)){
			getUserBrowse(startTime,endTime,(selectUnit=="按天"?"day":"month"));
		}else {
			var opt = {
				title: '商品销售金额情况',
				width: 400,
				content: "日期不能为空，请先选择日期",
				okBtnText: '确定',
				cancelBtnText: '',
				onOk: function () {}
			};
			$("#showDialog1").showDialog(opt,150)
		}
	})

	//获取会员充值金额情况
	getRechargeMoney();
	//本月
	$("#monthYear").click(function () {
		getRechargeMoney();
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default');
		$("#selectMoneyTime").css("display","none");
	})
	//本月
	$("#moneyMonth").click(function () {
		getRechargeMoney(getSelectTime("year")+"-"+getSelectTime("month")+"-01",getSelectTime("year")+"-"+getSelectTime("month")+"-"+(getSelectTime("date")+1)+"","day")
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default');
		$("#selectMoneyTime").css("display","none");
	})
	//选择时间
	$("#moneySelect").click(function () {
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default');
		$("#selectMoneyTime").css("display","inline-block");
		//初始化日期组件
		$('.date-input').datetimepicker({
			language:  'zh-CN',
			format : 'yyyy-mm-dd',//hh:00:00
			timeFormat: '',//时间显示格式
			weekStart: 1,
			todayBtn:  1,
			autoclose: true,
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0,
			viewDate:new Date() //也可以通过function函数获得值
		});
		$("#selectStartTime").val("");
		$("#selectEndTime").val("");
	})
	//金额确定选择日期
	$("#sureMoneySelectTime").click(function () {
		var startTime = $("#selectMoneyStartTime").val();
		var endTime = $("#selectMoneyEndTime").val();
		var selectUnit = $("#selectMoneyUnit").val();

		if(!isNull(startTime)&&!isNull(endTime)){
			getRechargeMoney(startTime,endTime,(selectUnit=="按天"?"day":"month"));
		}else {
			var opt = {
				title: '商品销售金额情况',
				width: 400,
				content: "日期不能为空，请先选择日期",
				okBtnText: '确定',
				cancelBtnText: '',
				onOk: function () {}
			};
			$("#showDialog1").showDialog(opt,150)
		}
	})

	//初始化会员新增情况
	getShopNewMember();
	//本月
	$("#memberYear").click(function () {
		getShopNewMember();
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default');
		$("#selectMemberTime").css("display","none");
	})
	//本月
	$("#memberMonth").click(function () {
		getShopNewMember(getSelectTime("year")+"-"+getSelectTime("month")+"-01",getSelectTime("year")+"-"+getSelectTime("month")+"-"+(getSelectTime("date")+1)+"","day")
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default');
		$("#selectMemberTime").css("display","none");
	})
	//选择时间
	$("#memberSelect").click(function () {
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default');
		$("#selectMemberTime").css("display","inline-block");
		//初始化日期组件
		$('.date-input').datetimepicker({
			language:  'zh-CN',
			format : 'yyyy-mm-dd',//hh:00:00
			timeFormat: '',//时间显示格式
			weekStart: 1,
			todayBtn:  1,
			autoclose: true,
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0,
			viewDate:new Date() //也可以通过function函数获得值
		});
		$("#selectMemberStartTime").val("");
		$("#selectMemberEndTime").val("");
	})
	//金额确定选择日期
	$("#sureMemberSelectTime").click(function () {
		var startTime = $("#selectMemberStartTime").val();
		var endTime = $("#selectMemberEndTime").val();
		var selectUnit = $("#selectMemberUnit").val();

		if(!isNull(startTime)&&!isNull(endTime)){
			getShopNewMember(startTime,endTime,(selectUnit=="按天"?"day":"month"));
		}else {
			var opt = {
				title: '商品销售金额情况',
				width: 400,
				content: "日期不能为空，请先选择日期",
				okBtnText: '确定',
				cancelBtnText: '',
				onOk: function () {}
			};
			$("#showDialog1").showDialog(opt,150)
		}
	})

	//获取会员等级占比情况
	getShopMemberLevel();
})

//获取用户访问量
function getUserBrowse(startTime,endTime,type) {
	$.ajax({
		type:"post",
		url:"/petShop/getPetShopUserAnalysis.html",
		dataType:"json",
		data:{
			startTime:isNull(startTime)?(getSelectTime("year")+"-01-01"):startTime,
			endTime:isNull(endTime)?(getSelectTime("year")+"-"+getSelectTime("month")+"-31"):endTime,
			type:isNull(type)?"month":type
		},
		success:function(data){
			var utils = Samples.utils;

			$('#petShopUserVisitLineChart').remove();
			$('#petShopUserVisitLine').append('<canvas id="petShopUserVisitLineChart"></canvas>');
			//销售金额数据条形图
			var chart = new Chart('petShopUserVisitLineChart', {
				type: 'line',
				data: {
					labels: data.petShopBrowseMap.dataName,
					datasets:  [{
						label: '用户访问量',
						backgroundColor: window.chartColors.red,
						borderColor: window.chartColors.red,
						data:data.petShopBrowseMap.total,
						fill: false,
						hoverBackgroundColor: window.chartColors.yellow,
						radius: 10,
						pointStyle: 'rect',
						hoverRadius: 15,
					}]
				},
				options: {
					legend: false,
					/*tooltips: true,*/
					responsive: true,
					title: {
						display: true,
						text: ""
					},legend: {
						position: 'top',
					},
				}
			});
		}
	})
}

//获取会员充值金额情况
function getRechargeMoney(startTime,endTime,type) {
	$.ajax({
		type:"post",
		url:"/petShop/getShopMemberRechargeMoney.html",
		dataType:"json",
		data:{
			startTime:isNull(startTime)?(getSelectTime("year")+"-01-01"):startTime,
			endTime:isNull(endTime)?(getSelectTime("year")+"-"+getSelectTime("month")+"-31"):endTime,
			selectType:isNull(type)?"month":type
		},
		success:function(data){
			var color = Chart.helpers.color;
			$('#memberRechargeMoney').remove();
			$('#memberRechargeMoneyLine').append('<canvas id="memberRechargeMoney"></canvas>');

			//销会员充值金额情况条形图
			var chart = new Chart('memberRechargeMoney', {
				type: 'bar',
				data: {
					labels: data.petShopMemberRechargeMoneyMap.dataName,
					datasets:  [{
						label: '会员充值金额',
						backgroundColor: color(window.chartColors.blue).alpha(0.7).rgbString(),
						borderColor: window.chartColors.yellow,
						data:data.petShopMemberRechargeMoneyMap.total,
						fill: false,
						hoverBackgroundColor: window.chartColors.yellow,
						radius: 10,
						pointStyle: 'rect',
						hoverRadius: 15,
					}]
				},
				options: {
					legend: false,
					/*tooltips: true,*/
					responsive: true,
					title: {
						display: true,
						text: ""
					},legend: {
						position: 'top',
					},
				}
			});
		}
	})
}

//获取会员新增情况
function getShopNewMember(startTime,endTime,type) {
	$.ajax({
		type:"post",
		url:"/petShop/getShopNewMember.html",
		dataType:"json",
		data:{
			startTime:isNull(startTime)?(getSelectTime("year")+"-01-01"):startTime,
			endTime:isNull(endTime)?(getSelectTime("year")+"-"+getSelectTime("month")+"-31"):endTime,
			selectType:isNull(type)?"month":type
		},
		success:function(data){
			$('#newMember').remove();
			$('#newMemberLine').append('<canvas id="newMember"></canvas>');
			//销售金额数据条形图
			var chart = new Chart('newMember', {
				type: 'line',
				data: {
					labels: data.petShopNewMemberMap.dataName,
					datasets:  [{
						label: '会员新增数',
						backgroundColor: window.chartColors.blue,
						borderColor: window.chartColors.blue,
						data:data.petShopNewMemberMap.total,
						fill: false,
						hoverBackgroundColor: window.chartColors.yellow,
						radius: 10,
						pointStyle: 'rect',
						hoverRadius: 15,
					}]
				},
				options: {
					legend: false,
					/*tooltips: true,*/
					responsive: true,
					title: {
						display: true,
						text: ""
					},legend: {
						position: 'top',
					},
				}
			});
		}
	})
}

//获取会员等级占比情况
function getShopMemberLevel() {
	$.ajax({
		type:"post",
		url:"/petShop/getShopMemberLevel.html",
		dataType:"json",
		data:{},
		success:function(data){
			//会员等级
			var config3 = {
				type: 'pie',//horizontalBar
				data: {
					datasets: [{
						data: data.memberLevelMap.total,
						backgroundColor: getColor(data.memberLevelMap.total),
						label: '宠物库存数量'
					}],
					labels: data.memberLevelMap.dataName
				},
				options: {
					responsive: true,
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: ''
					},
					animation: {
						animateScale: true,
						animateRotate: true
					},
					/*scales:{
						xAxes: [{
							gridLines:0,
							ticks:{
								beginAtZero:true //从0开始
							}
						}]
					}*/
				},

			};
			var ctx3 = document.getElementById('memberLevel').getContext('2d');
			window.myPie = new Chart(ctx3, config3);
		}
	})
}

function alternatePointStyles(ctx) { //判断使用的pointStyle
	var index = ctx.dataIndex;
	return index % 2 === 0 ? 'circle' : 'rect';
}

function getColor(data,opacity) {//获取颜色
	var color = Chart.helpers.color;
	if(isNull(opacity)){
		var allColor = [
			window.chartColors.red,
			window.chartColors.orange,
			window.chartColors.yellow,
			window.chartColors.green,
			window.chartColors.blue];
	}else {
		var allColor = [
			color(window.chartColors.red).alpha(opacity).rgbString(),
			color(window.chartColors.orange).alpha(opacity).rgbString(),
			color(window.chartColors.yellow).alpha(opacity).rgbString(),
			color(window.chartColors.green).alpha(opacity).rgbString(),
			color(window.chartColors.blue).alpha(opacity).rgbString(),];
	}

	var colorArray = new Array();
	$.each(data,function (x,y) {
		colorArray.push(allColor[x%5]);
	})
	return colorArray;
}

//获取时间
function getNowTime() {
	//判断是否在前面加0
	function getNow(s) {
		return s < 10 ? '0' + s: s;
	}
	var myDate = new Date();
	var year=myDate.getFullYear();        //获取当前年
	var month=myDate.getMonth()+1;   //获取当前月
	var date=myDate.getDate();            //获取当前日

	var h=myDate.getHours();              //获取当前小时数(0-23)
	var m=myDate.getMinutes();          //获取当前分钟数(0-59)
	var s=myDate.getSeconds();

	var now=year+'-'+getNow(month)+"-"+getNow(date)+" "+getNow(h)+':'+getNow(m)+":"+getNow(s);
	return now;
}
//获取年月日
function getSelectTime(value) {
	//判断是否在前面加0
	function getNow(s) {
		return s < 10 ? '0' + s: s;
	}
	var myDate = new Date();
	var year=myDate.getFullYear();        //获取当前年
	var month=myDate.getMonth()+1;   //获取当前月
	var date=myDate.getDate();            //获取当前日

	if(value=="year"){
		return year;
	}else if(value=="month"){
		return month;
	}else {
		return date;
	}
}

function getMonthQuarter(value) {
	var nowDate = new Date();
	var beginDate = null;
	var endDate = null;
	if(nowDate.getMonth()+1 <= 3){
		beginDate =  nowDate.getFullYear() + "-01-01";
		endDate = nowDate.getFullYear() + "-03-31";
	}else if(nowDate.getMonth()+1 > 3 && nowDate.getMonth()+1 <= 6){
		beginDate =  nowDate.getFullYear() + "-04-01";
		endDate = nowDate.getFullYear() + "-06-30";
	}else if(nowDate.getMonth()+1 > 6 && nowDate.getMonth()+1 <= 9){
		beginDate =  nowDate.getFullYear() + "-07-01";
		endDate = nowDate.getFullYear() + "-09-30";
	}else if(nowDate.getMonth()+1 > 9 && nowDate.getMonth()+1 <= 12){
		beginDate =  nowDate.getFullYear() + "-10-01";
		endDate = nowDate.getFullYear() + "-12-31";
	}
	if(value==1){
		return beginDate;
	}else {
		return endDate;
	}
}