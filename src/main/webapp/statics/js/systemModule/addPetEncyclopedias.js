$(function () {

    //0.初始化fileinput
    var oFileInput = new FileInput();
    oFileInput.Init("encyclopediasImg", "/system/uploadPetEncyclopediasImg");

    var pageId = $("#pageId").attr("data");

    if(pageId!=0){
        $("#savePetEncyclopedias").text("保存修改");
        var category = $("#category").attr("data");//类别
        $("#category option[value='"+category+"']").prop("selected", true);
        var shape = $("#shape").attr("data");//类别
        $("#shape option[value='"+shape+"']").prop("selected", true);
        var hairLength = $("#hairLength").attr("data");//类别
        $("#hairLength option[value='"+hairLength+"']").prop("selected", true);
        var environment = $("#environment").attr("data");//品种/种类
        $("#environment option[value='"+environment+"']").prop("selected", true);
    }

    $("#savePetEncyclopedias").click(function () {
        if(pageId==0){//新增百科
            $.ajax({
                type: "post",
                url: "/system/addEncyclopedias.html",
                dataType: 'json',
                data: {
                    name:$("#name").val(),
                    alias:$("#alias").val(),
                    shape:$("#shape option:selected").val(),
                    hairLength:$("#hairLength option:selected").val(),
                    englishName:$("#englishName").val(),
                    intelligenceQuotient:$("#intelligenceQuotient").val(),
                    countryOfOrigin:$("#countryOfOrigin").val(),
                    weight:$("#weight").val(),
                    life:$("#life").val(),
                    price:$("#price").val(),
                    coatColor:$("#coatColor").val(),
                    function:$("#function").val(),
                    detailCharacterities:$("#detailCharacterities").val(),
                    origin:$("#origin").val(),
                    category:$("#category option:selected").val(),
                    imgPath:$("#encyclopediasImg").attr("data"),
                    environment:$("#environment").val(),
                    varieties:$("#varieties").val(),
                },
                success: function (data) {
                    var opt = {
                        title: '新增宠物百科',
                        width: 400,
                        content: "新增成功！",
                        cancelBtnText: '继续新增',
                        okBtnText: "返回宠物百科",
                        onOk: function () {
                            loadPage("/system/petEncyclopedias.html");
                        }
                    };
                    setTimeout(function () {
                        $("#showDialog1").showDialog(opt,150,"");
                    },400)
                }
            })
        }else {//修改百科
            $.ajax({
                type: "post",
                url: "/system/editEncyclopedias.html",
                dataType: 'json',
                data: {
                    id:$("#name").attr("data"),
                    name:$("#name").val(),
                    alias:$("#alias").val(),
                    shape:$("#shape option:selected").val(),
                    hairLength:$("#hairLength option:selected").val(),
                    englishName:$("#englishName").val(),
                    intelligenceQuotient:$("#intelligenceQuotient").val(),
                    countryOfOrigin:$("#countryOfOrigin").val(),
                    weight:$("#weight").val(),
                    life:$("#life").val(),
                    price:$("#price").val(),
                    coatColor:$("#coatColor").val(),
                    function:$("#function").val(),
                    detailCharacterities:$("#detailCharacterities").val(),
                    origin:$("#origin").val(),
                    category:$("#category option:selected").val(),
                    imgPath:$("#encyclopediasImg").attr("data"),
                    environment:$("#environment").val(),
                    varieties:$("#varieties").val(),
                },
                success: function (data) {
                    var opt = {
                        title: '修改宠物百科',
                        width: 400,
                        content: "修改成功！",
                        cancelBtnText: '',
                        okBtnText: "返回宠物百科",
                        onOk: function () {
                            loadPage("/system/petEncyclopedias.html");
                        }
                    };
                    setTimeout(function () {
                        $("#showDialog1").showDialog(opt,150,"");
                    },400)
                }
            })
        }

    })

    $("#canclePetEncyclopedias").click(function () {
        loadPage("/system/petEncyclopedias.html");
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
                $this.parent().remove();
                var shopImgPath = $("#encyclopediasImg").attr("data");
                shopImgPath = shopImgPath.replace(delImg,"");
                $("#encyclopediasImg").attr("data",shopImgPath);
            }
        };
        $("#showDialog1").showDialog(opt,150)
    })
})

//初始化fileinput
var FileInput = function () {
    var oFile = new Object();
    //初始化fileinput控件（第一次初始化）
    oFile.Init = function(ctrlName, uploadUrl) {
        var control = $('#' + ctrlName);
        //初始化上传控件的样式
        control.fileinput({
            language: 'zh', //设置语言
            uploadUrl: uploadUrl, //上传的地址
            allowedFileExtensions: ['jpg', 'gif', 'png','jfif'],//接收的文件后缀
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
            maxFileCount: 9, //表示允许同时上传的最大文件个数
            enctype: 'multipart/form-data',
            validateInitialCount:true,
            previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
            msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
        });

        //导入文件上传完成之后的事件
        $("#encyclopediasImg").on("fileuploaded", function (event, data, previewId, index) {
            var urlData = $("#encyclopediasImg").attr("data");
            if(isNull(urlData)){
                urlData="";
            }
            urlData+=data.response.url+";";
            $("#encyclopediasImg").attr("data",urlData);

            $("#showImg").append("<div class=\"img-one col-lg-3\">\n" +
                "<img src="+data.response.url+" >\n" +
                "<span class=\"delImg glyphicon glyphicon-remove\" title=\"删除该图片\" ></span>\n" +
                "</div>")

            /*$("#myModal").modal("hide");
            var data = data.response.lstOrderImport;
            if (data == undefined) {
                toastr.error('文件格式类型不正确');
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
