<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<jsp:include page="common/header.jsp"></jsp:include>
<style>
    .user-msg-one{
        margin-top: 20px;
    }
    .user-msg-title:first-child{
        margin-top: 0px;
    }
    .user-msg-title{
        padding-top: 5px;
        text-align: right;
        padding-right: 0;
    }
    .user-img-change{
        width: 100px;
        height: 100px;
    }
    .user-msg-title-img{
        padding-top: 40px;
        text-align: right;
        padding-right: 0;
    }
    #changeUserImg{
        position: absolute;
        bottom: 5px;
        left: 120px;
        color: #2277ee;
    }
    #changeUserImg:hover{
        color: #4980b5;
        cursor: pointer;
    }
    #userImg{
        cursor: pointer;
    }
</style>
<%--<script src="${pageContext.request.contextPath}/statics/js/openModule/amazeui.min.js"></script>--%>
<div class="am_user">
    <div class="am_user_head">
        <div class="am_user_head_content">
            <div class="am_user_head_l">
                <div class="am_user_head_l_ico">
                    <img id="userImg" src="${pageContext.request.contextPath}<shiro:principal property='imgPath'/>" alt="" title="点击更换头像">
                </div>
                <div class="am_user_head_l_ico_info">
                    <span class="am_user_head_l_name" id="userName"><shiro:principal property='userName'/></span>
                    <span class="am_user_head_l_map msg-info" id="userAddress" data="<shiro:principal property='address'/>">
                        <i class="am-icon-map-marker"></i> <shiro:principal property='address'/>
                    </span>
                    <span class="msg-info" title="修改个人信息" id="changeMsg">修改基本信息</span>
                    <span class="msg-info" title="修改个人信息" id="changePwd">修改密码</span>
                    <div style="width: 100%">
                        <span class="am_user_head_l_map" id="userSex" data="<shiro:principal property='sex' />"></span>
                        <span class="am_user_head_l_map msg-info" id="createTime" data="<shiro:principal property='createTime' />"></span>
                        <span class="am_user_head_l_map msg-info">绑定号码：<shiro:principal property='phone' /></span>
                        <span class="am_user_head_l_map msg-info" id="userEmail" data="<shiro:principal property='email' />">绑定邮箱：<shiro:principal property='email' /></span>
                        <span class="am_user_head_l_map msg-info" id="lastLoginTime" data="<shiro:principal property='lastLoginTime' />"></span>
                    </div>
                </div>
                <div class="am_user_head_l_ico_info">
                    <span class="am_user_head_l_map"> 当前位置：个人中心</span>
                </div>
            </div>
            <div class="am_user_head_r">
                <div class="am_user_head_r_tag">
                    <div class="am_user_head_l_ico_info_ti">已发布 <span class="cff5656" id="totalMoments"></span> 条朋友圈</div>
                    <%--<span>
                        <i class="am-icon-star"></i> 粉丝：<span class="am_user_head_unm">15</span>
                    </span>
                    <span>
                        <i class="am-icon-user"></i> 关注：<span class="am_user_head_unm">6</span>
                    </span>
                    <span>
                        <i class="am-icon-heart"></i>被喜欢：<span class="am_user_head_unm">60</span>
                    </span>--%>
                </div>
            </div>

        </div>
    </div>
    <div class="am-g am-imglist am_user_list_li" style="min-height: 520px;">
        <ul data-am-widget="gallery" id="allData" class="am-gallery am-avg-sm-2 am-avg-md-3 am-avg-lg-6 am-gallery-default">
                <%--<li>
                    <div class="am-gallery-item am_list_block">
                        <a href="wechatMomentsDetails.html" class="am_img_bg">
                            <img class="am_img animated" src="${pageContext.request.contextPath}/statics/img/openModule/c.png"/>
                        </a>
                        <div class="am_listimg_info">
                            <span class="am-icon-heart"> 132</span>
                            <span class="am-icon-comments"> 67</span><span class="am_imglist_time">15分钟前</span></div>
                    </div>
                </li>--%>

        </ul>
    </div>
</div>
<div id="showDialog1"></div>
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<!-- 文件上传 -->
<link href="${pageContext.request.contextPath}/statics/widget/fileinput/fileinput.min.css" rel="stylesheet"/>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/fileinput/fileinput.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/fileinput/zh.js"></script><!-- 中文 -->
<%--当前页面--%>
<script src="${pageContext.request.contextPath}/statics/js/openModule/page/openUserCenter.js"></script>
<jsp:include page="common/footer.jsp"></jsp:include>