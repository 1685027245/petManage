<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>
<jsp:include page="common/header.jsp"></jsp:include>
<!-- 头像效果 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/common.js"></script>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left"><shiro:principal property="userName"/></div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span>数据管理<span style="margin:0 5px;">/</span><span class="top-position-name">首页数据管理</span></div>
    </div>
    <div class="row shop-member">
        <div class="col-lg-12 shop-member-content">
            <div class="row shop-member-top">
                <div class="pull-left shop-member-top-name"><i class="fa fa-user"></i>首页数据</div>
                <div class="pull-right shop-member-top-button">
                    <button class="btn btn-primary" id="showUpload">显示上传</button>
                    <button class="btn btn-primary" id="saveIndexData"><i class="fa fa-floppy-o" aria-hidden="true"></i>保存</button>
                </div>
            </div>
            <div class="row open-index-item" >
                <div class="col-lg-6">
                    <label>平台描述</label>
                    <textarea class="text-item text-item1" id="platformDescription" data="${openIndexData.id}" rows="5" placeholder="请输入平台描述">${openIndexData.platformDescription}</textarea>
                </div>
                <div class="col-lg-6">
                    <label>百科标题</label>
                    <input class="form-control input-item-value" id="encyclopediaTitle" value="${openIndexData.encyclopediaTitle}" placeholder="请输入百科标题" />
                    <textarea class="text-item" rows="5" id="encyclopediaDescription" placeholder="请输入百科描述">${openIndexData.encyclopediaDescription}</textarea>
                </div>
            </div>
            <div class="row open-index-item" >
                <div class="col-lg-6">
                    <label>资讯标题</label>
                    <input class="form-control input-item-value" id="informationTitle" value="${openIndexData.informationTitle}"  placeholder="请输入资讯标题" />
                    <textarea class="text-item" rows="5" id="informationDescription" placeholder="请输入资讯描述">${openIndexData.informationDescription}</textarea>
                </div>
                <div class="col-lg-6">
                    <label>店铺标题</label>
                    <input class="form-control input-item-value" id="shopTitle"   value="${openIndexData.shopTitle}" placeholder="请输入店铺标题" />
                    <textarea class="text-item" rows="5" id="shopDescription" placeholder="请输入店铺描述">${openIndexData.shopDescription}</textarea>
                </div>
            </div>
            <div class="row open-index-item" id="platformImg">
                <div class="col-lg-12" ><label>平台图片</label></div>
                <c:forEach var="img" items="${imgPathList}">
                    <div class="col-lg-4 item-img">
                        <img class="img-responsive"  src="${pageContext.request.contextPath}${img}"  alt="">
                        <span class="delImg glyphicon glyphicon-remove" title="删除该图片" ></span>
                    </div>
                </c:forEach>
            </div>
            <div class="row open-index-item" id="uploadShopImg">
                <div class="col-sm-12">
                    <input type="file" name="file"  id="petShopImg" data="${openIndexData.platformImg}" multiple class="file-loading" />
                </div>
            </div>
        </div>
    </div>
    <div id="showDialog1"></div>
</div>
<jsp:include page="common/footer.jsp"></jsp:include>
<%--当前页面--%>
<link href="${pageContext.request.contextPath}/statics/css/systemModule/openIndexManager.css" rel="stylesheet" />
<script src="${pageContext.request.contextPath}/statics/js/systemModule/openIndexDataManager.js"></script>
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<!-- 文件上传 -->
<link href="${pageContext.request.contextPath}/statics/widget/fileinput/fileinput.min.css" rel="stylesheet"/>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/fileinput/fileinput.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/fileinput/zh.js"></script><!-- 中文 -->


</body>
</html>

