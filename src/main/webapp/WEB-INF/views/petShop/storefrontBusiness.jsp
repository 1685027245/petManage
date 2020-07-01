<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left" id="petShopBigName"></div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span><span class="top-position-name">店面业务</span></div>
    </div>
    <div class="container-fluid">
        <div class="row top-title ">
            <div class="col-lg-3 col-md-12 col-sm-12 top-title-common" >
                <a href="${pageContext.request.contextPath}/petShop/showPetShopMember.html" class="toPage">
                <div class="top-title1">
                    <div>
                        <div class="col-lg-9 ">
                            <div class="row top-title-name">会员新增</div>
                        </div>
                        <div class="col-lg-3 "><i class="fa fa-user-circle float-right text-white" ></i></div>
                    </div>
                </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 top-title-common" >
                <a href="${pageContext.request.contextPath}/petShop/storefrontAllBusiness.html" class="toPage">
                <div class="top-title2">
                    <div>
                        <div class="col-lg-9 ">
                            <div class="row top-title-name">寄养</div>
                        </div>
                        <div class="col-lg-3 "><i class="fa fa-sign-language float-right text-white" ></i></div>
                    </div>
                </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 top-title-common" >
                <a href="${pageContext.request.contextPath}/petShop/petShopMemberOrder.html" class="toPage">
                <div class="top-title3">
                    <div>
                        <div class="col-lg-9 ">
                            <div class="row top-title-name">查看预约</div>
                        </div>
                        <div class="col-lg-3 "><i class="fa fa-phone float-right text-white" ></i></div>
                    </div>
                </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 top-title-common" >
                <a href="${pageContext.request.contextPath}/petShop/petShopMemberOpinion.html" class="toPage">
                <div class="top-title4">
                    <div>
                        <div class="col-lg-9 ">
                            <div class="row top-title-name">会员反馈</div>
                        </div>
                        <div class="col-lg-3 "><i class="fa fa-bell-o float-right text-white" ></i></div>
                    </div>
                </div>
                </a>
            </div>
        </div>
        <div class="row current-order ">
            <div class="col-lg-12 ">
                <div class="row order-operation"  >
                    <div class="pull-left col-lg-4">
                        当前订单总计:<span id="crrentOrderPrice" style="margin-left: 10px;color: red;font-size: 16px"></span>元(￥)
                    </div>
                    <div class="pull-right order-operation-right col-lg-8 col-sm-12">
                        <button class="btn btn-danger" id="clearCurrentOrder">全部清空</button>
                        <button class="btn btn-primary" id="clearSelectedOrder">删除选中</button>
                        <button class="btn btn-info" id="addPetPage">添加宠物</button>
                        <button class="btn btn-info" id="addFoodPage">添加食品</button>
                        <button class="btn btn-info" id="addperipheryPage">添加周边</button>
                        <button class="btn btn-success" id="settleAccounts">结算</button>
                    </div>
                </div>

                <div class="row order-content">
                    <!-- <div class="col-lg-12 order-operation"><button class="btn btn-info">添加商品</button></div> -->
                    <div class="col-lg-12">
                        <!-- <button id="btn_add" type="button" class="btn btn-info">添加宠物</button>
                        <button id="btn_add" type="button" class="btn btn-danger">添加商品</button>
                        <input type="text" class="form-control" id="name" placeholder="请输入会员账号">
                        <button id="btn_add" type="button" class="btn btn-info">清空</button> -->
                        <table id="table"></table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="showDialog1"></div>
    <div id="showDialog2"></div>
</div>
<jsp:include page="common/footer.jsp"></jsp:include>
<!-- 头像效果 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/common.js"></script>
<!-- 当前页 -->
<link href="${pageContext.request.contextPath}/statics/css/pet/storefront-business.css" rel="stylesheet" />
<!-- 表格 -->
<link rel="stylesheet" href="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table.min.css">
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table-zh-CN.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/tableExport.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/jspdf.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/jspdf.plugin.autotable.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table-export.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/storefrontBusiness-table-use.js"></script><!-- 使用 -->
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>

</body>
</html>

