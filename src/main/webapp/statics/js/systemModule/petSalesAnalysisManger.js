$(function(){

	$.ajax({
		type:"post",
		url:"/system/getMerchandiseSalesAnalysis.html",
		dataType:"json",
		data:{},
		success:function(data){
			var utils = Samples.utils;
			var color = Chart.helpers.color;
			//宠物销售类别
			var config = {
				type: 'polarArea',
				data: {
					datasets: [{
						data: data.petSalesEncyclopediasMap.total,
						backgroundColor: getColor(data.petSalesEncyclopediasMap.total,0.7),
						label: '宠物'
					}],
					labels: data.petSalesEncyclopediasMap.dataName
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
					}
				}
			};
			var ctx = document.getElementById('petSalesEncyclopediasPieChart').getContext('2d');
			window.myPie = new Chart(ctx, config);

			//食品销售数量
			var config2 = {
				type: 'radar',
				data: {
					datasets: [{
						data: data.foodNoSalesAnalysisByCategoryMap.total,
						backgroundColor: color(utils.color(0)).alpha(0.5).rgbString(),
						label: '食品销售数量',
						hoverBackgroundColor: utils.color(0),
						radius: 10,
						pointStyle: alternatePointStyles,
						hoverRadius: 15,
						borderColor: utils.color(0),
					}],
					labels: data.foodNoSalesAnalysisByCategoryMap.dataName
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
					}
				}
			};
			var ctx2 = document.getElementById('foodSalesCategoryPieChart').getContext('2d');
			window.myPie = new Chart(ctx2, config2);

		}
	})

	//初始化销售金额
	getPetSalesMoneyAnalysis();
	//初始化销售量
	getPetSalesNumberAnalysis();
	//获取宠物销售量靠前
	getPetSalesEncyclopediasHighest();
	//食品宠物靠前
	getFoodSalesAnalysisHighes();

	//金额
	//年度金额情况
	$("#petMoneyYear").click(function () {
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default')
		$("#selectTime").hide();
		getPetSalesMoneyAnalysis(getSelectTime("year")+"-01-01",getSelectTime("year")+"-"+getSelectTime("month")+"-31");
	})
	//本月金额情况
	$("#petMoneyQuarter").click(function () {
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default')
		$("#selectTime").hide();
		getPetSalesMoneyAnalysis(getSelectTime("year")+"-"+getSelectTime("month")+"-01",getSelectTime("year")+"-"+getSelectTime("month")+"-"+(getSelectTime("date")+1)+"","day");
	})
	//选择时间
	$("#petMoneySelect").click(function () {
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
		var selectUnit = $("#selectMoneyUnit").val();

		if(!isNull(startTime)&&!isNull(endTime)){
			getPetSalesMoneyAnalysis(startTime,endTime,(selectUnit=="按天"?"day":"month"));
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

	//销售量
	//年度销售量情况
	$("#petNumberYear").click(function () {
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default')
		$("#selectNumTime").hide();
		getPetSalesNumberAnalysis(getSelectTime("year")+"-01-01",getSelectTime("year")+"-"+getSelectTime("month")+"-31");
	})
	//本月销售量情况
	$("#petNumberQuarter").click(function () {
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default')
		$("#selectNumTime").hide();
		getPetSalesNumberAnalysis(getSelectTime("year")+"-"+getSelectTime("month")+"-01",getSelectTime("year")+"-"+getSelectTime("month")+"-"+(getSelectTime("date")+1)+"","day");
	})
	//选择时间
	$("#petNumberSelect").click(function () {
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default')
		$("#selectNumTime").css("display","inline-block");
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
		$("#selectNumStartTime").val("");
		$("#selectNumEndTime").val("");
	})

	//销量确定选择日期
	$("#sureSelectNumTime").click(function () {
		var startTime = $("#selectNumStartTime").val();
		var endTime = $("#selectNumEndTime").val();
		var selectUnit = $("#selectNumUnit").val();

		if(!isNull(startTime)&&!isNull(endTime)){
			getPetSalesNumberAnalysis(startTime,endTime,(selectUnit=="按天"?"day":"month"));
		}else {
			var opt = {
				title: '商品销售情况',
				width: 400,
				content: "日期不能为空，请先选择日期",
				okBtnText: '确定',
				cancelBtnText: '',
				onOk: function () {}
			};
			$("#showDialog1").showDialog(opt,150)
		}
	})

	//宠物销售排名
	$("#petTop10").click(function () {
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default')
		getPetSalesEncyclopediasHighest(10);
	})
	$("#petTop20").click(function () {
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default')
		getPetSalesEncyclopediasHighest(20);
	})
	$("#petTop50").click(function () {
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default')
		getPetSalesEncyclopediasHighest(50);
	})

	//食品销售排名
	$("#foodTop10").click(function () {
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default')
		getFoodSalesAnalysisHighes(10)
	})
	$("#foodTop20").click(function () {
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default')
		getFoodSalesAnalysisHighes(20)
	})
	$("#foodTop50").click(function () {
		$(this).addClass('btn-info').siblings().removeClass('btn-info');
		$(this).siblings().addClass('btn-default')
		getFoodSalesAnalysisHighes(50)
	})

})

//获取商品销售金额情况
function getPetSalesMoneyAnalysis(startTime,endTime,type) {
	//获取商品销售金额情况
	$.ajax({
		type:"post",
		url:"/system/getPetSalesMoneyAnalysis.html",
		dataType:"json",
		data:{
			startTime:isNull(startTime)?(getSelectTime("year")+"-01-01"):startTime,
			endTime:isNull(endTime)?(getSelectTime("year")+"-"+getSelectTime("month")+"-31"):endTime,
			selectType:isNull(type)?"month":type
		},
		success:function(data){
			$('#petShopMoneyLineChart').remove();
			$('#petShopMoneyLine').append('<canvas id="petShopMoneyLineChart"></canvas>');
			//销售金额数据条形图
			var chart = new Chart('petShopMoneyLineChart', {
				type: 'line',
				data: {
					labels: data.petMoneyMap.dataName,
					datasets:  [{
						label: '宠物',
						backgroundColor: window.chartColors.red,
						borderColor: window.chartColors.red,
						data:data.petMoneyMap.total,
						fill: false,
						hoverBackgroundColor: window.chartColors.red,
						radius: 10,
						pointStyle: 'rect',
						hoverRadius: 15,
					},{
						label: '食品',
						backgroundColor: window.chartColors.blue,
						borderColor: window.chartColors.blue,
						data:data.foodMoneyMap.total,
						fill: false,
						hoverBackgroundColor: window.chartColors.blue,
						radius: 10,
						pointStyle: 'circle',
						hoverRadius: 15,
					},{
						label: '服务',
						backgroundColor: window.chartColors.yellow,
						borderColor: window.chartColors.yellow,
						data:data.serviceMoneyMap.total,
						fill: false,
						hoverBackgroundColor: window.chartColors.yellow,
						radius: 10,
						pointStyle: 'rect',
						hoverRadius: 15,
					},{
						label: '周边商品',
						backgroundColor: window.chartColors.green,
						borderColor: window.chartColors.green,
						data:data.peripheryMoneyMap.total,
						fill: false,
						hoverBackgroundColor: window.chartColors.green,
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

//销售量柱形图
function getPetSalesNumberAnalysis(startTime,endTime,type) {
	$.ajax({
		type:"post",
		url:"/system/getPetSalesNumberAnalysis.html",
		dataType:"json",
		data:{
			startTime:isNull(startTime)?(getSelectTime("year")+"-01-01"):startTime,
			endTime:isNull(endTime)?(getSelectTime("year")+"-"+getSelectTime("month")+"-31"):endTime,
			selectType:isNull(type)?"month":type
		},
		success:function(data){
			//销售量柱形图
			var color = Chart.helpers.color;
			var barChartData = {
				labels: data.petNumberMap.dataName,
				datasets: [{
					label: '宠物',
					backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
					borderColor: window.chartColors.red,
					borderWidth: 1,
					data: data.petNumberMap.total
				},{
					label: '食品',
					backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
					borderColor: window.chartColors.blue,
					borderWidth: 1,
					data:data.foodNumberMap.total
				},{
					label: '服务',
					backgroundColor: color(window.chartColors.green).alpha(0.5).rgbString(),
					borderColor: window.chartColors.blue,
					borderWidth: 1,
					data: data.serviceNumberMap.total
				},{
					label: '周边商品',
					backgroundColor: color(window.chartColors.yellow).alpha(0.5).rgbString(),
					borderColor: window.chartColors.yellow,
					borderWidth: 1,
					data: data.peripheryNumberMap.total
				}
				]
			};

			$('#petShopMoneyBarChart').remove();
			$('#petShopMoneyBar').append('<canvas id="petShopMoneyBarChart"></canvas>');
			var ctx = document.getElementById('petShopMoneyBarChart').getContext('2d');
			window.myBar = new Chart(ctx, {
				type: 'bar',
				data: barChartData,
				options: {
					responsive: true,
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: ''
					}
				}
			});
		}
	})
}

//宠物最畅销品种
function getPetSalesEncyclopediasHighest(pageSize){
	if (isNull(pageSize)){
		pageSize = 10;
	}
	$.ajax({
		type:"post",
		url:"/system/getPetSalesEncyclopediasHighest.html",
		dataType:"json",
		data:{
			pageSize:pageSize
		},
		success:function(data){
			//宠物最畅销品种
			var config5 = {
				type: 'horizontalBar',
				data: {
					datasets: [{
						data:  data.petSalesEncyclopediasHighestMap.total,
						backgroundColor: getColor(data.petSalesEncyclopediasHighestMap.total),
						label: '宠物最畅销品种',
						borderWidth: 1,
					}],
					labels: data.petSalesEncyclopediasHighestMap.dataName
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
					scales:{
						xAxes: [{
							gridLines:0,
							ticks:{
								beginAtZero:true
							}
						}]
					}
				}
			};
			$('#petHighest').remove();
			$('#petTop').append('<canvas id="petHighest"></canvas>');
			var ctx5 = document.getElementById('petHighest').getContext('2d');
			window.myPie = new Chart(ctx5, config5);
		}
	})
}

//食品最畅销产品
function getFoodSalesAnalysisHighes(pageSize){
	if (isNull(pageSize)){
		pageSize = 10;
	}
	$.ajax({
		type:"post",
		url:"/system/getFoodSalesAnalysisHighes.html",
		dataType:"json",
		data:{
			pageSize:pageSize
		},
		success:function(data){
			//食品最畅销产品
			var config6 = {
				type: 'horizontalBar',
				data: {
					datasets: [{
						data: data.foodSalesAnalysisHighesMap.total,
						backgroundColor: getColor(data.foodSalesAnalysisHighesMap.total),
						label: '食品最畅销产品',
						borderWidth: 1,
					}],
					labels: data.foodSalesAnalysisHighesMap.dataName
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
					scales:{
						xAxes: [{
							gridLines:0,
							ticks:{
								beginAtZero:true
							}
						}]
					}
				}
			};
			$('#foodHighest').remove();
			$('#foodTop').append('<canvas id="foodHighest"></canvas>');
			var ctx6 = document.getElementById('foodHighest').getContext('2d');
			window.myPie = new Chart(ctx6, config6);
		}
	})
}

//获取颜色
function getColor(data,opacity) {
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
//判断使用的pointStyle
function alternatePointStyles(ctx) {
	var index = ctx.dataIndex;
	return index % 2 === 0 ? 'circle' : 'rect';
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