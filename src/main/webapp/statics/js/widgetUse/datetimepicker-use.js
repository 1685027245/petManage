/* 时间选择器 */
$(function(){
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
		/*format: 'yyyy-mm-dd hh:ii:ss',
		autoclose: true,
		/!* minView: "month",  *!///选择日期后，不会再跳转去选择时分秒
		language: 'zh-CN',
		dateFormat: 'yyyy-mm-dd',//日期显示格式
		timeFormat: 'HH:mm:ss',//时间显示格式
		todayBtn: 1,
		autoclose: 1,
		minView: 0,  //0表示可以选择小时、分钟   1只可以选择小时
		minuteStep: 1,//分钟间隔1分钟*/
	});
})