<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="info-top">
        <div class="row top">
            <div class="pull-left" id="petShopBigName"></div>
            <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span>商品管理<span style="margin:0 5px;">/</span><span class="top-position-name">宠物周边</span></div>
        </div>
    </div>

    <div class="list-all" id="allData">
        <div class="row top-title ">
            <div class="col-lg-11 search-pet">
                <input type="text" class="form-control input-spe"  id="searchInput" placeholder="请输入宠物周边商品信息">
                <label >颜色：</label>
                <select class="form-control" id="colorSelect">
                    <option  selected="selected">全部</option>
                    <option>黑色</option>
                    <option>白色</option>
                    <option>灰色</option>
                    <option>黄色</option>
                    <option>红色</option>
                    <option>绿色</option>
                    <option>其他</option>
                </select>
                <label >价格：</label>
                <select class="form-control" id="priceSelect">
                    <option  selected="selected">全部</option>
                    <option>小于50</option>
                    <option>50-200</option>
                    <option>200-500</option>
                    <option>大于500</option>
                </select>
                <button class="btn btn-primary" id="searchBtn">查询</button>
                <button class="btn btn-default" id="searchReset">重置</button>
                <h4  style="padding:0 40px;display: inline-block">
                    共 <span id="totolSize" style="color: red;"></span> 条数据
                </h4>
            </div>
            <div class="col-lg-1" style="text-align: right;">
                <button id="addPetPeriphery" type="button" class="btn btn-primary"><i class="fa fa-plus " ></i>新增</button>
                <div id="addPetDialog"></div>
            </div>
        </div>
        <div id='noData' >无数据</div>
            <%--<div class="row pet-information">
                <div class="col-lg-12 " >
                    <div class="row info-item" >
                        <div class="col-lg-2 info-img">
                            <img src="${pageContext.request.contextPath}/statics/img/a2.jpg" />
                        </div>
                        <div class="col-lg-8 info-msg">
                            <div class="row">
                                <div class="info-title">猫范 喵星人零钱包 猫咪置物包
                                    <span class="pet-category">猫范</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="info-content">
                                    <span class="special">编号：45145</span>
                                    <span>品牌：猫范</span>
                                    <span>颜色：黄色，灰色，白色，红色</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="info-content">
                                    <span>库存：50</span>
                                    <span>已售：0</span>
                                    <span>重量：0.02KG</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="info-content">
                                    <span>生产厂家：玩具制造有限公司</span>
                                    <span>录入时间：2020-04-16 12:49:54</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="info-content">
                                    <span><a href="javascript:;" class="moreDetails"  data="${pet.id}">更多详情</a></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 info-price">
                            <h3 >价格：<span class="pet-information-price">9.0</span>￥</h3>
                            <div class="info-operation">
                                <button  type="button" class="btn btn-danger addOrder" data="${pet.id}">取消订单</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>--%>
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
<!-- 当前页 -->
<link href="${pageContext.request.contextPath}/statics/css/pet/pet-information.css" rel="stylesheet" />
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/petPeripheryInformation.js" type="text/javascript"></script>


</body>
</html>

