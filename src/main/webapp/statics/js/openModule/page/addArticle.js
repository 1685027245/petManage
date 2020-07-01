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

        placeholder: '在这里写内容...', //占位符

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

    //上传图片并回显
    function uploadSummerPic(file, editor, $editable) {
        var fd = new FormData();
        fd.append("file", file);
        $.ajax({
            type:"POST",
            url:"/open/uploadMomentsImg",
            data: fd,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                //回显图片
                $('#infoContent').summernote('insertImage',"http://"+window.location.host+data.url);
                $("#infoContent").attr("data",data.url);
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

    //保存为草稿
    $("#saveMoments").click(function () {
        var content = $("#infoContent").summernote('code');
        content = content.replace(/(\n)/g, "");
        content = content.replace(/(\t)/g, "");
        content = content.replace(/(\r)/g, "");
        content = content.replace(/<\/?[^>]*>/g, "");
        content = content.replace(/\s*/g, "");

        var imgPath = $("#infoContent").attr("data");
        if(isNull(content.replace(/<\/?[^>]*>/g, ''))){
            var opt = {
                title: '发朋友圈',
                width: 400,
                content: "内容不能为空,必须包含文字！",
                cancelBtnText: '确定',
                okBtnText: "",
                onOk: function () {}
            };
            $("#showDialog1").showDialog(opt,150,"");
            return;
        }
        saveMoments(content,imgPath,"草稿");
    })
    //发布
    $("#publishMoments").click(function () {
        var content = $("#infoContent").summernote('code');
        content = content.replace(/(\n)/g, "");
        content = content.replace(/(\t)/g, "");
        content = content.replace(/(\r)/g, "");
        content = content.replace(/<\/?[^>]*>/g, "");
        content = content.replace(/\s*/g, "");

        var imgPath = $("#infoContent").attr("data");
        if(isNull(content.replace(/<\/?[^>]*>/g, ''))){
            var opt = {
                title: '发朋友圈',
                width: 400,
                content: "内容不能为空,必须包含文字！",
                cancelBtnText: '确定',
                okBtnText: "",
                onOk: function () {}
            };
            $("#showDialog1").showDialog(opt,150,"");
            return;
        }
        saveMoments(content,imgPath,"已发布");
    })
})

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

