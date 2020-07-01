<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left">
            <shiro:principal property="userName"/>
        </div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span><span class="top-position-name">主页</span></div>
    </div>
    <div class="container-fluid">
        <div class="row top-title">
            <div class="col-lg-3 col-md-12 col-sm-12 top-title-common" >
                <div class="top-title1">
                    <div>
                        <div class="col-lg-9 ">
                            <div class="row ">宠物店数量</div>
                            <div class="row total-num">${countTotal.petShopTotal}</div>
                            <div class="row now-time">2020-04-01 16:48:44</div>
                        </div>
                        <div class="col-lg-3 "><i class="fa fa-file-text-o float-right text-white" ></i></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 top-title-common" >
                <div class="top-title2">
                    <div>
                        <div class="col-lg-9 ">
                            <div class="row ">用户数量</div>
                            <div class="row total-num">${countTotal.userTotal}</div>
                            <div class="row now-time"></div>
                        </div>
                        <div class="col-lg-3 "><i class="fa fa-user-o float-right text-white" ></i></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 top-title-common" >
                <div class="top-title3">
                    <div>
                        <div class="col-lg-9 ">
                            <div class="row ">资讯数量</div>
                            <div class="row total-num">${countTotal.infoTotal}</div>
                            <div class="row now-time">2020-04-01 16:48:44</div>
                        </div>
                        <div class="col-lg-3 "><i class="fa fa-bar-chart float-right text-white" ></i></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 top-title-common" >
                <div class="top-title4">
                    <div>
                        <div class="col-lg-9 ">
                            <div class="row ">宠物百科数量</div>
                            <div class="row total-num">${countTotal.petEncyclopediasTotal}</div>
                            <div class="row now-time">2020-2-28 15:16:50</div>
                        </div>
                        <div class="col-lg-3 "><i class="fa fa-bell-o float-right text-white" ></i></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row data-table">
            <div class="col-lg-6 ">
                <div class="data-table1" id="newUserLine">
                    <h3><i class="fa fa-bar-chart-o card-tips"></i>用户新增情况
                        <div class="btn-group pull-right pet-sales-btn-group ">
                            <button type="button" class="btn btn-info" id="userYear">年度</button>
                            <button type="button" class="btn btn-default" id="userMonth">本月</button>
                            <button type="button" class="btn btn-default" id="userSelect">查看更多</button>
                        </div>
                    </h3>
                    <canvas id="newUserLineChart"></canvas>
                </div>
                <h5 class="table-footer">更新于: 2020-2-28 15:16:50</h5>
            </div>
            <div class="col-lg-6 ">
                <div class="data-table1" id="newPetShopLine">
                    <h3><i class="fa fa-bar-chart-o card-tips"></i>宠物店申请情况
                        <div class="btn-group pull-right pet-sales-btn-group ">
                            <button type="button" class="btn btn-info " id="shopYear">年度</button>
                            <button type="button" class="btn btn-default" id="shopMonth">本月</button>
                            <button type="button" class="btn btn-default" id="shopMore">查看更多</button>
                        </div>
                    </h3>
                    <canvas id="newPetShopLineChart"></canvas>
                </div>
                <h5 class="table-footer">更新于: 2020-2-28 15:16:50</h5>
            </div>
        </div>
        <%--<div class="row" style="height: 250px">
            <div class="col-lg-12 ">
                <div class="other-maps">
                    <h4>分析报告</h4>
                    <div class="col-lg-2 maps-first petSalesAnalysis"><div class="maps" style="background: #FF3D66;">商品销售情况</div></div>
                    <div class="col-lg-2 petSalesAnalysis"><div class="maps" style="background: #FF9F3F;">宠物销售种类情况</div></div>
                    <div class="col-lg-2 petSalesAnalysis"><div class="maps" style="background: #FFC233;">食品销售类别情况</div></div>
                    <div class="col-lg-2 petSalesAnalysis"><div class="maps" style="background: #22CECE;">宠物最畅销品种</div></div>
                    <div class="col-lg-2 petSalesAnalysis"><div class="maps" style="background: #059BFF;">食品最畅销产品</div></div>
                    <div class="col-lg-2 maps-last petShopUserAnalysis"><div class="maps" style="background: #FF3D66;">用户分析情况</div></div>
                </div>
            </div>
        </div>--%>
    </div>
</div>
<!-- 头像效果 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/common.js"></script>
<link href="${pageContext.request.contextPath}/statics/css/pet/pet-index.css" rel="stylesheet" />
<!-- 图表 -->
<script src="${pageContext.request.contextPath}/statics/widget/chart/Chart.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/chart/samples/utils.js"></script>
<%--当前页面--%>
<script src="${pageContext.request.contextPath}/statics/js/systemModule/index.js"></script>
<jsp:include page="common/footer.jsp"></jsp:include>
</body>
</html>

