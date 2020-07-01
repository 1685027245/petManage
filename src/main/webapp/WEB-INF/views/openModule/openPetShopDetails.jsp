<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<jsp:include page="common/header.jsp"></jsp:include>
<!-- 时间选择器 -->
<link href="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.min.css" rel="stylesheet">
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.zh-CN.js"></script><!-- 中文-->
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/js/widgetUse/datetimepicker-use.js"> </script><!-- 使用 -->
<!-- 评星 -->
<link href="${pageContext.request.contextPath}/statics/widget/star-rating/star-rating.min.css" rel="stylesheet"/>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/star-rating/star-rating.min.js"></script>
<%--当前页面--%>
<link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/openModule/page/petStoreDetails.css">
<script src="${pageContext.request.contextPath}/statics/js/openModule/page/openPetShopDetails.js"></script>
<div class="container">
    <ol class="am-breadcrumb bdfw_link now-position">
        <li><a href="${pageContext.request.contextPath}/open/index.html" class="am-icon-home">首页</a></li>
        <li><a href="${pageContext.request.contextPath}/open/petShop.html">宠物店铺</a></li>
        <li class="am-active" id="shopMsg" data="${petShop.id}">${petShop.shopName}</li>
    </ol>
    <div class="container shop-content">
        <div class="row">
            <div class="col-lg-10">
                <div class="bdfw_nr_title" >
                    ${petShop.shopName}
                        <c:if test="${orderMsg!=null}">
                            <span class="order-pet-shop" >预约中</span>
                        </c:if>
                        <c:if test="${orderMsg==null}">
                            <c:if test="${petShop.acceptAppointmentOrNot==true}">
                                <span class="order-pet-shop" id="orderPetShop" >预约</span>
                            </c:if>
                            <c:if test="${petShop.acceptAppointmentOrNot==false}">
                                <span class="order-pet-shop" id="notOrderPetShop">不可预约</span>
                            </c:if>
                        </c:if>
                </div>
                <div class="bdfw_nr_brief_info">
                    <span class="bdfw_nr_brief_star">
                        <input name="dictLevel" value="${petScore}" class="rateShow rating-loading">
                    </span>
                    <span class="bdfw_nr_brief_moreinfo">分类：${petShop.category}</span>
                </div>
                <div class="bdfw_nr_brief_info_nr bdfw_nr_brief_address">
                    <span>地址：</span>
                    <span>${petShop.address}</span>
                </div>
                <div class="bdfw_nr_brief_info_nr bdfw_nr_brief_address">
                    <span>营业状态：</span>
                            <c:if test="${petShop.businessStatus==true}">
                                <span>正常营业</span>
                            </c:if>
                            <c:if test="${petShop.businessStatus==false}">
                                <span style="color: red;">暂停营业</span>
                            </c:if>
                    <span class="span-left">电话：</span>
                    <span>${petShop.shopPhone}</span>
                </div>
                <div class="bdfw_nr_brief_info_nr">
                    <div class="bdfw_nr_brief_info_nr">
                        <span>营业时间：</span>
                        <span>${petShop.businessHours}</span>
                        <span class="span-left">入驻时间：</span>
                        <span><fmt:formatDate value="${petShop.createTime}" pattern="yyyy-MM-dd" /></span>
                       <%-- <span class="span-left">营业状态：</span>
                        <span>正常营业</span>--%>
                    </div>
                </div>
                <div class="bdfw_nr_brief_info_nr bdfw_nr_brief_address">
                    <span>宠物店描述：</span>
                    <span>${petShop.detailedDescription}</span>
                </div>
            </div>
            <div class="col-lg-2 pet-shop-top-img">
                <div class="bdfw_nr_block_r">
                    <img src="${pageContext.request.contextPath}${imgPathFirstImg}" alt="">
                    <div class="bdfw_nr_block_r_info">
                        <span><i class="am-icon-camera"></i> 店铺照片（${imgPathNum}）</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">店铺图片:</div>
            <c:forEach var="img" items="${imgPathList}" >
            <div class="col-lg-3 pet-shop-img">
                <img src="${pageContext.request.contextPath}${img}" >
            </div>
            </c:forEach>
        </div>
        <div class="row" >
            <div class="col-lg-12" style="margin-top: 35px">
                <button class="btn btn-primary" id="showMapBtn">显示地图</button>
            </div>
            <div class="col-lg-12" id="commentAll" >
                <div class="row">
                    <div class="col-lg-10" >
                        <input id="rate" name="dictLevel" class="rating-loading">
                    </div>
                    <div class="pull-right" style="margin-right: 15px" >
                        <button class="btn btn-primary" id="submitComment" style="margin-left: 5px" >提交</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12" >
                        <textarea rows='4' id='commentContent' placeholder="这里填写评论内容" ></textarea>
                    </div>
                </div>
            </div>
            <div class="col-lg-12" style="margin-top: 20px">
                <div id="mapSelect" longitude="${petShop.longitude}" latitude="${petShop.latitude}" shopName="${petShop.shopName}"></div>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-lg-12 comment-title">用户评论（<span id="commentTotalSize"></span>）</div>
    </div>
    <div class="container shop-content" id="allCommentData">
        <%--<div class="row comment-one">
            <div class="ztlb_nr_blockc_l">
                <img src="${pageContext.request.contextPath}/statics/img/openModule/kj.png" alt="">
            </div>
            <div class="ztlb_nr_blockc_r">
                <div class="ztlb_nr_blockc_r_title">
                    布兜宠物 Budoupet Store <span class="comment-time">2020-04-07 15:56:46</span>
                    <input name="dictLevel" value="4.75" class="rateShow rating-loading">
                </div>
                <div class="ztlb_nr_blockc_r_nr">
                    服务很好，很周到
                </div>
            </div>
        </div>--%>
    </div>
    <div class="container shop-content1">
        <div class="row">
            <div class="col-lg-12">
                <div class="more-comment" id="moreComment"><span><i  class="am-icon-spinner am-icon-spin" ></i> 更多宠物店评论</span></div>
            </div>
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
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<jsp:include page="common/footer.jsp"></jsp:include>
<!--地图api调用-->
<script src="https://webapi.amap.com/maps?v=1.4.14&key=4d81136d607c68fb6c906599c0bd1de1&plugin=AMap.Autocomplete,AMap.Geocoder"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/map/underscore-min.js" ></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/map/backbone-min.js" ></script>
<script type="text/javascript" src='${pageContext.request.contextPath}/statics/widget/map/prety-json.js'></script>