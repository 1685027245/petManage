<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>登录成功页面</title>
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">
    <!--使用Bootstrap的js插件，必须先调入jQuery-->
    <script src="http://libs.baidu.com/jquery/1.9.0/jquery.min.js"></script>
    <!-- 包括所有bootstrap的js插件或者可以根据需要使用的js插件调用　-->
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container" style="margin-top: 20px">
        <h2>登录成功页面</h2>
        用户名：${userinfo.devName}
        <shiro:hasRole  name="admin">
            <h3>welcome：<shiro:principal/></h3>
        </shiro:hasRole><br />
        <shiro:hasPermission name="query">
            <a href="${pageContext.request.contextPath}/showUser"><button class="btn btn-info" >点击获取数据</button></a><br /><br />
        </shiro:hasPermission>
        <a href="${pageContext.request.contextPath}/list"><button class="btn btn-info" >toList</button></a><br /><br />
        <a href="${pageContext.request.contextPath}/list2"><button class="btn btn-success" >toList2</button></a><br /><br />
        <a href="${pageContext.request.contextPath}/logout"><button class="btn btn-info" >退出登录</button></a>
        <h3>
            直接使用redisUtil序列号用户信息：${userinfo}
        </h3>
    </div>

</body>
</html>