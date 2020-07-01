$(function () {
    $("img").addClass("pimg");
    $(".pimg").click(function () {
        var _this = $(this);//将当前的pimg元素作为_this传入函数
        $.seeImg("#outerdiv", "#innerdiv", "#bigimg", _this);
    })
})

