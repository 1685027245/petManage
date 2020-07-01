<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left" id="petShopBigName"></div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span>商品管理<span style="margin:0 5px;">/</span></span>宠物周边<span style="margin:0 5px;">/</span><span class="top-position-name">周边商品详情</span></div>
    </div>
    <div class="row add-pet">
        <div class="col-lg-12" style="padding: 0;">
            <div class="add-pet1" >
                <div class="row" >
                    <div class="col-lg-12 pet-value-title">
                        <h3 class="pull-left">商品名称：${petPeriphery.name}</h3>
                        <h3 class="pull-left pet-price-all"><span class="pet-price">${petPeriphery.price}￥</span></h3>
                        <div class="pull-right pet-value-button">
                            <button class="btn btn-default canclePets" >返回</button>
                            <button class="btn btn-danger" id="delPets" data="${petPeriphery.id}">删除</button>
                            <button class="btn btn-primary" id="updatePets" data="${petPeriphery.id}">修改</button>
                            <c:if test="${petPeriphery.stock>0}">
                                <c:if test="${petPeriphery.status=='当前订单'}">
                                    <button class="btn btn-danger addOrder" data="${petPeriphery.id}" >
                                        取消订单
                                    </button>
                                </c:if>
                                <c:if test="${petPeriphery.status=='待售'}">
                                    <button class="btn btn-primary addOrder"
                                            dataId="${petPeriphery.id}"
                                            dataName="${petPeriphery.name}"
                                            dataNumber="${petPeriphery.number}"
                                            dataStock="${petPeriphery.stock}"    >
                                        添加订单
                                    </button>
                                </c:if>
                            </c:if>
                            <c:if test="${petPeriphery.stock==0}">
                                <button class="btn btn-default">
                                    已售空
                                </button>
                            </c:if>
                        </div>
                    </div>
                </div>
                <div class="row" >
                    <div class="col-lg-2 pet-value-name">商品编号：${petPeriphery.number}</div>
                    <div class="col-lg-2 pet-value-name">品牌：${petPeriphery.brand}</div>
                    <div class="col-lg-2 pet-value-name">颜色：${petPeriphery.type}</div>
                    <div class="col-lg-2 pet-value-name">库存：${petPeriphery.stock}</div>
                    <div class="col-lg-2 pet-value-name">已售：${petPeriphery.sold}</div>
                    <div class="col-lg-2 pet-value-name">重量：${petPeriphery.weight}</div>
                    <div class="col-lg-4 pet-value-name">生产厂家名称：${petPeriphery.nameOfManufacturer}</div>
                    <div class="col-lg-4 pet-value-name">录入时间：<fmt:formatDate value="${petPeriphery.createTime}" pattern="yyyy-MM-dd hh:mm:ss" /></div>
                    <div class="col-lg-12 pet-value-name pet-value-special">
                        备注：${petPeriphery.remarks}
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
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/peripheryDetails.js"></script>
</body>
</html>
