<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<jsp:include page="common/header.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/statics/js/openModule/amazeui.min.js"></script>
<div class="am-g ztlb_nr" style="min-height: 669px;">
    <%--<button class="btn btn-primary pull-right" id="addArticle" style="margin-right: 125px">发表文章</button>--%>
    <button class="btn btn-primary pull-right" id="addMoments" style="margin-right: 15px">发表朋友圈</button>
    <div class="am-u-sm-12" id="allData" />"></div>
</div>

<script src="${pageContext.request.contextPath}/statics/js/openModule/page/weChatList.js"></script>
<jsp:include page="common/footer.jsp"></jsp:include>