<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left">
            <shiro:principal property="userName"/>
        </div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span>分析报告<span style="margin:0 5px;">/</span><span class="top-position-name">用户情况</span></div>
    </div>
    <div class="container-fluid" >
        <div class="row data-table">
            <div class="col-lg-6 ">
                <div class="data-table1" id="newUserLine">
                    <h3><i class="fa fa-bar-chart-o card-tips"></i>用户新增情况
                        <div class="btn-group pull-right pet-sales-btn-group ">
                            <button type="button" class="btn btn-info" id="userYear">年度</button>
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
                            <button type="button" class="btn btn-default" id="shopSelect">选择时间</button>
                        </div>
                    </h3>
                    <h3>
                        <div id="selectShopTime" style="display:none;height: 15px;">
                            <input type="text" class="form-control date-input" id="selectShopStartTime" style="display: inline-block;width: 150px" placeholder="开始时间">
                            <input type="text" class="form-control date-input" id="selectShopEndTime" style="display: inline-block;width: 150px" placeholder="结束时间">
                            <select id="selectShopUnit" class="form-control" style="display: inline-block;width: 150px">
                                <option>按天</option>
                                <option>按月</option>
                            </select>
                            <button type="button" class="btn btn-primary" id="sureShopSelectTime">确定</button>
                        </div>
                    </h3>
                    <canvas id="newPetShopLineChart"></canvas>
                </div>
                <h5 class="table-footer">更新于: 2020-2-28 15:16:50</h5>
            </div>
        </div>
        <div class="row" style="height: 30px"></div>
    </div>
</div>
<jsp:include page="common/footer.jsp"></jsp:include>
<!-- 头像效果 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/common.js"></script>
<link href="${pageContext.request.contextPath}/statics/css/pet/pet-sales-analysis.css" rel="stylesheet" />
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<!-- 图表 -->
<script src="${pageContext.request.contextPath}/statics/widget/chart/Chart.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/chart/samples/utils.js"></script>
<!-- 使用折线图,图表的使用 -->
<script src="${pageContext.request.contextPath}/statics/js/systemModule/userAnalysisManger.js"></script>
<!-- 时间选择器 -->
<link href="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.min.css" rel="stylesheet">
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.zh-CN.js"></script><!-- 中文-->

</body>
</html>

