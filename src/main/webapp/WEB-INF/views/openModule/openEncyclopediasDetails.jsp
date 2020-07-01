<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<jsp:include page="common/header.jsp"></jsp:include>
<!-- 时间选择器 -->
<%--<link href="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.min.css" rel="stylesheet">
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.zh-CN.js"></script><!-- 中文-->
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/js/widgetUse/datetimepicker-use.js"> </script><!-- 使用 -->--%>
<%--当前页面--%>
<link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/openModule/page/petStoreDetails.css">
<div class="container">
    <ol class="am-breadcrumb bdfw_link now-position">
        <li><a href="${pageContext.request.contextPath}/open/index.html" class="am-icon-home">首页</a></li>
        <li><a href="${pageContext.request.contextPath}/open/encyclopedias.html">宠物百科</a></li>
        <li class="am-active" >${encyclopedias.name}</li>
    </ol>
    <div class="container shop-content">
        <div class="row">
            <div class="col-lg-10">
                <div class="bdfw_nr_title" >
                    ${encyclopedias.name}
                    <span class="order-pet-shop" >${encyclopedias.category}</span>
                </div>
                <%--<div class="bdfw_nr_brief_info_nr bdfw_nr_brief_address">
                    <span >关注程度:</span>
                    <span class="bdfw_nr_brief_star">
                         <img src="${pageContext.request.contextPath}/statics/img/openModule/xx.png" alt="">
                         <img src="${pageContext.request.contextPath}/statics/img/openModule/xx.png" alt="">
                         <img src="${pageContext.request.contextPath}/statics/img/openModule/xx.png" alt="">
                         <img src="${pageContext.request.contextPath}/statics/img/openModule/xx.png" alt="">
                         <img src="${pageContext.request.contextPath}/statics/img/openModule/xx.png" alt="">
                    </span>
                </div>--%>
                <div class="bdfw_nr_brief_info_nr bdfw_nr_brief_address">
                    <span>别名：${encyclopedias.alias} </span>
                    <span class="span-left">英文名：${encyclopedias.englishName}</span>
                    <span class="span-left" style="color: red;">参考价格：${encyclopedias.price}</span>
                </div>
                <div class="bdfw_nr_brief_info_nr bdfw_nr_brief_address">
                    <span>体型：${encyclopedias.shape}</span>
                    <span class="span-left">毛长：${encyclopedias.hairLength}</span>
                    <span class="span-left">毛色：${encyclopedias.coatColor}</span>
                    <span class="span-left">体重：
                        <c:if test="${encyclopedias.weight==''}">--</c:if>
                        <c:if test="${encyclopedias.weight!=''}">${encyclopedias.weight}</c:if>
                    </span>
                </div>
                <div class="bdfw_nr_brief_info_nr">
                    <div class="bdfw_nr_brief_info_nr">
                        <span>原产地：${encyclopedias.countryOfOrigin}</span>
                        <span class="span-left">寿命：
                            <c:if test="${encyclopedias.life==''}">--</c:if>
                            <c:if test="${encyclopedias.life!=''}">${encyclopedias.life}</c:if>
                        </span>
                        <c:if test="${encyclopedias.category=='狗狗'}">
                            <span class="span-left">智商：${encyclopedias.intelligenceQuotient}</span>
                            <span class="span-left">功能：${encyclopedias.function}</span>
                        </c:if>
                        <c:if test="${encyclopedias.category=='老鼠'||encyclopedias.category=='宠物鸟'}">
                            <span class="span-left">种类：${encyclopedias.varieties}</span>
                        </c:if>
                        <c:if test="${encyclopedias.category=='宠物龟'||encyclopedias.category=='宠物鱼'}">
                            <span class="span-left">生活环境：${encyclopedias.environment}</span>
                            <span class="span-left">品种：${encyclopedias.varieties}</span>
                        </c:if>
                    </div>
                </div>
                <div class="bdfw_nr_brief_info_nr bdfw_nr_brief_address">
                    <span >详细描述：
                        <c:if test="${encyclopedias.detailCharacterities==''}">--</c:if>
                        <c:if test="${encyclopedias.detailCharacterities!=''}">${encyclopedias.detailCharacterities}</c:if>
                    </span>
                </div>
            </div>
            <div class="col-lg-2 pet-shop-top-img">
                <div class="bdfw_nr_block_r">
                    <img src="${pageContext.request.contextPath}${firstImg}" alt="">
                    <div class="bdfw_nr_block_r_info">
                        <span><i class="am-icon-camera"></i> 宠物照片（${imgNum}）</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="bdfw_nr_brief_info_nr bdfw_nr_brief_address">
            <span>起源：${encyclopedias.origin}</span>
        </div>
        <div class="row" style="margin-bottom: 10px">
            <div class="col-lg-12">图片:</div>
            <c:forEach var="img" items="${imgPathList}" >
            <div class="col-lg-3 pet-shop-img">
                <img title="查看大图" src="${pageContext.request.contextPath}${img}" >
            </div>
            </c:forEach>
        </div>
    </div>
</div>
<div id="showDialog1"></div>
<!-- 放大图片的div容器 -->
<div id="outerdiv" style="position:fixed;top:0;left:0;background:rgba(0,0,0,0.7);z-index:100;width:100%;height:100%;display:none;">
    <div id="innerdiv" style="position:absolute;">
        <img id="bigimg" style="border:5px solid #fff;" src="" />
    </div>
</div>
<%--查看图片--%>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/seeImg/seeImg.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/js/openModule/page/openEncyclopediasDetails.js"></script>
<jsp:include page="common/footer.jsp"></jsp:include>