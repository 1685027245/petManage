<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<jsp:include page="common/header.jsp"></jsp:include>
<style>
    .memberDataItem{
        background: white;
        height: 60px;
        line-height: 60px;
        font-size: 14px;
        border-bottom: 1px dashed #CCCCCC;
    }
    .memberDataItem:last-child{
        border-bottom:none;
    }
    .shopDetails{
        color: #4980b5;
    }
    .shopDetails:hover{
        color: #2277ee;
        cursor: pointer;
    }
    .myOpinion{
        padding-top: 12px;
    }
    #opinionInput{
        width: 100%;
        padding: 10px;
        font-size: 14px;
    }

    #seeOpinion{
        color: white;
    }
    #seeOpinion:hover{
        color: orange;
        cursor: pointer;
    }
    .opinion-content{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
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
                    <span class="am_user_head_l_map"> 当前位置：<a href="${pageContext.request.contextPath}/open/userCenter.html">个人中心</a> / 我的会员卡</span>
                </div>
            </div>
            <div class="am_user_head_r">
                <div class="am_user_head_r_tag">
                    <div class="am_user_head_l_ico_info_ti">已有 <span class="cff5656" id="totalMoments"></span> 张会员卡</div>
                </div>
            </div>
        </div>
    </div>

    <div class="am-g am-imglist am_user_list_li" id="allData" style="min-height: 550px;">
        <div class="row" style="background: #4980b5;color: white;height: 50px;line-height: 50px;font-size: 14px">
            <div class="col-lg-12">
                <div class="pull-left" ><span id="nameTitle">我的会员卡</span></div>
                <div class="pull-right"><span id="seeOpinion">查看反馈意见</span></div>
            </div>
        </div>
    </div>
</div>
<div id="showDialog1"></div>
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<%--本页面--%>
<script src="${pageContext.request.contextPath}/statics/js/openModule/page/openMyMember.js"></script>
<jsp:include page="common/footer.jsp"></jsp:include>