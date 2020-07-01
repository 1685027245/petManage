$(function () {

    //添加订单
    $("body").on("click",".addOrder",function(){
        $this = $(this);
        var petId = $(this).attr("data");
        if($this.text().trim()=="取消订单"){
            $.ajax({
                type:"get",
                url:"/petShop/delGoodsToSalesRecords.html",
                dataType:'json',
                data:{
                    id:petId,
                    category:"pet"
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
        }else if($this.text().trim()=="添加订单"){
            $.ajax({
                type:"get",
                url:"/petShop/addGoodsToSalesRecords.html",
                dataType:'json',
                data:{
                    id:petId,
                    category:"pet"
                },
                success:function(data){
                    $this.text("取消订单")
                    var opt = {
                        title: '添加订单',//提示框标题
                        width: 400,//提示框宽度
                        content: '添加成功!'//提示文本
                    };
                    $("#showDialog1").showMsg(opt,150);
                    setTimeout(function(){
                        $this.addClass("btn-danger")
                        $this.removeClass("btn-primary");
                    },400);
                }
            })
        }
    });

    //返回宠物信息管理页面
    $(".canclePets").click(function () {
        loadPage("/petShop/petInformation.html");
    })

    //删除
    $("#delPets").click(function () {
        var id = $(this).attr("data");
        var opt = {
            title: '宠物详情',
            width: 400,
            content: "确定删除该宠物信息?",
            okBtnText: '确定',
            cancelBtnText: '取消',
            onOk: function () {
                $.ajax({
                    type:"get",
                    url:"/petShop/delPet.html",
                    dataType:'json',
                    data:{
                        id:id,
                    },
                    success:function(data){
                        var opt = {
                            title: '宠物详情',//提示框标题
                            width: 400,//提示框宽度
                            content: '删除成功!'//提示文本
                        };
                        setTimeout(function(){
                            $("#showDialog1").showMsg(opt,150);
                            loadPage("/petShop/petInformation.html")
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
            title: '宠物详情',
            width: 400,
            content: "确定修改该宠物信息?",
            okBtnText: '确定',
            cancelBtnText: '取消',
            onOk: function () {
                loadPage("/petShop/updateGoods.html/pet/"+id);
            }
        };
        $("#showDialog1").showDialog(opt,150)

    })
})
