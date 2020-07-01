<%--
  Created by IntelliJ IDEA.
  User: 往事三块一毛八
  Date: 2020/3/3
  Time: 18:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<html>
<head>
    <meta charset="utf-8">
    <title>爱宠乐系统管理</title>
    <!-- 基本的jquery和bootstrap -->
    <link href="${pageContext.request.contextPath}/statics/widget/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <script src="${pageContext.request.contextPath}/statics/js/jquery-1.12.4.min.js"></script>
    <script src="${pageContext.request.contextPath}/statics/widget/bootstrap/js/bootstrap.min.js"></script>
    <!-- 菜单 -->
    <link href="${pageContext.request.contextPath}/statics/widget/menu/metismenu.min.css" rel="stylesheet" />
    <script src="${pageContext.request.contextPath}/statics/widget/menu/metismenu.js"></script>
    <!-- 公共部分 -->
    <link href="${pageContext.request.contextPath}/statics/css/pet/common.css" rel="stylesheet" />
    <!-- 图标 -->
    <link href="${pageContext.request.contextPath}/statics/widget/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
</head>
<body>
<nav class="navbar navbar-default navbar-static-top ">
    <div class="pull-left"><a href="${pageContext.request.contextPath}/index.html" class="logo"><img alt="Logo" src="${pageContext.request.contextPath}/statics/img/logo.png" /><%-- <span>爱宠乐</span>--%></a></div>
    <div class="pull-right nav-right">
        <%--<div class="pull-left nav-right1">
            <i class="fa fa-fw fa-envelope-o" ></i>
        </div>
        <div class="pull-left nav-right1">
            <i class="fa fa-fw fa-bell-o" ></i>
        </div>--%>
        <div class="pull-left nav-right1 ">
            <img id="my-img" src="${pageContext.request.contextPath}<shiro:principal property='imgPath'/>" alt="" title="个人中心">
            <div  class="personal-msg">
                <div class="person-name" id="person-name">
                    <shiro:principal property="userName"/>
                </div>
                <a href="${pageContext.request.contextPath}/open/userCenter.html" ><div class="person person-all-msg"><i class="fa fa-user"></i>个人信息</div></a>
                <a href="${pageContext.request.contextPath}/open/index.html" target="_blank"><div class="person person-all-msg"><i class="fa fa-desktop"></i>爱宠乐官网</div></a>
                <a href="${pageContext.request.contextPath}/petIndex.html" target="_blank"><div class="person person-all-msg"><i class="fa fa-paw"></i>我的宠物店</div></a>
                <a href="${pageContext.request.contextPath}/logout"><div class="person logout"><i class="fa fa-sign-out"></i>退出登录</div></a>
            </div>
        </div>
    </div>
</nav>
<nav>
    <div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav navbar-collapse">
            <ul class="nav" id="side-menu">
                <li >
                    <a id="indexPage" href="${pageContext.request.contextPath}/system/systemIndex.html"><i class="fa fa-th-large"></i> 首页</a>
                </li>
                <li >
                    <a href="${pageContext.request.contextPath}/system/petShopApplicationAudit.html"><i class="fa fa-hand-pointer-o"></i> 宠物店申请审核</a>
                </li>
                <li >
                    <a  href="#"><i class="fa fa-database"></i> 数据管理<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li >
                            <a  href="${pageContext.request.contextPath}/system/openIndexDataManager.html">首页数据管理</a>
                        </li>
                        <li>
                            <a  href="${pageContext.request.contextPath}/system/petEncyclopedias.html">宠物百科管理</a>
                        </li>
                        <li>
                            <a  href="${pageContext.request.contextPath}/system/petInformationManager.html">宠物资讯管理</a>
                        </li>

                    </ul>
                </li>
               <%-- <li >
                    <a  href="#"><i class="fa fa-shopping-cart"></i> 反馈<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li >
                            <a  href="#">开放平台反馈</a>
                        </li>
                        <li>
                            <a  href="#">宠物店反馈</a>
                        </li>
                    </ul>
                </li>--%>
                <%--<li >
                    <a  href="#"><i class="fa fa-shopping-cart"></i> 宠物店管理<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li >
                            <a  href="#">开放平台反馈</a>
                        </li>
                        <li>
                            <a  href="#">宠物店反馈</a>
                        </li>
                    </ul>
                </li>--%>
                <li>
                    <a  href="${pageContext.request.contextPath}/system/petShopManager.html"><i class="fa fa-paw"></i> 宠物店管理</a>
                </li>
                <li>
                    <a href="javascript:;"><i class="fa fa-line-chart"></i> 分析报告<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a  href="${pageContext.request.contextPath}/system/merchandiseSalesAnalysis.html">销售情况</a>
                        </li>
                        <li>
                            <a  href="${pageContext.request.contextPath}/system/userAnalysis.html">用户情况</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a  href="${pageContext.request.contextPath}/system/permissionManager.html"><i class="fa fa-user"></i> 用户权限管理</a>
                </li>

            </ul>
        </div>
    </div>
</nav>