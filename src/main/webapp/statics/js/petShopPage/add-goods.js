$(function () {

    //0.初始化fileinput  宠物图片
    var oFileInput1 = new FileInput();
    oFileInput1.Init("petFileImg", "/petShop/uploadPetImg");
    //食品图片
    var oFileInput2 = new FileInput2();
    oFileInput2.Init("foodFileImg", "/petShop/uploadFoodImg");
    //宠物周边商品图片
    var oFileInput3 = new FileInput3();
    oFileInput3.Init("peripheryFileImg", "/petShop/uploadPeripheryImg");

    //判断增加数据
    var pageName = $("#addPageName").attr("data");
    if (pageName=="addPet"){
        $("#tabPet").addClass("active");
        $("#homePet").addClass("active");
        $("#tabFood").removeClass("active");
        $("#homeFood").removeClass("active");
        $("#tabPeriphery").removeClass("active");
        $("#homePeriphery").removeClass("active");
    } else if(pageName=="addFood"){
        $("#tabPet").removeClass("active");
        $("#homePet").removeClass("active");
        $("#tabFood").addClass("active");
        $("#homeFood").addClass("active");
        $("#tabPeriphery").removeClass("active");
        $("#homePeriphery").removeClass("active");
    }else if(pageName=="addPeriphery"){
        $("#tabPet").removeClass("active");
        $("#homePet").removeClass("active");
        $("#tabFood").removeClass("active");
        $("#homeFood").removeClass("active");
        $("#tabPeriphery").addClass("active");
        $("#homePeriphery").addClass("active");
    }

    //新增宠物食品信息
    $("#saveFood").click(function () {
        var foodSerialNumber = $("#foodSerialNumber").val();
        var name = $("#foodName").val();
        var category = $("#foodCategory").val();
        var brand = $("#foodBrand").val();
        var flavor = $("#foodFlavor").val();
        var specification = $("#foodSpecification").val();
        var shelfLife = $("#foodShelfLife").val();
        var placeOfOrigin = $("#foodPlaceOfOrigin").val();
        var storageMode = $("#foodStorageMode").val();
        var price = $("#foodPrice").val();
        var instructions = $("#foodExplain").val();
        var dateOfManufacture = $("#foodDateOfManufacture").val();
        var addressOfManufacturer = $("#province1").val()+$("#city1").val()+$("#district1").val()+$("#foodAddressOfManufacturer").val();
        var nameOfManufacturer = $("#foodNameOfManufacturer").val();
        var remarks = $("#foodRemarks").val();
        var stock = $("#foodStock").val();
        var imgPath = $("#foodFileImg").attr("data");

        if(isNull(foodSerialNumber)){
            $("#foodSerialNumber").focus();
            return;
        }
        if(isNull(name)){
            $("#foodName").focus();
            return;
        }
        if(isNull(specification)){
            $("#foodSpecification").focus();
            return;
        }
        if(isNull(price)){
            $("#foodPrice").focus();
            return;
        }
        if(isNull(stock)){
            $("#foodStock").focus();
            return;
        }

        $.ajax({
            type:"get",
            url:"/petShop/addFood.html",
            dataType:'json',
            data:{
                foodSerialNumber:foodSerialNumber,
                name:name,
                category:category,
                brand:brand,
                flavor:flavor,
                specification:specification,
                shelfLife:shelfLife,
                placeOfOrigin:placeOfOrigin,
                storageMode:storageMode,
                price:price,
                instructions:instructions,
                dateOfManufacture:dateOfManufacture,
                addressOfManufacturer:addressOfManufacturer,
                nameOfManufacturer:nameOfManufacturer,
                remarks:remarks,
                stock:stock,
                imgPath:imgPath
            },
            success:function(data){
                var opt = {
                    title: '新增食品',
                    width: 400,
                    content: "新增食品成功!",
                    okBtnText: '确定',
                    cancelBtnText: '取消',
                    onOk: function () {
                        loadPage("/petShop/foodInformation.html");
                    }
                };
                $("#showDialog1").showDialog(opt,150)
            }
        })

    })

    //宠物类别改变监听事件
    $("#petCategory").change(function () {
        var category = $(this).children("option:selected").val();
        $.ajax({
            type:"get",
            url:"/petShop/getPetEncyclopedias.html",
            dataType:'json',
            data:{
                category:category,
            },
            success:function(data){
                $("#petName option").remove();
                if(isNull(data)){
                    $("#petName").prepend("<option value='0'>请选择</option>");//为Select插入一个Option(第一个位置)
                }else{
                    $("#petName").prepend("<option value='0'>请选择</option>");//为Select插入一个Option(第一个位置)
                    $.each(data,function(index,value){
                        $("#petName").append("<option >"+value.name+"</option>"); //为Select追加一个Option(下拉项)
                    });
                }
                if($("#petName").children("option:selected").val()=="0"){
                    $("#petOrigin").empty();
                    $("#petAlias").val("无");
                    $("#petEnglishName").val("无");
                    $("#petIQ").val("无");
                    $("#petLife").val("无");
                    $("#petCountryOfOrigin").val("无");
                    $("#petFunction").val("无");
                    $("#petDetailCharacteristies").val("无");
                }
            }
        })
    })

    //宠物品种改变监听事件
    $("#petName").change(function () {
        var name = $(this).children("option:selected").val();

        if(name!="请选择"){
            $.ajax({
                type:"get",
                url:"/petShop/getPetEncyclopedias.html",
                dataType:'json',
                data:{
                    name:name,
                },
                success:function(data){
                    $("#petAlias").val(data[0].alias);
                    $("#petEnglishName").val(data[0].englishName);
                    $("#petIQ").val(data[0].intelligenceQuotient);
                    $("#petLife").val(data[0].life);
                    $("#petCountryOfOrigin").val(data[0].countryOfOrigin);
                    $("#petFunction").val(data[0].function);
                    $("#petDetailCharacteristies").val(data[0].detailedCharacteristics);
                    $("#environment").val(data[0].environment);
                    $("#varieties").val(data[0].varieties);

                    $("#petOrigin").empty();
                    $("#petOrigin").removeAttr("data")
                    /*$("#petOrigin").text(data[0].origin);*/
                    $("#petOrigin").append("<div class=\"col-lg-1 pet-value-name\">起源：</div>\n" +
                        "<div class=\"col-lg-11 pet-origin\">\n" +
                        "<p >"+data[0].origin+"</p>\n" +
                        "</div>");
                    $("#petOrigin").attr("data",data[0].id);
                }
            })
        }else{
            $("#petOrigin").empty();
            $("#petOrigin").removeAttr("data")
        }

    })

    //新增宠物信息保存
    $("#savePets").click(function () {
        var nickName = $("#nickName").val();
        var shape = $("#petShape").find("option:selected").text();
        var hairLength = $("#petHairLength").find("option:selected").text();
        var weight = $("#petWeight").val();
        var price = $("#petPrice").val();
        var imgPath = $("#petFileImg").attr("data");;
        var number = $("#petNumber").val();
        var remarks = $("#petRemarks").val();
        var petEncyclopediasId = $("#petOrigin").attr("data");
        var coatColor = $("#petCoatColor").val();
        var category = $("#petCategory").find("option:selected").text();

        if(isNull(number)){
            $("#petNumber").focus();
            return;
        }
        if(isNull(weight)){
            $("#petWeight").focus();
            return;
        }
        if(isNull(coatColor)){
            $("#petCoatColor").focus();
            return;
        }
        if(isNull(price)){
            $("#petPrice").focus();
            return;
        }

        $.ajax({
            type:"get",
            url:"/petShop/saveAddPets.html",
            data:{
                nickName:nickName,
                shape:shape,
                hairLength:hairLength,
                weight:weight,
                price:price,
                imgPath:imgPath,
                number:number,
                remarks:remarks,
                petEncyclopediasId:petEncyclopediasId,
                coatColor:coatColor,
                category:category
            },
            success:function(){
                var opt = {
                    title: '新增食品',
                    width: 400,
                    content: "新增宠物成功!",
                    okBtnText: '确定',
                    cancelBtnText: '取消',
                    onOk: function () {
                        loadPage("/petShop/petInformation.html");
                    }
                };
                $("#showDialog1").showDialog(opt,150)
            }
        })
    })

    //新增宠物周边商品
    $("#savePeriphery").click(function () {
        var peripheryNumber = $("#peripheryNumber").val();
        var peripheryName = $("#peripheryName").val();
        var peripheryType = $("#peripheryType").val();
        var peripheryBrand = $("#peripheryBrand").val();
        var peripheryStock = $("#peripheryStock").val();
        var peripheryPrice = $("#peripheryPrice").val();
        var peripheryWeight = $("#peripheryWeight").val();
        var peripheryNameOfManufacturer = $("#peripheryNameOfManufacturer").val();
        var peripheryRemarks = $("#peripheryRemarks").val();
        var imgPath = $("#peripheryFileImg").attr("data");

        if(isNull(peripheryNumber)){
            $("#peripheryNumber").focus();
            return;
        }
        if(isNull(peripheryName)){
            $("#peripheryName").focus();
            return;
        }
        if(isNull(peripheryType)){
            $("#peripheryType").focus();
            return;
        }
        if(isNull(peripheryPrice)){
            $("#peripheryPrice").focus();
            return;
        }
        if(isNull(peripheryStock)){
            $("#peripheryStock").focus();
            return;
        }
        if(isNull(peripheryWeight)){
            $("#peripheryWeight").focus();
            return;
        }

        $.ajax({
            type:"get",
            url:"/petShop/addPeriphery.html",
            dataType:'json',
            data:{
                name:peripheryName,
                price:peripheryPrice,
                brand:peripheryBrand,
                type:peripheryType,
                number:peripheryNumber,
                stock:peripheryStock,
                imgPath:imgPath,
                weight:peripheryWeight,
                remarks:peripheryRemarks,
                nameOfManufacturer:peripheryNameOfManufacturer
            },
            success:function(data){
                var opt = {
                    title: '新增商品',
                    width: 400,
                    content: "新增商品成功!",
                    okBtnText: '确定',
                    cancelBtnText: '取消',
                    onOk: function () {
                        loadPage("/petShop/peripheryInformation.html");
                    }
                };
                $("#showDialog1").showDialog(opt,150)
            }
        })
    })

    //返回宠物信息管理页面
    $(".canclePets").click(function () {
        if(pageName=="addPet"){
            loadPage("/petShop/petInformation.html");
        }else if (pageName=="addFood"){
            loadPage("/petShop/foodInformation.html");
        }else if (pageName=="addPeriphery"){
            loadPage("/petShop/peripheryInformation.html");
        }
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
            maxFileCount: 10, //表示允许同时上传的最大文件个数
            enctype: 'multipart/form-data',
            validateInitialCount:true,
            previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
            msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
        });

        //导入文件上传完成之后的事件-宠物
        $("#petFileImg").on("fileuploaded", function (event, data, previewId, index) {
            var urlData = $("#petFileImg").attr("data");
            if(isNull(urlData)){
                urlData="";
            }
            urlData+=data.response.url+";";
            $("#petFileImg").attr("data",urlData);
            /*$("#myModal").modal("hide");
            var data = data.response.lstOrderImport;
            if (data == undefined) {
                /!*toastr.error('文件格式类型不正确');*!/
                return;
            }
            //1.初始化表格
            var oTable = new TableInit();
            oTable.Init(data);
            $("#div_startimport").show();*/
        });
    }
    return oFile;
};

//初始化fileinput 文件上传 食品图片
var FileInput2 = function () {
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
            maxFileCount: 10, //表示允许同时上传的最大文件个数
            enctype: 'multipart/form-data',
            validateInitialCount:true,
            previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
            msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
        });

        //导入文件上传完成之后的事件-食品
        $("#foodFileImg").on("fileuploaded", function (event, data, previewId, index) {
            var urlData = $("#foodFileImg").attr("data");
            if(isNull(urlData)){
                urlData="";
            }
            urlData+=data.response.url+";";
            $("#foodFileImg").attr("data",urlData);
            /*$("#myModal").modal("hide");
            var data = data.response.lstOrderImport;
            if (data == undefined) {
                /!*toastr.error('文件格式类型不正确');*!/
                return;
            }
            //1.初始化表格
            var oTable = new TableInit();
            oTable.Init(data);
            $("#div_startimport").show();*/
        });
    }
    return oFile;
};

//初始化fileinput 文件上传 宠物周边商品图片
var FileInput3 = function () {
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
            maxFileCount: 10, //表示允许同时上传的最大文件个数
            enctype: 'multipart/form-data',
            validateInitialCount:true,
            previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
            msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
        });

        //导入文件上传完成之后的事件-食品
        $("#peripheryFileImg").on("fileuploaded", function (event, data, previewId, index) {
            var urlData = $("#peripheryFileImg").attr("data");
            if(isNull(urlData)){
                urlData="";
            }
            urlData+=data.response.url+";";
            $("#peripheryFileImg").attr("data",urlData);
            /*$("#myModal").modal("hide");
            var data = data.response.lstOrderImport;
            if (data == undefined) {
                /!*toastr.error('文件格式类型不正确');*!/
                return;
            }
            //1.初始化表格
            var oTable = new TableInit();
            oTable.Init(data);
            $("#div_startimport").show();*/
        });
    }
    return oFile;
};

