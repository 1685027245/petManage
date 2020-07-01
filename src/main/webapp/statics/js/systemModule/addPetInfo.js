$(function () {
    //编辑器功能=====================================
    $('#infoContent').summernote({
        height: 550, // 定义编辑框高度
        minHeight: null, // 定义编辑框最低的高度
        maxHeight: null, // 定义编辑框最高德高度
        <!--工具栏-->
        toolbar: [
            <!--字体工具-->
            ['fontname', ['fontname']], //字体系列
            ['style', ['bold', 'italic', 'underline', 'clear']], // 字体粗体、字体斜体、字体下划线、字体格式清除
            ['font', ['strikethrough', 'superscript', 'subscript']], //字体划线、字体上标、字体下标
            ['fontsize', ['fontsize']], //字体大小
            ['color', ['color']], //字体颜色

            <!--段落工具-->
            ['style', ['style']], //样式
            ['para', ['ul', 'ol', 'paragraph']], //无序列表、有序列表、段落对齐方式
            ['height', ['height']], //行高

            <!--插入工具-->
            ['table', ['table']], //插入表格
            ['hr', ['hr']], //插入水平线
            ['link', ['link']], //插入链接
            ['picture', ['picture']], //插入图片
            ['video', ['video']], //插入视频

            <!--其它-->
            ['fullscreen', ['fullscreen']], //全屏
            ['codeview', ['codeview']], //查看html代码
            ['undo', ['undo']], //撤销
            ['redo', ['redo']], //取消撤销
            ['help', ['help']], //帮助
        ],
        lang: 'zh-CN', //设置中文，需引入中文插件summernote-zh-CN.js

        placeholder: '在这里写资讯内容...', //占位符

        dialogsInBody: true, //对话框放在编辑框还是Body

        dialogsFade: true, //对话框显示效果

        disableDragAndDrop: true, //禁用拖放功能

        shortcuts: false, //禁用快捷键
        callbacks:{
            onImageUpload: function(files, editor, $editable) {
                uploadSummerPic(files[0], editor, $editable);
            }
        }
    });

    function uploadSummerPic(file, editor, $editable) {
        var fd = new FormData();
        fd.append("file", file);
        $.ajax({
            type:"POST",
            url:"/system/uploadImg",
            data: fd,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                //回显图片
                /*$('#infoContent').summernote('insertImage',"http://"+window.location.host+data.url);*/
                $('#infoContent').summernote('insertImage',data.url);
                $("#title").attr("data",data.url);
            },error:function () {
                var opt = {
                    title: '图片上传',
                    width: 400,
                    content: "上传失败，请重新上传！",
                    cancelBtnText: '确定',
                    okBtnText: "",
                    onOk: function () {

                    }
                };
                $("#showDialog1").showDialog(opt,150,"");
            }
        });
    }

    //修改时
    var category = $("#category").attr("data");
    var infoContent = $("#infoContent").attr("data");
    if(category!=""&&category!=null){
        $("#category").val(category);
        $('#infoContent').summernote('code', infoContent);
    }
    //保存
    $("#savePetInfo").click(function () {
        var title =  $("#title").val();
        var category = $("#category").val();
        var content = $("#infoContent").summernote('code');
        var picPath = $("#title").attr("data");

        /*if(isNull(picPath)){
            picPath = "img/default.jpg"
        }*/
        if(isNull(title)){
            var opt = {
                title: '宠物资讯',
                width: 400,
                content: "标题不能为空！",
                cancelBtnText: '确定',
                okBtnText: "",
                onOk: function () {}
            };
            $("#showDialog1").showDialog(opt,150,"");
            return;
        }
        if(isNull(content.replace(/<\/?[^>]*>/g, ''))){
            var opt = {
                title: '宠物资讯',
                width: 400,
                content: "内容不能为空,必须包含文字！",
                cancelBtnText: '确定',
                okBtnText: "",
                onOk: function () {}
            };
            $("#showDialog1").showDialog(opt,150,"");
            return;
        }
        if(isNull($("#savePetInfo").attr("data"))){//新增保存
            $.ajax({
                type: "post",
                url: "/system/savePetInfo.html",
                dataType: 'json',
                data: {
                    title:title,
                    category:category,
                    content:content,
                    status:"待发布",
                    picPath:picPath
                },
                success: function (data) {
                    var opt = {
                        title: '宠物资讯',
                        width: 400,
                        content: "宠物资讯保存成功！",
                        cancelBtnText: '关闭',
                        okBtnText: "返回资讯列表",
                        onOk: function () {
                            loadPage("/system/petInformationManager.html");
                        }
                    };
                    setTimeout(function () {
                        $("#showDialog1").showDialog(opt,150,"");
                    },400)
                }
            })
        }else {//修改
            $.ajax({
                type: "post",
                url: "/system/updatePetInfo.html",
                dataType: 'json',
                data: {
                    id:$("#savePetInfo").attr("data"),
                    title:title,
                    category:category,
                    content:content,
                    status:"待发布",
                    picPath:picPath
                },
                success: function (data) {
                    var opt = {
                        title: '宠物资讯',
                        width: 400,
                        content: "宠物资讯保存成功！",
                        cancelBtnText: '关闭',
                        okBtnText: "返回资讯列表",
                        onOk: function () {
                            loadPage("/system/petInformationManager.html");
                        }
                    };
                    setTimeout(function () {
                        $("#showDialog1").showDialog(opt,150,"");
                    },400)
                }
            })
        }

    })

    //保存并发布
    $("#saveAndPublishPetInfo").click(function () {
        var title =  $("#title").val();
        var category = $("#category").val();
        var content = $("#infoContent").summernote('code');
        var picPath = $("#title").attr("data");

        if(isNull(picPath)){
            picPath = "/img/default.jpg"
        }
        if(isNull(title)){
            var opt = {
                title: '宠物资讯',
                width: 400,
                content: "标题不能为空！",
                cancelBtnText: '确定',
                okBtnText: "",
                onOk: function () {}
            };
            $("#showDialog1").showDialog(opt,150,"");
            return;
        }
        if(isNull(content.replace(/<\/?[^>]*>/g, ''))){
            var opt = {
                title: '宠物资讯',
                width: 400,
                content: "内容不能为空,必须包含文字！",
                cancelBtnText: '确定',
                okBtnText: "",
                onOk: function () {}
            };
            $("#showDialog1").showDialog(opt,150,"");
            return;
        }
        if(isNull($("#savePetInfo").attr("data"))){//新增保存
            $.ajax({
                type: "post",
                url: "/system/savePetInfo.html",
                dataType: 'json',
                data: {
                    title:title,
                    category:category,
                    content:content,
                    status:"已发布",
                    picPath:picPath
                },
                success: function (data) {
                    var opt = {
                        title: '宠物资讯',
                        width: 400,
                        content: "宠物资讯发布成功！",
                        cancelBtnText: '关闭',
                        okBtnText: "返回资讯列表",
                        onOk: function () {
                            loadPage("/system/petInformationManager.html");
                        }
                    };
                    setTimeout(function () {
                        $("#showDialog1").showDialog(opt,150,"");
                    },400)
                }
            })
        }else {//修改
            $.ajax({
                type: "post",
                url: "/system/updatePetInfo.html",
                dataType: 'json',
                data: {
                    id:$("#savePetInfo").attr("data"),
                    title:title,
                    category:category,
                    content:content,
                    status:"已发布",
                    picPath:picPath
                },
                success: function (data) {
                    var opt = {
                        title: '宠物资讯',
                        width: 400,
                        content: "宠物资讯发布成功！",
                        cancelBtnText: '关闭',
                        okBtnText: "返回资讯列表",
                        onOk: function () {
                            loadPage("/system/petInformationManager.html");
                        }
                    };
                    setTimeout(function () {
                        $("#showDialog1").showDialog(opt,150,"");
                    },400)
                }
            })
        }

    })

    $("#cancleAddPetInfo").click(function () {
        loadPage("/system/petInformationManager.html");
    })

})