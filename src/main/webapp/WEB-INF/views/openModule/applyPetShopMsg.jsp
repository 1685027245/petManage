<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<jsp:include page="common/header.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/statics/js/openModule/amazeui.min.js"></script>
<link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/openModule/page/applyPetShopMsg.css">
<div class="container" >
    <div id="showDialog1"></div>
    <div class="row text-center top-title">
        <c:if test="${petShop.isForbidden=='待审核'}">
            申请宠物店(正在审核中)
        </c:if>
        <c:if test="${petShop.isForbidden=='审核不通过'}">
            申请宠物店(审核不通过,请修改填写资料重新提交)
        </c:if>
        <c:if test="${petShop.isForbidden=='禁用'}">
            申请宠物店(宠物店被禁用了,请及时联系管理员)
        </c:if>
        <c:if test="${petShop.isForbidden=='启用'}">
            已通过审核，管理员测试页面
        </c:if>
    </div>
    <div class="row content-body" >
        <form class="form-horizontal" onsubmit="return false">
            <div class="form-group">
                <label  class="col-sm-2 control-label">宠物店名称</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="petShopName" data="${petShop.id}"  value="${petShop.shopName}" disabled placeholder="请输入宠物店名称">
                </div>
                <label  class="col-sm-2 control-label">宠物店类型</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="petShopCategory" value="${petShop.category}" disabled  placeholder="请输入宠物店类型">
                </div>
            </div>
            <div class="form-group">
                <label  class="col-sm-2 control-label">宠物店电话</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="petShopPhone" value="${petShop.shopPhone}" disabled  placeholder="请输入宠物店电话">
                </div>
                <label  class="col-sm-2 control-label">宠物店地址</label>
                <div class="col-sm-4">
                    <input type="text" id="inputMap" class="form-control" title="${petShop.address}" value="${petShop.address}" disabled  placeholder="请输入选择地址">
                </div>
            </div>
            <div class="form-group">
                <label  class="col-sm-2 control-label">宠物店描述</label>
                <div class="col-sm-10">
                    <textarea rows="5"  id="petShopDescript" class="text-descript"  disabled placeholder="请简要描述你的宠物店">${petShop.detailedDescription}</textarea>
                </div>
            </div>
            <div class="form-group">
                <label  class="col-sm-2 control-label">宠物店图片</label>
                <div class="col-sm-10 pet-img-show">
                    <c:forEach var="img" items="${imgPathList}" >
                        <div class="img-ioc col-sm-4">
                            <img src="${pageContext.request.contextPath}${img}" >
                        </div>
                    </c:forEach>
                </div>
            </div>
            <div class="form-group">
            </div>
            <div class="form-group">
                <button class="btn btn-primary pull-right"  id="updateApplyPetShop"  style="margin-right: 15px">修改申请信息</button>
            </div>
        </form>
    </div>
</div>

<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<%--地图导入--%>
<!--地图api调用-->
<script src="https://webapi.amap.com/maps?v=1.4.14&key=4d81136d607c68fb6c906599c0bd1de1&plugin=AMap.Autocomplete,AMap.Geocoder"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/map/underscore-min.js" ></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/map/backbone-min.js" ></script>
<script type="text/javascript" src='${pageContext.request.contextPath}/statics/widget/map/prety-json.js'></script>
<!-- 文件上传 -->
<link href="${pageContext.request.contextPath}/statics/widget/fileinput/fileinput.min.css" rel="stylesheet"/>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/fileinput/fileinput.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/fileinput/zh.js"></script><!-- 中文 -->
<%--<script type="text/javascript" src="${pageContext.request.contextPath}/statics/js/widgetUse/fileinput-use.js"></script>--%><!-- 使用 -->
<%--当前页面--%>
<script src="${pageContext.request.contextPath}/statics/js/openModule/page/openApplyPetShop.js"></script>
<jsp:include page="common/footer.jsp"></jsp:include>
