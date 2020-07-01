<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left" id="petShopBigName"></div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span>系统设置<span style="margin:0 5px;">/</span><span class="top-position-name">宠物店信息设置</span></div>
    </div>
    <div class="row shop-member">
        <div class="col-lg-12 shop-member-content">
                <div class="row shop-member-top">
                    <div class="pull-left shop-member-top-name"><i class="fa fa-cog"></i> 宠物店信息设置</div>
                    <div class="pull-right shop-member-top-button">
                        <button class="btn btn-primary" id="uploadImgBtn">显示上传</button>
                        <button class="btn btn-primary" id="showMapBtn">显示地图</button>
                        <button class="btn btn-primary" id="savePetShopSystemUp" data="${petShop.id}"> <i class="fa fa-floppy-o"></i>保存设置</button>
                    </div>
                </div>
                <div class="row system-setup-all">
                    <div class="system-setup-one col-lg-3">
                        <div class="col-lg-4 system-setup-name">
                            <label>宠物店名称</label>
                        </div>
                        <div class="col-lg-8">
                            <input class="form-control" id="shopName" value="${petShop.shopName}">
                        </div>
                    </div>
                    <div class="system-setup-one col-lg-3">
                        <div class="col-lg-4 system-setup-name">
                            <label>营业状态</label>
                        </div>
                        <div class="col-lg-8">
                            <select  class="form-control" id="businessStatus" data="${petShop.businessStatus}">
                                <option>营业</option>
                                <option>暂停营业</option>
                            </select>
                        </div>
                    </div>
                    <div class="system-setup-one col-lg-3">
                        <div class="col-lg-4 system-setup-name">
                            <label>是否接受预约</label>
                        </div>
                        <div class="col-lg-8">
                            <select  class="form-control" id="acceptAppointmentOrNot" data="${petShop.acceptAppointmentOrNot}">
                                <option>接受</option>
                                <option>不接受</option>
                            </select>
                        </div>
                    </div>

                    <div class="system-setup-one col-lg-3">
                        <div class="col-lg-4 system-setup-name">
                            <label>宠物店主流</label>
                        </div>
                        <div class="col-lg-8">
                            <input class="form-control" id="shopCategory" value="${petShop.category}">
                        </div>
                    </div>
                    <div class="system-setup-one col-lg-3">
                        <div class="col-lg-4 system-setup-name">
                            <label>每周营业时间</label>
                        </div>
                        <div class="col-lg-8">
                            <input class="form-control" id="businessHours" value="${petShop.businessHours}" placeholder="请输入营业时间">
                        </div>
                    </div>
                    <div class="system-setup-one col-lg-3">
                        <div class="col-lg-4 system-setup-name">
                            <label>爱宠乐使用状态</label>
                        </div>
                        <div class="col-lg-8">
                            <input class="form-control" value="${petShop.isForbidden}" disabled>
                        </div>
                    </div>
                    <div class="system-setup-one col-lg-3">
                        <div class="col-lg-4 system-setup-name">
                            <label>宠物店电话</label>
                        </div>
                        <div class="col-lg-8">
                            <input type="number" class="form-control" id="shopPhone" value="${petShop.shopPhone}" placeholder="请确保宠物店电话号码通畅">
                        </div>
                    </div>
                    <div class="system-setup-one col-lg-3">
                        <div class="col-lg-4 system-setup-name">
                            <label>宠物店创建时间</label>
                        </div>
                        <div class="col-lg-8">
                            <input  class="form-control" value="<fmt:formatDate value="${petShop.createTime}" pattern="yyyy-MM-dd" />" disabled >
                        </div>
                    </div>
                    <div class="system-setup-one col-lg-6">
                        <div class="col-lg-2 system-setup-name">
                            <label>宠物店地址</label>
                        </div>
                        <div class="col-lg-10">
                            <input  class="form-control" id="mapSureAddress" longitude="${petShop.longitude}" latitude="${petShop.latitude}" title="${petShop.address}" value="${petShop.address}" placeholder="确认地址" >
                        </div>
                    </div>
                    <div class="system-setup-one col-lg-6">
                        <div class="col-lg-2 system-setup-name">
                            <label>查询地址</label>
                        </div>
                        <div class="col-lg-10" id="mapInput">
                            <input id="inputMap" class="form-control"  placeholder="请输入详细地址并确定"  >
                            <p class="col-lg-10" id="input-info"></p>
                        </div>
                    </div>
                    <%--<div class="system-setup-one col-lg-3">
                        <div class="col-lg-4 system-setup-name">
                            <label>地址备注</label>
                        </div>
                        <div class="col-lg-8" >
                            <input  class="form-control" id="mapRemarks"  placeholder="地址备注，可为空"  >
                        </div>
                    </div>--%>
                    <div class="system-setup-one col-lg-12" id="showMap">
                        <div id="mapSelect" ></div>
                    </div>

                    <div class="system-setup-one col-lg-12">
                        <div class="col-lg-1 system-setup-name">
                            <label>宠物店详细描述</label>
                        </div>
                        <div class="col-lg-11">
                           <textarea  rows="5" id="detailedDescription" class="detail-description">${petShop.detailedDescription}</textarea>
                        </div>
                    </div>
                    <div class="system-setup-one col-lg-12">
                        <div class="col-lg-1 system-setup-name">
                            <label>宠物店图片</label>
                        </div>
                        <div class="col-lg-11">
                            <div class="row" id="showImg">
                                <c:forEach var="img" items="${imgPathList}" >
                                    <div class="col-lg-3 petShopImg">
                                        <img src="${pageContext.request.contextPath}${img}" >
                                        <span class="delImg glyphicon glyphicon-remove" title="删除该图片" ></span>
                                    </div>
                                </c:forEach>
                            </div>
                        </div>
                    </div>
                    <div class="system-setup-one col-lg-12" id="uploadImg">
                        <div class="col-lg-1 system-setup-name">
                            <label>继续上传图片</label>
                        </div>
                        <div class="col-lg-11">
                            <input type="file" name="file" id="petShopImgFile" data="${petShop.shopImgPath}" multiple class="file-loading" />
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <div id="showDialog1"></div>
</div>
<jsp:include page="common/footer.jsp"></jsp:include>

<!-- 头像效果 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/common.js"></script>
<%--当前页面--%>
<link href="${pageContext.request.contextPath}/statics/css/pet/pet-shop--system-setup.css" rel="stylesheet" />
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<!-- 文件上传 -->
<link href="${pageContext.request.contextPath}/statics/widget/fileinput/fileinput.min.css" rel="stylesheet"/>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/fileinput/fileinput.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/fileinput/zh.js"></script><!-- 中文 -->
<!-- 时间选择器 -->
<link href="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.min.css" rel="stylesheet">
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.zh-CN.js"></script><!-- 中文-->
<%--地图导入--%>
<!--地图api调用-->
<script src="https://webapi.amap.com/maps?v=1.4.14&key=4d81136d607c68fb6c906599c0bd1de1&plugin=AMap.Autocomplete,AMap.Geocoder"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/map/underscore-min.js" ></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/map/backbone-min.js" ></script>
<script type="text/javascript" src='${pageContext.request.contextPath}/statics/widget/map/prety-json.js'></script>
<%--当前页--%>
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/pet-shop-system-setup.js"></script>
</body>
</html>

