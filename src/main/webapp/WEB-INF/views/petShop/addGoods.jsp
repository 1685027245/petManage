<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left" id="petShopBigName"></div>
        <div class="pull-left" readonly id="addPageName" data="${pageName}"></div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span>商品管理<span style="margin:0 5px;">/</span><span class="top-position-name">新增商品</span></div>
    </div>
    <div class="row add-pet">
        <div class="col-lg-12" style="padding: 0;">
            <div class="add-pet1" >
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" id="tabPet" ><a href="#homePet" aria-controls="home" role="tab" data-toggle="tab">新增宠物</a></li>
                    <li role="presentation" id="tabFood"><a href="#homeFood" aria-controls="profile" role="tab" data-toggle="tab">新增食品</a></li>
                    <li role="presentation" id="tabPeriphery"><a href="#homePeriphery" aria-controls="messages" role="tab" data-toggle="tab">新增周边商品</a></li>
                </ul>
                <!-- Tab panes -->
                <div class="tab-content" style="padding: 20px;">
                    <div role="tabpanel"  class="tab-pane" id="homePet">
                        <div class="row">
                            <div class="col-lg-1 pet-value-name">宠物编号：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="petNumber" placeholder="请输入宠物编号" >
                            </div>
                            <div class="col-lg-1 pet-value-name">类别：</div>
                            <div class="col-lg-2">
                                <select class="form-control" id="petCategory">
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
                                <select class="form-control" id="petName">
                                    <option selected="selected">请选择</option>
                                    <c:forEach var="pet" items="${petNameList}" varStatus="status">
                                        <option >${pet.name}</option>
                                    </c:forEach>
                                </select>
                            </div>
                            <div class="col-lg-1 pet-value-name" >体型：</div>
                            <div class="col-lg-2">
                                <select class="form-control" id="petShape">
                                    <option selected="selected" >小型</option>
                                    <option>中型</option>
                                    <option>大型</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name" >毛长：</div>
                            <div class="col-lg-2">
                                <select class="form-control" id="petHairLength">
                                    <option selected="selected">长毛</option>
                                    <option>短毛</option>
                                    <option>无毛</option>
                                </select>
                            </div>
                            <div class="col-lg-1 pet-value-name" >体重：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="petWeight" placeholder="请输入体重">
                            </div>
                            <div class="col-lg-1 pet-value-name">毛色：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="petCoatColor" placeholder="请输入毛色">
                            </div>
                            <div class="col-lg-1 pet-value-name">定价：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="petPrice" placeholder="请输入价格,单位为元(￥)">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name">昵称：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="nickName"  placeholder="请输入宠物昵称" >
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
                            <div class="col-lg-1 pet-value-name">生活环境：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="environment"   placeholder="无" disabled="disabled">
                            </div>
                            <div class="col-lg-1 pet-value-name">种类/品种：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="varieties"  placeholder="无" disabled="disabled">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name">备注：</div>
                            <div class="col-lg-11">
                               <textarea id="petRemarks" rows="5"  style="width: 100%;padding: 10px"></textarea>
                            </div>
                        </div>
                        <div class="row" id="petOrigin"></div>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name" >上传宠物图片：</div>
                            <div class="col-lg-11">
                                <input type="file" name="file"  id="petFileImg" multiple class="file-loading" />
                            </div>
                        </div>
                        <div class="row page-btn" >
                            <div class="col-lg-12 save-pets">
                                <button class="btn btn-default canclePets" >取消</button>
                                <button class="btn btn-primary" id="savePets" ><i class="fa fa-floppy-o"></i> 保存</button>
                            </div>
                        </div>

                    </div>
                    <div role="tabpanel" class="tab-pane " id="homeFood">
                        <div class="row">
                            <div class="col-lg-1 pet-value-name">食品编号：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="foodSerialNumber"  placeholder="请输入食品编号">
                            </div>
                            <div class="col-lg-1 pet-value-name">食品名称：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="foodName"  placeholder="请输入食品名称">
                            </div>
                            <div class="col-lg-1 pet-value-name">类别：</div>
                            <div class="col-lg-2">
                                <select class="form-control" id="foodCategory">
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
                                <select class="form-control" id="foodFlavor">
                                    <option selected="selected">牛肉味</option>
                                    <option>鸡肉味</option>
                                    <option>鱼肉味</option>
                                    <option>羊肉味</option>
                                    <option>烧烤味</option>
                                    <option>其他</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name" >规格：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="foodSpecification" min="0"  placeholder="请输入食品规格,注明单位">
                            </div>
                            <div class="col-lg-1 pet-value-name" >价格：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="foodPrice"  placeholder="请输入价格,单位元（￥）">
                            </div>
                            <div class="col-lg-1 pet-value-name">库存数量：</div>
                            <div class="col-lg-2">
                                <input type="number" class="form-control" min="0" id="foodStock"  placeholder="请输入库存数量">
                            </div>
                            <div class="col-lg-1 pet-value-name" >品牌：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="foodBrand" placeholder="请输入品牌">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name">生产日期：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control date-input" id="foodDateOfManufacture" placeholder="选择生产日期">
                            </div>
                            <div class="col-lg-1 pet-value-name" >保质期：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" min="0" id="foodShelfLife" placeholder="请输入保质期时间">
                            </div>
                            <div class="col-lg-1 pet-value-name">产地：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="foodPlaceOfOrigin"  placeholder="请输入产地">
                            </div>
                            <div class="col-lg-1 pet-value-name" >存储方式：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="foodStorageMode"  placeholder="请输入存储方式">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name">使用说明：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="foodExplain"  placeholder="请输入使用说明">
                            </div>
                            <div class="col-lg-1 pet-value-name" >生产厂家名称：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="foodNameOfManufacturer" placeholder="请输入生产厂家名称">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name" >生产厂家地址：</div>
                            <div class="col-lg-4">
                                <form class="form-inline">
                                    <div data-toggle="distpicker">
                                        <div class="form-group">
                                            <label class="sr-only" for="province1">Province</label>
                                            <select class="form-control" id="province1"></select>
                                        </div>
                                        <div class="form-group">
                                            <label class="sr-only" for="city1">City</label>
                                            <select class="form-control" id="city1"></select>
                                        </div>
                                        <div class="form-group">
                                            <label class="sr-only" for="district1">District</label>
                                            <select class="form-control" id="district1"></select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-2" style="margin-left: -85px">
                                <input type="text" class="form-control" id="foodAddressOfManufacturer"  placeholder="请输入详细地址">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name">备注：</div>
                            <div class="col-lg-11">
                                <textarea  rows="5" id="foodRemarks" style="width: 100%;padding: 10px"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name">上传食品图片：</div>
                            <div class="col-lg-11">
                                <input type="file" name="file"  id="foodFileImg" multiple class="file-loading" />
                            </div>
                        </div>
                        <div class="row page-btn">
                            <div class="col-lg-12 save-pets">
                                <button class="btn btn-default canclePets" >取消</button>
                                <button class="btn btn-primary" id="saveFood" ><i class="fa fa-floppy-o"></i> 保存</button>
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane " id="homePeriphery">
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
                            <div class="col-lg-1 pet-value-name">单价：</div>
                            <div class="col-lg-2">
                                <input type="number" class="form-control" min="0" id="peripheryPrice" value="${petPeriphery.price}"  placeholder="请输入商品单价">
                            </div>
                            <div class="col-lg-1 pet-value-name" >重量：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="peripheryWeight" value="${petPeriphery.weight}" placeholder="请输入商品重量">
                            </div>
                            <div class="col-lg-1 pet-value-name">生产厂家：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="peripheryNameOfManufacturer" value="${petPeriphery.nameOfManufacturer}"  placeholder="请输入生产厂家名称">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name">备注：</div>
                            <div class="col-lg-11">
                                <textarea id="peripheryRemarks" rows="5"  style="width: 100%;padding: 10px" placeholder="请输入备注">${petPeriphery.remarks}</textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name">上传图片：</div>
                            <div class="col-lg-11">
                                <input type="file" name="file"  id="peripheryFileImg" data="${petPeriphery.imgPath}" multiple class="file-loading" />
                            </div>
                        </div>
                        <div class="row page-btn">
                            <div class="col-lg-12 save-pets">
                                <button class="btn btn-default canclePets" >取消</button>
                                <button class="btn btn-primary" id="savePeriphery" ><i class="fa fa-floppy-o"></i> 保存</button>
                            </div>
                        </div>
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
<link href="${pageContext.request.contextPath}/statics/css/pet/add-pets.css" rel="stylesheet" />
<%--<script src="${pageContext.request.contextPath}/statics/js/page/pet-information.js"></script>--%>
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/add-goods.js"></script>
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
