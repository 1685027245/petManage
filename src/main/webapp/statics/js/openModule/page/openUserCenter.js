$(function () {

    getData();

    $(document).on("click",".momentsOne",function () {
        loadPage("/open/weChatDetails.html/"+$(this).attr("id"))
    })

    //初始化用户一些数据
    if($("#userSex").attr("data")==1){
        $("#userSex").text("性别：男")
    }else if($("#userSex").attr("data")==2){
        $("#userSex").text("性别：女")
    }else {
        $("#userSex").text("性别：保密")
    }
    $("#createTime").text("注册时间："+getStringTime($("#createTime").attr("data")))
    $("#lastLoginTime").text("上一次登录时间："+getStringTime($("#lastLoginTime").attr("data")))

    //修改个人信息
    $("#changeMsg").click(function () {
        var userName = $("#userName").text();
        var userAddress = $("#userAddress").attr("data");
        var userSex = $("#userSex").attr("data");
        var userEmail = $("#userEmail").attr("data");
        var html=
            "<div class='row'>" +
            "<div class='col-lg-2 user-msg-title'><label>昵称</label></div>" +
            "<div class='col-lg-9'><input class='form-control' id='changeName' value='"+userName+"'/></div>" +
            "</div>"+
            "<div class='row user-msg-one'>" +
            "<div class='col-lg-2 user-msg-title'><label>地址</label></div>" +
            "<div class='col-lg-9'><input class='form-control' id='changeAddress' placeholder='请输入你的联系地址' value='"+userAddress+"'/></div>" +
            "</div>"+
            "<div class='row user-msg-one'>" +
            "<div class='col-lg-2 user-msg-title'><label>性别</label></div>" +
            "<div class='col-lg-9'>" +
            "<select class='form-control' id='userSexChange'>" +
            "  <option "+(userSex==0?'selected="true"':'')+" value='0'>保密</option>" +
            "  <option "+(userSex==1?'selected="true"':'')+" value='1'>男</option>" +
            "  <option "+(userSex==2?'selected="true"':'')+" value='2'>女</option>" +
            "</select>" +
            "</div>" +
            "</div>"+
            "<div class='row user-msg-one'>" +
            "<div class='col-lg-2 user-msg-title'><label>邮箱</label></div>" +
            "<div class='col-lg-9'><input class='form-control' id='changeEmail' placeholder='请输入你的邮箱' value='"+userEmail+"'/></div>" +
            "</div>";
        var opt = {
            title: '修改个人信息',
            width: 450,
            content: html,
            okBtnText: '保存',
            cancelBtnText: '取消',
            onOk: function () {
                if(isNull($("#changeName").val())||isNull($("#changeAddress").val())||isNull($("#changeEmail").val())){
                    var opt = {
                        title: '修改个人信息',
                        width: 400,
                        content: "请完成内容填写，字段不能为空！",
                        okBtnText: '确定',
                        cancelBtnText: '',
                        onOk: function () {}
                    };
                    setTimeout(function () {
                        $("#showDialog1").showDialog(opt,150)
                    },400);
                    return;
                }
                var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
                if(!reg.test($("#changeEmail").val())){
                    var opt = {
                        title: '修改个人信息',
                        width: 400,
                        content: "请输入有效的邮箱！",
                        okBtnText: '确定',
                        cancelBtnText: '',
                        onOk: function () {}
                    };
                    setTimeout(function () {
                        $("#showDialog1").showDialog(opt,150)
                    },400);
                    return;
                }

                $.ajax({
                    type:"post",
                    url:"/updateUserMsg.html",
                    dataType:"json",
                    data:{
                        userName:$("#changeName").val(),
                        address:$("#changeAddress").val(),
                        email:$("#changeEmail").val(),
                        sex:$("#userSexChange").val(),
                    },
                    success:function(data){
                        var opt = {
                            title: '修改个人信息',
                            width: 400,
                            content: "个人信息修改成功！",
                            okBtnText: '确定',
                            cancelBtnText: '',
                            onOk: function () {
                                loadPage("/open/userCenter.html")
                            }
                        };
                        setTimeout(function () {
                            $("#showDialog1").showDialog(opt,150)
                        },400);
                    }
                })
            }
        };
        $("#showDialog1").showDialog(opt,250)
    })

    //修改密码
    $("#changePwd").click(function () {
        var html=
            "<div class='row'>" +
            "<div class='col-lg-2  user-msg-title'><label>原密码</label></div>" +
            "<div class='col-lg-10 '><input class='form-control' type='password' id='oldPwd' placeholder='请输入原密码' /></div>" +
            "</div>"+
            "<div class='row user-msg-one'>" +
            "<div class='col-lg-2  user-msg-title'><label>新密码</label></div>" +
            "<div class='col-lg-10 '><input class='form-control' type='password' id='newPwd' placeholder='请输入新密码' /></div>" +
            "</div>"+
            "<div class='row user-msg-one'>" +
            "<div class='col-lg-2  user-msg-title'><label>确认密码</label></div>" +
            "<div class='col-lg-10 '><input class='form-control' type='password' id='newSurePwd' placeholder='请确认密码' /></div>" +
            "</div>";
        var opt = {
            title: '修改密码',
            width: 450,
            content: html,
            okBtnText: '保存',
            cancelBtnText: '取消',
            onOk: function () {
                var oldPwd = $("#oldPwd").val();
                var newPwd = $("#newPwd").val();
                var newSurePwd = $("#newSurePwd").val();

                if(newPwd!=newSurePwd){
                    var opt = {
                        title: '修改密码',
                        width: 400,
                        content: "确认密码不一样！",
                        okBtnText: '确定',
                        cancelBtnText: '',
                        onOk: function () {}
                    };
                    setTimeout(function () {
                        $("#showDialog1").showDialog(opt,150)
                    },400);
                    return;
                }

                $.ajax({
                    type:"post",
                    url:"/changePassword.html",
                    dataType:"json",
                    data:{
                        oldPwd:oldPwd,
                        newPwd:newPwd
                    },
                    success:function(data){
                        if (data=="success"){
                            var opt = {
                                title: '修改密码',
                                width: 400,
                                content: "修改密码成功！",
                                okBtnText: '确定',
                                cancelBtnText: '',
                                onOk: function () {}
                            };
                            setTimeout(function () {
                                $("#showDialog1").showDialog(opt,150)
                            },400);
                        } else {
                            var opt = {
                                title: '修改密码',
                                width: 400,
                                content: "原密码不正确，请重新修改！",
                                okBtnText: '确定',
                                cancelBtnText: '',
                                onOk: function () {}
                            };
                            setTimeout(function () {
                                $("#showDialog1").showDialog(opt,150)
                            },400);
                        }

                    }
                })
            }
        };
        $("#showDialog1").showDialog(opt,250)
    })

    //切换头像
    $(document).on("click","#userImg",function () {
        var html=
            "<div class='row' >" +
            "<div class='col-lg-10 col-lg-offset-1' ><input  type='file' name='file' id='userImgUpload'  class='file-loading' /></div>" +
            "</div>";
        var opt = {
            title: '重新上传头像',
            width: 600,
            height:200,
            content: html,
            okBtnText: '',
            cancelBtnText: '',
            onOk: function () {}
        };
        $("#showDialog1").showDialog(opt,250);
       /* $(".modal-footer").hide();*/
        //0.初始化fileinput  用户头像
        var oFileInput1 = new FileInput();
        oFileInput1.Init("userImgUpload", "/uploadUserImg");
    })


})


function getData() {
    $.ajax({
        type:"post",
        url:"/open/getUserCenterData.html",
        dataType:"json",
        data:{},
        success:function(data){
            $("#totalMoments").text(data.length)
            $.each(data,function (index,moments) {
                $("#allData").append(" <li class='momentsOne' id='"+moments.id+"'>\n" +
                    "                    <div class=\"am-gallery-item am_list_block\">\n" +
                    "                        <a href='javaScript:;' class=\"\">\n" +
                    "                            <img class=\"am_img animated\" src="+(isNull(moments.imgPath)?'/statics/img/noPic.png':getFirstImg(moments.imgPath))+" title="+moments.content+">\n" +
                    "                        </a>\n" +
                    "                        <div class=\"am_listimg_info\">\n" +
                    "                            <span class=\"am-icon-clock-o\">  "+changeDateFormat(moments.createTime)+"</span>\n" +
                    "                         </div>\n" +
                    "                    </div>\n" +
                    "                </li>")
            })

        }
    })
}

function getFirstImg(imgPath) {
    return imgPath.substring(0,imgPath.indexOf(';'));
}


//转换日期格式(时间戳转换为datetime格式)
function changeDateFormat(cellval) {
    var dateVal = cellval + "";
    if (cellval != null) {
        var date = new Date(parseInt(dateVal.replace("/Date(", "").replace(")/", ""), 10));
        var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        return date.getFullYear() + "-" + month + "-" + currentDate + " " + hours + ":" + minutes + ":" + seconds;
    }
}

function getStringTime(time) {
    var stime =  new Date(time);
    return stime.getFullYear() + '-' + (stime.getMonth() + 1) + '-' + stime.getDate()+' '+stime.getHours()+ ':' +stime.getMinutes()+ ':' +stime.getSeconds();
}


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
            //maxImageHeight: 100,//图片的最大高度
            //maxFileSize: 0,//单位为kb，如果为0表示不限制文件大小
            //minFileCount: 0,
            maxFileCount: 1, //表示允许同时上传的最大文件个数
            enctype: 'multipart/form-data',
            validateInitialCount:true,
            previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
            msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
        });

        //导入文件上传完成之后的事件-宠物
        $("#userImgUpload").on("fileuploaded", function (event, data, previewId, index) {
            var urlData = $("#userImgUpload").attr("data");
            if(isNull(urlData)){
                urlData="";
            }
            urlData+=data.response.url+";";
            $("#userImg").attr("src",data.response.url);
            $("#myUserImg").attr("src",data.response.url);
        });
    }
    return oFile;
};