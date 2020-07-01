<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:include page="common/header.jsp"></jsp:include>
<%--<script src="${pageContext.request.contextPath}/statics/js/openModule/amazeui.min.js"></script>--%>

<div class="am-g bdfw_nr now-position">
    <ol class="am-breadcrumb bdfw_link">
        <li><a href="#" class="am-icon-home">首页</a></li>
        <li><a href="${pageContext.request.contextPath}/open/wechatMoments.html">朋友圈</a></li>
        <li class="am-active">发表朋友圈</li>
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
        <div class="row all-page">
            <div class="col-lg-12">
                <textarea  rows="5" id="content" class="detail-description" placeholder="这里写内容">${moments.content}</textarea>
            </div>
        </div>
        <div class="row all-page" id="pageImg">
           <c:forEach var="img" items="${imgPathList}">
               <div class="col-lg-4 img-one" >
                    <img src="${pageContext.request.contextPath}${img}">
                    <span class="delImg glyphicon glyphicon-remove" title="删除该图片" ></span>
               </div>
           </c:forEach>
        </div>
        <div class="row all-page">
            <div class="col-lg-12">
                <input type="file" name="file" id="momentsImgFile" data="${moments.imgPath}" momentsId="${moments.id}" multiple class="file-loading" />
            </div>
        </div>
    </div>
</article>
<div id="showDialog1"></div>

<%--当前页面--%>
<link rel="stylesheet" href="${pageContext.request.contextPath}/statics/css/openModule/page/addMoments.css">
<script src="${pageContext.request.contextPath}/statics/js/openModule/page/addMoments.js"></script>
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<!-- 文件上传 -->
<link href="${pageContext.request.contextPath}/statics/widget/fileinput/fileinput.min.css" rel="stylesheet"/>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/fileinput/fileinput.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/fileinput/zh.js"></script><!-- 中文 -->

<jsp:include page="common/footer.jsp"></jsp:include>