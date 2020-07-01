$(function () {

    getPetPeripheryInfo(1);

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
        }else if($this.text().trim()=="添加订单"){
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

    //条件筛选
    $("#colorSelect,#priceSelect").change(function () {
        var keyword = $("#searchInput").val();
        var color = $("#colorSelect").children('option:selected').val();
        var price = $("#priceSelect").children('option:selected').val();
        getPetPeripheryInfo(1,keyword,getSelect(color),getSelect(price))
    })

    //关键字条件查询
    $("#searchBtn").click(function () {
        var keyword = $("#searchInput").val();
        var color = $("#colorSelect").children('option:selected').val();
        var price = $("#priceSelect").children('option:selected').val();
        getPetPeripheryInfo(1,keyword,getSelect(color),getSelect(price))
    })
    //回车查询
    $("#searchInput").keypress(function (e) {
        // 兼容写法
        e = e || window.event;
        key = e.keyCode || e.which || e.charCode;
        if (key == 13) {// 判断是不是回车
            var keyword = $("#searchInput").val();
            var color = $("#colorSelect").children('option:selected').val();
            var price = $("#priceSelect").children('option:selected').val();
            getPetPeripheryInfo(1,keyword,getSelect(color),getSelect(price))
        }
    });

    //重置搜索
    $("#searchReset").click(function () {
        $("#searchInput").val("");
        $("#colorSelect option:first").prop("selected", 'selected');
        $("#priceSelect option:first").prop("selected", 'selected');
        $("#petShapeSelect option:first").prop("selected", 'selected');
        getPetPeripheryInfo(1);
    })

    //返回宠物信息管理页面
    /*$(".canclePets").click(function () {
        loadPage("/petShop/petInformation.html");
    })*/

    //跳转到宠物详情页面
    $("body").on("click",".moreDetails,.petName",function(){
        var id = $(this).attr("data");
        loadPage("/petShop/toPeripheryDetails.html/"+id);
    });

    //添加宠物跳转页面
    $("#addPetPeriphery").click(function () {
        loadPage("/petShop/addGoods.html/addPeriphery");
    })

    //删除
    /*$("#delPets").click(function () {
        var opt = {
            title: '删除宠物',
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
                        id:petId,
                    },
                    success:function(data){
                        var opt = {
                            title: '删除宠物',//提示框标题
                            width: 400,//提示框宽度
                            content: '删除成功，2秒后跳转到宠物列表!'//提示文本
                        };
                        setTimeout(function(){
                            $("#showDialog1").showMsg(opt,150);
                        },400);
                    }
                })
            }
        };
        $("#showDialog1").showDialog(opt,150,"btn-danger")

    })*/

})


//加载页面
function loadpage(pageNumber) {
    var myPageCount = parseInt($("#PageCount").val());
    var myPageSize = parseInt($("#PageSize").val());
    var countindex = myPageCount % myPageSize > 0 ? (myPageCount / myPageSize) + 1 : (myPageCount / myPageSize);
    $("#countindex").val(countindex);

    $.jqPaginator('#pagination', {
        totalPages: parseInt($("#countindex").val())==0?1:parseInt($("#countindex").val()),
        visiblePages:parseInt($("#visiblePages").val())==0?1:parseInt($("#visiblePages").val()),
        currentPage: isNull(pageNumber)?1:pageNumber,
        first: '<li class="first"><a href="javascript:;">首页</a></li>',
        prev: '<li class="prev"><a href="javascript:;"><i class="arrow arrow2"></i>上一页</a></li>',
        next: '<li class="next"><a href="javascript:;">下一页<i class="arrow arrow3"></i></a></li>',
        last: '<li class="last"><a href="javascript:;">末页</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (num, type) {
            var pageSize = 5;
            if (type == "change") {
                var keyword = $("#searchInput").val();
                var color = $("#colorSelect").children('option:selected').val();
                var price = $("#priceSelect").children('option:selected').val();
                getPetPeripheryInfo(num,keyword,getSelect(color),getSelect(price))
            }
        }
    });
}

function getPetPeripheryInfo(num,keyword,color,price,pageSize) {
    $.ajax({
        type:"post",
        url:"/petShop/getPeripheryInformation.html",
        dataType:'json',
        data:{
            num:isNull(num)?1:num,
            pageSize:isNull(pageSize)?5:pageSize,
            keyword:isNull(keyword)?'':keyword,
            color:isNull(color)?'':color,
            price:isNull(price)?'':price,
        },
        success:function(data){
            if (data.total==0){
                $(".pet-information").remove();
                $("#form1").hide();
                $("#noData").show();
                $("#totolSize").text(0)
                return;
            }
            $("#form1").show();
            $("#noData").hide();
            //设置分页总条数
            $("#PageCount").val(data.total);
            $("#totolSize").text(data.total)
            loadpage(data.pageNumber);
            //将新数据加载
            var list = data.list;
            $(".pet-information").remove();
            $.each(list, function(i,periphery){
                $("#allData").append("<div class=\"row pet-information\">\n" +
                    "                <div class=\"col-lg-12 \" >\n" +
                    "                    <div class=\"row info-item\" >\n" +
                    "                        <div class=\"col-lg-2 info-img\">\n" +
                    "                            <img src="+(isNull(periphery.imgPath)?'/statics/img/noPic.png':getFirstImg(periphery.imgPath))+" />\n" +
                    "                        </div>\n" +
                    "                        <div class=\"col-lg-8 info-msg\">\n" +
                    "                            <div class=\"row\">\n" +
                    "                                <div class=\"info-title\"><span class='petName' data="+periphery.id+">"+periphery.name+"" +
                    "                                    <span class=\"pet-category\">"+periphery.brand+"</span>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                            <div class=\"row\">\n" +
                    "                                <div class=\"info-content\">\n" +
                    "                                    <span class=\"special\">编号："+periphery.number+"</span>\n" +
                    "                                    <span>品牌："+periphery.brand+"</span>\n" +
                    "                                    <span>颜色："+periphery.type+"</span>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                            <div class=\"row\">\n" +
                    "                                <div class=\"info-content\">\n" +
                    "                                    <span>库存："+periphery.stock+"</span>\n" +
                    "                                    <span>已售："+periphery.sold+"</span>\n" +
                    "                                    <span>重量："+periphery.weight+"</span>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                            <div class=\"row\">\n" +
                    "                                <div class=\"info-content\">\n" +
                    "                                    <span>生产厂家："+periphery.nameOfManufacturer+"</span>\n" +
                    "                                    <span>录入时间："+changeDateFormat(periphery.createTime)+"</span>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                            <div class=\"row\">\n" +
                    "                                <div class=\"info-content\">\n" +
                    "                                    <span><a href=\"javascript:;\" class=\"moreDetails\"  data="+periphery.id+">更多详情</a></span>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                        </div>\n" +
                    "                        <div class=\"col-lg-2 info-price\">\n" +
                    "                            <h3 >价格：<span class=\"pet-information-price\">"+periphery.price+"</span>￥</h3>\n" +
                    "                            <div class=\"info-operation\">\n" +
                    "                                <button  type=\"button\" class=\"btn "+(periphery.stock>0?(periphery.status=='待售'?'btn-primary':'btn-danger'):'btn-default')+" addOrder\" dataId='"+periphery.id+"' dataName='"+periphery.name+"' dataNumber='"+periphery.number+"'  dataStock='"+periphery.stock+"'>"+(periphery.stock>0?(periphery.status=='待售'?'添加订单':'取消订单'):'已售空')+"</button>\n" +
                    "                            </div>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "            </div>")

            })

        }
    })
}

function getSelect(value){
    if(value!="全部"){
        return value;
    }else {
        return '';
    }
}