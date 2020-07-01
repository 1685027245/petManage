$(function(){

	$("#showUpload").click(function () {
		if($(this).text()=="显示上传"){
			$("#uploadShopImg").show();
			$(this).text("隐藏上传");
		}else {
			$("#uploadShopImg").hide();
			$(this).text("显示上传");
		}
	})
	
	//0.初始化fileinput
	var oFileInput1 = new FileInput();
	oFileInput1.Init("petShopImg", "/open/uploadShopImg");

	$("#saveIndexData").click(function () {
		var opt = {
			title: '开放模块首页数据管理',
			width: 400,
			content: "确定修改首页数据?",
			cancelBtnText: '取消',
			okBtnText: "确定",
			onOk: function () {
				$.ajax({
					type: "post",
					url: "/system/changeOpenIndexData.html",
					dataType: 'json',
					data: {
						id:$("#platformDescription").attr("data"),
						platformDescription:$("#platformDescription").val(),
						encyclopediaTitle:$("#encyclopediaTitle").val(),
						encyclopediaDescription:$("#encyclopediaDescription").val(),
						informationTitle:$("#informationTitle").val(),
						informationDescription:$("#informationDescription").val(),
						shopTitle:$("#shopTitle").val(),
						shopDescription:$("#shopDescription").val(),
						platformImg:$("#petShopImg").attr("data")
					},
					success: function (data) {
						var opt = {
							title: '开放模块首页数据管理',
							width: 400,
							content: "修改首页数据成功！",
							cancelBtnText: '确定',
							okBtnText: "",
							onOk: function () {}
						};
						setTimeout(function () {
							$("#showDialog1").showDialog(opt,150,"");
						},400)
					}
				})
			}
		};
		$("#showDialog1").showDialog(opt,150,"");
	})

	//删除图片
	$(document).on("click",".delImg",function () {
		$this = $(this);
		var delImg = $this.parent().children("img").attr("src").substr(1)+";";
		var opt = {
			title: '删除图片',
			width: 400,
			content: "确定删除该图片?",
			okBtnText: '确定',
			cancelBtnText: '取消',
			onOk: function () {
				$this.parent().remove();
				var shopImgPath = $("#petShopImg").attr("data");
				shopImgPath = shopImgPath.replace("/"+delImg,"");
				$("#petShopImg").attr("data",shopImgPath)
			}
		};
		$("#showDialog1").showDialog(opt,150)
	})
	
})

//初始化fileinput 文件上传
var FileInput = function () {
	var oFile = new Object();
	//初始化fileinput控件（第一次初始化）
	oFile.Init = function(ctrlName, uploadUrl) {
		var control = $('#' + ctrlName);
		//初始化上传控件的样式
		control.fileinput({
			language: 'zh', //设置语言
			uploadUrl: uploadUrl, //上传的地址
			allowedFileExtensions: ['jpg', 'gif', 'png'],//接收的文件后缀
			showUpload: true, //是否显示上传按钮
			showCaption: false,//是否显示标题
			browseClass: "btn btn-primary", //按钮样式
			//dropZoneEnabled: false,//是否显示拖拽区域
			//minImageWidth: 50, //图片的最小宽度
			//minImageHeight: 50,//图片的最小高度
			//maxImageWidth: 1000,//图片的最大宽度
			//maxImageHeight: 1000,//图片的最大高度
			//maxFileSize: 0,//单位为kb，如果为0表示不限制文件大小
			//minFileCount: 0,
			maxFileCount: 6, //表示允许同时上传的最大文件个数
			enctype: 'multipart/form-data',
			validateInitialCount:true,
			previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
			msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
		});

		//导入文件上传完成之后的事件
		$("#petShopImg").on("fileuploaded", function (event, data, previewId, index) {
			var urlData = $("#petShopImg").attr("data");
			if(isNull(urlData)){
				urlData="";
			}
			urlData+=data.response.url+";";
			$("#petShopImg").attr("data",urlData);

			$("#platformImg").append("<div class=\"col-lg-4 item-img\">\n" +
				"<img class=\"img-responsive\"  src="+data.response.url+"  alt=\"\">\n" +
				"<span class=\"delImg glyphicon glyphicon-remove\" title=\"删除该图片\" ></span>\n" +
				"</div>")
			/*$("#myModal").modal("hide");
			var data = data.response.lstOrderImport;
			if (data == undefined) {
				/!*toastr.error('文件格式类型不正确');*!/
				return;
			}
			//1.初始化表格
			var oTable = new TableInit();
			oTable.Init(data);
			$("#div_startimport").show();*/
		});
	}
	return oFile;
};

