$(function () {
    //0.初始化fileinput
    var oFileInput1 = new FileInput();
    oFileInput1.Init("txt_file_food", "/open/uploadShopImg");

    //初始化地图
    var map = new AMap.Map('mapSelect', {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom: 11, //初始地图级别
    });
    var geocoder,marker,lnglat;
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
                document.getElementById('mapSureAddress').value = address;
                $("#mapSureAddress").attr("longitude",lnglat[0]);
                $("#mapSureAddress").attr("latitude",lnglat[1]);
            }else{
                log.error('根据经纬度查询地址失败')
            }
        });
    }

    map.on('click',function(e){
        lnglat = e.lnglat;
        regeoCode();
    })
    /*获取输入提示信息*/
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
        regeoCode();
    })

    //提交申请
    $("#applicationForSubmissionPetShop").click(function () {
        var petShopName = $("#petShopName").val();
        var petShopCategory = $("#petShopCategory").val();
        var petShopPhone = $("#petShopPhone").val();
        var mapSureAddress = $("#mapSureAddress").val();
        var petShopDescript = $("#petShopDescript").val();
        var longitude = $("#mapSureAddress").attr("longitude");
        var latitude = $("#mapSureAddress").attr("latitude");
        var urlData = $("#petShopName").attr("data");

        if(isNull(petShopName)){
            $('#petShopName').attr("placeholder","宠物店名称不能为空！");
            $('#petShopName').focus();
            return;
        }
        if(isNull(petShopCategory)){
            $('#petShopCategory').attr("placeholder","宠物店类型不能为空！");
            $('#petShopCategory').focus();
            return;
        }

        if(isNull(petShopPhone)){
            $('#petShopPhone').attr("placeholder","宠物店联系电话不能为空！");
            $('#petShopPhone').focus();
            return;
        }
        if(!isPhoneNo(petShopPhone)){
            $('#petShopPhone').attr("placeholder","宠物店电话"+petShopPhone+"格式不对");
            $('#petShopPhone').val("");
            $('#petShopPhone').focus();
            return;
        }

        if(isNull(mapSureAddress)){
            $('#inputMap').attr("placeholder","宠物店地址不能为空！");
            $('#inputMap').focus();
            return;
        }
        if(isNull(petShopDescript)){
            $('#petShopDescript').attr("placeholder","宠物店描述不能为空！");
            $('#petShopDescript').focus();
            return;
        }
        if(isNull(urlData)){
            var opt = {
                title: '申请宠物店',
                width: 400,
                content: "请先上传宠物店图片,审核通过率更高",
                okBtnText: '确定',
                cancelBtnText: '',
                onOk: function () {

                }
            };
            $("#showDialog1").showDialog(opt,150)
            return;
        }

        var opt1 = {
            title: '申请宠物店',
            width: 400,
            content: "正在提交申请<img src='/statics/img/loading.gif' style='width: 30px;height: 30px;margin-left: 5px;margin-bottom: 5px;' />",
            okBtnText: '',
            cancelBtnText: '',
        };
        $("#showDialog1").showDialog(opt1,200)
        if($(this).text().trim()=="再次申请"){
            $.ajax({
                type:"post",
                url:"/open/applyPetShopForSubmission.html",
                dataType:'json',
                data:{
                    id:$("#applicationForSubmissionPetShop").attr("data"),
                    shopName:petShopName,
                    category:petShopCategory,
                    shopPhone:petShopPhone,
                    address:mapSureAddress,
                    detailedDescription:petShopDescript,
                    longitude:longitude,
                    latitude:latitude,
                    shopImgPath:urlData
                },
                success:function(data){
                    if(data=="success"){
                        var opt = {
                            title: '申请宠物店',
                            width: 400,
                            content: "申请成功，2秒后将刷新申请状态",
                            okBtnText: '确定',
                            cancelBtnText: '',
                            onOk: function () {

                            }
                        };
                        setTimeout(function () {
                            $("#showDialog1").modal('hide');
                            $(".modal-backdrop").removeClass("in");
                            setTimeout(function () {
                                loadPage("/open/applyPetShopMsg.html");
                            },2000)
                        },400)
                        setTimeout(function () {
                            $("#showDialog1").showDialog(opt,150)
                        },400)
                    }
                }
            })
        }else {//首次申请
            $.ajax({
                type:"post",
                url:"/open/applyPetShopForSubmission.html",
                dataType:'json',
                data:{
                    shopName:petShopName,
                    category:petShopCategory,
                    shopPhone:petShopPhone,
                    address:mapSureAddress,
                    detailedDescription:petShopDescript,
                    longitude:longitude,
                    latitude:latitude,
                    shopImgPath:urlData
                },
                success:function(data){
                    if(data=="success"){
                        var opt = {
                            title: '申请宠物店',
                            width: 400,
                            content: "申请成功，2秒后将刷新申请状态",
                            okBtnText: '确定',
                            cancelBtnText: '',
                            onOk: function () {

                            }
                        };
                        setTimeout(function () {
                            $("#showDialog1").modal('hide');
                            $(".modal-backdrop").removeClass("in");
                            setTimeout(function () {
                                loadPage("/open/applyPetShopMsg.html");
                            },2000)
                        },400)
                        setTimeout(function () {
                            $("#showDialog1").showDialog(opt,150)
                        },400)
                    }
                }
            })
        }

    })


    //修改申请信息
    $("#updateApplyPetShop").click(function () {
        loadPage("/open/applyPetShop.html/"+$("#petShopName").attr("data"))
    })

    //删除图片
    $(".delImg").click(function () {
        $this = $(this);
        var delImg = $this.parent().children("img").attr("src").substr(1)+";";
        var opt = {
            title: '删除图片',
            width: 400,
            content: "确定删除该图片?",
            okBtnText: '确定',
            cancelBtnText: '取消',
            onOk: function () {
                $this.parent().remove()
                var shopImgPath = $("#petShopName").attr("data");
                shopImgPath = shopImgPath.replace(delImg,"");
                $("#petShopName").attr("data",shopImgPath)
            }
        };
        $("#showDialog1").showDialog(opt,150)
    })

    $("#canclePetShop").click(function () {
        loadPage("/open/applyPetShopMsg.html")
    })
})

//初始化fileinput 文件上传
var FileInput = function () {
    var oFile = new Object();
    //初始化fileinput控件（第一次初始化）
    oFile.Init = function(ctrlName, uploadUrl) {
        var control = $('#' + ctrlName);
        //初始化上传控件的样式
        control.fileinput({
            language: 'zh', //设置语言
            uploadUrl: uploadUrl, //上传的地址
            allowedFileExtensions: ['jpg', 'gif', 'png'],//接收的文件后缀
            showUpload: true, //是否显示上传按钮
            showCaption: false,//是否显示标题
            browseClass: "btn btn-primary", //按钮样式
            //dropZoneEnabled: false,//是否显示拖拽区域
            //minImageWidth: 50, //图片的最小宽度
            //minImageHeight: 50,//图片的最小高度
            //maxImageWidth: 1000,//图片的最大宽度
            //maxImageHeight: 1000,//图片的最大高度
            //maxFileSize: 0,//单位为kb，如果为0表示不限制文件大小
            //minFileCount: 0,
            maxFileCount: 3, //表示允许同时上传的最大文件个数
            enctype: 'multipart/form-data',
            validateInitialCount:true,
            previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
            msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
        });

        //导入文件上传完成之后的事件
        $("#txt_file_food").on("fileuploaded", function (event, data, previewId, index) {
            var urlData = $("#petShopName").attr("data");
            if(isNull(urlData)){
                urlData="";
            }
            urlData+=data.response.url+";";
            $("#petShopName").attr("data",urlData);
            $("#myModal").modal("hide");
            var data = data.response.lstOrderImport;
            if (data == undefined) {
                /*toastr.error('文件格式类型不正确');*/
                return;
            }
            //1.初始化表格
            var oTable = new TableInit();
            oTable.Init(data);
            $("#div_startimport").show();
        });
    }
    return oFile;
};

function getRootPath(){
    // 1、获取当前全路径，如： http://localhost:8080/springmvc/page/frame/test.html
    var curWwwPath = window.location.href;
    // 获取当前相对路径： /springmvc/page/frame/test.html
    var pathName = window.location.pathname;    // 获取主机地址,如： http://localhost:8080
    var local = curWwwPath.substring(0,curWwwPath.indexOf(pathName));
    // 获取带"/"的项目名，如：/springmvc
    return local;
}

function isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
}
