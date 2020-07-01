$(function () {

    //初始化宠物百科
    getData(1,"狗狗")

    var petShape = "";
    var hairLength = "";
    var coatColor = "";
    var petFunction = "";
    var environment = "";
    var varieties = "";

    $(".classification-body span").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        var categoryAll = $("#petCategory").attr("data");
        var textClass = $(this).parent().attr("class");
        var text = textClass.substring(textClass.indexOf(" "),textClass.length).trim()
        var thisPetName = $(this).text().trim();
        if(text=="petShape"){
            if(thisPetName=="不限"){
                petShape = ""
            }else{
                petShape = thisPetName
            }
        }
        if(text=="hairLength"){
            if(thisPetName=="不限"){
                hairLength = ""
            }else{
                hairLength = thisPetName
            }
        }
        if(text=="coatColor"){
            if(thisPetName=="不限"){
                coatColor = ""
            }else{
                coatColor = thisPetName
            }
        }
        if(text=="petFunction"){
            if(thisPetName=="不限"){
                petFunction = ""
            }else{
                petFunction = thisPetName
            }
        }
        if(text=="environment"){
            if(thisPetName=="不限"){
                environment = ""
            }else{
                environment = thisPetName
            }
        }
        if(text=="varieties"){
            if(thisPetName=="不限"){
                varieties = ""
            }else{
                varieties = thisPetName
            }
        }
        $("#bannerNav").empty();
        $("#bannerNav").append("<span class='am-icon-caret-right'>筛选：</span>" +
            "<span class='screen'>"+petShape+"</span>" +
            "<span class='screen'>"+hairLength+"</span>" +
            "<span class='screen'>"+coatColor+"</span>" +
            "<span class='screen'>"+petFunction+"</span>" +
            "<span class='screen'>"+environment+"</span>" +
            "<span class='screen'>"+varieties+"</span>" +
            "");
        if(!$("#bannerNav .screen").text()){
            $("#bannerNav .screen").remove();
            $("#bannerNav").append("<span class='screen'>不限</span>");
        }
        console.info("烦烦方",environment,varieties)
        getData(1,categoryAll,petShape,hairLength,coatColor,petFunction,environment,varieties);
    })

    //选项卡点击
    $('.nav-tabs li').click(function(){
        $("#selectInput").val("");
        var petCategory = $(this).text().trim();
        var tabsId = $(this).children("a").attr("href").substring(1);
        $(".classification-body span").removeClass('active');
        $("#"+tabsId+" .classification-body").each(function(){
            $(this).find("span").first().addClass("active");
        });
        $("#petCategory").attr("data",petCategory);

        //清空选项卡
        petShape = "";
        hairLength = "";
        coatColor = "";
        petFunction = "";
        type = "";
        environment = "";
        varieties = "";
        $("#bannerNav .screen").remove();
        $("#bannerNav").append("<span class='screen'>不限</span>");

        if (petCategory=="查询"){
            return;
        }
        getData(1,petCategory)
    });

    //查看详情
    $(document).on("click",".pet-spec-name,.more-details",function () {
        var id = $(this).attr("data");
        loadPage("/open/encyclopediasDetails.html/"+id);
    })

    //查询按钮
    $("#selectBtn").click(function () {
        var keyword = $("#selectInput").val();
        getData(1,null,null,null,null,null,null,null,keyword)
    })

    //回车查询
    $("#selectInput").keypress(function (e) {
        // 兼容写法
        e = e || window.event;
        key = e.keyCode || e.which || e.charCode;
        if (key == 13) {// 判断是不是回车
            var keyword = $("#selectInput").val();
            getData(1,null,null,null,null,null,null,null,keyword)
        }
    });

})

//分页页面
function loadpage(pageNumber,category,shape,hairLength,coatColor,petFunction,environment,varieties,keyword) {
    var myPageCount = parseInt($("#PageCount").val()==0?1:$("#PageCount").val());
    var myPageSize = parseInt($("#PageSize").val()==0?1:$("#PageSize").val());
    var countindex = myPageCount % myPageSize > 0 ? (myPageCount / myPageSize) + 1 : (myPageCount / myPageSize);
    $("#countindex").val(countindex);

    $.jqPaginator('#pagination', {
        totalPages: parseInt($("#countindex").val()),
        visiblePages: parseInt($("#visiblePages").val()),
        currentPage: isNull(pageNumber)?1:pageNumber,
        first: '<li class="first"><a href="javascript:;">首页</a></li>',
        prev: '<li class="prev"><a href="javascript:;"><i class="arrow arrow2"></i>上一页</a></li>',
        next: '<li class="next"><a href="javascript:;">下一页<i class="arrow arrow3"></i></a></li>',
        last: '<li class="last"><a href="javascript:;">末页</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        onPageChange: function (num, type) {
            if (type == "change") {
                getData(num,category,shape,hairLength,coatColor,petFunction,environment,varieties,keyword)
            }
        }
    });
}

function getData(pageNum,category,shape,hairLength,coatColor,petFunction,environment,varieties,keyword,pageSize) {
    //查询宠物百科
    $.ajax({
        type:"post",
        url:"/open/getAllEncyclopedias.html",
        dataType:'json',
        data:{
            pageNum:isNull(pageNum)?1:pageNum,
            category:isNull(category)?'':category,
            shape:isNull(shape)?'':shape,
            hairLength:isNull(hairLength)?'':hairLength,
            coatColor:isNull(coatColor)?'':coatColor,
            petFunction:isNull(petFunction)?'':petFunction,
            environment:isNull(environment)?'':environment,
            varieties:isNull(varieties)?'':varieties,
            keyword:isNull(keyword)?'':keyword,
            pageSize:isNull(pageSize)?5:pageSize,
        },
        success:function(data){
            //设置分页总条数
            $("#PageCount").val(data.total);
            $("#totalSize").text(data.total);
            loadpage(data.pageNumber,category,shape,hairLength,coatColor,petFunction,environment,varieties,keyword);

            $("#encyclopiasAllPet").empty();
            $.each(data.list,function (index,value) {
                $("#encyclopiasAllPet").append("" +
                    "<div class='row container encyclopias-list'>" +
                    "<div class='col-lg-2 no-padding-left' >\n" +
                    "                <img src='"+getFirstImg(value.imgPath)+"' style='width: 100%;height: 150px;'></div>" +
                    "            <div class='col-lg-10 info-data'>" +
                    "                <div class='row' style='padding: 0;'>" +
                    "                    <h3 class='pull-left no-padding pet-spec-name' data='"+value.id+"' >"+value.name+"</h3>\n" +
                    "                    <h3 class='pull-right no-padding price' >参考价格："+value.price+"</h3>\n" +
                    "                </div>" +
                    "                <div class='row infomation-details'>" +
                    "                    <div class='col-lg-4 no-padding'>" +
                    "                        <ul>" +
                    "                            <li><span>中文名："+value.name+"</span></li>" +
                    "                            <li><span>体型："+value.shape+"</span></li>" +
                    "                            <li><span>毛色："+(isNull(value.coatColor)?'--':value.coatColor)+"</span></li>" +
                    ((value.category=='老鼠'||value.category=='宠物鸟'||value.category=='宠物鱼'||value.category=='其它')?'<li><span>种类：'+value.varieties+'</span></li>':(value.category=='宠物龟')?'<li><span>品种：'+value.varieties+'</span></li>':'<li><span>分类：'+value.category+'</span></li>')+
                    /*"                            <li><span>分类："+value.category+"</span></li>" +*/
                    "                        </ul>" +
                    "                    </div>" +
                    "                    <div class='col-lg-4 no-padding'>" +
                    "                        <ul>" +
                    "                            <li><span>英文名："+value.englishName+"</span></li>" +
                    "                            <li><span>毛长："+value.hairLength+"</span></li>" +
                    "                            <li><span>原产地："+value.countryOfOrigin+"</span></li>" +
                    (value.category=='狗狗'?'<li><span>智商：'+value.intelligenceQuotient+'</span></li>':'')+
                    ((value.category=='宠物龟'||value.category=='宠物鱼')?'<li><span>生活环境：'+value.environment+'</span></li>':'')+
                    /*"<li><span>智商："+value.intelligenceQuotient+"</span></li>" +*/
                    "                        </ul>" +
                    "                    </div>" +
                    "                    <div class='col-lg-4 no-padding'>" +
                    "                        <ul>" +
                    "                            <li><span>别名："+value.alias+"</span></li>" +
                    "                            <li><span>体重："+(isNull(value.weight)?'--':value.weight)+"</span></li>" +
                    "                            <li><span>详细特征："+(isNull(value.detailCharacterities)?'--':value.detailCharacterities)+"</span></li>" +
                    (value.category=='狗狗'?'<li><span>功能：'+value.function+'</span></li>':'')+
                    /*"                            <li><span>功能："+value.function+"</span></li>" +*/
                    "                        </ul>" +
                    "                    </div>" +
                    "                </div>" +
                    "                <a class='more-details' data="+value.id+">更多详情</a>" +
                    "            </div>" +
                    "        </div>" +
                    "")
            })
        }
    })


}


function getFirstImg(imgPath) {
    return imgPath.substring(0,imgPath.indexOf(';'));
}