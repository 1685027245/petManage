<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left" id="petShopBigName"></div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span><span class="top-position-name">主页</span></div>
    </div>
    <div class="container-fluid">
        <div class="row top-title">
            <div class="col-lg-3 col-md-12 col-sm-12 top-title-common" >
                <div class="top-title1">
                    <div>
                        <div class="col-lg-9 ">
                            <div class="row ">宠物销售量</div>
                            <div class="row total-num">
                                <c:if test="${petNumberList.total==null}">
                                    0
                                </c:if>
                                <c:if test="${petNumberList.total!=null}">
                                    ${petNumberList.total}
                                </c:if>
                            </div>
                            <div class="row">${dayList}天订单</div>
                        </div>
                        <div class="col-lg-3 "><i class="fa fa-file-text-o float-right text-white" ></i></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 top-title-common" >
                <div class="top-title2">
                    <div>
                        <div class="col-lg-9 ">
                            <div class="row ">食品销售量</div>
                            <div class="row total-num">
                               <c:if test="${foodNumberList.total==null}">
                                    0
                               </c:if>
                                <c:if test="${foodNumberList.total!=null}">
                                    ${foodNumberList.total}
                                </c:if>
                            </div>
                            <div class="row">${dayList}天订单</div>
                        </div>
                        <div class="col-lg-3 "><i class="fa fa-bar-chart float-right text-white" ></i></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 top-title-common" >
                <div class="top-title3">
                    <div>
                        <div class="col-lg-9 ">
                            <div class="row ">今日访问量</div>
                            <div class="row total-num">${userBrowse.total}</div>
                            <div class="row">${userBrowse.userTotal}个新用户</div>
                        </div>
                        <div class="col-lg-3 "><i class="fa fa-user-o float-right text-white" ></i></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 top-title-common" >
                <div class="top-title4">
                    <div>
                        <div class="col-lg-9 ">
                            <div class="row ">预约提醒</div>
                            <div class="row total-num " id="orderNum">0</div>
                            <div class="row">${dayNow}</div>
                        </div>
                        <div class="col-lg-3 "><i class="fa fa-bell-o float-right text-white" ></i></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row data-table">
            <div class="col-lg-6 ">
                <div class="data-table1" id="petShopUserVisitLine">
                    <h3><i class="fa fa-user card-tips"></i> 用户访问情况
                        <div class="btn-group pull-right pet-sales-btn-group ">
                            <button type="button" class="btn btn-info" id="userYear">今年</button>
                            <button type="button" class="btn btn-default" id="userMonth">本月</button>
                            <button type="button" class="btn btn-default" id="userSelect">查看更多</button>
                        </div>
                    </h3>
                    <canvas id="petShopUserVisitLineChart"></canvas>
                </div>
                <h5 class="table-footer">更新于: 2020-2-28 15:16:50</h5>
            </div>
            <div class="col-lg-6">
                <div class="data-table1" id="petShopMoneyLine" >
                    <h3><i class="fa fa-bar-chart-o card-tips"></i>商品销售金额情况
                        <div class="btn-group pull-right pet-sales-btn-group ">
                            <button type="button" class="btn btn-info" id="petMoneyYear">今年</button>
                            <button type="button" class="btn btn-default" id="petMoneyQuarter">本月</button>
                            <button type="button" class="btn btn-default" id="petMoneySelect">查看更多</button>
                        </div>
                    </h3>
                    <%--<div  id="petShopMoneyLineChart"></div>--%>
                    <canvas id="petShopMoneyLineChart"></canvas>
                </div>
                <h5 class="table-footer">更新于: 2020-2-28 15:16:50</h5>
            </div>
        </div>
        <%--<div class="row">
            <div class="col-lg-12 ">
                <div class="other-maps">
                    <h4>分析报告</h4>
                    <div class="col-lg-2 maps-first petSalesAnalysis"><div class="maps" >商品销售情况</div></div>
                    <div class="col-lg-2 petSalesAnalysis"><div class="maps" >宠物销售种类情况</div></div>
                    <div class="col-lg-2 petSalesAnalysis"><div class="maps" >食品销售类别情况</div></div>
                    <div class="col-lg-2 petSalesAnalysis"><div class="maps" >宠物最畅销品种</div></div>
                    <div class="col-lg-2 petSalesAnalysis"><div class="maps" >食品最畅销产品</div></div>
                    <div class="col-lg-2 maps-last petShopUserAnalysis"><div class="maps" >用户分析情况</div></div>
                </div>
            </div>
        </div>--%>
    </div>
    <div id="showDialog1"></div>
</div>
<jsp:include page="common/footer.jsp"></jsp:include>
<!-- 头像效果 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/common.js"></script>
<link href="${pageContext.request.contextPath}/statics/css/pet/pet-index.css" rel="stylesheet" />
<!-- 图表 -->
<script src="${pageContext.request.contextPath}/statics/widget/chart/Chart.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/chart/samples/utils.js"></script>
<!-- 时间选择器 -->
<link href="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.min.css" rel="stylesheet">
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.zh-CN.js"></script><!-- 中文-->
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<%--当前页面--%>
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/index.js"></script>

</body>
</html>

