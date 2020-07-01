(function($) {
	$.fn.extend({
		/**
		 *模态框插件
		 */
		showDialog: function(options,itemHeight,okBtnClass,isCancle,cancleBtnClass) {
			var defaults = {
				title: '提示',
				width: 600,
				content: '',
				okBtnText: '确定',
				cancelBtnText: '取消',
				onOk: function() {
					alert('您点击了确定');
				},
				onCancel: function() {
					alert('您点击了取消');
				}
			}
			var opts = $.extend({}, defaults, options);
			var $this = $(this);
			$this.html('');
			var $html;

			bindData();
			show(itemHeight);
			return $this;

			function bindData() {
				$html = $('<div class="modal fade" id="myModal" tabindex="-1" role="dialog"  aria-labelledby="exampleModalLabel">' +
					'<div class="modal-dialog" style="width:' + opts.width + 'px" role="document">' +
					'<div class="modal-content">' +
					' <div class="modal-header">' +
					'<h4 class="modal-title" style="display:inline-block;" id="exampleModalLabel">' + opts.title + '</h4>' +
					'  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>' +
					' </div>' +
					'<div myId="content" class="modal-body">' +
					'</div>' +
					'<div myId="dialog-btn" class="modal-footer">' +
					' </div>' +
					'</div>' +
					'</div>' +
					' </div>');
				var $okBtn = $('<button type="button" class='+(isNull(okBtnClass)==true?"'btn btn-primary'":'"'+okBtnClass)+'">' + opts.okBtnText + '</button>');
				var $cancelBtn = $('<button type="button" class='+(isNull(cancleBtnClass)==true?"'btn btn-default'":'"'+cancleBtnClass)+'">' + opts.cancelBtnText + '</button>');
				$okBtn.click(function() {
					var result = opts.onOk();
					if (result != false) {
						$html.modal('show').modal('hide')
					}
				});
				$cancelBtn.click(function() {
					if(isNull(isCancle)){
						$html.modal('show').modal('hide');
					}else {
						var result = opts.onCancel();
						if (result != false) {
							$html.modal('show').modal('hide')
						}
					}

				});

				if(!isNull(opts.cancelBtnText)){
					$html.find("div[myId='dialog-btn']").append($cancelBtn);
				}
				if(!isNull(opts.okBtnText)){
					$html.find("div[myId='dialog-btn']").append($okBtn);
				}
				$html.find("div[myId='content']").append(opts.content);
				$this.append($html);
			}

			function show(itemHeight) {
				var height = window.innerHeight;
				var item_height = itemHeight;
				var top = height/2 - item_height ;
				if(top<0){
					top=0;
				}
				$("#myModal").css("top",top)
				$html.modal('toggle').modal('show');
			}

		},
		/**
		 *提示框
		 */
		showMsg: function(options,itemHeight,cancelText) {
			var defaults = {
				title: '提示',
				width: 600,
				content: '这是一个提示',
				okBtnText: '确定'
			}
			var opts = $.extend({}, defaults, options);
			var $this = $(this);
			$this.html('');
			var $html;
			bindData();
			show(itemHeight);

			function bindData() {
				var $cancelBtn = $('<button type="button" class="btn btn-primary">确定</button>');
				$html = $('<div class="modal fade" id="myModal" tabindex="-1" role="dialog"  aria-labelledby="exampleModalLabel">' +
					'<div class="modal-dialog" style="width:' + opts.width + 'px" role="document">' +
					'<div class="modal-content">' +
					' <div class="modal-header">' +
					'<h4 class="modal-title" style="display:inline-block;" id="exampleModalLabel">' + opts.title + '</h4>' +
					'  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>' +
					' </div>' +
					'<div myId="content" class="modal-body">' +
					'</div>' +
					'<div myId="dialog-btn" class="modal-footer">' +
					' </div>' +
					'</div>' +
					'</div>' +
					' </div>');
				$cancelBtn.click(function() {
					$html.modal('show').modal('hide');
				});
				$html.find("div[myId='content']").append(opts.content);

				if(isNull(cancelText)){
					$html.find("div[myId='dialog-btn']").append($cancelBtn);
				}

				$this.append($html);
			}

			function show(itemHeight) {
				var height = window.innerHeight;
				var item_height = itemHeight;
				var top = height/2 - item_height ;
				if(top<0){
					top=0;
				}
				$("#myModal").css("top",top)
				$html.modal('toggle').modal('show');
			}
		},

	});
	
	function isNull(val){
		if(val instanceof Array) {
			if(val.length === 0) return true
		} else if(val instanceof Object) {
			if(JSON.stringify(val) === '{}') return true
		} else {
			if(val === 'null' || val == null || val === 'undefined' || val === undefined || val === '') return true
			return false
		}
		return false
	}
})(jQuery);
