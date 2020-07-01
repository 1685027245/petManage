$(function () {

    getPetInfo(1);

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
        }else{
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

    //条件筛选
    $("#petCategorySelect,#petMoneySelect,#petShapeSelect,#petHairSelect").change(function () {
        var keyword = $("#searchInput").val();
        var category = $("#petCategorySelect").children('option:selected').val();
        var price = $("#petMoneySelect").children('option:selected').val();
        var shape = $("#petShapeSelect").children('option:selected').val();
        var hairLength = $("#petHairSelect").children('option:selected').val();
        getPetInfo(1,keyword,getSelect(category),getSelect(price),getSelect(shape),getSelect(hairLength))
    })

    //关键字条件查询
    $("#searchBtn").click(function () {
        var keyword = $("#searchInput").val();
        var category = $("#petCategorySelect").children('option:selected').val();
        var price = $("#petMoneySelect").children('option:selected').val();
        var shape = $("#petShapeSelect").children('option:selected').val();
        var hairLength = $("#petHairSelect").children('option:selected').val();
        getPetInfo(1,keyword,getSelect(category),getSelect(price),getSelect(shape),getSelect(hairLength))
    })
    //回车查询
    $("#searchInput").keypress(function (e) {
        // 兼容写法
        e = e || window.event;
        key = e.keyCode || e.which || e.charCode;
        if (key == 13) {// 判断是不是回车
            var keyword = $("#searchInput").val();
            var category = $("#petCategorySelect").children('option:selected').val();
            var price = $("#petMoneySelect").children('option:selected').val();
            var shape = $("#petShapeSelect").children('option:selected').val();
            var hairLength = $("#petHairSelect").children('option:selected').val();
            getPetInfo(1,keyword,getSelect(category),getSelect(price),getSelect(shape),getSelect(hairLength))
        }
    });

    //重置搜索
    $("#searchReset").click(function () {
        $("#searchInput").val("");
        $("#petCategorySelect option:first").prop("selected", 'selected');
        $("#petMoneySelect option:first").prop("selected", 'selected');
        $("#petShapeSelect option:first").prop("selected", 'selected');
        $("#petHairSelect option:first").prop("selected", 'selected');
        getPetInfo(1);
    })

    //返回宠物信息管理页面
    /*$(".canclePets").click(function () {
        loadPage("/petShop/petInformation.html");
    })*/

    //跳转到宠物详情页面
    $("body").on("click",".moreDetails,.petName",function(){
        var id = $(this).attr("data");
        loadPage("/petShop/toPetDetails.html/"+id);
    });

    //添加宠物跳转页面
    $("#addPet").click(function () {
        loadPage("/petShop/addGoods.html/addPet");
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
        /*totalPages: 10,
        visiblePages: 5,*/
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
                var category = $("#petCategorySelect").children('option:selected').val();
                var price = $("#petMoneySelect").children('option:selected').val();
                var shape = $("#petShapeSelect").children('option:selected').val();
                var hairLength = $("#petHairSelect").children('option:selected').val();
                getPetInfo(num,keyword,getSelect(category),getSelect(price),getSelect(shape),getSelect(hairLength))
            }
        }
    });
}

function getPetInfo(num,keyword,category,price,shape,hairLength,pageSize) {
    $.ajax({
        type:"post",
        url:"/petShop/getPetInformation.html",
        dataType:'json',
        data:{
            num:isNull(num)?1:num,
            pageSize:isNull(pageSize)?5:pageSize,
            keyword:isNull(keyword)?'':keyword,
            category:isNull(category)?'':category,
            price:isNull(price)?'':price,
            shape:isNull(shape)?'':shape,
            hairLength:isNull(hairLength)?'':hairLength,
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
            $.each(list, function(i,pet){
                $("#allData").append("" +
                    "<div class=\"row pet-information\">\n" +
                    "                <div class=\"col-lg-2 info-img\">\n" +
                    "                    <img src='"+(isNull(pet.imgPath)?'/statics/img/noPic.png':pet.imgPath.substring(0,pet.imgPath.indexOf(';')))+"'  />\n" +
                    "                </div>\n" +
                    "                <div class=\"col-lg-8 info-msg\">\n" +
                    "                    <div class=\"row\">\n" +
                    "                        <div class=\"info-title\"><span class='petName' data="+pet.id+">"+pet.petEncyclopedias.name+"</span>" +
                    "                            <span class=\"pet-category\">"+pet.petEncyclopedias.category+"</span>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"row\">\n" +
                    "                        <div class=\"info-content\">\n" +
                    "                            <span class=\"special\">编号： "+pet.number+"</span>\n" +
                    "                            <span>中文名："+pet.petEncyclopedias.name+"</span>\n" +
                    "                            <span>别名："+pet.petEncyclopedias.alias+"</span>\n" +
                    "                            <span>录入时间："+changeDateFormat(pet.createTime)+"</span>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"row\">\n" +
                    "                        <div class=\"info-content\">\n" +
                    "                            <span>体型："+pet.shape+"</span>\n" +
                    "                            <span>毛长："+pet.hairLength+"</span>\n" +
                    "                            <span>英文名："+pet.petEncyclopedias.englishName+"</span>\n" +
                    "                            <span> 智商："+pet.petEncyclopedias.intelligenceQuotient+"</span>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"row\">\n" +
                    "                        <div class=\"info-content\">\n" +
                    "                            <span>原产地："+pet.petEncyclopedias.countryOfOrigin+"</span>\n" +
                    "                            <span>体重："+pet.weight+"</span>\n" +
                    "                            <span>寿命："+pet.petEncyclopedias.life+"</span>\n" +
                    "                            <span>毛色："+pet.coatColor+"</span>\n" +
                    "                            <span>功能："+(isNull(pet.petEncyclopedias.function)?'--':pet.petEncyclopedias.function)+"</span>\n" +
                    "                            <span>详细特征："+pet.petEncyclopedias.detailCharacterities+"</span>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"row\">\n" +
                    "                        <div class=\"info-content\">\n" +
                    "                            <span><a href=\"javascript:;\" class='moreDetails'  data='"+pet.id+"'>更多详情</a></span>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "                <div class=\"col-lg-2 info-price\">\n" +
                    "                    <h3 >价格：<span class=\"pet-information-price\">"+pet.price+"</span>￥</h3>\n" +
                    "                    <div class=\"info-operation\">\n" +
                    "                       <button  type=\"button\" class=\"btn "+(pet.salesStatus=='当前订单'?'btn-danger':'btn-primary')+" addOrder\" data='"+pet.id+"'>"+(pet.salesStatus=='当前订单'?'取消订单':'添加订单')+"</button>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "            </div>" +
                    "");
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