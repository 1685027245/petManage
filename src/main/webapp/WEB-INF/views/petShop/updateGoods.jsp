<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left" id="petShopBigName"></div>
        <div class="pull-left" readonly="" id="addPageName" data="${pageName}"></div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span>商品管理<span style="margin:0 5px;">/</span></span>
            <c:if test="${pageName=='pet'}">
                宠物列表
            </c:if>
            <c:if test="${pageName=='food'}">
                食品列表
            </c:if>
            <c:if test="${pageName=='periphery'}">
                宠物周边
            </c:if>
            <span style="margin:0 5px;">/</span></span>
            <c:if test="${pageName=='pet'}">
                宠物详情
            </c:if>
            <c:if test="${pageName=='food'}">
                食品详情
            </c:if>
            <c:if test="${pageName=='periphery'}">
                周边商品详情
            </c:if>
            <span style="margin:0 5px;">/</span><span class="top-position-name">
                <c:if test="${pageName=='pet'}">
                    修改宠物信息
                </c:if>
                <c:if test="${pageName=='food'}">
                    修改食品信息
                </c:if>
                <c:if test="${pageName=='periphery'}">
                    修改周边商品信息
                </c:if>
            </span></div>
    </div>
    <div class="row add-pet">
        <div class="col-lg-12" id="updatePet" >
            <div class="row top-button">
                <div class="pull-left" style="font-size: 18px;padding-left: 5px;font-weight: bold">${pet.petEncyclopedias.name}</div>
                <div class="pull-right save-pets">
                    <button class="btn btn-default canclePets" data="${pet.id}">取消</button>
                    <button class="btn btn-primary" id="savePets" data="${pet.id}" ><i class="fa fa-floppy-o"></i>  保存</button>
                </div>
            </div>
            <div role="tabpanel"  class="tab-pane" >
                <div class="row" >
                    <div class="col-lg-1 pet-value-name">宠物编号：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="petNumber" value="${pet.number}" placeholder="请输入宠物编号">
                    </div>
                    <div class="col-lg-1 pet-value-name">类别：</div>
                    <div class="col-lg-2">
                        <select class="form-control" id="petCategory" data="${pet.petEncyclopedias.category}">
                            <option selected="selected" value="狗狗">狗狗</option>
                            <option value="猫">猫</option>
                            <option value="兔子">兔子</option>
                            <option value="老鼠">老鼠</option>
                            <option value="宠物龟">宠物龟</option>
                            <option value="宠物鱼">宠物鱼</option>
                            <option value="其他">其他</option>
                        </select>
                    </div>
                    <div class="col-lg-1 pet-value-name">品种：</div>
                    <div class="col-lg-2">
                        <select class="form-control" id="petName" data="${pet.petEncyclopedias.name}">
                            <option >请选择</option>
                            <c:forEach var="pet" items="${petNameList}" varStatus="status">
                                <option >${pet.name}</option>
                            </c:forEach>
                        </select>
                    </div>
                    <div class="col-lg-1 pet-value-name" >体型：</div>
                    <div class="col-lg-2">
                        <select class="form-control" id="petShape" data="${pet.shape}">
                            <option selected="selected" >小型</option>
                            <option>中型</option>
                            <option>大型</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 pet-value-name" >毛长：</div>
                    <div class="col-lg-2">
                        <select class="form-control" id="petHairLength" data="${pet.hairLength}">
                            <option selected="selected">长毛</option>
                            <option>短毛</option>
                            <option>无毛</option>
                        </select>
                    </div>
                    <div class="col-lg-1 pet-value-name" >体重：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="petWeight" value="${pet.weight}" placeholder="请输入体重,单位为千克(KG)">
                    </div>
                    <div class="col-lg-1 pet-value-name">毛色：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="petCoatColor" value="${pet.coatColor}"  placeholder="请输入毛色">
                    </div>
                    <div class="col-lg-1 pet-value-name">定价：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="petPrice" value="${pet.price}"  placeholder="请输入价格,单位为元(￥)">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 pet-value-name">昵称：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="nickName" value="${pet.nickName}"  placeholder="请输入宠物昵称" >
                    </div>
                    <div class="col-lg-1 pet-value-name">别名：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="petAlias"  placeholder="无" disabled="disabled">
                    </div>
                    <div class="col-lg-1 pet-value-name">英文名：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="petEnglishName"  placeholder="无" disabled="disabled">
                    </div>
                    <div class="col-lg-1 pet-value-name">智商：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="petIQ"  placeholder="无" disabled="disabled">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 pet-value-name">寿命：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="petLife"  placeholder="无" disabled="disabled">
                    </div>
                    <div class="col-lg-1 pet-value-name">原产地：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="petCountryOfOrigin"  placeholder="无" disabled="disabled">
                    </div>
                    <div class="col-lg-1 pet-value-name">功能：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="petFunction"  placeholder="无" disabled="disabled">
                    </div>
                    <div class="col-lg-1 pet-value-name">详细特征：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="petDetailCharacteristies"   placeholder="无" disabled="disabled">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 pet-value-name">备注：</div>
                    <div class="col-lg-11">
                        <textarea id="petRemarks" rows="5"  style="width: 100%;padding: 10px">${pet.remarks}</textarea>
                    </div>
                </div>
                <div class="row" id="petOrigin" ></div>
                <div class="row" >
                    <div class="col-lg-1 pet-value-name" style="padding-top: 20px;">宠物图片：</div>
                    <div class="col-lg-11 pet-value-img">
                        <div class="row" id="petImgShow">
                            <c:forEach var="img" items="${imgPathList}" >
                                <div class="img-one col-lg-3">
                                    <img src="${pageContext.request.contextPath}${img}" >
                                    <span class="delImg glyphicon glyphicon-remove" title="删除该图片" ></span>
                                </div>
                            </c:forEach>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 pet-value-name" >继续上传图片：</div>
                    <div class="col-lg-11">
                        <input type="file" name="file"  id="petFileImg" data="${pet.imgPath}" multiple class="file-loading" />
                    </div>
                </div>
            </div>

        </div>

        <div class="col-lg-12" id="updateFood">
            <div class="row top-button">
                <div class="pull-left" style="font-size: 18px;padding-left: 5px;font-weight: bold">${food.name}</div>
                <div class="pull-right save-pets">
                    <button class="btn btn-default canclePets" data="${food.id}">取消</button>
                    <button class="btn btn-primary" id="saveFood" data="${food.id}" ><i class="fa fa-floppy-o"></i> 保存</button>
                </div>
            </div>

            <div role="tabpanel" class="tab-pane " >
                <div class="row">
                    <div class="col-lg-1 pet-value-name">食品编号：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="foodSerialNumber" value="${food.foodSerialNumber}"  placeholder="请输入食品编号">
                    </div>
                    <div class="col-lg-1 pet-value-name">食品名称：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="foodName"   value="${food.name}" placeholder="请输入食品名称">
                    </div>
                    <div class="col-lg-1 pet-value-name">类别：</div>
                    <div class="col-lg-2">
                        <select class="form-control" id="foodCategory" data="${food.category}">
                            <option selected="selected">犬粮</option>
                            <option>猫粮</option>
                            <option>鱼粮</option>
                            <option>休闲零食</option>
                            <option>宠物罐头食品</option>
                            <option>宠物肉酱</option>
                            <option>其他</option>
                        </select>
                    </div>
                    <div class="col-lg-1 pet-value-name" >产品风味：</div>
                    <div class="col-lg-2">
                        <select class="form-control" id="foodFlavor" data="${food.flavor}">
                            <option selected="selected">牛肉味</option>
                            <option>鸡肉味</option>
                            <option>鱼肉味</option>
                            <option>羊肉味</option>
                            <option>烧烤味道</option>
                            <option>其他</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 pet-value-name" >规格：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="foodSpecification" min="0"  value="${food.specification}"  placeholder="请输入食品规格">
                    </div>
                    <div class="col-lg-1 pet-value-name" >价格：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="foodPrice" value="${food.price}" placeholder="请输入价格,单位元（￥）">
                    </div>
                    <div class="col-lg-1 pet-value-name">库存数量：</div>
                    <div class="col-lg-2">
                        <input type="number" class="form-control" min="0" id="foodStock" value="${food.stock}"  placeholder="请输入库存数量">
                    </div>
                    <div class="col-lg-1 pet-value-name" >品牌：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="foodBrand" value="${food.brand}" placeholder="请输入品牌">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 pet-value-name">生产日期：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="foodDateOfManufacture"  value="<fmt:formatDate value="${food.dateOfManufacture}" pattern="yyyy-MM-dd" />" placeholder="选择生产日期">
                    </div>
                    <div class="col-lg-1 pet-value-name" >保质期：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" min="0" id="foodShelfLife" value="${food.shelfLife}" placeholder="请输入保质期天数">
                    </div>
                    <div class="col-lg-1 pet-value-name">产地：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="foodPlaceOfOrigin" value="${food.addressOfManufacturer}"  placeholder="请输入产地">
                    </div>
                    <div class="col-lg-1 pet-value-name" >存储方式：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="foodStorageMode" value="${food.storageMode}" placeholder="请输入存储方式">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 pet-value-name">使用说明：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="foodExplain" value="${food.instructions}"  placeholder="请输入使用说明">
                    </div>
                    <div class="col-lg-1 pet-value-name" >生产厂家名称：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="foodNameOfManufacturer" value="${food.nameOfManufacturer}" placeholder="请输入生产厂家名称">
                    </div>
                    <div class="col-lg-1 pet-value-name" >生产厂家地址：</div>
                    <div class="col-lg-5" >
                        <input type="text" class="form-control" id="foodAddressOfManufacturer"  value="${food.addressOfManufacturer}" >
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 pet-value-name" >录入时间：</div>
                    <div class="col-lg-5" >
                        <input type="text" class="form-control" id="createTime" value="<fmt:formatDate value="${food.createTime}" pattern="yyyy-MM-dd hh:mm:ss" />"  disabled>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 pet-value-name">备注：</div>
                    <div class="col-lg-11">
                        <textarea  rows="5" id="foodRemarks" style="width: 100%;padding: 10px">${food.remarks}</textarea>
                    </div>
                </div>
                <div class="row" >
                    <div class="col-lg-1 pet-value-name" style="padding-top: 20px;">食品图片：</div>
                    <div class="col-lg-11 pet-value-img">
                        <div class="row">
                            <c:forEach var="img" items="${imgPathList}" >
                                <div class="img-one col-lg-3">
                                    <img src="${pageContext.request.contextPath}${img}" >
                                    <span class="delImg glyphicon glyphicon-remove" title="删除该图片" ></span>
                                </div>
                            </c:forEach>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 pet-value-name">继续上传图片：</div>
                    <div class="col-lg-11">
                        <input type="file" name="file"  id="foodFileImg" data="${food.imgPath}" multiple class="file-loading" />
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-12" id="updatePeriphery">
            <div class="row top-button">
                <div class="pull-left" style="font-size: 18px;padding-left: 5px;font-weight: bold">${petPeriphery.name}</div>
                <div class="pull-right save-pets">
                    <button class="btn btn-default canclePets" data="${petPeriphery.id}">取消</button>
                    <button class="btn btn-primary" id="savePeriphery" data="${petPeriphery.id}" ><i class="fa fa-floppy-o"></i> 保存</button>
                </div>
            </div>

            <div role="tabpanel" class="tab-pane " >
                <div class="row">
                    <div class="col-lg-1 pet-value-name">商品编号：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="peripheryNumber"  value="${petPeriphery.number}"  placeholder="请输入商品编号">
                    </div>
                    <div class="col-lg-1 pet-value-name">商品名称：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control"  id="peripheryName"   value="${petPeriphery.name}" placeholder="请输入商品名称">
                    </div>
                    <div class="col-lg-1 pet-value-name">颜色：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="peripheryType" value="${petPeriphery.type}" placeholder="请输入商品颜色">
                    </div>
                    <div class="col-lg-1 pet-value-name">品牌：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="peripheryBrand" value="${petPeriphery.brand}" placeholder="请输入商品品牌">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 pet-value-name" >库存：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control"  min="0" id="peripheryStock" value="${petPeriphery.stock}"  placeholder="请输入库存数量">
                    </div>
                    <div class="col-lg-1 pet-value-name" >已售：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control"  value="${petPeriphery.sold}" disabled>
                    </div>
                    <div class="col-lg-1 pet-value-name">单价：</div>
                    <div class="col-lg-2">
                        <input type="number" class="form-control" min="0" id="peripheryPrice" value="${petPeriphery.price}"  placeholder="请输入商品单价">
                    </div>
                    <div class="col-lg-1 pet-value-name" >重量：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="peripheryWeight" value="${petPeriphery.weight}" placeholder="请输入商品重量">
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 pet-value-name">生产厂家：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control" id="peripheryNameOfManufacturer" value="${petPeriphery.nameOfManufacturer}"  placeholder="请输入生产厂家名称">
                    </div>
                    <div class="col-lg-1 pet-value-name">录入时间：</div>
                    <div class="col-lg-2">
                        <input type="text" class="form-control"  value="<fmt:formatDate value="${petPeriphery.createTime}" pattern="yyyy-MM-dd hh:mm:ss" />"  disabled>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 pet-value-name">备注：</div>
                    <div class="col-lg-11">
                        <textarea id="peripheryRemarks" rows="5"  style="width: 100%;padding: 10px" placeholder="请输入备注">${petPeriphery.remarks}</textarea>
                    </div>
                </div>
                <div class="row" >
                    <div class="col-lg-1 pet-value-name" style="padding-top: 20px;">商品图片：</div>
                    <div class="col-lg-11 pet-value-img">
                        <div class="row" >
                            <c:forEach var="img" items="${imgPathList}" >
                                <div class="img-one col-lg-3">
                                    <img src="${pageContext.request.contextPath}${img}" >
                                    <span class="delImg glyphicon glyphicon-remove" title="删除该图片" ></span>
                                </div>
                            </c:forEach>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 pet-value-name">继续上传图片：</div>
                    <div class="col-lg-11">
                        <input type="file" name="file"  id="peripheryFileImg" data="${petPeriphery.imgPath}" multiple class="file-loading" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="showDialog1"></div>
<jsp:include page="common/footer.jsp"></jsp:include>

<!-- 头像效果 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/common.js"></script>
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<!-- 当前页 -->
<link href="${pageContext.request.contextPath}/statics/css/pet/updateGoods.css" rel="stylesheet" />
<%--<script src="${pageContext.request.contextPath}/statics/js/page/pet-information.js"></script>--%>
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/updateGoods.js"></script>
<!-- 文件上传 -->
<link href="${pageContext.request.contextPath}/statics/widget/fileinput/fileinput.min.css" rel="stylesheet"/>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/fileinput/fileinput.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/fileinput/zh.js"></script><!-- 中文 -->
<%--<script type="text/javascript" src="${pageContext.request.contextPath}/statics/js/widgetUse/fileinput-use.js"></script>--%><!-- 使用 -->

<!-- 时间选择器 -->
<link href="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.min.css" rel="stylesheet">
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/bootstrap-datetimepicker/bootstrap-datetimepicker.zh-CN.js"></script><!-- 中文-->
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/js/widgetUse/datetimepicker-use.js"> </script><!-- 使用 -->
<%--省市县三级联动--%>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-distpicker/distpicker.data.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-distpicker/distpicker.js"></script>
<script src="${pageContext.request.contextPath}/statics/widget/bootstrap-distpicker/main.js"></script>

</body>
</html>
