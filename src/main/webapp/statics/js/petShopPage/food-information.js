$(function () {


    //初始化第一页数据
    getFoodInfo(1)

    $("#addFood").click(function () {
        //添加食品跳转页面
        loadPage("/petShop/addGoods.html/addFood");
    })

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
        }else if($this.text().trim()=="添加订单"){
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
                "<div class='col-lg-4 left-label-title' style='padding-top: 7px' ><label>数量:</label></div>" +
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

    //跳转食品详情页面
    $("body").on("click",".moreDetails,.foodName",function(){
        var id = $(this).attr("data");
        loadPage("/petShop/toFoodDetails.html/"+id);
    })

    //条件筛选
    $("#foodCategorySelect,#foodPriceSelect,#foodFlavorSelect").change(function () {
        var keyword = $("#foodKeyword").val();
        var category = $("#foodCategorySelect").children('option:selected').val();
        var price = $("#foodPriceSelect").children('option:selected').val();
        var flavor = $("#foodFlavorSelect").children('option:selected').val();
        getFoodInfo(1,getSelect(keyword),getSelect(category),getSelect(price),getSelect(flavor))
    })

    //关键字条件查询
    $("#searchBtn").click(function () {
        var keyword = $("#foodKeyword").val();
        var category = $("#foodCategorySelect").children('option:selected').val();
        var price = $("#foodPriceSelect").children('option:selected').val();
        var flavor = $("#foodFlavorSelect").children('option:selected').val();
        getFoodInfo(1,getSelect(keyword),getSelect(category),getSelect(price),getSelect(flavor))
    })
    //回车查询
    $("#foodKeyword").keypress(function (e) {
        // 兼容写法
        e = e || window.event;
        key = e.keyCode || e.which || e.charCode;
        if (key == 13) {// 判断是不是回车
            var keyword = $("#foodKeyword").val();
            var category = $("#foodCategorySelect").children('option:selected').val();
            var price = $("#foodPriceSelect").children('option:selected').val();
            var flavor = $("#foodFlavorSelect").children('option:selected').val();
            getFoodInfo(1,getSelect(keyword),getSelect(category),getSelect(price),getSelect(flavor))
        }
    });

    //重置搜索
    $("#searchReset").click(function () {
        $("#foodKeyword").val("");
        $("#foodCategorySelect option:first").prop("selected", 'selected');
        $("#foodPriceSelect option:first").prop("selected", 'selected');
        $("#foodFlavorSelect option:first").prop("selected", 'selected');
        getFoodInfo(1);
    })

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
            /*var pageSize = 5;
            var startRow = (num-1)*pageSize+1;*/
            if (type == "change") {
                var keyword = $("#foodKeyword").val();
                var category = $("#foodCategorySelect").children('option:selected').val();
                var price = $("#foodPriceSelect").children('option:selected').val();
                var flavor = $("#foodFlavorSelect").children('option:selected').val();
                getFoodInfo(num,getSelect(keyword),getSelect(category),getSelect(price),getSelect(flavor))
            }
        }
    });
}


function getFoodInfo(num,keyword,category,price,flavor,pageSize) {
    $.ajax({
        type:"post",
        url:"/petShop/getFoodInformation.html",
        dataType:'json',
        data:{
            num:isNull(num)?1:num,
            pageSize:isNull(pageSize)?5:pageSize,
            keyword:isNull(keyword)?'':keyword,
            category:isNull(category)?'':category,
            price:isNull(price)?'':price,
            flavor:isNull(flavor)?'':flavor,
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
            $("#PageCount").val(data.total==0?1:data.total);
            $("#totolSize").text(data.total)
            $("#pages").text(data.pages)
            loadpage(data.pageNumber);

            //将新数据加载
            var list = data.list;
            $(".pet-information").remove();
            $.each(list, function(i,food){
                $("#allData").append(" <div class=\"row pet-information\">\n" +
                    "                <div class=\"col-lg-2 info-img\">\n" +
                    "                    <img src="+(isNull(food.imgPath)?'/statics/img/noPic.png':getFirstImg(food.imgPath))+" />\n" +
                    "                </div>\n" +
                    "                <div class=\"col-lg-8 info-msg\">\n" +
                    "                    <div class=\"row\">\n" +
                    "                        <div class=\"info-title\" ><span class='foodName' data="+food.id+">"+food.name+"</span>" +
                    "                            <span class=\"pet-category\">"+food.category+"</span>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"row\">\n" +
                    "                        <div class=\"info-content\">\n" +
                    "                            <span class=\"special\">编号："+food.foodSerialNumber+"</span>\n" +
                    "                            <span>品牌："+food.brand+"</span>\n" +
                    "                            <span>风味："+food.flavor+"</span>\n" +
                    "                            <span>规格："+food.specification+"</span>\n" +
                    "                            <span>生产日期："+food.dateOfManufacture+"</span>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"row\">\n" +
                    "                        <div class=\"info-content\">\n" +
                    "                            <span>存储方式："+food.storageMode+"</span>\n" +
                    "                            <span>保质期："+food.shelfLife+"</span>\n" +
                    "                            <span>产地："+food.placeOfOrigin+"</span>\n" +
                    "                            <span>库存数量："+food.stock+"</span>\n" +
                    "                            <span>已售："+food.sold+"</span>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"row\">\n" +
                    "                        <div class=\"info-content\">\n" +
                    "                            <span>使用说明："+food.instructions+"</span>\n" +
                    "                            <span>生产厂家："+food.nameOfManufacturer+"</span>\n" +
                    "                            <span>录入时间："+changeDateFormat(food.createTime)+"</span>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"row\">\n" +
                    "                        <div class=\"info-content\">\n" +
                    "                            <a href=\"javascript:;\" class=\"moreDetails\" data="+food.id+"  >更多详情</a>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "                <div class=\"col-lg-2 info-price\">\n" +
                    "                    <h3>价格：<span class=\"pet-information-price\">"+food.price+"</span>￥</h3>\n" +
                    "                    <div class=\"info-operation\">\n" +
                    "                            <button  type=\"button\" class=\"btn "+(food.stock>0?(food.status=='当前订单'?'btn-danger':'btn-primary'):'btn-default')+"  addOrder\"\n" +
                    "                                     dataId="+food.id+" dataName="+food.name+"\n" +
                    "                                     dataSerialNumber="+food.foodSerialNumber+"\n" +
                    "                                     dataStock="+food.stock+" >"+(food.stock>0?(food.status=='当前订单'?'取消订单':'添加订单'):'已售空')+"</button>\n" +
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