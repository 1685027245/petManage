/* 评星 */
$(function(){
	/* class引用评星样式，min最小评星数，max最大评星数，data-size星星大小(大小可选 lg,sm,xl,xs),value初始星星数量； */
	$('#testId2').rating({
			clearButton:"<i class='glyphicon glyphicon-remove'></i>",
	        step: 0.5,
	        size: 'lg',//星星大小可选lg,sm,xl,xs
	        starCaptions: {0.5: '0.5星', 1: '1星', 1.5: '1.5星', 2: '2星', 2.5: '2.5星', 3: '3星', 3.5: '3.5星', 4: '4星',4.5: '4.5星', 5: '5星'},
	        starCaptionClasses: {},
			hoverEnabled: true //是否经过时有效果
	    });

})