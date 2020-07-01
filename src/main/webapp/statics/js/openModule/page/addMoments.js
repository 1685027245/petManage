$(function () {
    //0.初始化fileinput
    var oFileInput1 = new FileInput();
    oFileInput1.Init("momentsImgFile", "/open/uploadMomentsImg");

    var momentsId = $("#momentsImgFile").attr("momentsId");

    //保存为草稿
    $("#saveMoments").click(function () {
        var content = $("#content").val();
        var imgPath = $("#momentsImgFile").attr("data");
        if (isNull(momentsId)){
            saveMoments(content,imgPath,"草稿")
        } else {
            updateMoments(content,imgPath,"草稿",momentsId);
        }
    })
    //发布
    $("#publishMoments").click(function () {
        var content = $("#content").val();
        var imgPath = $("#momentsImgFile").attr("data");

        if (isNull(momentsId)){
            saveMoments(content,imgPath,"已发布")
        } else {
            updateMoments(content,imgPath,"已发布",momentsId);
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
                var shopImgPath = $("#momentsImgFile").attr("data");
                shopImgPath = shopImgPath.replace(delImg,"");
                $("#momentsImgFile").attr("data",shopImgPath)
            }
        };
        $("#showDialog1").showDialog(opt,150)
    })

    //删除朋友圈
    $("#delMoments").click(function () {
        var id = $(this).attr("data");
        var opt = {
            title: '删除朋友圈',
            width: 400,
            content: "确定删除该朋友圈信息?",
            okBtnText: '确定',
            cancelBtnText: '取消',
            onOk: function () {
                $.ajax({
                    type: "post",
                    url: "/open/delMoments.html",
                    dataType: 'json',
                    data: {
                        id:id,
                    },
                    success: function (data) {
                        loadPage("/open/wechatMoments.html");
                    }
                })
            }
        };
        $("#showDialog1").showDialog(opt,150)

    })
    //分享
    $("#sharpMsg").click(function () {
        $(".sys-url").text(window.location.href)
        copyAddress(".sys-url")
    })

    $(".am_tuya_content img").addClass("pimg");
    $(".pimg").click(function () {
        var _this = $(this);//将当前的pimg元素作为_this传入函数
        $.seeImg("#outerdiv", "#innerdiv", "#bigimg", _this);
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
            maxFileCount: 9, //表示允许同时上传的最大文件个数
            enctype: 'multipart/form-data',
            validateInitialCount:true,
            previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
            msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
        });

        //导入文件上传完成之后的事件
        $("#momentsImgFile").on("fileuploaded", function (event, data, previewId, index) {
            var urlData = $("#momentsImgFile").attr("data");
            if(isNull(urlData)){
                urlData="";
            }
            urlData+=data.response.url+";";
            $("#momentsImgFile").attr("data",urlData);

            $("#pageImg").append("<div class=\"col-lg-4 img-one\" >\n" +
                "<img src="+data.response.url+">\n" +
                "<span class=\"delImg glyphicon glyphicon-remove\" title=\"删除该图片\" ></span>\n" +
                "</div>")
        });
    }
    return oFile;
};

function saveMoments(content,imgPath,status) {
    $.ajax({
        type: "post",
        url: "/open/saveMoments.html",
        dataType: 'json',
        data: {
            content:content,
            imgPath:imgPath,
            status:status
        },
        success: function (data) {
            loadPage("/open/wechatMoments.html");

        }
    })
}

function updateMoments(content,imgPath,status,id) {
    $.ajax({
        type: "post",
        url: "/open/updateMoments.html",
        dataType: 'json',
        data: {
            id:id,
            content:content,
            imgPath:imgPath,
            status:status
        },
        success: function (data) {
            loadPage("/open/wechatMoments.html");

        }
    })
}

//复制
function copyAddress (element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    //$temp.val(window.location.origin+contextPath+"/expert/index/index.do").select();
    document.execCommand("copy");
    $temp.remove();
    this.shareCopyFlag = true;

    var opt = {
        title: '分享朋友圈',
        width: 400,
        content: "分享链接复制成功！",
        okBtnText: '确定',
        cancelBtnText: '取消',
        onOk: function () {}
    };
    $("#showDialog1").showDialog(opt,150)
    _this = this;
    setTimeout(function () {
        _this.shareCopyFlag = false
    }, 1000)
}