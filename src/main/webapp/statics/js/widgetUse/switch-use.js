/* bootstrap开关控件，初始化 */
$(function(){
	//   $("[name='my-checkbox']").bootstrapSwitch();
	$('#project_status_switch').bootstrapSwitch({
　　　　onText : "启用",      // 设置ON文本  
　　　　offText : "禁用",    // 设置OFF文本  
　　　　onColor : "success",// 设置ON文本颜色(info/success/warning/danger/primary)  
　　　　offColor : "warning",  // 设置OFF文本颜色 (info/success/warning/danger/primary)  
　　　　size : "normal",    // 设置控件大小,从小到大  (mini/small/normal/large)  
　　　　onSwitchChange : function(event, state) {  // 当开关状态改变时触发  
// 　　　　　　if (state == true) {  
// 　　　　　　　　alert("ON");  
// 　　　　　　} else {  
// 　　　　　　　　alert("OFF");  
// 　　　　　　}  
　　　　}  
　　})

	$('#switch1').bootstrapSwitch({　onColor : "primary",offColor : "warning",})
	$('#switch2').bootstrapSwitch({　onColor : "success",offColor : "warning",})
	$('#switch3').bootstrapSwitch({　onColor : "info",offColor : "warning",})
	$('#switch4').bootstrapSwitch({　onColor : "warning",offColor : "warning",})
	$('#switch5').bootstrapSwitch({　onColor : "danger",offColor : "warning",})
	$('#switch6').bootstrapSwitch({　onColor : "default",offColor : "warning",})
})