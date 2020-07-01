$(function () {
    //初始化数据
    getData();
    //初始化附近
    getData(1,113.3612,23.12468);

    //条件查询
    $("#searchBtn").click(function () {
        var keyword = $("#searchInput").val();
        getData(1,null,null,keyword);
    })
    $("#searchInput").keypress(function (e) {
        if (e.which == 13) {
            var keyword = $("#searchInput").val();
            getData(1,null,null,keyword);
        }
    });

    //显示地图
    $("#showMapBtn").click(function () {
        if($(this).text()=="显示地图"){
            $("#mapSelect").show();
            $(this).text("隐藏地图")
        }else {
            $("#mapSelect").hide();
            $(this).text("显示地图")
        }
    })

    //查询附近
    $("#searchMapBtn").click(function () {
        var longitude = $("#inputMap").attr("longitude");
        var latitude = $("#inputMap").attr("latitude");
        console.info("帆帆帆帆",longitude,latitude);
        getData(1,longitude,latitude,null);
    })



    //初始化地图
    map = new AMap.Map('mapSelect', {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom: 11, //初始地图级别
    });
    var geocoder,marker,lnglat;

    marker = new AMap.Marker({});
    marker.setMap(map);

    function regeoCode() {
        if(!geocoder){
            geocoder = new AMap.Geocoder({
                city: "010", //城市设为北京，默认：“全国”
                radius: 1000 //范围，默认：500
            });
        }
        if(!marker){
            marker = new AMap.Marker();
            map.add(marker);
        }
        marker.setPosition(lnglat);

        geocoder.getAddress(lnglat, function(status, result) {
            if (status === 'complete'&&result.regeocode) {
                var address = result.regeocode.formattedAddress;
                $("#inputMap").val(address)
                $("#inputMap").attr("longitude",lnglat.lng);
                $("#inputMap").attr("latitude",lnglat.lat);
            }else{
                log.error('根据经纬度查询地址失败')
            }
        });
    }

    map.on('click',function(e){
        lnglat = e.lnglat;
        regeoCode();
    })

    // 获取输入提示信息
    function autoInput(){
        var keywords = document.getElementById("inputMap").value;
        AMap.plugin('AMap.Autocomplete', function(){
            // 实例化Autocomplete
            var autoOptions = {
                city: '全国'
            }
            var autoComplete = new AMap.Autocomplete(autoOptions);
            autoComplete.search(keywords, function(status, result) {
                // 搜索成功时，result即是对应的匹配数据
                let tips = result.tips;
                let tishtml = "";
                $.each(tips,function(index,item){
                    tishtml+="<span lat="+item.location.lat+" lng="+item.location.lng+">"+item.name+"</span>"
                })
                tishtml+="<div class='close-map' id='closeMap'><strong >关闭</strong></div>"
                if(!isNull(tips)){
                    $("#input-info").css("display","block");
                }else {
                    $("#input-info").css("display","none");
                }
                $("#input-info").html(tishtml);

                $("#closeMap").on("click",function(){
                    $("#input-info").css("display","none");
                })
            })
        })
    }
    autoInput();
    document.getElementById("inputMap").oninput = autoInput;
    $("#input-info").on("click",'span',function(){
        let lat = $(this).attr("lat");
        let lng = $(this).attr("lng");
        map.panTo([lng, lat]);
        lnglat=[lng, lat];
        $("#inputMap").attr("longitude",lng);
        $("#inputMap").attr("latitude",lat);
        regeoCode();
    })
})
function getData(pageNum,longitude,latitude,keyword,pageSize) {
    //查询宠物百科
    $.ajax({
        type:"post",
        url:"/open/getNearByPetShop.html",
        dataType:'json',
        data:{
            pageNum:isNull(pageNum)?1:pageNum,
            pageSize:isNull(pageSize)?6:pageSize,
            longitude:isNull(longitude)?null:longitude,
            latitude:isNull(latitude)?null:latitude,
            keyword:isNull(keyword)?null:keyword,
        },
        success:function(data){
            //设置分页总条数
            $("#PageCount").val(data.total);
            $("#PageSize").val(isNull(pageSize)?6:pageSize);
            $("#totalSize").text(data.total);
            loadpage(isNull(pageNum)?1:pageNum);

            var page = null;
            if(!isNull(longitude)&&!isNull(latitude)){
                page =  $("#nearDataShop");
            }else {
                page =  $("#allDataShop");
            }
            page.empty();
            $.each(data.list,function (index,petShop){

                var marker = new AMap.Marker({});
                setMyMarker(marker,petShop.longitude,petShop.latitude,petShop.shopName);
                marker.setMap(map);

                page.append("<div class=\"am-u-sm-6 am_bdfw_block\">\n" +
                    "<div class=\"am_bdfw_block_l\">\n" +
                    "    <div class=\"am_bdfw_block_l_info\">\n" +
                    "        <div class=\"am_bdfw_block_l_info_l\"><img src="+petShop.shopImgPath+" ></div>\n" +
                    "        <div class=\"am_bdfw_block_l_info_r\">\n" +
                    "            <span class='petshopDistan'><a href='/open/petShopDetails.html/"+petShop.id+"'>"+petShop.shopName+"</a>"+(isNull(petShop.distance)?'':'<i class="am-icon-street-view"></i>'+petShop.distance+'M')+"</span>\n" +
                    "            <span class=\"bdfw_nr_brief_star\">\n" +
                    "             <input name=\"dictLevel\" class='rating-loading rateShow' value="+petShop.score+" />" +
                    "            </span>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "    <div class=\"am_bdfw_block_b\">\n" +
                    "        <div> <i>●</i> 联系电话："+petShop.shopPhone+"</div>\n" +
                    "        <div> <i>●</i> 营业时间："+petShop.businessHours+"</div>\n" +
                    "        <div> <i>●</i> 地址："+petShop.address+"</div>\n" +
                    "    </div>\n" +
                    "</div>\n" +
                    "<a href=\"/open/petShopDetails.html/"+petShop.id+"\" class=\"am_bdfw_block_r\"><i class=\"am-icon-ellipsis-v\" title=\"宠物店详情\"></i><i class=\"am-icon-chevron-right\"></i></a>\n" +
                    "</div>");
                //初始化评分
                $('.rateShow').rating({
                    clearButton:"",
                    step: 0.5,
                    size: 'sm',//分分大小可选lg,sm,xl,xs
                    starCaptions: getRateName() ,
                    starCaptionClasses: getRateColor(),
                    hoverEnabled: true, //是否经过时有效果
                    readonly: true
                });
            })
        }
    })
}

//分页页面
function loadpage(pageNumber) {
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
                var keyword = $("#searchInput").val();
                var longitude = $("#inputMap").attr("longitude");
                var latitude = $("#inputMap").attr("latitude");
                getData(num,longitude,latitude,keyword);
            }
        }
    });
}


//获取评分名称样式
function getRateName() {
    var map = {};
    for(var i=0;i<=5;){
        map[i] = i+"分";
        i = numAdd(i,0.1)
    }
    return map;
}

//获取评分颜色样式
function getRateColor() {
    var map = {};
    for(var i=0;i<=5;){
        if(i>=4.5){
            map[i] = "label label-success badge-success";
        }else if(i>=4&&i<4.5){
            map[i] = "label label-primary badge-primary";
        }else if(i>=3&&i<4){
            map[i] = "label label-info badge-info";
        } else {
            map[i] = "label label-danger badge-danger";
        }
        i = numAdd(i,0.1)
    }
    return map;
}


/**
 * 加法运算，避免数据相加小数点后产生多位数和计算精度损失。
 * @param num1加数1 | num2加数2
 */
function numAdd(num1, num2) {
    var baseNum, baseNum1, baseNum2;
    try {
        baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
};


function setMyMarker(marker,longitude,latitude,shopName) {
    // 自定义点标记内容
    var markerContent = document.createElement("div");

    // 点标记中的图标
    var markerImg = document.createElement("img");
    markerImg.className = "markerlnglat";
    markerImg.src = "http://webapi.amap.com/theme/v1.3/markers/n/mark_r.png";
    markerContent.appendChild(markerImg);

    // 点标记中的文本
    var markerSpan = document.createElement("span");
    markerSpan.className = 'marker';
    markerSpan.innerHTML = shopName;;
    markerContent.appendChild(markerSpan);

    marker.setContent(markerContent); //更新点标记内容
    marker.setPosition([longitude,latitude]); //更新点标记位置
}