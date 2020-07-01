<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:include page="common/header.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/statics/js/openModule/amazeui.min.js"></script>

<div data-am-widget="tabs" class="am-tabs am-tabs-d2 am_news_tab">
    <ul class="am-tabs-nav am-cf am_cf">
        <li class="am-active">
            <a href="[data-tab-panel-0]">全部</a>
        </li>
        <li class="">
            <a href="[data-tab-panel-1]">新鲜事</a>
        </li>
        <li class="">
            <a href="[data-tab-panel-2]">涨知识</a>
        </li>
    </ul>
    <div class="am-tabs-bd">
        <div data-tab-panel-0 class="am-tab-panel am-active">
            <div class="am-list-news-bd am_news_list_all">
                <ul class="am-list" id="allData"></ul>
                <div class="am_news_load" id="moreInfoAll"><span><i  class="am-icon-spinner am-icon-spin"></i> 更多宠物资讯</span></div>
            </div>
        </div>
        <div data-tab-panel-1 class="am-tab-panel ">
            <div class="am-list-news-bd am_news_list_all">
                <ul class="am-list" id="newsData"></ul>
                <div class="am_news_load" id="moreInfoNews"><span><i  class="am-icon-spinner am-icon-spin"></i> 更多宠物资讯</span></div>
            </div>

        </div>
        <div data-tab-panel-2 class="am-tab-panel ">
            <div class="am-list-news-bd am_news_list_all">
                <ul class="am-list" id="knowledgeData"></ul>
                <div class="am_news_load" id="moreInfoKnowledge"><span><i  class="am-icon-spinner am-icon-spin" ></i> 更多宠物资讯</span></div>
            </div>
        </div>
    </div>
</div>

<script src="${pageContext.request.contextPath}/statics/js/openModule/page/openInfo.js"></script>
<jsp:include page="common/footer.jsp"></jsp:include>