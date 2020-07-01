<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left"><shiro:principal property="userName"/></div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span><span class="top-position-name">用户权限管理</span></div>
    </div>
    <div class="row shop-member">
        <div class="col-lg-12 shop-member-content">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#userManager" aria-controls="profile" role="tab" data-toggle="tab">用户管理</a></li>
                <li role="presentation" ><a href="#roleManager" aria-controls="profile" role="tab" data-toggle="tab">角色管理</a></li>
               <%-- <li role="presentation"  ><a href="#permissionManager" aria-controls="home" role="tab" data-toggle="tab">权限管理</a></li>--%>
                <li role="presentation"  ><a href="#resourceManager" aria-controls="home" role="tab" data-toggle="tab">拦截规则管理</a></li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content " >
                <div role="tabpanel"  class="tab-pane active" id="userManager">
                    <div class="row shop-member-user">
                        <div class="col-lg-12">
                            <table id="userMsg"></table>
                        </div>
                    </div>
                </div>
                <div role="tabpanel" class="tab-pane " id="roleManager">
                    <button class="btn btn-primary page-btn" id="addUserRoles" ><i class="fa fa-user-plus" aria-hidden="true"></i> 新增角色</button>
                    <div class="row shop-member-user">
                        <div class="col-lg-12">
                            <table id="roleMsg"></table>
                        </div>
                    </div>
                </div>
                <%--<div role="tabpanel" class="tab-pane " id="permissionManager">
                    <button class="btn btn-primary page-btn" ><i class="fa fa-user-plus" aria-hidden="true"></i> 新增权限</button>
                    <div class="row shop-member-user">
                        <div class="col-lg-12">
                            <table id="permissionMsg"></table>
                        </div>
                    </div>
                </div>--%>
                <div role="tabpanel" class="tab-pane " id="resourceManager">
                    <button class="btn btn-primary page-btn" id="addResource" ><i class="fa fa-user-plus" aria-hidden="true"></i> 新增拦截规则</button>
                    <div class="row shop-member-user">
                        <div class="col-lg-12">
                            <table id="resourceMsg"></table>
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
    <div class="row" style="height: 50px"></div>
</div>

<jsp:include page="common/footer.jsp"></jsp:include>
<!-- 头像效果 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/common.js"></script>
<%--当前页面--%>
<link href="${pageContext.request.contextPath}/statics/css/systemModule/permission.css" rel="stylesheet" />
<!-- 表格 -->
<link rel="stylesheet" href="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table.min.css">
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table-zh-CN.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/tableExport.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/jspdf.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/jspdf.plugin.autotable.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table-export.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/js/systemModule/permission.js"></script><!-- 使用 -->
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>

</body>
</html>

