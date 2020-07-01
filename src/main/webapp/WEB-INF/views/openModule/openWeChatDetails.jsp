<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<jsp:include page="common/header.jsp"></jsp:include>

<%--<script src="${pageContext.request.contextPath}/statics/js/openModule/amazeui.min.js"></script>--%>

<div class="am-g bdfw_nr now-position">
    <ol class="am-breadcrumb bdfw_link">
        <li><a href="#" class="am-icon-home">首页</a></li>
        <li><a href="${pageContext.request.contextPath}/open/wechatMoments.html">朋友圈</a></li>
        <li class="am-active">朋友圈详情</li>
    </ol>
</div>


<div class="am_tuya" style="min-height: 650px;">
    <div class="am_tuya_user">
        <div class="am_tuya_user_ico"><img src="${pageContext.request.contextPath}${moments.userImg}" alt=""></div>
        <div class="am_tuya_user_info">
            <div class="am_tuya_user_info_name">${moments.userName}</div>
            <div class="am_tuya_user_info_coordinate"><span class="am_tuya_user_info_time"><fmt:formatDate value="${moments.createTime}" pattern="yyyy-MM-dd" /></span></div>
        </div>
    </div>

    <div class="am_tuya_content">
        <div class="am_tuya_content_l">
            <div class="am_albums" >
                <c:forEach var="img" items="${imgPathList}">
                    <div class="col-lg-4 img-details" >
                        <img src="${pageContext.request.contextPath}${img}" alt="">
                    </div>
                </c:forEach>
            </div>
            <div class="am_tuya_more">
                <div class="am_tuya_oneword">${moments.content}</div>
                <%--<div class="am_tuya_comment">
                    <div class="am_tuya_comment_user">
                        <div class="am_tuya_comment_user_l">
                            <img src="img/kj.png" alt="">我是超级小短腿柯基 <span>  •  15分钟前</span>
                        </div>
                        <div class="am_tuya_comment_user_r">新疆维吾尔自治区 哈萨克自治州
                        </div>
                        <div class="am_tuya_comment_text">站酷9周年，突然发现自己的酷龄已经8岁。回忆点滴，设计路漫漫，有你相伴。</div>
                    </div>
                </div>
                <div class="am_tuya_comment">
                    <div class="am_tuya_comment_user">
                        <div class="am_tuya_comment_user_l">
                            <img src="img/kj.png" alt="">我是超级小短腿柯基 <span>  •  15分钟前</span>
                        </div>
                        <div class="am_tuya_comment_user_r">新疆维吾尔自治区 哈萨克自治州
                        </div>
                        <div class="am_tuya_comment_text">我来了！哈哈哈哈哈哈哈哈！</div>
                    </div>
                </div>
                <div class="am_tuya_comment">
                    <div class="am_tuya_comment_user">
                        <div class="am_tuya_comment_user_l">
                            <img src="img/kj.png" alt="">我是超级小短腿柯基 <span>  •  15分钟前</span>
                        </div>
                        <div class="am_tuya_comment_user_r">新疆维吾尔自治区 哈萨克自治州
                        </div>
                        <div class="am_tuya_comment_text">首先，我们增加了一个叫做orderProp的标签，这样我们的用户就可以选择我们提供的两种排序方法。</div>
                    </div>
                </div>
                <div class="am_tuya_comment">
                    <div class="am_tuya_comment_user">
                        <div class="am_tuya_comment_user_l">
                            <img src="img/kj.png" alt="">我是超级小短腿柯基 <span>  •  15分钟前</span>
                        </div>
                        <div class="am_tuya_comment_user_r">新疆维吾尔自治区 哈萨克自治州
                        </div>
                        <div class="am_tuya_comment_text">我来了！哈哈哈哈哈哈哈哈！</div>
                    </div>
                </div>--%>
            </div>
           <%-- <div class="am_news_load"><span><i  class="am-icon-spinner am-icon-spin"></i> 查看更多讨论</span></div>--%>
        </div>
        <div class="am_tuya_content_r">
            <ul class="am_tuya_r_info">
                <%--<li><i class="am-icon-heart"></i><span>10 人喜欢</span></li>
                <li><i class="am-icon-comments"></i><span>4 条讨论</span></li>--%>
                <span class="sys-url am-sr-only"></span>
                <li><i class="am-icon-eye"></i><span>${moments.browseCount} 次查看</span></li>
                <li id="sharpMsg"><i class="am-icon-share-square-o"></i><span style="cursor: pointer">分享涂鸦</span></li>
                <li><i class="am-icon-clock-o"></i><span>发布时间 <fmt:formatDate value="${moments.createTime}" pattern="yyyy-MM-dd" /></span></li>
                <shiro:authenticated>
                   <li id="delMoments" data="${moments.id}" style="cursor: pointer"><i class="am-icon-delicious"></i><span>删除朋友圈</span></li>
                </shiro:authenticated>
            </ul>

        </div>
    </div>
</div>

<div id="showDialog1"></div>
<!-- 放大图片的div容器 -->
<div id="outerdiv" style="position:fixed;top:0;left:0;background:rgba(0,0,0,0.7);z-index:100;width:100%;height:100%;display:none;">
    <div id="innerdiv" style="position:absolute;">
        <img id="bigimg" style="border:5px solid #fff;" src="" />
    </div>
</div>
<%--查看图片--%>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/seeImg/seeImg.js"></script>

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