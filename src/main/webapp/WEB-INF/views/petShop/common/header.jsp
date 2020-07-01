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
    <title>爱宠乐宠物店</title>
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
    <div class="pull-left"><a href="${pageContext.request.contextPath}/index.html" class="logo"><img alt="Logo" src="${pageContext.request.contextPath}/statics/img/logo.png" /> <%--<span>爱宠乐</span>--%></a></div>
    <div class="pull-right nav-right">
        <div class="pull-left nav-right1" style="width: 100%;right: 200px;">
            <div class="news-all">
                <ul class="news_li">
                    <%--<li>水果忍者：穿靴子的猫</li>
                    <li>乐动魔方 Plus</li>
                    <li>亡灵杀手 汉化版</li>
                    <li>jq22 搜集整理</li>
                    <li>你疯啦 iphone壁纸</li>--%>
                </ul>
                <ul class="swap"></ul>
            </div>
        </div>
        <div class="pull-left nav-right1">
            <i class="fa fa-fw fa-envelope-o" id="opinionMsg" style="position: relative;cursor: pointer" title="会员反馈"><span class="infoMsg"></span></i>
        </div>
        <div class="pull-left nav-right1" >
            <i class="fa fa-fw fa-bell-o" id="orderMsg" style="position: relative;cursor: pointer" title="用户预约"><span class="infoMsg"></span></i>
        </div>
        <div class="pull-left nav-right1 ">
            <img id="my-img"  src="${pageContext.request.contextPath}<shiro:principal property='imgPath'/>" alt="" title="个人中心">
            <%--<img id="my-img"  src="${pageContext.request.contextPath}/statics/img/pseronlogo.png"/>--%>
            <div  class="personal-msg">
                <div class="person-name" id="person-name" >
                    <shiro:principal property="userName"/>
                </div>
                <a href="${pageContext.request.contextPath}/open/userCenter.html" ><div class="person person-all-msg"><i class="fa fa-user"></i>个人信息</div></a>
                <shiro:hasRole name="admin">
                    <a href="${pageContext.request.contextPath}/system/systemIndex.html" ><div class="person person-all-msg"><i class="fa fa-bars"></i>系统管理</div></a>
                </shiro:hasRole>
                <a href="${pageContext.request.contextPath}/open/index.html" ><div class="person person-all-msg"><i class="fa fa-desktop"></i>爱宠乐官网</div></a>
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
                    <a id="indexPage" href="${pageContext.request.contextPath}/petIndex.html"><i class="fa fa-th-large"></i> 首页</a>
                </li>
                <li>
                    <a href="${pageContext.request.contextPath}/petShop/storefrontBusiness.html"><i class="fa fa-money"></i> 店面业务</a>
                </li>
                <li>
                    <a href="${pageContext.request.contextPath}/petShop/storefrontAllBusiness.html"><i class="fa fa-server"></i> 宠物服务</a>
                </li>
                <li id="goodsManager">
                    <a  href="#"><i class="fa fa-shopping-cart"></i> 商品管理<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li >
                            <a id="petInformationPage" href="${pageContext.request.contextPath}/petShop/petInformation.html">宠物列表</a>
                        </li>
                        <li>
                            <a id="foodInformationPage" href="${pageContext.request.contextPath}/petShop/foodInformation.html">食品列表</a>
                        </li>
                        <li>
                            <a id="peripheryInformationPage" href="${pageContext.request.contextPath}/petShop/peripheryInformation.html">宠物周边</a>
                        </li>
                    </ul>
                </li>
                <li >
                    <a href="${pageContext.request.contextPath}/statics/#"><i class="fa fa-user-o"></i> 会员管理<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="${pageContext.request.contextPath}/petShop/showPetShopMember.html">会员用户</a>
                        </li>
                        <li>
                            <a  href="${pageContext.request.contextPath}/petShop/showPetShopMemberRecord.html">会员充值记录</a>
                        </li>
                        <li>
                            <a href="${pageContext.request.contextPath}/petShop/petShopMembershipDiscount.html">会员优惠</a>
                        </li>
                        <li>
                            <a href="${pageContext.request.contextPath}/petShop/petShopMemberActivity.html">会员推广活动</a>
                        </li>
                        <li>
                            <a href="${pageContext.request.contextPath}/petShop/petShopMemberOrder.html">会员预约</a>
                        </li>
                        <li>
                            <a href="${pageContext.request.contextPath}/petShop/petShopMemberOpinion.html">会员反馈</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="${pageContext.request.contextPath}/statics/#"><i class="fa fa-sticky-note-o"></i> 库存管理<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="${pageContext.request.contextPath}/petShop/petShopStock.html">宠物库存</a>
                        </li>
                        <li>
                            <a href="${pageContext.request.contextPath}/petShop/petShopFoodStock.html">食品库存</a>
                        </li>
                        <li>
                            <a href="${pageContext.request.contextPath}/petShop/petShopPeripheryStock.html">周边商品库存</a>
                        </li>
                        <li>
                            <a href="${pageContext.request.contextPath}/petShop/petSalesRecords.html">销售记录</a>
                        </li>
                        <!-- 三级菜单
                        <li>
                            <a href="#">Third Level <span class="fa arrow"></span></a>
                            <ul class="nav nav-third-level">
                                <li>
                                    <a href="#">Third Level Item</a>
                                </li>
                            </ul>
                        </li> -->
                    </ul>
                </li>
                <li>
                    <a href="javascript:;"><i class="fa fa-line-chart"></i> 分析报告<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="${pageContext.request.contextPath}/petShop/petSalesAnalysis.html">商品销售情况</a>
                        </li>
                        <li>
                            <a href="${pageContext.request.contextPath}/petShop/petShopUserAnalysis.html">用户情况</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;"><i class="fa fa-cog"></i> 系统设置<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="${pageContext.request.contextPath}/petShop/petSystemSetup.html">宠物店信息设置</a>
                        </li>
                        <li>
                            <a href="${pageContext.request.contextPath}/petShop/petShopUserComment.html">用户评论</a>
                        </li>
                        <%--<li>
                            <a href="${pageContext.request.contextPath}/petShop/petShopStaff.html">店员管理</a>
                        </li>--%>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>