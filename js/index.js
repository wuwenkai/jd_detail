//二级导航
$('.cate_menu_item').each(function(){
	$(this).mouseenter(function(){//循环绑定鼠标移入事件
		$('.popup').css({'display':'block'});//弹出层显示
		$('.section').eq($(this).index()).show().siblings().hide();//对应的详情页面显示,其他的隐藏
		$(this).addClass('ac').siblings().removeClass('ac');//进入二级导航,对应的一级导航增加对应ac名
		$('.wrap').mouseleave(function(){//鼠标移出事件,做在导航大盒子上
			$('.popup').hide();//弹出层隐藏
			$('.section').hide();//所有详情页隐藏
			$('.cate_menu_item').removeClass('ac');//鼠标移出删除所有一级菜单ac名
		});
	});
});//如果详情页多了,并且在中间会出现弹出错误的问题,最好使用属性来确定
//左侧导航
(function leftNav(){
	var n;
	var _thisTop=($(window).height()-$('.sideNav').eq(0).outerHeight())/2;
	$(window).scroll(function(){
		var s_t=$(window).scrollTop();//滚轮的高度
		if(s_t>$('.sideNav').eq(0).offset().top-_thisTop*2){
			$(".LocationFloorList").show();
			$(".LocationFloorList li").eq(0).addClass("ac");
		}else{
			$(".LocationFloorList").hide();
		};
		$(".sideNav").each(function(i){
			if(s_t>=$(this).offset().top-_thisTop){
				$('.LocationFloorList li').eq(i).addClass('ac').siblings().removeClass("ac");
				n=i;//记录当前楼层对应的编号
			};
		});
	});
	$(".LocationFloorList li").each(function(i,ele){
		$(this).click(function(){
			$("html,body").stop().animate({"scrollTop":$(".sideNav").eq(i).offset().top-_thisTop+"px"},1000);
		});	
	});
	$(".LocationFloorList li").hover(
		function(){
			$(this).addClass('ac').siblings().removeClass('ac');
		},
		function(){
			$(".LocationFloorList li").eq(n).addClass('ac').siblings().removeClass('ac');
		}
	);
})();
//回到顶部
(function(){
	$('.back li').each(function(){
		var _this=$(this);
		$(this).hover(function(){
			_this.find('em').stop().animate({'left':-75},100);
		},function(){
			_this.find('em').stop().animate({'left':40},100);
		});
	});
})();
//点击回到顶部
(function(){
	$('.back .l_6').on('click',function(){
		$("html,body").stop().animate({'scrollTop':0},2000);
	});
})();
/*轮播图*/
(function(e){
	var unslider04=$('#Carousel').unslider({
    dots: true
	}),
	data04 = unslider04.data('unslider');
	$('.unslider-arrow04').click(function() {
	    var fn = this.className.split(' ')[1];
	    data04[fn]();
	});
})();
//游戏
(function(){
	var show=true;
	var timer;
	$('.move').hover(function(){
		if(show){
			timer = setTimeout(function(){
				$('.move').stop().animate({'top':-38},300);
				$('.iconPopup').stop().animate({'top':30},300);
			},500);
			$('.detailed').eq($(this).index()).show().siblings().hide();
		};
	},function(){
		clearTimeout(timer);
		show=true;
	});
	$('.icon').on('mouseleave',function(){
		$('.move').stop().animate({'top':0},300);
		$('.iconPopup').stop().animate({'top':208},300);
	});
	$('.close').on('click',function(){
		$('.move').stop().animate({'top':0},300);
		$('.iconPopup').stop().animate({'top':208},300);
		show=false;
	});
})();
//选项卡
(function(){
	$('.sideNav').each(function(i){
		var aLi=$('.sideNav').eq(i).find('.sideNav_u li');
		var aCon=$('.sideNav').eq(i).find('.con');
		aLi.mouseenter(function(){//鼠标移入事件
			var _index=$(this).index();
			aLi.eq(_index).addClass('active').siblings().removeClass('active');
			aCon.eq(_index).show().siblings('.con').hide();
		})
		$('.sideNav').mouseleave(function(){//在大盒子上做移出事件，能点击对应li的内容
			aLi.eq(0).addClass('active').siblings().removeClass('active');
			aCon.eq(0).show().siblings('.con').hide();
		});
	});
})();
