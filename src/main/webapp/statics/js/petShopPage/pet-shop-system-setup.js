$(function(){
	//0.初始化fileinput
	var oFileInput1 = new FileInput();
	oFileInput1.Init("petShopImgFile", "/open/uploadShopImg");

	//初始化下拉
	$("#businessStatus").val($("#businessStatus").attr("data")=='true'?'营业':'暂停营业')
	$("#acceptAppointmentOrNot").val($("#acceptAppointmentOrNot").attr("data")=='true'?'接受':'不接受')

	//初始化地图
	var map = new AMap.Map('mapSelect', {
		resizeEnable: true, //是否监控地图容器尺寸变化
		zoom: 11, //初始地图级别
	});
	var geocoder,marker,lnglat;

	marker = new AMap.Marker({});
	setMyMarker(marker,$("#mapSureAddress").attr("longitude"),$("#mapSureAddress").attr("latitude"))
	marker.setMap(map);

	function regeoCode() {
		if(!geocoder){
			geocoder = new AMap.Geocoder({
				city: "010", //城市设为北京，默认：“全国”
				radius: 1000 //范围，默认：500
			});
		}
		if(!marker){
			marker = new AMap.Marker();
			map.add(marker);
		}
		marker.setPosition(lnglat);

		geocoder.getAddress(lnglat, function(status, result) {
			if (status === 'complete'&&result.regeocode) {
				var address = result.regeocode.formattedAddress;
				document.getElementById('mapSureAddress').value = address;
				$("#mapSureAddress").attr("longitude",lnglat[0]);
				$("#mapSureAddress").attr("latitude",lnglat[1]);
			}else{
				log.error('根据经纬度查询地址失败')
			}
		});
	}

	map.on('click',function(e){
		lnglat = e.lnglat;
		regeoCode();
	})

	// 获取输入提示信息
	function autoInput(){
		var keywords = document.getElementById("inputMap").value;
		AMap.plugin('AMap.Autocomplete', function(){
			// 实例化Autocomplete
			var autoOptions = {
				city: '全国'
			}
			var autoComplete = new AMap.Autocomplete(autoOptions);
			autoComplete.search(keywords, function(status, result) {
				// 搜索成功时，result即是对应的匹配数据
				let tips = result.tips;
				let tishtml = "";
				$.each(tips,function(index,item){
					tishtml+="<span lat="+item.location.lat+" lng="+item.location.lng+">"+item.name+"</span>"
				})
                tishtml+="<div class='close-map' id='closeMap'><strong >关闭</strong></div>"
                if(!isNull(tips)){
                    $("#input-info").css("display","block");
                }else {
                    $("#input-info").css("display","none");
                }
				$("#input-info").html(tishtml);

                $("#closeMap").on("click",function(){
                    $("#input-info").css("display","none");
                })
			})
		})
	}
	autoInput();
	document.getElementById("inputMap").oninput = autoInput;
	$("#input-info").on("click",'span',function(){
		let lat = $(this).attr("lat");
		let lng = $(this).attr("lng");
		map.panTo([lng, lat]);
		lnglat=[lng, lat];
		regeoCode();
	})


	//删除图片
	$(document).on("click",".delImg",function () {
		$this = $(this);
		var delImg = $this.parent().children("img").attr("src").substr(0)+";";
		var opt = {
			title: '删除图片',
			width: 400,
			content: "确定删除该图片?",
			okBtnText: '确定',
			cancelBtnText: '取消',
			onOk: function () {
				$this.parent().remove()
				var shopImgPath = $("#petShopImgFile").attr("data");
				shopImgPath = shopImgPath.replace(delImg,"");
				$("#petShopImgFile").attr("data",shopImgPath)
			}
		};
		$("#showDialog1").showDialog(opt,150)
	})

	//地图显示
	$("#showMapBtn").click(function () {
		if($(this).text()=="显示地图"){
			$("#showMap").show();
			$(this).text("隐藏地图");
		}else {
			$("#showMap").hide();
			$(this).text("显示地图")
		}
	})

	$("#uploadImgBtn").click(function () {
		if($(this).text()=="显示上传"){
			$("#uploadImg").show();
			$(this).text("隐藏上传")
		}else {
			$("#uploadImg").hide();
			$(this).text("显示上传")
		}
	})


	//保存设置
	$("#savePetShopSystemUp").click(function () {
		var shopName = $("#shopName").val();
		var businessStatus = $("#businessStatus").val()=="营业"?"true":"false";
		var acceptAppointmentOrNot = $("#acceptAppointmentOrNot").val()=="接受"?"true":"false";
		var shopCategory = $("#shopCategory").val();
		var businessHours = $("#businessHours").val();
		var shopPhone = $("#shopPhone").val();
		var mapSureAddress = $("#mapSureAddress").val()/*+(isNull($("#mapRemarks").val())?'':'('+$("#mapRemarks").val()+')')*/;
		var longitude = $("#mapSureAddress").attr("longitude");
		var latitude = $("#mapSureAddress").attr("latitude");
		var petShopImg = $("#petShopImgFile").attr("data");
		var detailedDescription = $("#detailedDescription").val();
		var id = $("#savePetShopSystemUp").attr("data");

		$.ajax({
			type:"get",
			url:"/open/updatePetShop.html",
			dataType:'json',
			data:{
				id:id,
				shopName:shopName,
				category:shopCategory,
				address:mapSureAddress,
				shopPhone:shopPhone,
				businessHours:businessHours,
				shopImgPath:petShopImg,
				detailedDescription:detailedDescription,
				acceptAppointmentOrNot:acceptAppointmentOrNot,
				businessStatus:businessStatus,
				longitude:longitude,
				latitude:latitude,
			},
			success:function(data){
				var opt = {
					title: '宠物店信息设置',
					width: 400,
					content: "宠物店信息设置成功!",
					okBtnText: '确定',
					cancelBtnText: '取消',
					onOk: function () {
						loadPage("/petShop/petSystemSetup.html");
					}
				};
				$("#showDialog1").showDialog(opt,150)
			}
		})
	})

})



//初始化fileinput
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
			maxFileCount: 3, //表示允许同时上传的最大文件个数
			enctype: 'multipart/form-data',
			validateInitialCount:true,
			previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
			msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",
		});

		//导入文件上传完成之后的事件
		$("#petShopImgFile").on("fileuploaded", function (event, data, previewId, index) {
			var urlData = $("#petShopImgFile").attr("data");
			if(isNull(urlData)){
				urlData="";
			}
			urlData+=data.response.url+";";
			$("#petShopImgFile").attr("data",urlData);

			$("#showImg").append("<div class=\"col-lg-3 petShopImg\">\n" +
				"<img src="+data.response.url+" >\n" +
				"<span class=\"delImg glyphicon glyphicon-remove\" title=\"删除该图片\" ></span>\n" +
				"</div>")

			/*$("#myModal").modal("hide");
			var data = data.response.lstOrderImport;
			if (data == undefined) {
				toastr.error('文件格式类型不正确');
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


function setMyMarker(marker,longitude,latitude) {
	// 自定义点标记内容
	var markerContent = document.createElement("div");

	// 点标记中的图标
	var markerImg = document.createElement("img");
	markerImg.className = "markerlnglat";
	markerImg.src = "http://webapi.amap.com/theme/v1.3/markers/n/mark_r.png";
	markerContent.appendChild(markerImg);

	// 点标记中的文本
	var markerSpan = document.createElement("span");
	markerSpan.className = 'marker';
	markerSpan.innerHTML = "我的宠物店";
	markerContent.appendChild(markerSpan);

	marker.setContent(markerContent); //更新点标记内容
	marker.setPosition([longitude,latitude]); //更新点标记位置
}