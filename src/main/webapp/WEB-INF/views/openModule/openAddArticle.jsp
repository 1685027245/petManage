<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:include page="common/header.jsp"></jsp:include>
<%--<script src="${pageContext.request.contextPath}/statics/js/openModule/amazeui.min.js"></script>--%>

<div class="am-g bdfw_nr now-position">
    <ol class="am-breadcrumb bdfw_link">
        <li><a href="#" class="am-icon-home">首页</a></li>
        <li><a href="${pageContext.request.contextPath}/open/wechatMoments.html">朋友圈</a></li>
        <li class="am-active">发表文章</li>
    </ol>
</div>

<article data-am-widget="paragraph" class="am-paragraph am-paragraph-default article_nr"
         data-am-paragraph="{ tableScrollable: true, pureview: true }">
    <div class="row">
        <div class="col-lg-12 text-right">
            <button class="btn btn-primary" id="saveMoments" style="height: 35px;">保存</button>
            <button class="btn btn-primary" id="publishMoments" style="height: 35px;">发表</button>
        </div>
    </div>
    <div class="article_nr_content">
        <div id="infoContent" style="height: 500px;"  ></div>
    </div>
</article>

<%--引入文本编辑器--%>
<link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.8/summernote.css" rel="stylesheet">
<script src="${pageContext.request.contextPath}/statics/widget/summernote/summernote.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/summernote/summernote-zh-CN.js"></script>

<%--当前页面--%>
<link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/openModule/page/addMoments.css">
<script src="${pageContext.request.contextPath}/statics/js/openModule/page/addArticle.js"></script>

<jsp:include page="common/footer.jsp"></jsp:include>