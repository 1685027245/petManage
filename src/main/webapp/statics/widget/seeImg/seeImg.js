
$.seeImg=function imgShow(outerdiv, innerdiv, bigimg, _this){
        var src = _this.attr("src");//获取当前点击的pimg元素中的src属性
        $(bigimg).attr("src", src);//设置#bigimg元素的src属性
        var imageSize = getImageSize(_this);/*获取当前点击图片的真实大小，这里我封装了一个函数，返回一个数组*/
        var windowW = $(window).width();//获取当前窗口宽度
        var windowH = $(window).height();//获取当前窗口高度
        var realWidth = imageSize[0];//获取图片真实宽度
        var realHeight = imageSize[1];//获取图片真实高度
       /* var realWidth = 600;//获取图片真实宽度
        var realHeight = 400;//获取图片真实高度*/
        if(realWidth>600){
            realWidth = 600
        }
        if(realHeight>500){
            realHeight = 500
        }

        var imgWidth, imgHeight;
        var scale = 0.8;//缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放
        if(realHeight>windowH*scale) {//判断图片高度
            imgHeight = windowH*scale;//如大于窗口高度，图片高度进行缩放
            imgWidth = imgHeight/realHeight*realWidth;//等比例缩放宽度
            if(imgWidth>windowW*scale) {//如宽度扔大于窗口宽度
                imgWidth = windowW*scale;//再对宽度进行缩放
            }
        } else if(realWidth>windowW*scale) {//如图片高度合适，判断图片宽度
            imgWidth = windowW*scale;//如大于窗口宽度，图片宽度进行缩放
            imgHeight = imgWidth/realWidth*realHeight;//等比例缩放高度
        } else {//如果图片真实高度和宽度都符合要求，高宽不变
            imgWidth = realWidth;
            imgHeight = realHeight;
        }
        $(bigimg).css("width",imgWidth);//以最终的宽度对图片缩放
        $(bigimg).css("max-height","400px");//以最终的宽度对图片缩放
        var w = (windowW-imgWidth)/2;//计算图片与窗口左边距
        /*var h = (windowH-imgHeight)/5;*///计算图片与窗口上边距
        $(innerdiv).css({"top":"25%", "left":w});//设置#innerdiv的top和left属性
        $(outerdiv).fadeIn("fast");//淡入显示#outerdiv及.pimg

        $(outerdiv).click(function(){//再次点击淡出消失弹出层
            $(this).fadeOut("fast");
        });
    }
    function getImageSize(imgE){
        var i = new Image(); //新建一个图片对象
        var src=imgE.attr('src');
        i.src=src;//将图片的src属性赋值给新建的图片对象的src
        return new Array(i.width,i.height);
    }