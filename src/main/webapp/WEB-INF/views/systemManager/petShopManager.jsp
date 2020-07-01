<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left"><shiro:principal property="userName"/></div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span><span class="top-position-name">宠物店管理</span></div>
    </div>
    <div class="row shop-member">
        <div class="col-lg-12 shop-member-content">
            <div class="row shop-member-top">
                <div class="pull-left shop-member-top-name"><i class="fa fa-user"></i>宠物店信息管理</div>
                <%--<div class="pull-right shop-member-top-button">
                    <button class="btn btn-primary" id="addShopMemberUser"><i class="fa fa-user-plus" aria-hidden="true"></i>新增会员用户</button>
                </div>--%>
            </div>
            <div class="row shop-member-user">
                <div class="col-lg-12">
                    <table id="petShpMemberTable"></table>
                </div>
            </div>
        </div>
    </div>
    <div id="showDialog1"></div>
</div>
<jsp:include page="common/footer.jsp"></jsp:include>
<!-- 头像效果 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/common.js"></script>
<%--当前页面--%>
<link href="${pageContext.request.contextPath}/statics/css/systemModule/petShopApplicationAudit.css" rel="stylesheet" />
<!-- 表格 -->
<link rel="stylesheet" href="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table.min.css">
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table-zh-CN.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/tableExport.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/jspdf.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/jspdf.plugin.autotable.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table-export.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/js/systemModule/petShopManager.js"></script><!-- 使用 -->
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>

</body>
</html>

