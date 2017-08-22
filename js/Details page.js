//放大镜
(function(){
	var oSpan=$('.b_pic span');
	$('.b_pic').mousemove(function(ev){
		oSpan.show();
		$('.b_pic_move').show();
		var l=ev.pageX-$(this).offset().left-oSpan.width()/2;
		var t=ev.pageY-$(this).offset().top-oSpan.height()/2;
		if(l<0){
			l=0;
		};
		if(t<0){
			t=0;
		};
		if(l>($(this).width()-oSpan.width())){
			l=$(this).width()-oSpan.width();
		};
		if(t>($(this).height()-oSpan.height())){
			t=$(this).height()-oSpan.height();
		};
		oSpan.css({'left':l,'top':t});
		$('.b_pic_move img').css({'left':-l*3,'top':-t*3});
	});
	$('.b_pic').mouseleave(function(){
		oSpan.hide();
		$('.b_pic_move').hide();
	});
})();
//下方选项卡
(function(){
	$('#nav li').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.commodity').eq($(this).index()).show().siblings('.commodity').hide();
	},function(){
		$('#nav li').eq(1).addClass('active').siblings().removeClass('active');
		$('.commodity').eq(1).show().siblings('.commodity').hide();
	})
})();
//购物车
(function(){
	//购物篮+-点击事件
	var btnVal=$('#num').text();//为什么这里使用val()不能获取
	$('#addBtn').on('click',function(){
		--btnVal;
		if(btnVal<1){
			btnVal=1;
		};
		$('#num').text(btnVal);
	});
	$('#subBtn').on('click',function(){
		++btnVal;
		$('#num').text(btnVal);
	});
})();
(function(){
	//内存版本移入移出事件
	var _index;
	$('.edition .l_2 a').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		//内存版本点击事件
		$('.edition .l_2 a').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			_index=$(this).index();//记录点击的按钮编号
		});
	},function(){
		if(_index!=undefined){
			$('.edition .l_2 a').eq(_index).addClass('active').siblings().removeClass('active');//如果点击了鼠标移出点击的显示红框
		}else{
			$('.edition .l_2 a').eq(0).addClass('active').siblings().removeClass('active');//否则第一个显示红框
		};
	});
})();
(function(){
	//手机颜色移入移出事件
	var _index;
	$('.edition .l_1 a').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.edition .l_1 a').on('click',function(){
			$(this).addClass('active');
			_index=$(this).index();//记录点击的按钮编号
			$('.tabPic .tabImg').eq(_index).show().siblings('.tabImg').hide();//左边下方对应的图片显示
			$('.page1 .icon').eq(_index).show().siblings('.icon').hide();//更换放大镜图片
		});
	},function(){
		if(_index!=undefined){
			$('.edition .l_1 a').eq(_index).addClass('active').siblings().removeClass('active');//如果点击了鼠标移出点击的显示红框
		}else{
			$('.edition .l_1 a').eq(2).addClass('active').siblings().removeClass('active');//否则第一个显示红框
		};
	});
	$('.tabPic .tabImg li').on('mouseenter',function(){//启用事件监听
		if(_index!=undefined){//如果选择版本，运行这个小图片移入事件
			$(this).addClass('active').siblings().removeClass('active');//对应的小图片增加class
			$('.page1 .icon:eq('+_index+') .b_pic img').eq($(this).index()).show().siblings().hide();//对应的放大镜小图显示
			$('.page1 .icon:eq('+_index+') .b_pic_move img').eq($(this).index()).show().siblings().hide();//对应的放大镜大图显示
			$('.page1 .content').mouseleave(function(){//鼠标移出放大镜图片和小图复原
				$('.tabPic .tabImg:eq('+_index+') li').eq(0).addClass('active').siblings().removeClass('active');
				$('.page1 .icon:eq('+_index+') .b_pic img').eq(0).show().siblings().hide();
				$('.page1 .icon:eq('+_index+') .b_pic_move img').eq(0).show().siblings().hide();
			});
		}else{
			$(this).addClass('active').siblings().removeClass('active');
			$('.page1 .icon:eq(2) .b_pic img').eq($(this).index()).show().siblings().hide();//对应的放大镜小图显示
			$('.page1 .icon:eq(2) .b_pic_move img').eq($(this).index()).show().siblings().hide();//对应的放大镜大图显示
			$('.page1 .content').mouseleave(function(){//鼠标移出放大镜图片和小图复原
				$('.tabPic .tabImg:eq(2) li').eq(0).addClass('active').siblings().removeClass('active');
				$('.page1 .icon:eq(2) .b_pic img').eq(0).show().siblings().hide();
				$('.page1 .icon:eq(2) .b_pic_move img').eq(0).show().siblings().hide();
			});
		};
	});
})();
//累计评价
(function(){
	var a_val=$('.evaluate a').text();
	var n=parseInt(a_val);
	$('.evaluate a').on('click',function(){
		++n;
		$('.evaluate a').text(n+'+');
	});
})();
//增值
(function(){
	var _this;
	$('.edition .l_3 .option').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');//点击增加class
		_this=$(this);
	});
	$('.edition .l_3 .option').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');//移入增加class,兄弟删除class
	},function(){
		if(_this==undefined){
			$('.edition .l_3 .option').removeClass('active');//如果没有点击,全部删除class
		}else{
			_this.addClass('active').siblings().removeClass('active');//如果点击,点击的那个增加class.其他删除class
		};
	});
})();
//白条
(function(){
	var _this;
	$('.edition .l_4 a').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');//点击增加class
		_this=$(this);
	});
	$('.edition .l_4 a').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');//移入增加class,兄弟删除class
	},function(){
		if(_this==undefined){
			$('.edition .l_4 a').removeClass('active');//如果没有点击,全部删除class
		}else{
			_this.addClass('active').siblings().removeClass('active');//如果点击,点击的那个增加class.其他删除class
		};
	});
})();