$(function () {

    //添加订单
    $("body").on("click",".addOrder",function(){
        $this = $(this);
        var id = $(this).attr("dataId");
        var name = $(this).attr("dataName");
        var number = $(this).attr("dataNumber");
        var dataStock = $(this).attr("dataStock");
        if($this.text().trim()=="取消订单"){
            $.ajax({
                type:"get",
                url:"/petShop/delGoodsToSalesRecords.html",
                dataType:'json',
                data:{
                    id:id,
                    category:"periphery"
                },
                success:function(data){
                    $this.text("添加订单")
                    var opt = {
                        title: '取消订单',//提示框标题
                        width: 400,//提示框宽度
                        content: '取消成功!'//提示文本
                    };
                    $("#showDialog1").showMsg(opt,150);
                    setTimeout(function(){
                        $this.addClass("btn-primary");
                        $this.removeClass("btn-danger")
                    },400);
                }
            })
        }else{
            var html =
                "<div class='row edit-dialog-all'>" +
                "<div class='col-lg-4 left-label-title'><label>产品名称:</label></div>" +
                "<div class='col-lg-7'>" +
                "<label class='right-label-name'>"+name+"</label> " +
                "</div>" +
                "</div>"+
                "<div class='row edit-dialog-all'>" +
                "<div class='col-lg-4 left-label-title'><label>产品编号:</label></div>" +
                "<div class='col-lg-7'>" +
                "<label class='right-label-name'>"+number+"</label> " +
                "</div>" +
                "</div>"+
                "<div class='row edit-dialog-all'>" +
                "<div class='col-lg-4 left-label-title' style='padding-top: 7px'><label>数量</label></div>" +
                "<div class='col-lg-7'>" +
                "<input type='number' min='1' step='1' class='form-control' id='quantityOfFood' value='1' >" +
                "</div>" +
                "</div>";
            var opt = {
                title: '订单数量选择',
                width: 450,
                content: html,
                cancelBtnText: '关闭',
                okBtnText: '确定',
                onOk: function () {
                    var number = $("#quantityOfFood").val();
                    if(eval(number)>eval(dataStock)){
                        number = dataStock
                    }
                    $.ajax({
                        type:"get",
                        url:"/petShop/addGoodsToSalesRecords.html",
                        dataType:'json',
                        data:{
                            id:id,
                            category:"periphery",
                            number:number
                        },
                        success:function(data){
                            $this.text("取消订单")
                            var opt = {
                                title: '添加订单',//提示框标题
                                width: 400,//提示框宽度
                                content: '添加成功!'//提示文本
                            };
                            setTimeout(function(){
                                $("#showDialog1").showMsg(opt,150);
                                $this.addClass("btn-danger")
                                $this.removeClass("btn-primary");
                            },400);
                        }
                    })
                }
            };
            $("#showDialog1").showDialog(opt,200,"btn btn-success");

            $("#quantityOfFood").bind("input propertychange",function(event){
                var quantityOfFood = $(this).val();
                if(eval(quantityOfFood)>eval(dataStock)){
                    $(this).val(dataStock);
                }else if (eval(quantityOfFood)<=0) {
                    $(this).val(1);
                }
            });
        }
    });

    //返回宠物信息管理页面
    $(".canclePets").click(function () {
        loadPage("/petShop/peripheryInformation.html");
    })

    //删除
    $("#delPets").click(function () {
        var id = $(this).attr("data");
        var opt = {
            title: '商品详情',
            width: 400,
            content: "确定删除该商品信息?",
            okBtnText: '确定',
            cancelBtnText: '取消',
            onOk: function () {
                $.ajax({
                    type:"get",
                    url:"/petShop/delPeriphery.html",
                    dataType:'json',
                    data:{
                        id:id,
                    },
                    success:function(data){
                        var opt = {
                            title: '商品详情',//提示框标题
                            width: 400,//提示框宽度
                            content: '删除成功，2秒后跳转到宠物周边商品列表!'//提示文本
                        };
                        setTimeout(function(){
                            $("#showDialog1").showMsg(opt,150);
                            setTimeout(function(){
                                loadPage("/petShop/peripheryInformation.html")
                            },2000);
                        },400);
                    }
                })
            }
        };
        $("#showDialog1").showDialog(opt,150,"btn btn-danger")

    })


    //跳转到修改页面
    $("#updatePets").click(function () {
        var id = $(this).attr("data");
        var opt = {
            title: '商品详情',
            width: 400,
            content: "确定修改该商品信息?",
            okBtnText: '确定',
            cancelBtnText: '取消',
            onOk: function () {
                loadPage("/petShop/updateGoods.html/periphery/"+id);
            }
        };
        $("#showDialog1").showDialog(opt,150)

    })
})
