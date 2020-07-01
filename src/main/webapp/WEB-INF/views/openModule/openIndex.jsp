<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<jsp:include page="common/header.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/statics/js/openModule/amazeui.min.js"></script>
<%--主页自定义的bootstrap的css--%>
<link href="${pageContext.request.contextPath}/statics/css/openModule/encyclopedias/bootstrap.min.css" rel="stylesheet">
<!-- theme stylesheet-->
<link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/openModule/style.default.css" id="theme-stylesheet">
<!-- Icon fonts-->
<link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/openModule/pe-icon-7-stroke.css">
<!-- CCS for the effects-->
<link href="${pageContext.request.contextPath}/statics/css/openModule/effects.css" rel="stylesheet">
<!-- 公共部分 -->
<link href="${pageContext.request.contextPath}/statics/css/openModule/common.css" rel="stylesheet" />
<div class="get">
    <div class="am-g">
        <div class="am-u-lg-12">
            <div class="get-title">
                <div class="get_font_left get-title-font">已经有</div>
                <div class="get_font_center " id="banner_num"></div>
                <div class="get_font_rigth get-title-font">位用户使用</div>
                <div class="font_line get-title-font" >爱宠乐</div>
            </div>
        </div>
    </div>
</div>
<div class="am-g am-imglist"  >
    <div class="container about-all"  >
        <div class="row" >
            <div class="col-sm-12" style="text-align: center;font-size: 26px;margin-bottom: 20px;" >
                爱宠乐
            </div>
        </div>
        <div class="row" >
            <div class="col-lg-12" style="z-index: 999;background: white;padding-bottom: 20px;border:1px solid #2277ee">
                <div class="col-lg-12" >
                    <p class="about-us-1">${openIndexData.platformDescription}</p>
                    <button class="btn btn-outline-primary btn-sm pull-right about-more">更多</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="am-g am-imglist" style="max-width: 100%;height: 800px;">
    <!-- <img src="${pageContext.request.contextPath}/statics/img/openModule/a2.jpg" style="width: 100%;height: 600px;"  	/> -->
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"  >
        <div class="hover ehover13">
            <img class="img-responsive"  src="${pageContext.request.contextPath}/statics/img/openModule/a2.jpg"  alt="">
            <div class="overlay" style="margin-top: 100px;">
                <h2 style="padding-top: 120px;">爱宠乐宠物店申请</h2>
                <shiro:authenticated>
                    <button class="info " data-toggle="modal" data-target="#modal13">
                        <a href="${pageContext.request.contextPath}/open/applyPetShop.html/0" style="color: white;height: 800px;" >申请使用</a>
                    </button>
                </shiro:authenticated>
                <shiro:guest>
                    <button class="info " data-toggle="modal" data-target="#modal13">
                        <a href="${pageContext.request.contextPath}/login" style="color: white;height: 800px;" >请先登录</a>
                    </button>
                </shiro:guest>
            </div>
        </div>
    </div>
</div>

<div class="am-g am-imglist" style="max-width: 100% ;">
    <section class="py-5 bg-gray img-show">
        <div class="container py-5">
            <h2 class="lined mb-4">宠物管理</h2>
            <p class="lead">更高效的管理你的宠物店</p>
            <div class="row infomation-img">
                <c:forEach var="img" items="${imgPathList}">
                    <div class="col-lg-4 col-sm-6 p-0">
                        <div class="box box-img">
                            <img src="${pageContext.request.contextPath}${img}" class="img-fluid">
                            <div class="box-content">
                                <h3 class="title">爱宠乐</h3>
                                <span class="post">宠物店管理界面</span>
                            </div>
                        </div>
                    </div>
                </c:forEach>
            </div>
        </div>
    </section>
</div>

<div class="am-g am-imglist " >
    <div class=" container" style="height: 300px;">
        <div class="col-sm-12" style="text-align: center;font-size: 46px;">
            宠物百科
        </div>
       <%-- <div class="col-sm-12" style="text-align: center;font-size: 26px;">
            热门关注的宠物
        </div>--%>
        <div class="col-sm-12" style="padding-left: 150px;">
            <!-- <img src="/statics/img/openModule/what_do.png" width="50%" class="pull-left" />
            <img src="/statics/img/openModule/what_do.png" width="50%" class="pull-right" /> -->
            <section class="py-5">
                <div class="container py-5">
                    <h2 class="mb-5">热门关注</h2>
                    <div class="row mb-2" >
                        <div class="col-lg-4 col-md-6 mb-4 animal">
                            <div class="icon mb-4"><i class="glyphicon glyphicon-fire"></i></div>
                            <h5 class="lined mb-4">狗狗</h5>
                            <p class="text-muted text-small">阿拉斯加雪橇犬</p>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4 animal">
                            <div class="icon mb-4"><i class="glyphicon glyphicon-fire"></i></div>
                            <h5 class="lined mb-4">猫</h5>
                            <p class="text-muted text-small">阿比西尼亚猫</p>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4 animal">
                            <div class="icon mb-4"><i class="glyphicon glyphicon-fire"></i></div>
                            <h5 class="lined mb-4">兔子</h5>
                            <p class="text-muted text-small">安哥拉兔</p>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4 animal">
                            <div class="icon mb-4"><i class="glyphicon glyphicon-fire"></i></div>
                            <h5 class="lined mb-4">宠物鼠</h5>
                            <p class="text-muted text-small">搬仓鼠</p>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4 animal">
                            <div class="icon mb-4"><i class="glyphicon glyphicon-fire"></i></div>
                            <h5 class="lined mb-4">宠物鸟</h5>
                            <p class="text-muted text-small">白玉鸟</p>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4 animal">
                            <div class="icon mb-4"><i class="glyphicon glyphicon-fire"></i></div>
                            <h5 class="lined mb-4">宠物鱼</h5>
                            <p class="text-muted text-small">刺豚鱼</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </div>
</div>

<div class="am-g am-imglist" style="max-width: 100% ;">
    <section class="bg-gray py-5">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-4 mb-4 mb-lg-0"><a href="${pageContext.request.contextPath}/open/encyclopedias.html" class="d-block">
                    <img src="${pageContext.request.contextPath}/statics/img/openModule/en.png" alt="" class="img-fluid mb-4 show-img"></a>
                    <h3 class="h5 mb-4">${openIndexData.encyclopediaTitle}</h3>
                    <p class="text-small">
                        ${openIndexData.encyclopediaDescription}
                    </p>
                    <a href="${pageContext.request.contextPath}/open/encyclopedias.html" class="btn btn-outline-primary btn-sm">宠物百科</a>
                </div>
                <div class="col-lg-4 mb-4 mb-lg-0"><a href="${pageContext.request.contextPath}/open/information.html" class="d-block"><img src="${pageContext.request.contextPath}/statics/img/openModule/info.png" alt="" class="img-fluid mb-4 show-img"></a>
                    <h3 class="h5 mb-4">${openIndexData.informationTitle}</h3>
                    <p class="text-small">
                        ${openIndexData.informationDescription}
                    </p>
                    <a href="${pageContext.request.contextPath}/open/information.html" class="btn btn-outline-primary btn-sm">宠物资讯</a>
                </div>
                <div class="col-lg-4 mb-4 mb-lg-0"><a href="${pageContext.request.contextPath}/open/petShop.html" class="d-block"><img src="${pageContext.request.contextPath}/statics/img/openModule/shop.png" alt="" class="img-fluid mb-4 show-img"></a>
                    <h3 class="h5 mb-4">${openIndexData.shopTitle}</h3>
                    <p class="text-small">
                        ${openIndexData.shopDescription}
                    </p>
                    <a href="${pageContext.request.contextPath}/open/petShop.html" class="btn btn-outline-primary btn-sm">宠物店铺</a>
                </div>
            </div>
        </div>
    </section>
</div>
<div class="am-g am-imglist" style="max-width: 100% ;">
    <section class="py-5">
        <div class="container py-5">
            <h4 class="mb-4">${petInfoTop.title}</h4>
            <p class="text-small info-content">
                ${petInfoTop.content}
            </p>
            <%--<p class="lead ">
                南极大陆为通常所说的南大洋（太平洋、印度洋和大西洋的南部水域）所包围，它与南美洲最近的距离为965公里，
                距新西兰2000公里、距澳大利亚2500公里、距南非3800公里、距中国北京的距离约有12000公里。
                南极大陆的总面积为1390万平方公里，相当于中国和印巴次大陆面积的总和，居世界各洲第五位。
            </p>--%>
            <a href="${pageContext.request.contextPath}/open/informationDetails.html/${petInfoTop.id}" class="btn btn-outline-primary btn-sm">了解更多</a>
        </div>
    </section>
</div>
<%--当前页面--%>
<script src="${pageContext.request.contextPath}/statics/js/openModule/page/openIndex.js"></script>
<jsp:include page="common/footer.jsp"></jsp:include>