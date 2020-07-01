<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<jsp:include page="common/header.jsp"></jsp:include>
<%--<script src="${pageContext.request.contextPath}/statics/js/openModule/amazeui.min.js"></script>--%>
<style>
    .fixed-table-toolbar{
        text-align: right;
    }
    .btn-secondary{
        background: white;
        border: 1px solid #ccc;
    }
    .shop-member-title{
        font-size: 14px;
        padding-top: 7px;
        text-align: right;
    }
    .shop-member-input{
        margin-top: 20px;
    }
    #commentAll{
        display: none;
        margin-bottom: 20px;
    }
    #commentContent{
        margin-top: 10px;
        width: 100%;
        border: 1px solid #2277ee;
        min-height: 100px;
        padding: 10px;
        font-size: 14px;
    }
</style>
<div class="am_user">
    <div class="am_user_head">
        <div class="am_user_head_content">
            <div class="am_user_head_l">
                <div class="am_user_head_l_ico"><img src="${pageContext.request.contextPath}<shiro:principal property='imgPath'/>" alt="" title="个人头像"></div>
                <div class="am_user_head_l_ico_info">
                    <span class="am_user_head_l_name"><shiro:principal property='userName'/></span>
                </div>
                <div class="am_user_head_l_ico_info">
                    <span class="am_user_head_l_map"> 当前位置：<a href="${pageContext.request.contextPath}/open/userCenter.html">个人中心</a> / 我的预约</span>
                </div>
            </div>
            <div class="am_user_head_r">
                <div class="am_user_head_r_tag">
                    <div class="am_user_head_l_ico_info_ti">当前预约: <span class="cff5656" id="nowOrder"></span></div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid" style="background: white; margin: 20px auto;">
        <div class="col-lg-10 col-lg-offset-1">
            <table id="petShopOrderHandle"></table>
        </div>
        <div class="col-lg-10 col-lg-offset-1" id="commentAll" >
            <div class="row">
                <div class="col-lg-10" >
                    <input id="rate" name="dictLevel" class="rating-loading">
                </div>
                <div class="pull-right" style="margin-right: 15px" >
                    <button class="btn btn-default" id="cancleComment" style="margin-left: 5px" >收起评分</button>
                    <button class="btn btn-primary" id="submitComment" style="margin-left: 5px" >提交</button>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12" >
                    <textarea rows='4' id='commentContent' placeholder="这里填写评论内容" ></textarea>
                </div>
            </div>
        </div>
        <%--<ul data-am-widget="gallery" id="allData"  class="am-gallery am-avg-sm-12 am-avg-md-3 am-avg-lg-1 am-gallery-default">
                <li>
                    <div class="am-gallery-item am_list_block" >
                        <span>预约分类：购买商品</span>
                        <span>预约时间：2020.4.7下午</span>
                        <span>预约状态：预约中</span>
                        <span>预约备注：阿拉斯加寄养</span>
                        <span>预约回复状态：待答复</span>
                        <span>预约发起时间：2020-04-06 19:23:39</span>
                        <div class="am_listimg_info">
                            <span class="am-icon-heart"> 132</span>
                            <span class="am-icon-comments"> 67</span><span class="am_imglist_time">15分钟前</span></div>
                    </div>
                </li>

        </ul>--%>
    </div>
    <div id="showDialog1"></div>
</div>
<!-- 表格 -->
<link rel="stylesheet" href="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table.min.css">
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table-zh-CN.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/tableExport.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/jspdf.min.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/jspdf.plugin.autotable.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-table/bootstrap-table-export.min.js"></script>
<!-- 评星 -->
<link href="${pageContext.request.contextPath}/statics/widget/star-rating/star-rating.min.css" rel="stylesheet"/>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/star-rating/star-rating.min.js"></script>
<%--当前页面--%>
<script src="${pageContext.request.contextPath}/statics/js/openModule/page/myOrder.js"></script>
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<jsp:include page="common/footer.jsp"></jsp:include>