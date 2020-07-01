<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!-- 当前页 -->
<link href="${pageContext.request.contextPath}/statics/css/pet/food-information.css" rel="stylesheet" />
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="info-top">
        <div class="row top">
            <div class="pull-left" id="petShopBigName" ></div>
            <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span>商品管理<span style="margin:0 5px;">/</span><span class="top-position-name">食品列表</span></div>
        </div>
    </div>

    <div id="allData">
        <div class="row top-title">
            <div class="col-lg-11 search-pet">
                <input type="text" class="form-control" id="foodKeyword" placeholder="请输入食品信息">
                <label >分类：</label>
                <select class="form-control" id="foodCategorySelect">
                    <option  selected="selected">全部</option>
                    <option>犬粮</option>
                    <option>猫粮</option>
                    <option>鱼粮</option>
                    <option>休闲食品</option>
                    <option>宠物罐头食品</option>
                    <option>宠物肉酱</option>
                    <option>其他</option>
                </select>
                <label >价格：</label>
                <select class="form-control" id="foodPriceSelect">
                    <option  selected="selected">全部</option>
                    <option>小于50</option>
                    <option>50-100</option>
                    <option>100-300</option>
                    <option>300-500</option>
                    <option>500-1000</option>
                    <option>大于1000</option>
                </select>
                <label >产品风味：</label>
                <select class="form-control" id="foodFlavorSelect">
                    <option  selected="selected">全部</option>
                    <option>牛肉味</option>
                    <option>鸡肉味</option>
                    <option>鱼肉味</option>
                    <option>羊肉味</option>
                    <option>烤肉味</option>
                    <option>其他</option>
                </select>
                <button class="btn btn-primary" id="searchBtn">查询</button>
                <button class="btn btn-default" id="searchReset">重置</button>
                <h4  style="padding:0 40px;display: inline-block">
                    共 <span id="pages" class="sr-only" style="color: red;"></span><span id="totolSize" style="color: red;"></span> 条数据
                </h4>
            </div>
            <div class="col-lg-1" style="text-align: right;">
                <button id="addFood" type="button" class="btn btn-primary"><i class="fa fa-plus " ></i>新增</button>
            </div>
        </div>
        <div id='noData' >无数据</div>
        <%--<c:forEach var="food" items="${petFoodList}">
            <div class="row pet-information">
                <div class="col-lg-2 info-img">
                    <img src="${pageContext.request.contextPath}/statics/img/a2.jpg" />
                </div>
                <div class="col-lg-8 info-msg">
                    <div class="row">
                        <div class="info-title" >${food.name}
                            <span class="pet-category">${food.category}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="info-content">
                            <span class="special">编号：${food.foodSerialNumber}</span>
                            <span>品牌：${food.brand}</span>
                            <span>风味：${food.flavor}</span>
                            <span>规格：${food.specification}</span>
                            <span>生产日期：<fmt:formatDate value="${food.dateOfManufacture}" pattern="yyyy-MM-dd" /></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="info-content">
                            <span>存储方式：${food.storageMode}</span>
                            <span>保质期：${food.shelfLife}</span>
                            <span>产地：${food.placeOfOrigin}</span>
                            <span>库存数量：${food.stock}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="info-content">
                            <span>使用说明：${food.instructions}</span>
                            <span>生产厂家：${food.nameOfManufacturer}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="info-content">
                            <a href="javascript:;" class="moreDetails" data="${food.id}"  >更多详情</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 info-price">
                    <h3>价格：<span class="pet-information-price">${food.price}</span>￥</h3>
                    <div class="info-operation">
                        <c:if test="${food.status=='待售'}">
                            <button  type="button" class="btn btn-primary addOrder"
                                     dataId="${food.id}" dataName="${food.name}"
                                     dataSerialNumber="${food.foodSerialNumber}"
                                     dataStock="${food.stock}" >添加订单</button>
                        </c:if>
                        <c:if test="${food.status=='当前订单'}">
                            <button  type="button" class="btn btn-danger addOrder"
                                     dataId="${food.id}" dataName="${food.name}"
                                     dataSerialNumber="${food.foodSerialNumber}"
                                     dataStock="${food.stock}" >取消订单</button>
                        </c:if>
                    </div>
                </div>
            </div>
        </c:forEach>--%>

    </div>

    <div class="row pet-info-page">
        <form id="form1" runat="server">
            <div class="pull-right">
                <ul class="pagination" id="pagination"></ul>
                <input type="hidden" id="PageCount" runat="server" value="${totalSize}" />
                <input type="hidden" id="PageSize" runat="server" value="5" />
                <input type="hidden" id="countindex" runat="server" value="10"/>
                <!--设置最多显示的页码数 可以手动设置 默认为7-->
                <input type="hidden" id="visiblePages" runat="server" value="7" />
            </div>
        </form>
    </div>
    <div id="showDialog1"></div>
</div>
<jsp:include page="common/footer.jsp"></jsp:include>

<%--分页--%>
<script src="${pageContext.request.contextPath}/statics/widget/paging/jqPaginator.min.js" type="text/javascript"></script>
<link href="${pageContext.request.contextPath}/statics/widget/paging/myPage.css" rel="stylesheet" type="text/css" />
<%--<script src="${pageContext.request.contextPath}/statics/widget/paging/myPage.js" type="text/javascript"></script>--%>
<script type="text/javascript">
    //分页
    $(function () {
        loadpage();
    })
</script>
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<%--当前页--%>
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/food-information.js"></script>
<!-- 头像效果 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/common.js"></script>
</body>
</html>

