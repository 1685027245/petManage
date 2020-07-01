$(function(){
    //初始化加载订单
	$.ajax({
		type:"post",
		url:"/petShop/getPetSalesRecords.html",
		dataType:'json',
		data:{},
		success:function(data){
			var columns = [
				{field: 'selectItem', checkbox: true},
				{field: 'number', title: '产品编号', align: 'center', halign: 'center', valign: 'middle', sortable: true},
				{field: 'name', title: '产品名称', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'category', title: '类别', sortable: true, align: 'center', halign: 'center', valign: 'middle',
					formatter: function (index, row) {
						    if (row['category'] == "pet") {
						        return '宠物'
						    }else if (row['category'] == "food"){
								return '食品';
							}else if (row['category'] == "service"){
								return "服务";
							}else if (row['category'] == "periphery"){
								return "周边商品";
							}
					},},
				{field: 'price', title: '单价', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'amount', title: '数量', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'foldingRate', title: '打折率', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'total', title: '总金额', sortable: true, align: 'center', halign: 'center', valign: 'middle',},
				{field: 'operate', title: '操作', width: 150, align: 'center', valign: 'middle', formatter: actionFormatter,} ];
			$('#table').bootstrapTable('destroy');
			$('#table').bootstrapTable({
				data: data,
				classes: 'table table-hover',
				height: 470,
				//url: queryUrl,  //请求后台的URL（*）
				//method: 'GET',  //请求方式（*）
				toolbar: '#toolbar', //工具按钮用哪个容器和
				/*singleSelect:true, 是否单选*/
				checkbox:true,
				striped: true, //是否显示行间隔色
				cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
				pagination: true, //是否显示分页（*）
				sortable: true, //是否启用排序
				sortOrder: "asc", //排序方式
				sidePagination: "client", //分页方式：client客户端分页，server服务端分页（*）
				pageNumber: 1, //初始化加载第一页，默认第一页,并记录
				pageSize: 10, //每页的记录行数（*）
				pageList: [10, 15, 20, 30], //可供选择的每页的行数（*）
				search: true, //是否显示表格搜索
				strictSearch: false, //是否开启精确查询
				showColumns: true, //是否显示所有的列（选择显示的列）
				showRefresh: false, //是否显示刷新按钮
				minimumCountColumns: 2, //最少允许的列数
				clickToSelect: false, //是否启用点击选中行
				uniqueId: "fid", //每一行的唯一标识，一般为主键列
				showToggle: false, //是否显示详细视图和列表视图的切换按钮
				// cardView: true,//是否显示详细视图
				// detailView: false,                  //是否显示父子表
				showExport: true,
				// exportTypes: ['csv','txt','xml'],
				//得到查询的参数
				//queryParams: function (params) {
				//    //这里的键的名字和控制器的变量名必须一致，这边改动，控制器也需要改成一样的
				//    var temp = {
				//        rows: params.limit,     //页面大小
				//        page: (params.offset / params.limit) + 1,   //页码
				//        sort: params.sort,      //排序列名
				//        sortOrder: params.order //排位命令（desc，asc）
				//    };
				//    return temp;
				//},
				columns: columns,
                onPostBody:function(data){
                    var price = 0;
                    $.each(data,function(index,value){
                        price += value["total"];
                    });
                    $("#crrentOrderPrice").empty();
                    $("#crrentOrderPrice").append(price);
                },
				onLoadSuccess: function() {

                },
				onLoadError: function() {
					showTips("数据加载失败！");
				},
				onClickRow: function(row, $element) {

				},
				onDblClickRow: function(row, $element) {

				}
			});

		}
	})

	//清空当前所有订单
	$("#clearCurrentOrder").click(function () {
		var data = $('#table').bootstrapTable('getData');
		if(data.length>0){
			var opt = {
				title: '订单处理',
				width: 400,
				content: "清空当前订单?",
				okBtnText: '确定',
				cancelBtnText: '取消',
				onOk: function () {
					$.ajax({
						type:"post",
						url:"/petShop/clearCurrentOrder.html",
						data:{},
						success:function(){
							var opt = {
								title: '订单处理',//提示框标题
								width: 400,//提示框宽度
								content: '当前订单已清空!'//提示文本
							};
							setTimeout(function(){
								$("#showDialog1").showMsg(opt,150);
								$("#table").bootstrapTable('refresh', {url:"/petShop/getPetSalesRecords.html"});
							},400);
						}
					})
				}
			};
			$("#showDialog1").showDialog(opt,150,"btn btn-danger")
		}else{
			var opt = {
				title: '订单处理',//提示框标题
				width: 400,//提示框宽度
				content: '当前没有订单!'//提示文本
			};
			$("#showDialog1").showMsg(opt,150);
		}

	})

	//删除选中订单
	$("#clearSelectedOrder").click(function () {
		var data = $('#table').bootstrapTable('getData');
		if(data.length==0){
			var opt = {
				title: '订单处理',//提示框标题
				width: 400,//提示框宽度
				content: '当前没有订单!'//提示文本
			};
			$("#showDialog1").showMsg(opt,150);
			return ;
		}

        var rows = $("#table").bootstrapTable('getSelections');// 获得要删除的数据
        if (rows.length == 0) {// rows 主要是为了判断是否选中，下面的else内容才是主要
            var opt = {
                title: '订单处理',//提示框标题
                width: 400,//提示框宽度
                content: '请先选择要删除的记录!'//提示文本
            };
            $("#showDialog1").showMsg(opt,150);
            return;
        } else {
            var opt = {
                title: '订单处理',
                width: 400,
                content: "删除选中的订单?",
                okBtnText: '确定',
                cancelBtnText: '取消',
                onOk: function () {
                    var ids = new Array();// 声明一个数组
                    var categorys = new Array();// 声明一个数组
                    $(rows).each(function() {// 通过获得别选中的来进行遍历
                        ids.push(this.productId);// cid为获得到的整条数据中的一列
                        categorys.push(this.category)
                    });
                    deleteSalesRecord(ids,categorys)
                }
            };
            $("#showDialog1").showDialog(opt,150,"btn btn-danger")
        }
	})

	//跳转宠物列表页面
	$("#addPetPage").click(function () {
		loadPage("/petShop/petInformation.html")
	})

	//跳转食品列表页面
	$("#addFoodPage").click(function () {
		loadPage("/petShop/foodInformation.html/1")
	})

	//跳转宠物周边
	$("#addperipheryPage").click(function () {
		loadPage("/petShop/peripheryInformation.html")
	})


	//结算
	$("#settleAccounts").click(function () {
        var crrentOrderTotal = $("#crrentOrderPrice").text();
        if(crrentOrderTotal==0){
            var opt = {
                title: '订单结算',//提示框标题
                width: 400,//提示框宽度
                content: '当前没有订单!'//提示文本
            };
            $("#showDialog1").showMsg(opt,150);
        }else{
            var html = "<div class='row edit-dialog-all'>" +
                "<div class='col-lg-4 left-label-title' ><label>会员账号:</label></div>" +
                "<div class='col-lg-7'>" +
                "<input type='number' placeholder='请输入会员账号' onKeypress=\"return (/[\\d]/.test(String.fromCharCode(event.keyCode)))\" id='petShopMemberNumber' class='form-control' >" +
                "</div>" +
                "<div class='col-lg-1 memberNumberSure' >" +
                "<button class='btn btn-primary' id='memberNumberSureBtn'>确定</button>" +
                "</div>" +
                "<div class='col-lg-12 no-member-number' id='noMemberNumber' >" +
                "<label class='right-label-name-noNumber'>会员账号不存在</label> " +
                "</div>" +
                "</div>" +
                "</div>"+
                "<div class='row edit-dialog-all no-member-number' id='memberNumberLevel'>" +
                "<div class='col-lg-4 left-label-title'><label>会员等级:</label></div>" +
                "<div class='col-lg-7'>" +
                "<label class='right-label-name' id='memberLevel' ></label> " +
                "</div>" +
                "</div>"+
                "<div class='row edit-dialog-all no-member-number' id='memberBalanceAll'>" +
                "<div class='col-lg-4 left-label-title'><label>账户余额:</label></div>" +
                "<div class='col-lg-7'>" +
                "<label class='right-label-name' ><span id='memberBalance' style='color: red' ></span>元(￥)</label> " +
                "</div>" +
                "</div>"+
                "<div class='row edit-dialog-all'>" +
                "<div class='col-lg-4 left-label-title'><label>订单总计:</label></div>" +
                "<div class='col-lg-7'>" +
                "<label class='right-label-name'><span style='color: red'>"+crrentOrderTotal+"</span>元(￥)</label> " +
                "</div>" +
                "</div>"+
                "<div class='row edit-dialog-all'>" +
                "<div class='col-lg-4 left-label-title'><label>打折率:</label></div>" +
                "<div class='col-lg-7'>" +
                "<input type='number' min='0' step='0.01' max='1' id='foldingRateInput' onKeypress=\"return (/[\\d]/.test(String.fromCharCode(event.keyCode)))\" class='form-control'  value='1' disabled >" +
                "</div>" +
                "</div>"+
                "<div class='row edit-dialog-all'>" +
                "<div class='col-lg-4 left-label-title'><label>结算金额:</label></div>" +
                "<div class='col-lg-7'>" +
                "<label class='right-label-name'><span id='totalOrder' style='color: red'>"+crrentOrderTotal+"</span>元(￥)</label> " +
                "</div>" +
                "<div class='col-lg-12 no-member-number' id='noEnoughMoney' >" +
                "<label class='right-label-name-noNumber'>余额不足以结算,请先充值</label> " +
                "</div>" +
                "</div>"+
                "</div>";
            var opt = {
                title: '订单结算',
                width: 500,
                content: html,
                okBtnText: '确定',
                cancelBtnText: '取消',
                onOk: function () {
                    //有会员卡时
                    if (!isNull($("#memberLevel").text())){
                        var memberBalance = $("#memberBalance").text();//账户余额
                        var totalOrder = $("#totalOrder").text();//结算金额
                        var foldingRate = $("#foldingRateInput").val();//打折率
                        var petShopMemberId = $("#petShopMemberNumber").attr("data");

                        if(eval(totalOrder)>eval(memberBalance)){
                            var opt = {
                                title: '订单结算',//提示框标题
                                width: 400,//提示框宽度
                                content: '会员账号余额不足,请先充值!'//提示文本
                            };
                            setTimeout(function () {
                                $("#showDialog1").showMsg(opt,150);
                            },400)
                        }else {
                            $.ajax({
                                type:"post",
                                url:"/petShop/petShopSettlement.html",
                                data:{
                                    foldingRate:foldingRate,
                                    memberId:petShopMemberId
                                },
                                success:function(){
                                    var opt = {
                                        title: '订单结算',//提示框标题
                                        width: 400,//提示框宽度
                                        content: '订单结算成功!'//提示文本
                                    };
                                    setTimeout(function(){
                                        $("#showDialog1").showMsg(opt,150);
                                        $("#table").bootstrapTable('refresh', {url:"/petShop/getPetSalesRecords.html"});
                                    },400);
                                }
                            })
                        }
                    }else{//无会员卡时
                        $.ajax({
                            type:"post",
                            url:"/petShop/petShopSettlement.html",
                            data:{
                                foldingRate:1,
                            },
                            success:function(){
                                var opt = {
                                    title: '订单结算',//提示框标题
                                    width: 400,//提示框宽度
                                    content: '订单结算成功!'//提示文本
                                };
                                setTimeout(function(){
                                    $("#showDialog1").showMsg(opt,150);
                                    $("#table").bootstrapTable('refresh', {url:"/petShop/getPetSalesRecords.html"});
                                },400);
                            }
                        })
                    }
                }
            };
            $("#showDialog1").showDialog(opt,250)
        }

        $("#petShopMemberNumber").on("keypress",function(event){
            if(event.keyCode == 13) {
                var shopMemberNumber = $(this).val();
                if(isNull(shopMemberNumber)){
                    shopMemberNumber = "AAAAAAAAAAAAAAAA"
					$("#noMemberNumber").css("display","none");
                }
                $.ajax({
                        type:"post",
                        url:"/petShop/petShopMemberInfo.html",
                        data:{
                            memberNumber:shopMemberNumber
                        },
                        dataType:"json",
                        success:function(data){
                            if(data.length!=0){
                                $("#memberNumberLevel").css("display","block");
                                $("#memberBalanceAll").css("display","block");
                                $("#noMemberNumber").css("display","none");
                                $("#petShopMemberNumber").attr("data",data[0].id);
                                $("#memberLevel").text(data[0].level);//会员等级名字
                                $("#foldingRateInput").val(data[0].discount);//打折率
                                $("#memberBalance").text(data[0].balance);//账户余额
                                //打折之后的价格显示
                                $("#totalOrder").text(crrentOrderTotal*data[0].discount);//结算价格，折后价格

                                var memberBalance = $("#memberBalance").text();//账户余额
                                var totalOrder = $("#totalOrder").text();//结算金额
                                if(eval(totalOrder)>eval(memberBalance)){
                                    $("#noEnoughMoney").css("display","block");
                                }else{
                                    $("#noEnoughMoney").css("display","none");
                                }
                            }else{
                                $("#noMemberNumber").css("display","block");
                                $("#memberBalanceAll").css("display","none");
                                $("#memberNumberLevel").css("display","none");
                                $("#noEnoughMoney").css("display","none");
                                $("#petShopMemberNumber").removeAttr("data")
                                $("#memberLevel").text("");
                                $("#foldingRateInput").val(1);
                                $("#memberBalance").text("0");//账户余额
                                $("#totalOrder").text(crrentOrderTotal);
                            }

                            // var opt = {
                            //     title: '订单处理',//提示框标题
                            //     width: 400,//提示框宽度
                            //     content: '当前订单已清空!'//提示文本
                            // };
                            // setTimeout(function(){
                            //     $("#showDialog1").showMsg(opt,150);
                            //     $("#table").bootstrapTable('refresh', {url:"/petShop/getPetSalesRecords.html"});
                            // },400);
                        }
                    })

            }
        })

        $("#memberNumberSureBtn").click(function () {
            var shopMemberNumber = $("#petShopMemberNumber").val();
            if(isNull(shopMemberNumber)){
                shopMemberNumber = "AAAAAAAAAAAAAAAA"
				$("#noMemberNumber").css("display","none");
            }
            $.ajax({
                type:"post",
                url:"/petShop/petShopMemberInfo.html",
                data:{
                    memberNumber:shopMemberNumber
                },
                dataType:"json",
                success:function(data){
                    if(data.length!=0){
                        $("#memberNumberLevel").css("display","block");
                        $("#memberBalanceAll").css("display","block");
                        $("#noMemberNumber").css("display","none");
                        $("#petShopMemberNumber").attr("data",data[0].id);
                        $("#memberLevel").text(data[0].level);//会员等级名字
                        $("#foldingRateInput").val(data[0].discount);//打折率
                        $("#memberBalance").text(data[0].balance);//账户余额
                        //打折之后的价格显示
                        $("#totalOrder").text(crrentOrderTotal*data[0].discount);//结算价格，折后价格

                        var memberBalance = $("#memberBalance").text();//账户余额
                        var totalOrder = $("#totalOrder").text();//结算金额
                        if(eval(totalOrder)>eval(memberBalance)){
                            $("#noEnoughMoney").css("display","block");
                        }else{
                            $("#noEnoughMoney").css("display","none");
                        }
                    }else{
                        $("#noMemberNumber").css("display","block");
                        $("#memberBalanceAll").css("display","none");
                        $("#memberNumberLevel").css("display","none");
                        $("#noEnoughMoney").css("display","none");
                        $("#petShopMemberNumber").removeAttr("data")
                        $("#memberLevel").text("");
                        $("#foldingRateInput").val(1);
                        $("#memberBalance").text("0");//账户余额
                        $("#totalOrder").text(crrentOrderTotal);
                    }
                }
            })
        })
	})

})




//批量删除订单
function deleteSalesRecord(ids,categorys) {
	$.ajax({
		type:"post",
		url:"/petShop/delAllGoodsToSalesRecords.html",
		dataType:'json',
		data:{
			ids:ids,
			categorys:categorys
		},
		success:function(data){
			if(data!="fail"){
				var opt = {
					title: '订单处理',//提示框标题
					width: 400,//提示框宽度
					content: "成功取消"+data+"条订单!"  //提示文本
				};
                setTimeout(function(){
                    $("#showDialog1").showMsg(opt,150);
                    $("#table").bootstrapTable('refresh', {url:"/petShop/getPetSalesRecords.html"});
                },400);
			}
		}
	});
}

function EditViewById (data,name){
	var producName = data.name;
	var productPrice = data.price;
	var productAmount = data.amount;
	var productFoldingRate = data.foldingRate;
	var productTotal = data.total;
	var id = data.id;
	var category = data.category;
	var productNumber = data.number;
	var productId = data.productId;
	var productCategory = data.category;

	if(name=="view"){
		if(category=="pet"){
			$.ajax({
				type:"get",
				url:"/petShop/getGoodsDetailsByCondition.html",
				dataType:'json',
				data:{
					id:productId,
					category:category
				},
				success:function(data){
					/**
					 *打开模态框
					 */
					var html = "<div class='row pet-all-dialog'>" +
						"<div class='col-lg-3 pet-value-dialog'>宠物编号: "+data.number+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>别名："+data.petEncyclopedias.alias+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>英文名称："+data.petEncyclopedias.englishName+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>类别："+(data.petEncyclopedias.category=='0'?'狗狗':'猫')+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>昵称："+(isNull(data.nickName)?"--":data.nickName)+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>毛长："+data.hairLength+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>毛色："+data.coatColor+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>体型："+data.shape+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>体重："+data.weight+"KG</div>" +
						""+(isNull(data.petEncyclopedias.life)==true?'':'<div class="col-lg-3 pet-value-dialog">寿命：'+data.petEncyclopedias.life+'</div>')+
						"<div class='col-lg-3 pet-value-dialog'>原产地："+data.petEncyclopedias.countryOfOrigin+"</div>" +
						""+(isNull(data.petEncyclopedias.intelligenceQuotient)==true?'':'<div class="col-lg-3 pet-value-dialog">智商：'+data.petEncyclopedias.intelligenceQuotient+'</div>')+
						""+(isNull(data.petEncyclopedias.function)==true?'':'<div class="col-lg-3 pet-value-dialog">功能：'+data.petEncyclopedias.function+'</div>')+
						"<div class='col-lg-3 pet-value-dialog '>详细特征："+data.petEncyclopedias.detailedCharacteristics+"</div>" +
						"</div>" +
						"<div class='row pet-all-dialog' >" +
						"<div class='col-lg-12 '>" +
						"    <h5>宠物图片：</h5>" +
						"</div>" +
						"<div class='col-lg-12 pet-value-img'>" +
						getAllImg(data.imgPath)
						"</div>" +
						"<div class='col-lg-12 pet-value-more'>" +
						"<a href='javascript:;' class='moreDetails' data='"+data.id+"'>更多详情</a>" +
						"</div>" +
						"</div>";
					var opt = {
						title: data.petEncyclopedias.name+': <span class="pet-price-dialog" >'+data.price+'</span>￥',
						width: 850,
						content: html,
						cancelBtnText: '关闭',
						okBtnText: '删除订单',
						onOk: function () {
							var opt = {
								title: '删除订单',
								width: 400,
								content: '确定删除产品编号<span style="color: red;padding: 0 2px">'+productNumber+'</span>订单?',
								okBtnText: '确定',
								cancelBtnText: '取消',
								onOk: function () {
									$.ajax({
										type:"post",
										url:"/petShop/delGoodsToSalesRecords.html",
										dataType:'json',
										data:{
											id:productId,
											category:category
										},
										success:function(data){
											$("#table").bootstrapTable('refresh', {url:"/petShop/getPetSalesRecords.html"});
										}
									})
								}
							};
							setTimeout(function(){
								$("#showDialog2").showDialog(opt,350,"btn btn-danger")
								$(".modal-dialog").css("margin-top","350px");
							},400);
						}
					};
					$("#showDialog1").showDialog(opt,380,"btn btn-danger");

					$(".moreDetails").click(function () {
						loadPage("/petShop/toPetDetails.html/"+productId)
					})
				}
			})
		}else if (category=="food"){
			$.ajax({
				type:"get",
				url:"/petShop/getGoodsDetailsByCondition.html",
				dataType:'json',
				data:{
					id:productId,
					category:category
				},
				success:function(data){
					/**
					 *打开模态框
					 */
					var html = "<div class='row pet-all-dialog'>" +
						"<div class='col-lg-3 pet-value-dialog'>食品编号: "+data.foodSerialNumber+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>分类："+data.category+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>品牌: "+data.brand+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>风味: "+data.flavor+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>规格: "+data.specification+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>生产日期: "+data.dateOfManufacture+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>存储方式: "+data.storageMode+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>保质期: "+data.shelfLife+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>产地: "+data.placeOfOrigin+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>库存数量: "+data.stock+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>使用说明: "+data.instructions+"</div>" +
						"</div>" +
						"<div class='row pet-all-dialog' >" +
						"<div class='col-lg-12 '>" +
						"    <h5>食品图片：</h5>" +
						"</div>" +
						"<div class='col-lg-12 pet-value-img'>"+getAllImg(data.imgPath)+"" +
						"</div>" +
						"<div class='col-lg-12 pet-value-more'>" +
						"<a href='javascript:;' class='moreDetails' data='"+data.id+"'>更多详情</a>" +
						"</div>" +
						"</div>";
					var opt = {
						title: data.name+': <span class="pet-price-dialog" >'+data.price+'</span>￥',
						width: 850,
						content: html,
						cancelBtnText: '关闭',
						okBtnText: '删除订单',
						onOk: function () {
							var opt = {
								title: '删除订单',
								width: 400,
								content: '确定删除产品编号<span style="color: red;padding: 0 2px">'+productNumber+'</span>订单?',
								okBtnText: '确定',
								cancelBtnText: '取消',
								onOk: function () {
									$.ajax({
										type:"post",
										url:"/petShop/delGoodsToSalesRecords.html",
										dataType:'json',
										data:{
											id:productId,
											category:category
										},
										success:function(data){
											$("#table").bootstrapTable('refresh', {url:"/petShop/getPetSalesRecords.html"});
										}
									})
								}
							};
							setTimeout(function(){
								$("#showDialog2").showDialog(opt,350,"btn btn-danger")
								$(".modal-dialog").css("margin-top","350px");
							},400);
						}
					};
					$("#showDialog1").showDialog(opt,380,"btn btn-danger");

					$(".moreDetails").click(function () {
						loadPage("/petShop/toFoodDetails.html/"+productId)
					})
				}
			})
		}else if(category=="service"){
			var opt = {
				title: data.name+': <span class="pet-price-dialog" >'+data.price+'</span>￥',
				width: 400,
				content: "服务详情请到服务查看",
				cancelBtnText: '关闭',
				okBtnText: '查看',
				onOk: function () {
					loadPage("/petShop/storefrontAllBusiness.html");
				}
			};
			$("#showDialog1").showDialog(opt,150);
		}else if (category=="periphery"){
			$.ajax({
				type:"get",
				url:"/petShop/getGoodsDetailsByCondition.html",
				dataType:'json',
				data:{
					id:productId,
					category:category
				},
				success:function(data){
					/**
					 *打开模态框
					 */
					var html = "<div class='row pet-all-dialog'>" +
						"<div class='col-lg-3 pet-value-dialog'>商品编号: "+data.number+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>品牌: "+data.brand+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>颜色: "+data.type+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>重量: "+data.weight+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>生产厂家: "+data.nameOfManufacturer+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>库存: "+data.stock+"</div>" +
						"<div class='col-lg-3 pet-value-dialog'>已售: "+data.sold+"</div>" +
						"</div>" +
						"<div class='row pet-all-dialog' >" +
						"<div class='col-lg-12 '>" +
						"    <h5>商品图片：</h5>" +
						"</div>" +
						"<div class='col-lg-12 pet-value-img'>"+getAllImg(data.imgPath)+"" +
						"</div>" +
						"<div class='col-lg-12 pet-value-more'>" +
						"<a href='javascript:;' class='moreDetails' data='"+data.id+"'>更多详情</a>" +
						"</div>" +
						"</div>";
					var opt = {
						title: data.name+': <span class="pet-price-dialog" >'+data.price+'</span>￥',
						width: 850,
						content: html,
						cancelBtnText: '关闭',
						okBtnText: '删除订单',
						onOk: function () {
							var opt = {
								title: '删除订单',
								width: 400,
								content: '确定删除产品编号<span style="color: red;padding: 0 2px">'+productNumber+'</span>订单?',
								okBtnText: '确定',
								cancelBtnText: '取消',
								onOk: function () {
									$.ajax({
										type:"post",
										url:"/petShop/delGoodsToSalesRecords.html",
										dataType:'json',
										data:{
											id:productId,
											category:category
										},
										success:function(data){
											$("#table").bootstrapTable('refresh', {url:"/petShop/getPetSalesRecords.html"});
										}
									})
								}
							};
							setTimeout(function(){
								$("#showDialog2").showDialog(opt,350,"btn btn-danger")
								$(".modal-dialog").css("margin-top","350px");
							},400);
						}
					};
					$("#showDialog1").showDialog(opt,280,"btn btn-danger");

					$(".moreDetails").click(function () {
						loadPage("/petShop/toPeripheryDetails.html/"+productId)
					})
				}
			})
		}

	}else if (name=="edit"){
		//弹窗
		var html =
			"<div class='row edit-dialog-all'>" +
			"<div class='col-lg-3 left-label-title'><label>产品编号</label></div>" +
			"<div class='col-lg-8'>" +
			"<input type='text' class='form-control ' value='"+productNumber+"' disabled>" +
			"</div>" +
			"</div>" +
			"<div class='row edit-dialog-all'>" +
			"<div class='col-lg-3 left-label-title'><label>产品名称</label></div>" +
			"<div class='col-lg-8'>" +
			"<input type='text' class='form-control ' value='"+producName+"' disabled>" +
			"</div>" +
			"</div>" +
			"<div class='row edit-dialog-all'>" +
			"<div class='col-lg-3 left-label-title'><label>类别</label></div>" +
			"<div class='col-lg-8'>" +
			"<input type='text' class='form-control ' value='"+(productCategory=="pet"?"宠物":productCategory=="food"?"食品":"服务")+"' disabled>" +
			"</div>" +
			"</div>" +
			"<div class='row edit-dialog-all'>" +
			"<div class='col-lg-3 left-label-title'><label>单价</label></div>" +
			"<div class='col-lg-8'>" +
			"<input type='text' class='form-control ' value='"+productPrice+"' disabled>" +
			"</div>" +
			"</div>" +
			"<div class='row edit-dialog-all'>" +
			"<div class='col-lg-3 left-label-title'><label>数量</label></div>" +
			"<div class='col-lg-8'>" +
			"<input type='number' class='form-control' id='productAmount' value='"+productAmount+"' min='1'  step='1' "+(productCategory=="pet"?"disabled":"")+"/>"+
			"</div>" +
			"</div>"+
			"<div class='row edit-dialog-all'>" +
			"<div class='col-lg-3 left-label-title'><label>打折率</label></div>" +
			"<div class='col-lg-8 '>" +
			"<input type='number' class='form-control ' id='productFoldingRate' value='"+productFoldingRate+"' min='0' max='1' step='0.01'/>"+
			"</div>" +
			"</div>"+
			"<div class='row edit-dialog-all'>" +
			"<div class='col-lg-3 left-label-title'><label>总金额</label></div>" +
			"<div class='col-lg-8'>" +
			"<input type='text' class='form-control ' value='"+productTotal+"' disabled>" +
			"</div>" +
			"</div>";
		var opt = {
			title: '修改订单',
			width: 450,
			content: html,
			cancelBtnText: '关闭',
			okBtnText: '确定',
			onOk: function () {
				var productFoldingRate = $("#productFoldingRate").val();
				var productAmount = $("#productAmount").val();
				$.ajax({
					type:"post",
					url:"/petShop/updateSalesRecordsById.html",
					dataType:'json',
					data:{
						id:id,
						price:productPrice,
						number:productAmount,
						foldingRate:productFoldingRate
					},
					success:function(data){
						$("#table").bootstrapTable('refresh', {url:"/petShop/getPetSalesRecords.html"});
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,300,"btn btn-success");

		$("#productFoldingRate").bind("input propertychange",function(event){
			var productFoldingRate = $(this).val();
			if(productFoldingRate<0||productFoldingRate>1){
				$(this).val("1")
			}
		});
		$("#productAmount").bind("input propertychange",function(event){
			var productAmount = $(this).val();
			if(productAmount<=0){
				$(this).val("1")
			}
		});

	} else {//删除
		var html = '确定删除产品编号<span style="color: red;padding: 0 2px">'+productNumber+'</span>订单?';
		var opt = {
			title: '删除订单',
			width: 400,
			content: html,
			okBtnText: '确定',
			cancelBtnText: '取消',
			onOk: function () {
				$.ajax({
					type:"post",
					url:"/petShop/delGoodsToSalesRecords.html",
					dataType:'json',
					data:{
						id:productId,
						category:productCategory
					},
					success:function(data){
						$("#table").bootstrapTable('refresh', {url:"/petShop/getPetSalesRecords.html"});
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,150,"btn btn-danger")

	}
}

// var data = $('#table').bootstrapTable('getData');
// $('#table').bootstrapTable('load', newData);
function actionFormatter(value, row, index) {
	var data = JSON.stringify(row);
	var result = "";
	result += "<a href='javascript:;' class='btn btn-xs green' " +
		"onclick='EditViewById("+data+",\"view\")' title='查看'>" +
		"<span class='glyphicon glyphicon-eye-open'></span></a>";
	result += "<a href='javascript:;' class='btn btn-xs blue' " +
		"onclick='EditViewById("+data+",\"edit\")' title='编辑'>" +
		"<span class='glyphicon glyphicon-pencil'></span></a>";
	result += "<a href='javascript:;' class='btn btn-xs red' " +
		"onclick='EditViewById("+data+",\"del\")' title='删除'>" +
		"<span class='glyphicon glyphicon-remove'></span></a>";
	return result;
}
