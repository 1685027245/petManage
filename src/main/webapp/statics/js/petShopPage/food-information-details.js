$(function () {


    //添加订单和取消订单
    $("body").on("click",".addOrder",function(){
        $this = $(this);
        var productId = $(this).attr("dataId");
        var dataName = $(this).attr("dataName");
        var dataSerialNumber = $(this).attr("dataSerialNumber");
        var dataStock = $(this).attr("dataStock");
        if($this.text().trim()=="取消订单"){
            $.ajax({
                type:"get",
                url:"/petShop/delGoodsToSalesRecords.html",
                dataType:'json',
                data:{
                    id:productId,
                    category:"food"
                },
                success:function(data){
                    $this.text("添加订单")
                    var opt = {
                        title: '取消订单',//提示框标题
                        width: 400,//提示框宽度
                        content: '取消成功!'//提示文本
                    };
                    $("#showDialog1").showMsg(opt,150);
                    $this.addClass("btn-primary");
                    $this.removeClass("btn-danger")
                }
            })
        }else{
            var html =
                "<div class='row edit-dialog-all'>" +
                "<div class='col-lg-4 left-label-title'><label>产品名称:</label></div>" +
                "<div class='col-lg-7'>" +
                "<label class='right-label-name'>"+dataName+"</label> " +
                "</div>" +
                "</div>"+
                "<div class='row edit-dialog-all'>" +
                "<div class='col-lg-4 left-label-title'><label>产品编号:</label></div>" +
                "<div class='col-lg-7'>" +
                "<label class='right-label-name'>"+dataSerialNumber+"</label> " +
                "</div>" +
                "</div>"+
                "<div class='row edit-dialog-all'>" +
                "<div class='col-lg-4 left-label-title' ><label>数量</label></div>" +
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
                        type:"post",
                        url:"/petShop/addGoodsToSalesRecords.html",
                        dataType:'json',
                        data:{
                            id:productId,
                            category:"food",
                            number:number
                        },
                        success:function(data){
                            $this.text("取消订单")
                            var opt = {
                                title: '添加订单',//提示框标题
                                width: 400,//提示框宽度
                                content: '添加订单成功!'//提示文本
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

    })


    //返回食品信息列表页面
    $("#cancleFood").click(function () {
        loadPage("/petShop/foodInformation.html");
    })

    //删除食品信息
    $("#delFood").click(function () {
        var id = $(this).attr("data");
        var opt = {
            title: '食品详情',
            width: 400,
            content: "确定删除该食品信息?",
            okBtnText: '确定',
            cancelBtnText: '取消',
            onOk: function () {
                $.ajax({
                    type:"get",
                    url:"/petShop/delFood.html",
                    dataType:'json',
                    data:{
                        id:id,
                    },
                    success:function(data){
                        var opt = {
                            title: '食品详情',//提示框标题
                            width: 400,//提示框宽度
                            content: '删除成功，2秒后跳转到食品列表!'//提示文本
                        };
                        setTimeout(function(){
                            $("#showDialog1").showMsg(opt,150);
                            setTimeout(function(){
                                loadPage("/petShop/foodInformation.html")
                            },2000);
                        },400);
                    }
                })
            }
        };
        $("#showDialog1").showDialog(opt,150,"btn btn-danger")

    })

    //跳转到修改页面
    $("#updateFood").click(function () {
        var id = $(this).attr("data");
        var opt = {
            title: '食品详情',
            width: 400,
            content: "确定修改该食品信息?",
            okBtnText: '确定',
            cancelBtnText: '取消',
            onOk: function () {
                loadPage("/petShop/updateGoods.html/food/"+id);
            }
        };
        $("#showDialog1").showDialog(opt,150)
    })
})
