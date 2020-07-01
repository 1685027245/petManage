/* 弹窗 */
$(function () {
	/**
	*打开模态框
	*/
	$("#btnOpen").click(function () {
		var html = '<div class="form-group">'
				   + ' <label for="recipient-name" class="control-label">Recipient:</label>'
					+ '<input type="text" class="form-control" id="recipient-name" />'
				+ '</div>'
				+ '<div class="form-group">'
				   + ' <label for="message-text" class="control-label">Message:</label>'
				   + ' <textarea class="form-control" id="message-text"></textarea>'
				+ '</div>';
		var opt = {
			title: '添加',
			width: 400,
			content: html,
			okBtnText: '确定按钮',
			cancelBtnText: '取消按钮',
			onOk: function () {
				alert("我点击了确定");
			}
		};
		$("#showDialog").showDialog(opt)
	});
	/**
	*打开提示框
	*/
	$("#btnClose").click(function () {
		var opt = {
			title: '添加',//提示框标题
			width: 400,//提示框宽度
			content: '添加成功!'//提示文本
		};
		$("#showDialog").showMsg(opt);
	});
});
