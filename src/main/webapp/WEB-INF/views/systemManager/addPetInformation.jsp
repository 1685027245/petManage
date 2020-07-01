<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="common/header.jsp"></jsp:include>
<!-- 头像效果 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/common.js"></script>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left">新增资讯</div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span><span class="top-position-name">主页</span></div>
    </div>
    <div class="row shop-member">
        <div class="col-lg-12 shop-member-content">
            <div class="row shop-member-top">
                <div class="pull-left shop-member-top-name"><i class="fa fa-user"></i>新增资讯</div>
                <div class="pull-right shop-member-top-button">
                    <button class="btn btn-primary" id="cancleAddPetInfo" ><i class="fa fa-arrow-left" aria-hidden="true"></i>返回</button>
                    <button class="btn btn-primary" id="savePetInfo" data="${petInformation.id}"><i class="fa fa-floppy-o" aria-hidden="true"></i>保存</button>
                    <button class="btn btn-primary" id="saveAndPublishPetInfo"><i class="fa fa-cloud" aria-hidden="true"></i>保存并发布</button>
                </div>
            </div>
            <div class="row open-index-item" >
                <div class="col-lg-3" style="padding: 0">
                    <input class="form-control" id="title" data="${petInformation.picPath}"  value="${petInformation.title}" placeholder="请输入资讯标题" />
                </div>
                <div class="col-lg-2 " >
                    <select class="form-control" id="category" data="${petInformation.category}">
                        <option>新鲜事</option>
                        <option>涨知识</option>
                    </select>
                </div>
            </div>
            <div class="row open-index-item" >
                <div id="infoContent"  data='${petInformation.content}' ></div>
            </div>
        </div>
    </div>
    <div id="showDialog1"></div>
</div>
<%--引入富文本编辑器--%>
<%--<link href="${pageContext.request.contextPath}/statics/widget/summernote/summernote.css" rel="stylesheet" />--%>
<link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.8/summernote.css" rel="stylesheet">
<script src="${pageContext.request.contextPath}/statics/widget/summernote/summernote.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/summernote/summernote-zh-CN.js"></script>
<%--当前页面--%>
<link href="${pageContext.request.contextPath}/statics/css/systemModule/openIndexManager.css" rel="stylesheet" />
<script src="${pageContext.request.contextPath}/statics/js/systemModule/addPetInfo.js"></script>
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>

</body>
</html>

