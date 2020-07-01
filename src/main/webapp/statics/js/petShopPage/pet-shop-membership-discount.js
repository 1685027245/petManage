$(function(){

	//更新宠物店会员名称
	$("#updateMemberName").click(function () {
		var nameOne = $(this).attr("nameOne");
		var nameTwo = $(this).attr("nameTwo");
		var nameThree = $(this).attr("nameThree");
		var nameFour = $(this).attr("nameFour");
		var html ="<div class='shop-member-input-all'>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>"+nameOne+"</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='text' class='form-control' value='"+nameOne+"' id='memberNameOne' placeholder='请输入新名称'>" +
			"</div>" +
			"</div>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>"+nameTwo+"</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='text' class='form-control' value='"+nameTwo+"'   id='memberNameTwo' placeholder='请输入新名称'>" +
			"</div>" +
			"</div>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>"+nameThree+"</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='text' class='form-control' value='"+nameThree+"' id='memberNameThree' placeholder='请输入新名称' >" +
			"</div>" +
			"</div>" +
			"<div class='row shop-member-input'>" +
			"<div class='col-lg-3  shop-member-title'>" +
			"<label>"+nameFour+"</label>" +
			"</div>" +
			"<div class='col-lg-8'>" +
			"<input type='text' id='memberNameFour' value='"+nameFour+"' class='form-control' placeholder='请输入新名称'  />"+
			"</select>" +
			"</div>" +
			"</div>" +
			"</div>";
		var opt = {
			title: '修改会员名称',
			width: 500,
			content: html,
			cancelBtnText: '关闭',
			okBtnText: '保存',
			onOk: function () {
				var memberNameOne = $("#memberNameOne").val();
				var memberNameTwo = $("#memberNameTwo").val();
				var memberNameThree = $("#memberNameThree").val();
				var memberNameFour = $("#memberNameFour").val();
				$.ajax({
					type:"post",
					url:"/petShop/updateShopMemberName.html",
					data:{
						nameOne:memberNameOne,
						nameTwo:memberNameTwo,
						nameThree:memberNameThree,
						nameFour:memberNameFour
					},
					success:function(){
						var opt = {
							title: '修改会员等级名称',
							width: 350,
							content: "修改成功！",
							cancelBtnText: '',
							okBtnText: '确定',
							onOk: function () {
								loadPage("/petShop/petShopMembershipDiscount.html");
							}
						};
						setTimeout(function(){
							$("#showDialog1").showDialog(opt,150);
						},400);
					}
				})
			}
		}
		$("#showDialog1").showDialog(opt,230,"btn btn-success");
	})
		//弹窗

	//保存会员优惠设置
	$("#saveDiscount").click(function () {
		//获取之后的数据
		var upperLimitOne = $("#upperLimitOne").val();
		var upperLimitTwo = $("#upperLimitTwo").val();
		var upperLimitThree = $("#upperLimitThree").val();
		var upperLimitFour = $("#upperLimitFour").val();
		var discountOne = $("#discountOne").val();
		var discountTwo = $("#discountTwo").val();
		var discountThree = $("#discountThree").val();
		var discountFour = $("#discountFour").val();
		var integralSum = $("#integralSum").val();

		var opt = {
			title: '修改会员优惠设置',
			width: 350,
			content: "确定修改会员优惠设置?",
			cancelBtnText: '关闭',
			okBtnText: '确定',
			onOk: function () {
				$.ajax({
					type:"post",
					url:"/petShop/updateShopMemberName.html",
					data:{
						upperLimitOne:upperLimitOne,
						upperLimitTwo:upperLimitTwo,
						upperLimitThree:upperLimitThree,
						upperLimitFour:upperLimitFour,
						discountOne:discountOne,
						discountTwo:discountTwo,
						discountThree:discountThree,
						discountFour:discountFour,
						integralSum:integralSum,
					},
					success:function(){
						var opt = {
							title: '修改会员优惠设置',
							width: 350,
							content: "修改成功！",
							cancelBtnText: '',
							okBtnText: '确定',
							onOk: function () {
								loadPage("/petShop/petShopMembershipDiscount.html");
							}
						};
						setTimeout(function(){
							$("#showDialog1").showDialog(opt,150);
						},400)
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,150);
	})
})


