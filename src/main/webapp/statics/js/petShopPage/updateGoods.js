$(function () {

    var pageName = $("#addPageName").attr("data");

    if (pageName=="pet"){
        $("#updatePet").show();
        $("#updateFood").hide();
        $("#updatePeriphery").hide();
        //0.初始化fileinput
        var oFileInput1 = new FileInput();
        oFileInput1.Init("petFileImg", "/petShop/uploadPetImg");
        //初始化类别和种类等下拉属性
        $("#petCategory").val($("#petCategory").attr("data"));
        $("#petShape").val($("#petShape").attr("data"));
        $("#petHairLength").val($("#petHairLength").attr("data"));
        $.ajax({
            type:"get",
            url:"/petShop/getPetEncyclopedias.html",
            dataType:'json',
            data:{
                category:$("#petCategory").attr("data"),
            },
            success:function(data){
                $("#petName option").remove();
                if(isNull(data)){
                    $("#petName").prepend("<option value='0'>请选择</option>");//为Select插入一个Option(第一个位置)
                }else{
                    $("#petName").prepend("<option value='0'>请选择</option>");//为Select插入一个Option(第一个位置)
                    $.each(data,function(index,value){
                        if(value.name==$("#petName").attr("data")){
                            $("#petName").append("<option selected='selected'>"+value.name+"</option>");
                        }else {
                            $("#petName").append("<option >"+value.name+"</option>"); //为Select追加一个Option(下拉项)
                        }

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
        $.ajax({
            type:"get",
            url:"/petShop/getPetEncyclopedias.html",
            dataType:'json',
            data:{
                name:$("#petName").attr("data"),
            },
            success:function(data){
                $("#petAlias").val(data[0].alias);
                $("#petEnglishName").val(data[0].englishName);
                $("#petIQ").val(data[0].intelligenceQuotient);
                $("#petLife").val(data[0].life);
                $("#petCountryOfOrigin").val(data[0].countryOfOrigin);
                $("#petFunction").val(data[0].function);
                $("#petDetailCharacteristies").val(data[0].detailedCharacteristics);
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
    }else if (pageName=="food"){
        $("#updateFood").show();
        $("#updatePet").hide();
        $("#updatePeriphery").hide();
        //0.初始化fileinput
        var oFileInput2 = new FileInput2();
        oFileInput2.Init("foodFileImg", "/petShop/uploadFoodImg");
        //初始化类别等下拉属性
        $("#foodCategory").val($("#foodCategory").attr("data"));
        $("#foodFlavor").val($("#foodFlavor").attr("data"));
    }else if(pageName=="periphery"){
        $("#updateFood").hide();
        $("#updatePet").hide();
        $("#updatePeriphery").show();

        //0.初始化fileinput
        var oFileInput3 = new FileInput3();
        oFileInput3.Init("peripheryFileImg", "/petShop/uploadPeripheryImg");
    }

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

    //修改宠物信息保存
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
        var id = $("#savePets").attr("data");
        $.ajax({
            type:"get",
            url:"/petShop/saveUpdatePet.html",
            data:{
                id:id,
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
                    title: '修改宠物信息',
                    width: 400,
                    content: "修改成功！返回宠物详情?",
                    okBtnText: '确定',
                    cancelBtnText: '取消',
                    onOk: function () {
                        loadPage("/petShop/toPetDetails.html/"+id);
                    }
                };
                $("#showDialog1").showDialog(opt,150)
            }
        })
    })

    //修改食品信息保存
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
        var addressOfManufacturer = $("#foodAddressOfManufacturer").val();
        var nameOfManufacturer = $("#foodNameOfManufacturer").val();
        var remarks = $("#foodRemarks").val();
        var stock = $("#foodStock").val();
        var imgPath = $("#foodFileImg").attr("data");
        var id = $("#saveFood").attr("data");
        $.ajax({
            type:"get",
            url:"/petShop/updateFood.html",
            dataType:'json',
            data:{
                id:id,
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
                    title: '修改食品信息',
                    width: 400,
                    content: "修改食品信息成功!",
                    okBtnText: '确定',
                    cancelBtnText: '取消',
                    onOk: function () {
                        loadPage("/petShop/toFoodDetails.html/"+id);
                    }
                };
                $("#showDialog1").showDialog(opt,150)
            }
        })

    })

    //保存周边商品修改
    $("#savePeriphery").click(function () {
        var id = $("#savePeriphery").attr("data");
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

        $.ajax({
            type:"get",
            url:"/petShop/updatePeriphery.html",
            dataType:'json',
            data:{
                id:id,
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
                    title: '修改商品信息',
                    width: 400,
                    content: "修改商品信息成功!",
                    okBtnText: '确定',
                    cancelBtnText: '取消',
                    onOk: function () {
                        loadPage("/petShop/toPeripheryDetails.html/"+id);
                    }
                };
                $("#showDialog1").showDialog(opt,150)
            }
        })
    })

    //返回宠物信息管理页面
    $(".canclePets").click(function () {
        var id = $(this).attr("data");
        if(pageName=="pet"){
            loadPage("/petShop/toPetDetails.html/"+id);
        }else if (pageName=="food"){
            loadPage("/petShop/toFoodDetails.html/"+id);
        }else if (pageName=="periphery"){
            loadPage("/petShop/toPeripheryDetails.html/"+id);
        }
    })

    //删除图片
    $(document).on("click",".delImg",function () {
        $this = $(this);
        var delImg = $this.parent().children("img").attr("src").substr(0)+";";
        var opt = {
            title: '删除图片',
            width: 400,
            content: "确定删除该图片?",
            okBtnText: '确定',
            cancelBtnText: '取消',
            onOk: function () {
                $this.parent().remove()
                if(pageName=="pet"){
                    var shopImgPath = $("#petFileImg").attr("data");
                    shopImgPath = shopImgPath.replace(delImg,"");
                    $("#petFileImg").attr("data",shopImgPath)
                }else if (pageName=="food"){
                    var shopImgPath = $("#foodFileImg").attr("data");
                    shopImgPath = shopImgPath.replace(delImg,"");
                    $("#foodFileImg").attr("data",shopImgPath)
                }else if(pageName=="periphery"){
                    var shopImgPath = $("#peripheryFileImg").attr("data");
                    shopImgPath = shopImgPath.replace(delImg,"");
                    $("#peripheryFileImg").attr("data",shopImgPath)
                }
            }
        };
        $("#showDialog1").showDialog(opt,150)
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

        //导入文件上传完成之后的事件
        $("#petFileImg").on("fileuploaded", function (event, data, previewId, index) {
            var urlData = $("#petFileImg").attr("data");
            if(isNull(urlData)){
                urlData="";
            }
            urlData+=data.response.url+";";
            $("#petFileImg").attr("data",urlData);

            $("#petImgShow").append("<div class=\"img-one col-lg-3\">\n" +
                "<img src="+data.response.url+" >\n" +
                "<span class=\"delImg glyphicon glyphicon-remove\" title=\"删除该图片\" ></span>\n" +
                "</div>")
        });
    }
    return oFile;
};

//初始化fileinput 文件上传
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

        //导入文件上传完成之后的事件
        $("#foodFileImg").on("fileuploaded", function (event, data, previewId, index) {
            var urlData = $("#foodFileImg").attr("data");
            if(isNull(urlData)){
                urlData="";
            }
            urlData+=data.response.url+";";
            $("#foodFileImg").attr("data",urlData);

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

//初始化fileinput 文件上传
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

        //导入文件上传完成之后的事件
        $("#peripheryFileImg").on("fileuploaded", function (event, data, previewId, index) {
            var urlData = $("#peripheryFileImg").attr("data");
            if(isNull(urlData)){
                urlData="";
            }
            urlData+=data.response.url+";";
            $("#peripheryFileImg").attr("data",urlData);

           /* $("#myModal").modal("hide");
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
