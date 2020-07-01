<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:include page="common/header.jsp"></jsp:include>
<script src="${pageContext.request.contextPath}/statics/js/openModule/amazeui.min.js"></script>
<div class="get encyclopedias-bg">
    <div class="am-g am-imglist">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body" id="petCategory" data="狗狗">
                    <ul class="nav nav-tabs nav-justified">
                        <li class="active">
                            <a data-toggle="tab" href="#dog-basic">狗狗</a>
                        </li>
                        <li >
                            <a data-toggle="tab" href="#cat-basic">猫</a>
                        </li>
                        <li >
                            <a data-toggle="tab" href="#rabbit-basic">兔子</a>
                        </li>
                        <li >
                            <a data-toggle="tab" href="#mouse-basic">老鼠</a>
                        </li>
                        <li >
                            <a data-toggle="tab" href="#bird-basic">宠物鸟</a>
                        </li>
                        <li >
                            <a data-toggle="tab" href="#tortoise-basic">宠物龟</a>
                        </li>
                        <li >
                            <a data-toggle="tab" href="#fish-basic">宠物鱼</a>
                        </li>
                        <li >
                            <a data-toggle="tab" href="#other-basic">其它</a>
                        </li>
                        <li >
                            <a data-toggle="tab" href="#select-basic">查询</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade active in classification" id="dog-basic" >
                            <div class="classification-body petShape" >
                                <strong>体型:</strong>
                                <span class="active">不限</span>
                                <span >小型</span>
                                <span >中型</span>
                                <span >大型</span>
                            </div>
                            <div class="classification-body hairLength" >
                                <strong>毛长:</strong>
                                <span class="active">不限</span>
                                <span >无毛</span>
                                <span >短毛</span>
                                <span >长毛</span>
                            </div>
                            <div class="classification-body coatColor">
                                <strong>毛色:</strong>
                                <span class="active">不限</span>
                                <span >白色</span>
                                <span >黑色</span>
                                <span >灰色</span>
                                <span >黄色</span>
                                <span >褐色</span>
                                <span >红棕色</span>
                                <span >咖啡色</span>
                                <span >陨石色</span>
                                <span >貂色</span>
                                <span >其它颜色</span>
                            </div>
                            <div class="classification-body petFunction">
                                <strong>功能:</strong>
                                <span class="active">不限</span>
                                <span >伴侣犬</span>
                                <span >牧羊犬</span>
                                <span >梗类犬</span>
                                <span >守卫犬</span>
                                <span >枪猎犬</span>
                                <span >看家犬</span>
                                <span >雪橇犬</span>
                                <span >玩赏犬</span>
                                <span >搜救犬</span>
                                <span >导盲犬</span>
                                <span >其它</span>
                            </div>
                        </div>
                        <div class="tab-pane fade classification" id="cat-basic">
                            <div class="classification-body petShape" >
                                <strong>体型:</strong>
                                <span class="active">不限</span>
                                <span >小型</span>
                                <span >中型</span>
                                <span >大型</span>
                            </div>
                            <div class="classification-body hairLength">
                                <strong>毛长:</strong>
                                <span class="active">不限</span>
                                <span >无毛</span>
                                <span >短毛</span>
                                <span >长毛</span>
                            </div>
                            <div class="classification-body coatColor">
                                <strong>毛色:</strong>
                                <span class="active">不限</span>
                                <span >白色</span>
                                <span >黑色</span>
                                <span >蓝色</span>
                                <span >黄色</span>
                                <span >褐色</span>
                                <span >重点色</span>
                                <span >咖啡色</span>
                                <span >渐层色</span>
                                <span >虎斑</span>
                                <span >其它颜色</span>
                            </div>
                        </div>
                        <div class="tab-pane fade classification" id="rabbit-basic">
                            <div class="classification-body petShape" >
                                <strong>体型:</strong>
                                <span class="active">不限</span>
                                <span >小型</span>
                                <span >中型</span>
                                <span >大型</span>
                            </div>
                            <div class="classification-body hairLength">
                                <strong>毛长:</strong>
                                <span class="active">不限</span>
                                <span >短毛</span>
                                <span >长毛</span>
                            </div>
                            <div class="classification-body coatColor">
                                <strong>毛色:</strong>
                                <span class="active">不限</span>
                                <span >白色</span>
                                <span >黑色</span>
                                <span >灰色</span>
                                <span >棕色</span>
                                <span >黄色</span>
                                <span >其它颜色</span>
                            </div>
                        </div>
                        <div class="tab-pane fade classification" id="mouse-basic">
                            <div class="classification-body petShape" >
                                <strong>体型:</strong>
                                <span class="active">不限</span>
                                <span >小型</span>
                                <span >中型</span>
                                <span >大型</span>
                            </div>
                            <div class="classification-body coatColor">
                                <strong>毛色:</strong>
                                <span class="active">不限</span>
                                <span >白色</span>
                                <span >灰色</span>
                                <span >黑色</span>
                                <span >黄色</span>
                                <span >其它颜色</span>
                            </div>
                            <div class="classification-body varieties">
                                <strong>种类:</strong>
                                <span class="active">不限</span>
                                <span >仓鼠</span>
                                <span >豚鼠</span>
                                <span >花栗鼠</span>
                                <span >松鼠</span>
                                <span >龙猫</span>
                                <span >其它</span>
                            </div>
                        </div>
                        <div class="tab-pane fade classification" id="bird-basic">
                            <div class="classification-body petShape" >
                                <strong>体型:</strong>
                                <span class="active">不限</span>
                                <span >小型</span>
                                <span >中型</span>
                                <span >大型</span>
                            </div>
                            <div class="classification-body coatColor">
                                <strong>毛色:</strong>
                                <span class="active">不限</span>
                                <span >白色</span>
                                <span >黑色</span>
                                <span >黄色</span>
                                <span >绿色</span>
                                <span >红色</span>
                                <span >灰色</span>
                                <span >蓝色</span>
                                <span >其它颜色</span>
                            </div>
                            <div class="classification-body varieties">
                                <strong>种类:</strong>
                                <span class="active">不限</span>
                                <span >雀类</span>
                                <span >鸽类</span>
                                <span >鹦鹉类</span>
                            </div>
                        </div>
                        <div class="tab-pane fade classification" id="tortoise-basic">
                            <div class="classification-body environment">
                                <strong>生活环境:</strong>
                                <span class="active">不限</span>
                                <span>陆地</span>
                                <span>水生</span>
                                <span>两栖</span>
                            </div>
                            <div class="classification-body varieties">
                                <strong>品种:</strong>
                                <span class="active">不限</span>
                                <span >常见品种</span>
                                <span >稀有品种</span>
                            </div>
                        </div>
                        <div class="tab-pane fade classification" id="fish-basic">
                            <div class="classification-body coatColor">
                                <strong>颜色:</strong>
                                <span class="active">不限</span>
                                <span >红色</span>
                                <span >金色</span>
                                <span >银色</span>
                                <span >斑纹</span>
                                <span >黑色</span>
                                <span >橙色</span>
                                <span >其它颜色</span>
                            </div>
                            <div class="classification-body varieties">
                                <strong>品种:</strong>
                                <span class="active">不限</span>
                                <span >常见品种</span>
                                <span >稀有品种</span>
                            </div>
                            <div class="classification-body environment">
                                <strong>生活环境:</strong>
                                <span class="active">不限</span>
                                <span >淡水</span>
                                <span >海水</span>
                            </div>
                        </div>
                        <div class="tab-pane fade classification" id="other-basic">
                            <div class="classification-body varieties">
                                <strong>种类:</strong>
                                <span class="active">不限</span>
                                <span >蜥蜴</span>
                                <span >刺猬</span>
                                <span >蜗牛</span>
                                <span >蜘蛛</span>
                                <span >蛇</span>
                                <span >其它</span>
                            </div>
                        </div>
                        <div class="tab-pane fade classification" id="select-basic">
                            <div class="classification-body type">
                                <div class="col-lg-4 col-lg-offset-3">
                                    <input class="form-control" id="selectInput" style="background: rgba(0,0,0,0);color: white" placeholder="请输入宠物内容">
                                </div>
                                <div class="col-lg-1">
                                    <button class="btn btn-primary" id="selectBtn" >查询</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>

<div class="banner_navbg banner-left">
    <div class="am-g">
        <div class="banner_nav" >
            <div class="pull-left" id="bannerNav">
                <span class="am-icon-caret-right">  筛选：</span>
                <span class='screen'>不限</span>
            </div>
            <div class="pull-right" style="margin-right: 260px;font-size: 14px">
                共 <span id="totalSize" style="color: red;"></span> 条数据
            </div>
        </div>
    </div>
</div>

<div class="am-g am-imglist" id="encyclopiasAllPet" style="max-width: 1200px;min-height: 500px;"></div>
<div class="am-g am-imglist" style="max-width: 1170px;padding-right: 30px;" >
    <div class="row  no-padding ">
        <form id="form1" runat="server">
            <div class="pull-right">
                <ul class="pagination" id="pagination"></ul>
                <input type="hidden" id="PageCount" runat="server" />
                <input type="hidden" id="PageSize" runat="server" value="5" />
                <input type="hidden" id="countindex" runat="server" value="10"/>
                <!--设置最多显示的页码数 可以手动设置 默认为7-->
                <input type="hidden" id="visiblePages" runat="server" value="7" />
            </div>
        </form>
    </div>
</div>

<%--分页--%>
<script src="${pageContext.request.contextPath}/statics/widget/paging/jqPaginator.min.js" type="text/javascript"></script>
<link href="${pageContext.request.contextPath}/statics/widget/paging/myPage.css" rel="stylesheet" type="text/css" />
<%--本页--%>
<link href="${pageContext.request.contextPath}/statics/css/openModule/encyclopedias/encyclopedias.css" rel="stylesheet">
<%--本页--%>
<script src="${pageContext.request.contextPath}/statics/js/openModule/page/openEncyclopedias.js"></script>
<jsp:include page="common/footer.jsp"></jsp:include>