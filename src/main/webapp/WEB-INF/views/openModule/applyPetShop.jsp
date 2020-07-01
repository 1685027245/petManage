<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%--
<html>
<head>
    <title>爱宠乐官网</title>
    <!-- 基本的jquery和bootstrap -->
    <link href="${pageContext.request.contextPath}/statics/widget/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <script src="${pageContext.request.contextPath}/statics/js/jquery-1.12.4.min.js"></script>
    <script src="${pageContext.request.contextPath}/statics/widget/bootstrap/js/bootstrap.min.js"></script>
    <!-- 图标 -->
    <link href="${pageContext.request.contextPath}/statics/widget/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
    &lt;%&ndash;导航栏整体样式&ndash;%&gt;
    <link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/openModule/amazeui.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/openModule/petshow.css?6">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/openModule/animate.min.css">
   &lt;%&ndash; <script src="${pageContext.request.contextPath}/statics/js/openModule/amazeui.min.js"></script>&ndash;%&gt;
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
                <img alt="Logo" src="${pageContext.request.contextPath}/statics/img/openModule/logo.png" /> <span>爱宠乐</span>
            </a>
        </h1>
        <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#doc-topbar-collapse-5'}">
				<span class="am-sr-only">
					导航切换
				</span>
            <span class="am-icon-bars">
				</span>
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
                            <img src="${pageContext.request.contextPath}/statics/img/openModule/kj.png" alt="" title="个人中心">
                            <div class="user-msg" >

                                <ul class="am-dropdown-content user-center" >
                                    <div class="user-center-name"><shiro:principal property="userName"/></div>
                                    <li>
                                        <a href="${pageContext.request.contextPath}/open/userCenter.html">
                                            <span class="glyphicon glyphicon-user"></span>个人中心
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
--%>

<jsp:include page="common/header.jsp"></jsp:include>
<div class="container" >
    <div id="showDialog1"></div>
    <div class="row text-center top-title">
        <c:if test="${petShop.id==null}">
            申请宠物店
        </c:if>
        <c:if test="${petShop.id==null}">
            修改申请宠物店信息
        </c:if>
    </div>
    <div class="row content-body" >
        <form class="form-horizontal" onsubmit="return false">
            <div class="form-group">
                <label  class="col-sm-2 control-label">宠物店名称</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="petShopName" data="${petShop.shopImgPath}" value="${petShop.shopName}"  placeholder="请输入宠物店名称">
                </div>
                <label  class="col-sm-2 control-label">宠物店类型</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="petShopCategory"  value="${petShop.category}" placeholder="请输入宠物店类型">
                </div>
            </div>
            <div class="form-group">
                <label  class="col-sm-2 control-label">宠物店电话</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="petShopPhone"  value="${petShop.shopPhone}"  placeholder="请输入宠物店电话">
                </div>
                <label  class="col-sm-2 control-label">查询地址</label>
                <div class="col-sm-4">
                    <input type="text" id="inputMap" class="form-control"  placeholder="请输入选择地址">
                    <p class="col-lg-10" id="input-info"></p>
                </div>
            </div>
            <div class="form-group">
                <label  class="col-sm-2 control-label">宠物店地址</label>
                <div class="col-sm-10">
                    <input type="text" id="mapSureAddress" class="form-control"  value="${petShop.address}" longitude="${petShop.longitude}" latitude="${petShop.latitude}"  placeholder="请在地图上确认宠物店地址" disabled>
                </div>
                <div class="col-sm-10 col-sm-offset-2" >
                    <div id="mapSelect"></div>
                </div>
            </div>
            <div class="form-group">
                <label  class="col-sm-2 control-label">宠物店描述</label>
                <div class="col-sm-10">
                    <textarea rows="5" id="petShopDescript" class="text-descript"  placeholder="请简要描述你的宠物店"> ${petShop.detailedDescription}</textarea>
                </div>
            </div>
            <c:if test="${petShop.shopImgPath!=null}">
            <div class="form-group">
                <label  class="col-sm-2 control-label">宠物店图片</label>
                    <div class="col-sm-10 pet-img-show">
                        <c:forEach var="img" items="${imgPathList}">
                            <div class="img-ioc col-sm-4">
                                <img src="${pageContext.request.contextPath}${img}" >
                                <span class="delImg glyphicon glyphicon-remove" title="删除该图片"></span>
                            </div>
                        </c:forEach>
                    </div>
            </div>
            </c:if>
            <div class="form-group">
                <c:if test="${petShop.shopImgPath!=null}">
                    <label  class="col-sm-2 control-label">继续上传宠物店图片</label>
                </c:if>
                <c:if test="${petShop.shopImgPath==null}">
                    <label  class="col-sm-2 control-label">上传宠物店图片</label>
                </c:if>
                <div class="col-sm-10">
                    <input type="file" name="file"  id="txt_file_food" multiple class="file-loading" />
                </div>
                <button class="btn btn-primary pull-right"  id="applicationForSubmissionPetShop" data="${petShop.id}"  style="margin-right: 15px">
                    <c:if test="${petShop.id==null}">
                        提交申请
                    </c:if>
                    <c:if test="${petShop.id!=null}">
                        再次申请
                    </c:if>
                </button>
                <c:if test="${petShop.id!=null}">
                    <button class="btn btn-default pull-right"  id="canclePetShop" data="${petShop.id}"  style="margin-right: 15px">
                        取消
                    </button>
                </c:if>
            </div>
        </form>
    </div>
</div>
<%--本页面--%>
<link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/openModule/page/applyPetShop.css">
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<%--地图导入--%>
<!--地图api调用-->
<script src="https://webapi.amap.com/maps?v=1.4.14&key=4d81136d607c68fb6c906599c0bd1de1&plugin=AMap.Autocomplete,AMap.Geocoder"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/map/underscore-min.js" ></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/map/backbone-min.js" ></script>
<script type="text/javascript" src='${pageContext.request.contextPath}/statics/widget/map/prety-json.js'></script>
<!-- 文件上传 -->
<link href="${pageContext.request.contextPath}/statics/widget/fileinput/fileinput.min.css" rel="stylesheet"/>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/fileinput/fileinput.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/fileinput/zh.js"></script><!-- 中文 -->
<%--<script type="text/javascript" src="${pageContext.request.contextPath}/statics/js/widgetUse/fileinput-use.js"></script>--%><!-- 使用 -->
<%--当前页面--%>
<script src="${pageContext.request.contextPath}/statics/js/openModule/page/openApplyPetShop.js"></script>
<jsp:include page="common/footer.jsp"></jsp:include>
