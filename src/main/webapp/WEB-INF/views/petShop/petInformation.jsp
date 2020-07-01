<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- 当前页 -->
<link href="${pageContext.request.contextPath}/statics/css/pet/pet-information.css" rel="stylesheet" />
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="info-top">
        <div class="row top">
            <div class="pull-left" id="petShopBigName"></div>
            <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span>商品管理<span style="margin:0 5px;">/</span><span class="top-position-name">宠物列表</span></div>
        </div>
    </div>
    <div  id="allData">
        <div class="row top-title">
            <div class="col-lg-11 search-pet">
                <input type="text" class="form-control" id="searchInput"  placeholder="请输入宠物信息">
                <label >分类：</label>
                <select class="form-control" id="petCategorySelect">
                    <option selected="selected">全部</option>
                    <option>狗狗</option>
                    <option>猫</option>
                    <option>兔子</option>
                    <option>老鼠</option>
                    <option>宠物鸟</option>
                    <option>宠物龟</option>
                    <option>宠物鱼</option>
                    <option>其他</option>
                </select>
                <label >价格：</label>
                <select class="form-control" id="petMoneySelect">
                    <option selected="selected">全部</option>
                    <option>小于1000</option>
                    <option>1000-3000</option>
                    <option>3000-5000</option>
                    <option>5000-8000</option>
                    <option>8000-10000</option>
                    <option>大于10000</option>
                </select>
                <label >体型：</label>
                <select class="form-control" id="petShapeSelect">
                    <option  selected="selected">全部</option>
                    <option>大型</option>
                    <option>中型</option>
                    <option>小型</option>
                </select>
                <label >毛长：</label>
                <select class="form-control" id="petHairSelect">
                    <option  selected="selected">全部</option>
                    <option>长毛</option>
                    <option>短毛</option>
                    <option>无毛</option>
                </select>
                <button class="btn btn-primary" id="searchBtn">查询</button>
                <button class="btn btn-default" id="searchReset">重置</button>
                <h4  style="padding:0 25px;display: inline-block">
                    共 <span id="totolSize" style="color: red;"></span> 条数据
                </h4>
            </div>
            <div class="col-lg-1" style="text-align: right;">
                <button id="addPet" type="button" class="btn btn-primary"><i class="fa fa-plus " ></i>新增</button>
                <div id="addPetDialog"></div>
            </div>
        </div>
        <div id='noData' >无数据</div>
        <%--<c:forEach var="pet" items="${petList}">
            <div class="row pet-information">
                <div class="col-lg-2 info-img">
                    <img src="${pageContext.request.contextPath}/statics/img/a2.jpg" />
                </div>
                <div class="col-lg-8 info-msg">
                    <div class="row">
                        <div class="info-title">${pet.petEncyclopedias.name}
                            <span class="pet-category">${pet.petEncyclopedias.category}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="info-content">
                            <span class="special">编号：${pet.number}</span>
                            <span>中文名：${pet.petEncyclopedias.name}</span>
                            <span>别名：${pet.petEncyclopedias.alias}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="info-content">
                            <span>体型：${pet.shape}</span>
                            <span>毛长：${pet.hairLength}</span>
                            <span>英文名：${pet.petEncyclopedias.englishName}</span>
                            <c:if test="${pet.petEncyclopedias.intelligenceQuotient!=null && pet.petEncyclopedias.intelligenceQuotient!=null }">
                                <span> 智商：${pet.petEncyclopedias.intelligenceQuotient}</span>
                            </c:if>
                        </div>
                    </div>
                    <div class="row">
                        <div class="info-content">
                            <span>原产地：${pet.petEncyclopedias.countryOfOrigin}</span>
                            <span>体重：${pet.weight}KG</span>
                            <c:if test="${pet.petEncyclopedias.life!=null && pet.petEncyclopedias.life!=null }">
                                <span>寿命：${pet.petEncyclopedias.life}</span>
                            </c:if>
                            <span>毛色：${pet.coatColor}</span>
                            <c:if test="${pet.petEncyclopedias.function!=null && pet.petEncyclopedias.function!=null }">
                                <span>功能：${pet.petEncyclopedias.function}</span>
                            </c:if>
                            <span>详细特征：${pet.petEncyclopedias.detailCharacterities}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="info-content">
                            <span><a href="javascript:;" class="moreDetails"  data="${pet.id}">更多详情</a></span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 info-price">
                    <h3 >价格：<span class="pet-information-price">${pet.price}</span>￥</h3>
                    <div class="info-operation">
                        <c:if test="${pet.salesStatus=='当前订单'}">
                            <button  type="button" class="btn btn-danger addOrder" data="${pet.id}">取消订单</button>
                        </c:if>
                        <c:if test="${pet.salesStatus=='待售'}">
                            <button  type="button" class="btn btn-primary addOrder" data="${pet.id}">添加订单</button>
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

<!-- 头像效果 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/common.js"></script>
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
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/pet-information.js"></script>


</body>
</html>

