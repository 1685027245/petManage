<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--当前页面--%>
<link href="${pageContext.request.contextPath}/statics/css/pet/pet-shop-membership-discount.css" rel="stylesheet" />
<jsp:include page="common/header.jsp"></jsp:include>
<div class="container-fluid" style="width: calc(100% - 250px);margin-left: 250px;overflow: auto;">
    <div class="row top">
        <div class="pull-left" id="petShopBigName"></div>
        <div class="pull-right top-position">爱宠乐 <span style="margin:0 5px;">/</span>会员管理<span style="margin:0 5px;">/</span><span class="top-position-name">会员优惠规则</span></div>
    </div>
    <div class="row shop-member">
        <div class="col-lg-12 shop-member-content">
                <div class="row shop-member-top">
                    <div class="pull-left shop-member-top-name"><i class="fa fa-sliders"></i>会员优惠设置</div>
                    <div class="pull-right shop-member-top-button">
                        <button class="btn btn-primary" id="updateMemberName"
                                nameOne="${memberDiscount.nameOne}"
                                nameTwo="${memberDiscount.nameTwo}"
                                nameThree="${memberDiscount.nameThree}"
                                nameFour="${memberDiscount.nameFour}">
                            <i class="fa fa-pencil"></i>修改会员等级名称</button>
                        <button class="btn btn-primary" id="saveDiscount"><i class="fa fa-floppy-o"></i>保存</button>
                    </div>
                </div>
                <div class="row shop-membership-discount">
                    <div class="col-lg-6  shop-membership-all" >
                        <div class="row shop-membership-one" >
                            <div class='col-lg-5 shop-member-recharge'>
                                <label>${memberDiscount.nameOne}上限金额</label>
                            </div>
                            <div class='col-lg-7 shop-member-recharge-input'>
                                <input type='number' class='form-control' id="upperLimitOne" value="${memberDiscount.upperLimitOne}"  placeholder='请输入金额，单位(￥)' min='1'  step='1' />
                            </div>
                        </div>
                        <div class="row shop-membership-one" >
                            <div class='col-lg-5 shop-member-recharge'>
                                <label>${memberDiscount.nameTwo}上限金额</label>
                            </div>
                            <div class='col-lg-7 shop-member-recharge-input'>
                                <input type='number' class='form-control' id="upperLimitTwo" value="${memberDiscount.upperLimitTwo}" placeholder='请输入金额，单位(￥)' min='1'  step='1' />
                            </div>
                        </div>
                        <div class="row shop-membership-one" >
                            <div class='col-lg-5 shop-member-recharge'>
                                <label>${memberDiscount.nameThree}上限金额</label>
                            </div>
                            <div class='col-lg-7 shop-member-recharge-input'>
                                <input type='number' class='form-control' id="upperLimitThree" value="${memberDiscount.upperLimitThree}" placeholder='请输入金额，单位(￥)' min='1'  step='1' />
                            </div>
                        </div>
                        <div class="row shop-membership-one" >
                            <div class='col-lg-5 shop-member-recharge'>
                                <label>${memberDiscount.nameFour}上限金额</label>
                            </div>
                            <div class='col-lg-7 shop-member-recharge-input'>
                                <input type='number' class='form-control' id="upperLimitFour" value="${memberDiscount.upperLimitFour}" placeholder='请输入金额，单位(￥)' min='1'  step='1' />
                            </div>
                        </div>
                        <div class="row shop-membership-one" >
                            <div class='col-lg-5 shop-member-recharge'>
                                <label>积分金额设定</label>
                            </div>
                            <div class='col-lg-7 shop-member-recharge-input'>
                                <input type='number' class='form-control' id="integralSum" value="${memberDiscount.integralSum}" placeholder='请输入每积分金额，单位(￥)' min='1'  step='1' />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6  shop-membership-all" >
                        <div class="row shop-membership-one" >
                            <div class='col-lg-4 shop-member-recharge'>
                                <label>${memberDiscount.nameOne}打折率</label>
                            </div>
                            <div class='col-lg-7 shop-member-recharge-input'>
                                <input type='number' class='form-control' id="discountOne" value="${memberDiscount.discountOne}" placeholder='请输入打折率' min='0'  step='0.01' max="1" />
                            </div>
                        </div>
                        <div class="row shop-membership-one" >
                            <div class='col-lg-4 shop-member-recharge'>
                                <label>${memberDiscount.nameTwo}打折率</label>
                            </div>
                            <div class='col-lg-7 shop-member-recharge-input'>
                                <input type='number' class='form-control' id="discountTwo" value="${memberDiscount.discountTwo}" placeholder='请输入打折率' min='0'  step='0.01' max="1" />
                            </div>
                        </div>
                        <div class="row shop-membership-one" >
                            <div class='col-lg-4 shop-member-recharge'>
                                <label>${memberDiscount.nameThree}打折率</label>
                            </div>
                            <div class='col-lg-7 shop-member-recharge-input'>
                                <input type='number' class='form-control' id="discountThree" value="${memberDiscount.discountThree}" placeholder='请输入打折率' min='0'  step='0.01' max="1" />
                            </div>
                        </div>
                        <div class="row shop-membership-one" >
                            <div class='col-lg-4 shop-member-recharge'>
                                <label>${memberDiscount.nameFour}打折率</label>
                            </div>
                            <div class='col-lg-7 shop-member-recharge-input'>
                                <input type='number' class='form-control' id="discountFour" value="${memberDiscount.discountFour}" placeholder='请输入打折率' min='0'  step='0.01' max="1" />
                            </div>
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
<!-- 弹窗 -->
<script src="${pageContext.request.contextPath}/statics/widget/popup/dialogPlugin.js"></script>
<%--当前页--%>
<script src="${pageContext.request.contextPath}/statics/js/petShopPage/pet-shop-membership-discount.js"></script>
</body>
</html>

