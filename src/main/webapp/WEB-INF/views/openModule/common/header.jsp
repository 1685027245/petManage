<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<html>
<head>
    <title>爱宠乐官网</title>
    <!-- 基本的jquery和bootstrap -->
    <link href="${pageContext.request.contextPath}/statics/widget/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <script src="${pageContext.request.contextPath}/statics/js/jquery-1.12.4.min.js"></script>
    <script src="${pageContext.request.contextPath}/statics/widget/bootstrap/js/bootstrap.min.js"></script>
    <!-- 图标 -->
    <link href="${pageContext.request.contextPath}/statics/widget/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <%--导航栏整体样式--%>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/openModule/amazeui.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/openModule/petshow.css?6">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/openModule/animate.min.css">
    <%--<script src="${pageContext.request.contextPath}/statics/js/openModule/amazeui.min.js"></script>--%>
    <script src="${pageContext.request.contextPath}/statics/js/openModule/countUp.min.js"></script>
    <script src="${pageContext.request.contextPath}/statics/js/openModule/amazeui.lazyload.min.js"></script>
    <!-- 公共部分 -->
    <link href="${pageContext.request.contextPath}/statics/css/openModule/common.css" rel="stylesheet" />
</head>
<body>
<header class="am-topbar am-topbar-inverse">
    <div class="amz-container">
        <h1 class="am-topbar-brand">
            <a href="index.html" class="am-topbar-logo">
                <img alt="Logo" src="${pageContext.request.contextPath}/statics/img/logo.png" /> <%--<span>爱宠乐</span>--%>
            </a>
        </h1>
        <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#doc-topbar-collapse-5'}">
				<span class="am-sr-only">
					导航切换
				</span>
            <span class="am-icon-bars"></span>
        </button>
        <div class="am-collapse am-topbar-collapse" id="doc-topbar-collapse-5">
            <ul class="am-nav am-nav-pills am-topbar-nav">
                <li class="">
                    <a href="${pageContext.request.contextPath}/open/index.html">
                        首页
                    </a>
                </li>
                <li>
                    <a href="${pageContext.request.contextPath}/open/encyclopedias.html">
                        宠物百科
                    </a>
                </li>
                <li>
                    <a href="${pageContext.request.contextPath}/open/information.html">
                        <!-- 萌宠趣闻 -->
                        萌宠资讯
                    </a>
                </li>
                <li>
                    <a href="${pageContext.request.contextPath}/open/petShop.html">
                        宠物店铺
                    </a>
                </li>
                <shiro:hasAnyRoles name="petShop,general,admin,applyingPetShop" >
                    <li>
                        <a href="${pageContext.request.contextPath}/open/wechatMoments.html">
                            <!-- 萌宠专题 -->
                            朋友圈
                        </a>
                    </li>
                </shiro:hasAnyRoles>
                <shiro:guest>
                    <li>
                        <a href="${pageContext.request.contextPath}/login">
                            登录/注册
                        </a>
                    </li>
                </shiro:guest>

                <shiro:authenticated>
                    <shiro:hasRole name="admin">
                        <li>
                            <a href="${pageContext.request.contextPath}/system/systemIndex.html" target="_blank">
                                系统管理
                            </a>
                        </li>
                    </shiro:hasRole>
                    <shiro:hasAnyRoles name="petShop,admin">
                        <li>
                            <a href="${pageContext.request.contextPath}/petIndex.html" target="_blank">
                                我的宠物店
                            </a>
                        </li>
                    </shiro:hasAnyRoles>
                    <shiro:hasAnyRoles name="general,admin">
                        <li>
                            <a href="${pageContext.request.contextPath}/open/applyPetShop.html/0" >
                                申请宠物店
                            </a>
                        </li>
                    </shiro:hasAnyRoles>
                    <shiro:hasAnyRoles name="applyingPetShop,admin">
                        <li>
                            <a href="${pageContext.request.contextPath}/open/applyPetShopMsg.html" >
                                宠物店申请中
                            </a>
                        </li>
                    </shiro:hasAnyRoles>
                    <shiro:hasAnyRoles name="forbiddenPetShop">
                        <li>
                            <a href="${pageContext.request.contextPath}/open/applyPetShopMsg.html" >
                                宠物店禁用
                            </a>
                        </li>
                    </shiro:hasAnyRoles>
                    <li>
                        <div class="am_user_head_l_ico my-img-value">
                            <img id="myUserImg" src="${pageContext.request.contextPath}<shiro:principal property='imgPath'/>" alt="" title="个人中心">
                            <div class="user-msg" >
                                <ul class="am-dropdown-content user-center" >
                                    <div class="user-center-name" id="userCenterName"><shiro:principal property="userName"/></div>
                                    <li>
                                        <a href="${pageContext.request.contextPath}/open/userCenter.html">
                                            <span class="glyphicon glyphicon-user"></span>个人中心
                                        </a>
                                    </li>
                                    <li>
                                        <a href="${pageContext.request.contextPath}/open/member.html">
                                            <span class="glyphicon glyphicon-credit-card"></span>我的会员卡
                                        </a>
                                    </li>
                                    <li>
                                        <a href="${pageContext.request.contextPath}/open/order.html">
                                            <span class="glyphicon glyphicon-earphone"></span>我的预约
                                        </a>
                                    </li>
                                    <li>
                                        <a href="${pageContext.request.contextPath}/logout">
                                            <span class="glyphicon glyphicon-log-out"></span>退出登录
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </shiro:authenticated>
            </ul>
        </div>
    </div>
</header>
