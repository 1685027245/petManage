<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left" id="petShopBigName"></div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span>商品管理<span style="margin:0 5px;">/</span>食品列表<span style="margin:0 5px;">/</span><span class="top-position-name">食品详情</span></div>
    </div>
    <div class="row add-pet">
        <div class="col-lg-12" style="padding: 0;">
            <div class="add-pet1" >
                <div class="row" >
                    <div class="col-lg-12 pet-value-title">
                        <h3 class="pull-left">宠物名称：${petFoodDetails.name}</h3>
                        <h3 class="pull-left pet-price-all"><span class="pet-price">${petFoodDetails.price}</span>￥</h3>
                        <div class="pull-right pet-value-button">
                            <button class="btn btn-default" id="cancleFood" >返回</button>
                            <button class="btn btn-danger" id="delFood" data="${petFoodDetails.id}">删除</button>
                            <button class="btn btn-primary" id="updateFood" data="${petFoodDetails.id}">修改</button>
                            <c:if test="${petFoodDetails.stock>0}">
                                <c:if test="${petFoodDetails.status=='当前订单'}">
                                    <button class="btn btn-danger addOrder"
                                            dataId="${petFoodDetails.id}" dataName="${petFoodDetails.name}"
                                            dataSerialNumber="${petFoodDetails.foodSerialNumber}"
                                            dataStock="${petFoodDetails.stock}">
                                        取消订单
                                    </button>
                                </c:if>
                                <c:if test="${petFoodDetails.status=='待售'}">
                                    <button class="btn btn-primary addOrder"
                                            dataId="${petFoodDetails.id}" dataName="${petFoodDetails.name}"
                                            dataSerialNumber="${petFoodDetails.foodSerialNumber}"
                                            dataStock="${petFoodDetails.stock}">
                                        添加订单
                                    </button>
                                </c:if>
                            </c:if>
                            <c:if test="${petFoodDetails.stock==0}">
                                <button class="btn btn-default ">
                                    已售空
                                </button>
                            </c:if>

                        </div>
                    </div>
                </div>
                <div class="row" >
                    <div class="col-lg-2 pet-value-name">食品编号：${petFoodDetails.foodSerialNumber}</div>
                    <div class="col-lg-2 pet-value-name">类别：${petFoodDetails.category}</div>
                    <div class="col-lg-2 pet-value-name">品牌：${petFoodDetails.brand}</div>
                    <div class="col-lg-2 pet-value-name">产品风味：${petFoodDetails.flavor}</div>
                    <div class="col-lg-2 pet-value-name">产品规格：${petFoodDetails.specification}</div>
                    <div class="col-lg-2 pet-value-name" >保质期限：${petFoodDetails.shelfLife}</div>
                    <div class="col-lg-2 pet-value-name">存储方式：${petFoodDetails.storageMode}</div>
                    <div class="col-lg-2 pet-value-name" >生产日期：<fmt:formatDate value="${petFoodDetails.dateOfManufacture}" pattern="yyyy-MM-dd" /></div>
                    <div class="col-lg-2 pet-value-name" >库存数量：${petFoodDetails.stock}</div>
                    <div class="col-lg-2 pet-value-name" >录入时间：<fmt:formatDate value="${petFoodDetails.createTime}" pattern="yyyy-MM-dd" /></div>
                    <div class="col-lg-4 pet-value-name">使用说明：${petFoodDetails.instructions}</div>
                    <div class="col-lg-4 pet-value-name" >生产厂家名称：${petFoodDetails.nameOfManufacturer}</div>
                    <div class="col-lg-4 pet-value-name">产地：${petFoodDetails.placeOfOrigin}</div>
                    <div class="col-lg-4 pet-value-name" >生产厂家地址：${petFoodDetails.addressOfManufacturer}</div>
                    <div class="col-lg-12 pet-value-name pet-value-special" >备注：${petFoodDetails.remarks}</div>
                </div>
                <div class="row" >
                    <div class="col-lg-12 pet-value-name">
                        <h5>食品图片：</h5>
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
<!-- 当前页 -->
<link href="${pageContext.request.contextPath}/statics/css/pet/pet-details.css" rel="stylesheet" />
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/food-information-details.js"></script>
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
</body>
</html>
