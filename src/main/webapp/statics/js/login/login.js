$(function () {
    var show_num = [];
    drawPic(show_num);//初始化
    $("#checkCodeCanvas").click(function (e) {
        e.preventDefault();
        drawPic(show_num);
    })

    //验证码登录
    $("#sureLogin").on('click',function(){
        var val = $("#inputCode").val().toLowerCase();
        var num = show_num.join("");
        if(val==''){
            var opt = {
                title: '用户登录',//提示框标题
                width: 400,//提示框宽度
                content: '请输入验证码!'//提示文本
            };
            $("#showDialog1").showMsg(opt,200);
        }else if(val == num){
            var username = $("#username").val();
            var password = $("#password").val();
            var checkRemberMe =$('#checkRemberMe').prop('checked')
            $.ajax({
                type:"post",
                url:"/loginCheck",
                dataType:'json',
                data:{
                    username:username,
                    password:password,
                    remeberMe:checkRemberMe
                },
                success:function(data){
                    if(data=="success"){//成功,管理员权限
                        // loadPage("/index");
                        loadPage("/administerIndex.html");
                    }else if(data=="noPerson"){//用户不存在
                        $("#username").attr('placeholder',"用户不存在");
                        $("#username").val("");
                        $("#username").focus();
                        drawPic(show_num);
                    }else if(data=="locking"){//用户已锁定
                        $("#username").attr('placeholder',"用户已锁定,请联系管理员");
                        $("#username").val("");
                        $("#username").focus();
                        drawPic(show_num);
                    } else if(data=="petShop"){
                        loadPage("/petIndex.html");
                    }else if(data=="general"){//普通用户
                        loadPage("/open/index.html");
                    }else if(data=="fail"){//密码错误
                        $("#password").attr('placeholder',"密码错误,请重新输入");
                        $("#password").val("");
                        $("#password").focus();
                        drawPic(show_num);
                    }else if(data="applyingPetShop"){//宠物店禁用
                        loadPage("/open/index.html");
                    }
                }
            })
        }else{
            var opt = {
                title: '用户登录',//提示框标题
                width: 400,//提示框宽度
                content: '验证码错误！请重新输入！'//提示文本
            };
            $("#showDialog1").showMsg(opt,200);
            $("#inputCode").val('');
            draw(show_num);
        }

    })

    /**绘制验证码图片**/
    function drawPic(show_num){
        var canvas=document.getElementById("checkCodeCanvas");
        var width=canvas.width;
        var height=canvas.height;
        var ctx = canvas.getContext('2d');
        ctx.textBaseline = 'bottom';

        /**绘制背景色**/
        ctx.fillStyle = randomColor(180,240); //颜色若太深可能导致看不清
        ctx.fillRect(0,0,width,height);
        /**绘制文字**/
        var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
        for(var i=0; i<4; i++){
            var txt = str[randomNum(0,str.length)];
            show_num[i] = txt.toLowerCase();
            ctx.fillStyle = randomColor(50,60);  //随机生成字体颜色
            ctx.font = randomNum(35,40)+'px SimHei'; //随机生成字体大小
            var x = 15+i*25;
            var y = randomNum(35,35);
            var deg = randomNum(-45, 45);
            //修改坐标原点和旋转角度
            ctx.translate(x,y);
            ctx.rotate(deg*Math.PI/180);
            ctx.fillText(txt, 0,0);
            //恢复坐标原点和旋转角度
            ctx.rotate(-deg*Math.PI/180);
            ctx.translate(-x,-y);
        }
        /**绘制干扰线**/
        for(var i=0; i<8; i++){
            ctx.strokeStyle = randomColor(40,180);
            ctx.beginPath();
            ctx.moveTo( randomNum(0,width), randomNum(0,height) );
            ctx.lineTo( randomNum(0,width), randomNum(0,height) );
            ctx.stroke();
        }
        /**绘制干扰点**/
        for(var i=0; i<100; i++){
            ctx.fillStyle = randomColor(0,255);
            ctx.beginPath();
            ctx.arc(randomNum(0,width),randomNum(0,height), 1, 0, 2*Math.PI);
            ctx.fill();
        }
    }
    /**生成一个随机数**/
    function randomNum(min,max){
        return Math.floor( Math.random()*(max-min)+min);
    }
    /**生成一个随机色**/
    function randomColor(min,max){
        var r = randomNum(min,max);
        var g = randomNum(min,max);
        var b = randomNum(min,max);
        return "rgb("+r+","+g+","+b+")";
    }

    //查看密码
    $("#eyeIsOpen").click(function () {
        if($("#registerPassword").attr("type")=="password"){
            $("#registerPassword").attr("type","text");
            $(this).removeClass("fa-eye-slash")
            $(this).addClass("fa-eye")
        }else {
            $("#registerPassword").attr("type","password");
            $(this).removeClass("fa-eye")
            $(this).addClass("fa-eye-slash")
        }
    })

    //注册获取验证码
    $("#VerificationCode").click(function () {
        var userName = $("#registerNickName").val();
        var phone = $.trim($('#registerPhone').val());
        var password = $("#registerPassword").val();

        if(isNull(userName)){
            $('#registerNickName').attr("placeholder","用户昵称不能为空！");
            $('#registerNickName').focus();
            return;
        }
        if(!isPhoneNo(phone)){
            $('#registerPhone').attr("placeholder",phone+"不是正确的手机号码，请输入正确的手机号码！");
            $('#registerPhone').val("")
            $('#registerPhone').focus();
            return;
        }
        if(isNull(password)){
            $('#registerPassword').attr("placeholder","用户密码不能为空！");
            $('#registerPassword').focus();
            return;
        }

        var $this = $(this);

        /*$this.text("短信发送中")*/
        /*$this.attr("disabled",true)*/
        $.ajax({
            type:"post",
            url:"/getRegisterMsg.html",
            dataType:'json',
            data:{
                phoneNumber:phone,
                register:"register"
            },
            success:function(data){
                if(data=="hasUser"){
                    $('#registerPhone').attr("placeholder","手机号码:"+phone+"已注册，请直接登录");
                    $('#registerPhone').val("")
                    $('#registerPhone').focus();
                }else if(data=="success"){
                    var second = 60;
                    $this.text(second+"秒后再获取");
                    $this.attr("disabled",true)
                    var interval = setInterval(function () {
                        second--;
                        $this.text((second)+"秒后再获取")
                        if (second === -1) {
                            $this.text("重发验证码")
                            clearInterval(interval)
                            $this.attr("disabled",false)
                        }
                    }, 1000)
                }else {
                    $this.text("短信获取失败");
                }
            }
        })
    })

    /*注册*/
    $("#sureRegister").click(function () {
        var userName = $("#registerNickName").val();
        var phone = $("#registerPhone").val();
        var password = $("#registerPassword").val();
        var code  = $("#inputVerificationCode").val();

        if($("#VerificationCode").text()=="获取验证码"){
            $('#inputVerificationCode').val("")
            $('#inputVerificationCode').attr("placeholder","请先获取验证码！");
            $('#inputVerificationCode').focus();
            return;
        }

        if(password!=$("#registerSurePassword").val()){
            $("#registerSurePassword").focus();
            $("#registerSurePassword").val("");
            $("#registerSurePassword").attr("placeholder","两次密码不一致，请重新确定密码！");
            return;
        }

        if(isNull(code)){
            $('#inputVerificationCode').attr("placeholder","验证码不能为空！");
            $('#inputVerificationCode').focus();
            return;
        }
        $.ajax({
            type:"post",
            url:"/registerUser.html",
            dataType:'json',
            data:{
                userName:userName,
                phone:phone,
                password:password,
                code:code
            },
            success:function(data){
                if(data=="success"){
                    var opt = {
                        title: '用户注册',
                        width: 400,
                        content: "注册成功，是否直接登录",
                        okBtnText: '登录',
                        cancelBtnText: '取消',
                        onOk: function () {
                            $.ajax({
                                type:"post",
                                url:"/loginCheck",
                                dataType:'json',
                                data:{
                                    username:phone,
                                    password:password,
                                    remeberMe:false
                                },
                                success:function(data){
                                    if(data=="success"){//成功,管理员权限
                                        // loadPage("/index");
                                        loadPage("/administerIndex.html");
                                    }else if(data=="noPerson"){//用户不存在
                                        $("#username").attr('placeholder',"用户不存在");
                                        $("#username").val("");
                                        $("#username").focus();
                                        drawPic(show_num);
                                    }else if(data=="locking"){//用户已锁定
                                        $("#username").attr('placeholder',"用户已锁定,请联系管理员");
                                        $("#username").val("");
                                        $("#username").focus();
                                        drawPic(show_num);
                                    } else if(data=="petShop"){
                                        loadPage("/index.html");
                                    }else if(data=="general"){//普通用户
                                        loadPage("/open/index.html");
                                    }else if(data=="fail"){//密码错误
                                        $("#password").attr('placeholder',"密码错误,请重新输入");
                                        $("#password").val("");
                                        $("#password").focus();
                                        drawPic(show_num);
                                    }else if(data="applyingPetShop"){//宠物店禁用
                                        loadPage("/open/index.html");
                                    }
                                }
                            })
                        }
                    };
                    $("#showDialog1").showDialog(opt,150)
                }else if(data="fail"){
                    var opt = {
                        title: '用户注册',//提示框标题
                        width: 400,//提示框宽度
                        content: '注册失败，请重新注册!'//提示文本
                    };
                    $("#showDialog1").showMsg(opt,150);
                }else {
                    $('#inputVerificationCode').attr("placeholder","验证码不正确，请重新输入");
                    $('#inputVerificationCode').val("")
                    $('#inputVerificationCode').focus();
                }
            }
        })
    })

    //找回密码获取验证码
    $("#findPwdVerificationCode").click(function () {
        var phone = $.trim($('#findPwdPhone').val());
        if(!isPhoneNo(phone)){
            $('#findPwdPhone').attr("placeholder",phone+"不是正确的手机号码，请输入正确的手机号码！");
            $('#findPwdPhone').val("")
            $('#findPwdPhone').focus();
            return;
        }
        var $this = $(this);
        $this.text("短信发送中")
        $.ajax({
            type:"post",
            url:"/getRegisterMsg.html",
            dataType:'json',
            data:{
                phoneNumber:phone,
                register:"findPwd"
            },
            success:function(data){
                if(data=="success"){
                    var second = 60;
                    $this.text(second+"秒后再获取");
                    $this.attr("disabled",true)
                    var interval = setInterval(function () {
                        second--;
                        $this.text((second)+"秒后再获取")
                        if (second === -1) {
                            $this.text("重发验证码")
                            clearInterval(interval)
                            $this.attr("disabled",false)
                        }
                    }, 1000)
                }else {
                    $this.text("短信获取失败");
                }
            }
        })
    })
    //确认找回验证码校验
    $("#sureFindPwd").click(function () {
        var phone = $.trim($('#findPwdPhone').val());
        var inputFindPwd = $("#inputFindPwd").val();
        if($(this).text()=="确定"){
            $.ajax({
                type:"post",
                url:"/findPwd.html",
                dataType:'json',
                data:{
                    phone:phone,
                    code:inputFindPwd
                },
                success:function(data){
                    if(data=="success"){
                        $(".findPwdTwo").show();
                        $("#sureFindPwd").text("重置密码")
                    }else {
                        $('#inputFindPwd').val("");
                        $('#inputFindPwd').attr("placeholder","验证码不正确，请重新输入");
                    }
                }
            })
        }else {
            var newPwd = $("#newPwd").val();
            var sureNewPwd = $("#sureNewPwd").val();
            if(newPwd!=sureNewPwd){
                $("#sureNewPwd").val("");
                $("#sureNewPwd").attr("placeholder","输入密码两次不一致！");
                return;
            }
            $.ajax({
                type:"post",
                url:"/updateUserPwd.html",
                dataType:'json',
                data:{
                    phone:phone,
                    newPwd:newPwd
                },
                success:function(data){
                    if(data=="success"){
                        var opt = {
                            title: "找回密码",
                            width: 400,
                            content: "密码重置成功，请返回登录！",
                            cancelBtnText: '',
                            okBtnText: "确定",
                            onOk: function () {}
                        };
                        $("#showDialog1").showDialog(opt,150);
                    }else {
                        $('#inputFindPwd').val("");
                        $('#inputFindPwd').attr("placeholder","验证码不正确，请重新输入");
                    }
                }
            })
        }
    })
    
    $("#registerBtn").click(function () {
        $(".login-body").slideUp(500,function(){
            $(".register-body").slideDown(500,function(){

            })
        });
    })
    $("#loginBtn").click(function () {
        $(".register-body").slideUp(500,function(){
            $(".login-body").slideDown(500,function(){

            })
        });
    })

    $("#findPasswordBtn").click(function () {
        $(".login-body").slideUp(500,function(){
            $(".findPassword-body").slideDown(500,function(){

            })
        });
    })
    $("#backLogin").click(function () {
        $(".findPassword-body").slideUp(500,function(){
            $(".login-body").slideDown(500,function(){

            })
        });
    })

})

function isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
}


