<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left " id="pageId" data="${pageId}">新增宠物百科</div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span>宠物管理<span style="margin:0 5px;">/</span><span class="top-position-name">新增宠物</span></div>
    </div>
    <div class="row add-pet">
        <div class="col-lg-12" style="padding: 0;">
            <div class="add-pet1" >
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active" ><a href="#home" aria-controls="home" role="tab" data-toggle="tab">宠物百科</a></li>
                    <div class="pull-right" style="padding-top: 8px">
                        <div class="col-lg-12 save-pets">
                            <button class="btn btn-default " id="canclePetEncyclopedias">取消</button>
                            <button class="btn btn-primary" id="savePetEncyclopedias" >保存</button>
                        </div>
                    </div>
                </ul>
                <!-- Tab panes -->
                <div class="tab-content" style="padding: 20px;">
                    <div role="tabpanel"  class="tab-pane active" id="home">
                        <div class="row">
                            <div class="col-lg-1 pet-value-name">宠物中文名称：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="name" data="${petEncyclopedias.id}" value="${petEncyclopedias.name}"  placeholder="请输入宠物中文名称" >
                            </div>
                            <div class="col-lg-1 pet-value-name">宠物别名：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="alias" value="${petEncyclopedias.alias}"   placeholder="请输入宠物别名" >
                            </div>
                            <div class="col-lg-1 pet-value-name">英文名：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="englishName" value="${petEncyclopedias.englishName}"   placeholder="请输入宠物英文名" >
                            </div>
                            <div class="col-lg-1 pet-value-name">类别：</div>
                            <div class="col-lg-2">
                                <select class="form-control" id="category" data="${petEncyclopedias.category}">
                                    <option value="狗狗" selected>狗狗</option>
                                    <option value="猫">猫</option>
                                    <option value="兔子">兔子</option>
                                    <option value="老鼠">老鼠</option>
                                    <option value="宠物鸟">宠物鸟</option>
                                    <option value="宠物龟">宠物龟</option>
                                    <option value="宠物鱼">宠物鱼</option>
                                    <option value="其它">其它</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name">体型：</div>
                            <div class="col-lg-2">
                                <select class="form-control" id="shape" data="${petEncyclopedias.shape}">
                                    <option value="大型" selected>大型</option>
                                    <option value="中型">中型</option>
                                    <option value="小型">小型</option>
                                </select>
                            </div>
                            <div class="col-lg-1 pet-value-name">体重：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="weight" value="${petEncyclopedias.weight}"   placeholder="请输入宠物体重范围" >
                            </div>
                            <div class="col-lg-1 pet-value-name">毛长：</div>
                            <div class="col-lg-2">
                                <select class="form-control" id="hairLength"  data="${petEncyclopedias.hairLength}">
                                    <option value="长毛" selected>长毛</option>
                                    <option value="短毛">短毛</option>
                                    <option value="无毛">无毛</option>
                                </select>
                            </div>
                            <div class="col-lg-1 pet-value-name">毛色：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="coatColor" value="${petEncyclopedias.coatColor}"    placeholder="请输入宠物毛色" >
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name">智商：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control"  id="intelligenceQuotient" value="${petEncyclopedias.intelligenceQuotient}"  placeholder="请输入宠物智商排名" >
                            </div>
                            <div class="col-lg-1 pet-value-name">原产地：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="countryOfOrigin" value="${petEncyclopedias.countryOfOrigin}"  placeholder="请输入原产地" >
                            </div>
                            <div class="col-lg-1 pet-value-name">寿命：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="life" value="${petEncyclopedias.life}"  placeholder="请输入宠物寿命范围" >
                            </div>
                            <div class="col-lg-1 pet-value-name">参考价格：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="price" value="${petEncyclopedias.price}"   placeholder="请输入宠物参考价格" >
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name">生活环境：</div>
                            <div class="col-lg-2">
                                <select class="form-control"  id="environment" data="${petEncyclopedias.environment}">
                                    <option value="无" selected>无</option>
                                    <option value="陆地" >陆地</option>
                                    <option value="水生">水生</option>
                                    <option value="两栖">两栖</option>
                                    <option value="海水">海水</option>
                                    <option value="淡水">淡水</option>
                                </select>
                            </div>
                            <div class="col-lg-1 pet-value-name">品种：</div>
                            <div class="col-lg-2">
                                <input type="text" class="form-control" id="varieties" value="${petEncyclopedias.varieties}"  placeholder="请输入宠物品种" >
                            </div>
                            <div class="col-lg-1 pet-value-name">功能：</div>
                            <div class="col-lg-5">
                                <input type="text" class="form-control" id="function" value="${petEncyclopedias.function}"  placeholder="请输入宠物功能" >
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name">详细特征：</div>
                            <div class="col-lg-11">
                                <input type="text" class="form-control" id="detailCharacterities" value="${petEncyclopedias.detailCharacterities}"  placeholder="请输入宠物详细特征" >
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name">起源：</div>
                            <div class="col-lg-11">
                               <textarea  rows="5"  style="width: 100%;padding: 10px" id="origin"   placeholder="宠物起源历史">${petEncyclopedias.origin}</textarea>
                            </div>
                        </div>
                        <div class="row" id="petOrigin"></div>
                        <c:if test="${imgPathList!=null}">
                            <div class="row">
                                <div class="col-lg-1 pet-value-name">百科图片：</div>
                                <div class="col-lg-11 petImgShow">
                                    <div class="row" id="showImg">
                                    <c:forEach var="img" items="${imgPathList}" >
                                        <div class="img-one col-lg-3">
                                            <img src="${pageContext.request.contextPath}${img}" >
                                            <span class="delImg glyphicon glyphicon-remove" title="删除该图片" ></span>
                                        </div>
                                    </c:forEach>
                                    </div>
                                    <%--<c:forEach var="img" items="${imgPathList}" >
                                        <img src="${pageContext.request.contextPath}${img}" >
                                    </c:forEach>--%>
                                </div>
                            </div>
                        </c:if>
                        <div class="row">
                            <div class="col-lg-1 pet-value-name">上传宠物图片：</div>
                            <div class="col-lg-11">
                                <input type="file" name="file" id="encyclopediasImg" data="${petEncyclopedias.imgPath}" multiple class="file-loading" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="showDialog1"></div>
<!-- 头像效果 -->
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/common.js"></script>
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<!-- 当前页 -->
<link href="${pageContext.request.contextPath}/statics/css/pet/add-pets.css" rel="stylesheet" />
<%--<script src="${pageContext.request.contextPath}/statics/js/page/pet-information.js"></script>--%>
<script src="${pageContext.request.contextPath}/statics/js/systemModule/addPetEncyclopedias.js"></script>
<!-- 文件上传 -->
<link href="${pageContext.request.contextPath}/statics/widget/fileinput/fileinput.min.css" rel="stylesheet"/>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/fileinput/fileinput.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/statics/widget/fileinput/zh.js"></script><!-- 中文 -->
<%--<script type="text/javascript" src="${pageContext.request.contextPath}/statics/js/widgetUse/fileinput-use.js"></script>--%><!-- 使用 -->

</body>
</html>
