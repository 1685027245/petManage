<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<jsp:include page="common/header.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/statics/js/openModule/amazeui.min.js"></script>

<div class="am-g bdfw_nr now-position">
    <ol class="am-breadcrumb bdfw_link">
        <li><a href="#" class="am-icon-home">首页</a></li>
        <li><a href="${pageContext.request.contextPath}/open/information.html">萌宠资讯</a></li>
        <li class="am-active">${petInformation.title}</li>
    </ol>
</div>

<article data-am-widget="paragraph" class="am-paragraph am-paragraph-default article_nr"
         data-am-paragraph="{ tableScrollable: true, pureview: true }">
    <h1 class="article_nr_title">${petInformation.title}</h1>
    <div class="am_list_author"><a href="javascript:void(0)"><span class="am_list_author_ico" style="background-image: url(${pageContext.request.contextPath}${petInformation.imgPath});"></span><span class="name">${petInformation.userName}</span></a><span class="am_news_time">&nbsp;•&nbsp;<time class="timeago" ><fmt:formatDate value="${petInformation.createTime}" pattern="yyyy-MM-dd HH:mm:ss" /></time></span></div>
    <div class="article_nr_content">
        ${petInformation.content}
    </div>
    <%--<div class="article_nr_more">
        <div class="article_nr_l">
            <a href=""><i class="am-icon-btn am-icon-thumbs-o-up"></i></a>
            <span>16</span>
        </div>
        <div class="article_nr_more_r">
            <span>分享 </span>
            <span class="article_nr_more_ico ">
              <a href="###" class="am-icon-btn am-secondary am-icon-qq"></a>
              <a href="###" class="am-icon-btn am-success am-icon-weixin"></a>
              <a href="###" class="am-icon-btn am-danger am-icon-weibo"></a>
            </span>
        </div>
    </div>--%>
</article>


<jsp:include page="common/footer.jsp"></jsp:include>