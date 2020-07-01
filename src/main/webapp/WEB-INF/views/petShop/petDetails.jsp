<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left" id="petShopBigName"></div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span>商品管理<span style="margin:0 5px;">/</span></span>宠物列表<span style="margin:0 5px;">/</span><span class="top-position-name">宠物详情</span></div>
    </div>
    <div class="row add-pet">
        <div class="col-lg-12" style="padding: 0;">
            <div class="add-pet1" >
                <div class="row" >
                    <div class="col-lg-12 pet-value-title">
                        <h3 class="pull-left">宠物名称：${petDetails.petEncyclopedias.name}</h3>
                        <h3 class="pull-left pet-price-all"><span class="pet-price">${petDetails.price}</span>元（￥）</h3>
                        <div class="pull-right pet-value-button">
                            <button class="btn btn-default canclePets" >返回</button>
                            <c:if test="${petDetails.salesStatus!='已售'}">
                                <button class="btn btn-danger" id="delPets" data="${petDetails.id}">删除</button>
                                <button class="btn btn-primary" id="updatePets" data="${petDetails.id}">修改</button>
                            </c:if>
                            <c:if test="${petDetails.salesStatus=='已售'}">
                                <button class="btn btn-default">已售</button>
                            </c:if>
                            <c:if test="${petDetails.salesStatus=='当前订单'}">
                                <button class="btn btn-danger addOrder" data="${petDetails.id}" >
                                    取消订单
                                </button>
                            </c:if>
                            <c:if test="${petDetails.salesStatus=='待售'}">
                                <button class="btn btn-primary addOrder" data="${petDetails.id}" >
                                    添加订单
                                </button>
                            </c:if>
                        </div>
                    </div>
                </div>
                <div class="row" >
                    <div class="col-lg-2 pet-value-name">宠物编号：${petDetails.number}</div>
                    <div class="col-lg-2 pet-value-name">类别：${petDetails.petEncyclopedias.category}</div>
                    <div class="col-lg-2 pet-value-name">品种：${petDetails.petEncyclopedias.name}</div>
                    <div class="col-lg-2 pet-value-name">中文名称：${petDetails.petEncyclopedias.name}</div>
                    <div class="col-lg-4 pet-value-name">英文名称：${petDetails.petEncyclopedias.englishName}</div>
                    <div class="col-lg-2 pet-value-name" >昵称：${petDetails.nickName}</div>
                    <div class="col-lg-2 pet-value-name">毛长：${petDetails.hairLength}</div>
                    <div class="col-lg-2 pet-value-name">毛色：${petDetails.coatColor}</div>
                    <div class="col-lg-2 pet-value-name">体型：${petDetails.shape}</div>
                    <div class="col-lg-2 pet-value-name" >体重：${petDetails.weight}</div>
                    <c:if test="${petDetails.petEncyclopedias.life!=null && petDetails.petEncyclopedias.life!='' }">
                        <div class="col-lg-2 pet-value-name">寿命：${petDetails.petEncyclopedias.life}</div>
                    </c:if>
                    <div class="col-lg-2 pet-value-name">原产地：${petDetails.petEncyclopedias.countryOfOrigin}</div>
                    <c:if test="${petDetails.petEncyclopedias.function!=null && petDetails.petEncyclopedias.function!='' }">
                        <div class="col-lg-2 pet-value-name">功能：${petDetails.petEncyclopedias.function}</div>
                    </c:if>
                    <c:if test="${petDetails.petEncyclopedias.intelligenceQuotient!=null && petDetails.petEncyclopedias.intelligenceQuotient!='' }">
                        <div class="col-lg-2 pet-value-name">智商：${petDetails.petEncyclopedias.intelligenceQuotient}</div>
                    </c:if>
                    <div class="col-lg-2 pet-value-name">详细特征：${petDetails.petEncyclopedias.detailCharacterities}</div>
                    <div class="col-lg-2 pet-value-name">创建时间：<fmt:formatDate value="${petDetails.createTime}" pattern="yyyy-MM-dd" /></div>
                    <c:if test="${petDetails.remarks!=null && petDetails.remarks!='' }">
                        <div class="col-lg-12 pet-value-name pet-value-special">备注：${petDetails.remarks}</div>
                    </c:if>
                    <div class="col-lg-12 pet-value-name pet-value-special">起源：
                        ${petDetails.petEncyclopedias.origin}
                    </div>
                </div>
                <div class="row" >
                    <div class="col-lg-12 pet-value-name">
                        <h5>宠物图片：</h5>
                    </div>
                    <div class="col-lg-12 pet-value-img">
                        <c:forEach var="img" items="${imgPathList}" >
                            <img src="${pageContext.request.contextPath}${img}" >
                        </c:forEach>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="showDialog1"></div>
<jsp:include page="common/footer.jsp"></jsp:include>

<!-- 头像效果 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/common.js"></script>
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<!-- 当前页 -->
<link href="${pageContext.request.contextPath}/statics/css/pet/pet-details.css" rel="stylesheet" />
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/pet-information-details.js"></script>
</body>
</html>
