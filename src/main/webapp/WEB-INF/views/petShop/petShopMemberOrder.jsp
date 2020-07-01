<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left" id="petShopBigName"></div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span>会员管理<span style="margin:0 5px;">/</span><span class="top-position-name">会员预约</span></div>
    </div>
    <div class="row shop-member">
        <div class="col-lg-12 shop-member-content">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#pendingNew" aria-controls="profile" role="tab" data-toggle="tab">当前预约处理</a></li>
                <li role="presentation"  ><a href="#pendingReply" aria-controls="home" role="tab" data-toggle="tab">会员预约待答复</a></li>
                <li role="presentation" ><a href="#finished" aria-controls="profile" role="tab" data-toggle="tab">会员预约已完成</a></li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content " >
                <div role="tabpanel"  class="tab-pane active" id="pendingNew">
                    <div class="row shop-member-user">
                        <div class="col-lg-12">
                            <table id="petShopOrderHandle"></table>
                        </div>
                    </div>
                </div>
                <div role="tabpanel" class="tab-pane " id="pendingReply">
                    <div class="row shop-member-user">
                        <div class="col-lg-12">
                            <table id="petShopOrderReply"></table>
                        </div>
                    </div>
                </div>
                <div role="tabpanel" class="tab-pane " id="finished">
                    <div class="row shop-member-user">
                        <div class="col-lg-12">
                           <table id="petShopOrderFinish"></table>
                        </div>
                    </div>
                </div>
            </div>

            <%--<div class="row shop-member-top">
                <div class="pull-left shop-member-top-name"><i class="fa fa-user"></i>会员反馈</div>
            </div>--%>
        </div>
    </div>
    <div id="showDialog1"></div>
</div>
<jsp:include page="common/footer.jsp"></jsp:include>

<!-- 头像效果 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/common.js"></script>
<%--当前页面--%>
<link href="${pageContext.request.contextPath}/statics/css/pet/pet-shop-member-opinion.css" rel="stylesheet" />
<!-- 表格 -->
<link rel="stylesheet" href="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table.min.css">
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table-zh-CN.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/tableExport.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/jspdf.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/jspdf.plugin.autotable.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table-export.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/petShopOrder.js"></script><!-- 使用 -->
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>

</body>
</html>

