<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="common/header.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/statics/js/openModule/amazeui.min.js"></script>
<!-- 评星 -->
<link href="${pageContext.request.contextPath}/statics/widget/star-rating/star-rating.min.css" rel="stylesheet"/>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/star-rating/star-rating.min.js"></script>
<%--当前页面--%>
<link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/openModule/page/petStoreList.css">
<script src="${pageContext.request.contextPath}/statics/js/openModule/page/openPetShop.js"></script>

<div id="allmap" ></div>
<div data-am-widget="tabs" class="am-tabs am-tabs-d2 am_news_tab">
    <div class="am-g" style="max-width: 1170px;padding-left: 35px;margin-bottom: 10px" >
        <div class="am-u-lg-4" style="padding-right: 10px">
            <input class="form-control" id="searchInput" placeholder="请输入宠物店关键字" />
        </div>
        <div class="am-u-lg-8">
            <button class="btn btn-primary" id="searchBtn">查询</button>
            <span style="margin-left: 20px">共 <span id="totalSize" style="color: red;"></span> 条数据</span>
        </div>
    </div>
    <ul class="am-tabs-nav am-cf am_cf">
        <li class="am-active">
            <a href="[data-tab-panel-0]">全部</a>
        </li>
        <%--<li class="">
            <a href="[data-tab-panel-1]">好评最高</a>
        </li>--%>
        <li class="">
            <a href="[data-tab-panel-2]">附近</a>
        </li>
    </ul>
    <div class="am-tabs-bd">
        <div data-tab-panel-0 class="am-tab-panel am-active">
            <div class="am-list-news-bd am_news_list_all">
                <!-- tab1 -->
                <div class="am-tab-panel am-fade am-in am-active" >
                    <div class="am-g dis_line" id="allDataShop">
                        <%--<c:forEach var="petShop" items="${petShopList}">
                            <div class="am-u-sm-6 am_bdfw_block">
                                <div class="am_bdfw_block_l">
                                    <div class="am_bdfw_block_l_info">
                                        <div class="am_bdfw_block_l_info_l"><img src="${petShop.shopImgPath}" alt=""></div>
                                        <div class="am_bdfw_block_l_info_r">
                                            <span><a href="${pageContext.request.contextPath}/open/petShopDetails.html/${petShop.id}">${petShop.shopName}</a></span>
                                            <span class="bdfw_nr_brief_star">
                                        <input name="dictLevel" value="${petShop.score}" class="rateShow rating-loading">
                                    </span>
                                        </div>
                                    </div>
                                    <div class="am_bdfw_block_b">
                                        <div> <i>●</i> 联系电话：${petShop.shopPhone}</div>
                                        <div> <i>●</i> 营业时间：${petShop.businessHours}</div>
                                        <div> <i>●</i> 地址：${petShop.address}</div>
                                    </div>
                                </div>
                                <a href="${pageContext.request.contextPath}/open/petShopDetails.html/${petShop.id}" class="am_bdfw_block_r"><i class="am-icon-ellipsis-v" title="宠物店详情"></i><i class="am-icon-chevron-right"></i></a>
                            </div>
                        </c:forEach>--%>
                    </div>
                </div>
            </div>
        </div>
       <%-- <div data-tab-panel-1 class="am-tab-panel ">
            <div class="am-list-news-bd am_news_list_all"></div>
        </div>--%>
        <div data-tab-panel-2 class="am-tab-panel ">
            <div class="am-list-news-bd am_news_list_all">
                <div class="am-u-lg-5" style="padding-right: 10px" >
                    <input class="form-control" id="inputMap" placeholder="请输入你当前位置" />
                    <p class="am-u-lg-10" id="input-info"></p>
                </div>
                <div class="am-u-lg-7">
                    <button class="btn btn-primary" id="searchMapBtn">查询</button>
                    <button class="btn btn-primary" id="showMapBtn">显示地图</button>
                </div>
                <div class="am-u-lg-12" >
                    <div id="mapSelect"></div>
                </div>
                <div class="am-g dis_line" id="nearDataShop"></div>
            </div>
        </div>
        <div class="am-g am-imglist" style="max-width: 1170px;padding-right: 30px;" >
            <!--分页-->
            <div class="am-u-lg-12" >
                <form id="form1" runat="server">
                    <div class="pull-right">
                        <ul class="pagination" id="pagination">
                        </ul>
                        <input type="hidden" id="PageCount" runat="server"/>
                        <input type="hidden" id="PageSize" runat="server" />
                        <input type="hidden" id="countindex" runat="server" value="10" />
                        <!--设置最多显示的页码数 可以手动设置 默认为7-->
                        <input type="hidden" id="visiblePages" runat="server" value="7" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<%--分页--%>
<script src="${pageContext.request.contextPath}/statics/widget/paging/jqPaginator.min.js" type="text/javascript"></script>
<link href="${pageContext.request.contextPath}/statics/widget/paging/myPage.css" rel="stylesheet" type="text/css" />
<jsp:include page="common/footer.jsp"></jsp:include>
<!--地图api调用-->
<script src="https://webapi.amap.com/maps?v=1.4.14&key=4d81136d607c68fb6c906599c0bd1de1&plugin=AMap.Autocomplete,AMap.Geocoder"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/map/underscore-min.js" ></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/map/backbone-min.js" ></script>
<script type="text/javascript" src='${pageContext.request.contextPath}/statics/widget/map/prety-json.js'></script>