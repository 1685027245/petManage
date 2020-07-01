<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>爱宠乐宠物管理平台</title>
</head>
<body>
<div class="container-fluid login-all" >
    <div class="col-lg-4 login-body"  >
        <div class="form-horizontal" <%--action="${pageContext.request.contextPath}/loginCheck"--%> >
            <span class="heading">爱宠乐登录</span>
            <div class="form-group">
                <input type="text" name="username" id="username" class="form-control"  placeholder="请输入手机号码">
                <i class="fa fa-user"></i>
            </div>
            <div class="form-group help">
                <input type="password" name="password" id="password" class="form-control"  placeholder="请输入密码">
                <i class="fa fa-lock"></i>
                <a href="javascript:;" class="fa fa-question-circle" id="findPasswordBtn" title="找回密码"></a>
            </div>
            <div class="form-group">
                <input type="text" id="inputCode"  class="form-control pull-left" style="width:360px;"   placeholder="请输入校验码" >
                <i class="fa fa-check"></i>
                <div class="pull-right">
                    <canvas id="checkCodeCanvas" width="120" height="36"></canvas>
                </div>
            </div>

            <div class="form-group">
                <div class="main-checkbox">
                    <input type="checkbox" id="checkRemberMe" value="1" name="check"/>
                    <label for="checkRemberMe"></label>
                </div>
                <span class="text">记住我</span>
                <button  id="sureLogin" class="btn btn-primary">立刻登录</button>
            </div>
            <span  class="register-btn text" id="registerBtn">还没有账号?立即注册</span>

        </div>
    </div>
    <div class="col-lg-4 register-body" >
        <div class="form-horizontal" <%--action="${pageContext.request.contextPath}/loginCheck"--%> >
            <span class="heading">爱宠乐账号注册</span>
            <div class="form-group">
                <input type="text" id="registerNickName"  class="form-control"  placeholder="请输入昵称">
                <i class="fa fa-user"></i>
            </div>
            <div class="form-group help">
                <input  type="text" id="registerPhone" name="phone" class="form-control"  placeholder="请输入手机号码">
                <i class="fa fa-mobile"></i>
            </div>
            <div class="form-group help">
                <input type="password" id="registerPassword"  class="form-control"  placeholder="请输入密码，字母或特殊符号+数字">
                <i class="fa fa-lock"></i>
                <a href="#" class="fa fa-eye-slash" id="eyeIsOpen"></a>
            </div>
            <div class="form-group help">
                <input type="password" id="registerSurePassword"  class="form-control"  placeholder="确认密码">
                <i class="fa fa-lock"></i>
            </div>
            <div class="form-group">
                <input type="text"  class="form-control pull-left" id="inputVerificationCode" style="width:350px;"   placeholder="请输入短信验证码" >
                <i class="fa fa-check"></i>
                <div class="pull-right">
                    <button class="btn btn-info" id="VerificationCode">获取验证码</button>
                </div>
            </div>
            <div class="form-group">
                <button id="sureRegister"  class="btn btn-primary" style="width: 100%">注册</button>
            </div>
            <span  class="register-btn text" id="loginBtn">已有账号,立即登录</span>
        </div>
    </div>

    <div class="col-lg-4 findPassword-body" >
        <div class="form-horizontal" <%--action="${pageContext.request.contextPath}/loginCheck"--%> >
            <span class="heading">爱宠乐账号找回</span>
            <div class="form-group findPwdOne">
                <input type="text" id="findPwdPhone"  class="form-control"  placeholder="请输入手机号">
                <i class="fa fa-user"></i>
            </div>
            <div class="form-group findPwdOne">
                <input type="text" id="inputFindPwd" class="form-control pull-left" style="width:350px;"   placeholder="请输入短信验证码" >
                <i class="fa fa-check"></i>
                <div class="pull-right">
                    <button class="btn btn-info" id="findPwdVerificationCode">获取验证码</button>
                </div>
            </div>
           <div class="form-group help findPwdTwo">
                <input type="password" id="newPwd" name="phone" class="form-control"  placeholder="请重新设置密码">
                <i class="fa fa-lock"></i>
            </div>
            <div class="form-group help findPwdTwo">
                <input type="password" id="sureNewPwd"  class="form-control"  placeholder="请确认密码">
                <i class="fa fa-lock"></i>
            </div>
            <div class="form-group">
                <button  class="btn btn-primary" id="sureFindPwd" style="width: 100%">确定</button>
            </div>
            <span  class="register-btn text" id="backLogin">返回</span>
        </div>
    </div>
</div>
<div id="showDialog1"></div>

<%--<div class="container" style="margin-top: 20px">
    <a href="${pageContext.request.contextPath}/logout"><button class="btn btn-info" >退出登录</button></a>
</div>--%>

<link href="${pageContext.request.contextPath}/statics/css/login/login.css" rel="stylesheet" />
<!-- 基本的jquery和bootstrap -->
<link href="${pageContext.request.contextPath}/statics/widget/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
<script src="${pageContext.request.contextPath}/statics/js/jquery-1.12.4.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap/js/bootstrap.min.js"></script>
<!-- 头像效果 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/common.js"></script>
<!-- 图标 -->
<link href="${pageContext.request.contextPath}/statics/widget/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<%--校验--%>
<%--<link href="${pageContext.request.contextPath}/statics/widget/validator/bootstrapValidator.min.css" rel="stylesheet">
<script src="${pageContext.request.contextPath}/statics/widget/validator/bootstrapValidator.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/validator/zh_CN.min.js"></script>--%>
<%--当前页面--%>
<script src="${pageContext.request.contextPath}/statics/js/login/login.js"></script>
</body>
</html>