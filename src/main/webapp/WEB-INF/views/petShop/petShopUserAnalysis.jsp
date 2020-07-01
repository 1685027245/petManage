<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left" id="petShopBigName"></div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span>分析报告<span style="margin:0 5px;">/</span><span class="top-position-name">用户情况</span></div>
    </div>
    <div class="row data-table">
        <div class="col-lg-6 ">
            <div class="data-table1" id="petShopUserVisitLine">
                <h3><i class="fa fa-bar-chart-o card-tips"></i>用户访问情况
                    <%--<div id="selectTime" style="display:none;height: 15px;">
                        <input type="text" class="form-control date-input" id="selectStartTime" style="display: inline-block;width: 100px" placeholder="开始时间">
                        <input type="text" class="form-control date-input" id="selectEndTime" style="display: inline-block;width: 100px" placeholder="结束时间">
                        <button type="button" class="btn btn-primary" id="sureSelectTime">确定</button>
                    </div>--%>
                    <div class="btn-group pull-right pet-sales-btn-group ">
                        <button type="button" class="btn btn-info" id="userYear">今年</button>
                        <button type="button" class="btn btn-default" id="userMonth">本月</button>
                        <button type="button" class="btn btn-default" id="userSelect">选择时间</button>
                    </div>
                </h3>
                <h3>
                    <div id="selectTime" style="display:none;height: 15px;">
                        <input type="text" class="form-control date-input" id="selectStartTime" style="display: inline-block;width: 150px" placeholder="开始时间">
                        <input type="text" class="form-control date-input" id="selectEndTime" style="display: inline-block;width: 150px" placeholder="结束时间">
                        <select id="selectUnit" class="form-control" style="display: inline-block;width: 150px">
                            <option>按天</option>
                            <option>按月</option>
                        </select>
                        <button type="button" class="btn btn-primary" id="sureSelectTime">确定</button>
                    </div>
                </h3>
                <canvas id="petShopUserVisitLineChart"></canvas>
            </div>
            <h5 class="table-footer">更新于: 2020-2-28 15:16:50</h5>
        </div>
        <div class="col-lg-6">
            <div class="data-table2" id="memberRechargeMoneyLine">
                <h3><i class="fa fa-bar-chart-o card-tips"></i>会员充值金额情况
                    <div class="btn-group pull-right pet-sales-btn-group ">
                        <button type="button" class="btn btn-info" id="monthYear">今年</button>
                        <button type="button" class="btn btn-default" id="moneyMonth">本月</button>
                        <button type="button" class="btn btn-default" id="moneySelect">选择时间</button>
                    </div>
                </h3>
                <h3>
                    <div id="selectMoneyTime" style="display:none;height: 15px;">
                        <input type="text" class="form-control date-input" id="selectMoneyStartTime" style="display: inline-block;width: 150px" placeholder="开始时间">
                        <input type="text" class="form-control date-input" id="selectMoneyEndTime" style="display: inline-block;width: 150px" placeholder="结束时间">
                        <select id="selectMoneyUnit" class="form-control" style="display: inline-block;width: 150px">
                            <option>按天</option>
                            <option>按月</option>
                        </select>
                        <button type="button" class="btn btn-primary" id="sureMoneySelectTime">确定</button>
                    </div>
                </h3>
                <canvas id="memberRechargeMoney"></canvas>
            </div>
            <h5 class="table-footer">更新于: 2020-2-28 15:16:50</h5>
        </div>
        <%--<div class="col-lg-6 ">
            <div class="data-table1">
                <h3><i class="fa fa-bar-chart-o card-tips"></i>用户资讯情况
                    <div class="btn-group pull-right pet-sales-btn-group">
                        <button type="button" class="btn btn-info ">年度</button>
                        <button type="button" class="btn btn-default">季度</button>
                        <button type="button" class="btn btn-default">本月</button>
                    </div>
                </h3>
                <canvas id="petShopMoneyBarChart"></canvas>
            </div>
            <h5 class="table-footer">更新于: 2020-2-28 15:16:50</h5>
        </div>--%>
    </div>
    <div class="row data-table">

        <div class="col-lg-6 ">
            <div class="data-table1" id="newMemberLine">
                <h3><i class="fa fa-bar-chart-o card-tips"></i>会员新增情况
                    <div class="btn-group pull-right pet-sales-btn-group ">
                        <button type="button" class="btn btn-info" id="memberYear">今年</button>
                        <button type="button" class="btn btn-default" id="memberMonth">本月</button>
                        <button type="button" class="btn btn-default" id="memberSelect">选择时间</button>
                    </div>
                </h3>
                    <div id="selectMemberTime" style="display:none;height: 15px;">
                        <input type="text" class="form-control date-input" id="selectMemberStartTime" style="display: inline-block;width: 150px" placeholder="开始时间">
                        <input type="text" class="form-control date-input" id="selectMemberEndTime" style="display: inline-block;width: 150px" placeholder="结束时间">
                        <select id="selectMemberUnit" class="form-control" style="display: inline-block;width: 150px">
                            <option>按天</option>
                            <option>按月</option>
                        </select>
                        <button type="button" class="btn btn-primary" id="sureMemberSelectTime">确定</button>
                    </div>
                </h3>
                <canvas id="newMember"></canvas>
            </div>
            <h5 class="table-footer">更新于: 2020-2-28 15:16:50</h5>
        </div>
        <div class="col-lg-6 ">
            <div class="data-table1">
                <h3><i class="fa fa-bar-chart-o card-tips"></i>会员等级占比情况</h3>
                <canvas id="memberLevel"></canvas>
            </div>
            <h5 class="table-footer">更新于: 2020-2-28 15:16:50</h5>
        </div>
    </div>
    <div class="row" style="height: 70px;"></div>
    <div id="showDialog1"></div>
</div>
<jsp:include page="common/footer.jsp"></jsp:include>

<!-- 头像效果 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/common.js"></script>
<%--当前页面--%>
<link href="${pageContext.request.contextPath}/statics/css/pet/pet-sales-analysis.css" rel="stylesheet" />
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<!-- 图表 -->
<script src="${pageContext.request.contextPath}/statics/widget/chart/Chart.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/chart/samples/utils.js"></script>
<!-- 使用折线图,图表的使用 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/petShopUserAnalysis.js"></script>
<!-- 时间选择器 -->
<link href="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.min.css" rel="stylesheet">
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.zh-CN.js"></script><!-- 中文-->


</body>
</html>

