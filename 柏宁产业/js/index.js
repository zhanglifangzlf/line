$(function(){
	//缩小导航栏
	$('.noneNav .nav img').click(function(){
		$('.asideNav').height(innerHeight)
		$('.mask').fadeIn();
		$('.asideNav').fadeIn()
	})
	$('.mask').click(function(){
		$('.mask').fadeOut()
		$('.asideNav').fadeOut()
	})
	//轮播图随屏幕大小改变，margin-left改变 
	if($(window).width()>0&&$(window).width()<770) {
		$('header .background ul li img').css('margin-left',-(840-$(window).width())*0.5+'px')
	}
	$(window).resize(function(){	   
		if($(window).width()>0&&$(window).width()<770) {
			$('header .background ul li img').css('margin-left',-(840-$(window).width())*0.5+'px')
		} else{
			$('header .background ul li img').css('margin-left','0')
		}    
    });
	//吸顶导航
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop>100){
			$('div.db').fadeIn();
			$('div.db').click(function(){
				$('body,html').stop().animate({'scrollTop':'0'},500)
			})			
			if($(window).width()>1050) {
				$('nav .logonone').css('float','left').show()
			}
			$('nav').css({'position':'fixed','top':'0px','width':'100%','z-index':'100','background':'white'})
		}else{
			if($(window).width()>0&&$(window).width()<1050) {
				$('nav .logonone').css('float','left').hide()
			}
			$('nav').stop().css({'position':'static'});
		}
		if(scrollTop==0){
			$('nav .logonone').css('float','left').hide()
		}
		if(scrollTop<100){
			$('div.db').fadeOut();
		}
	})
	//轮播图
	var index=0;
	var timer = setInterval(fun,5000);
	function fun(){	
		if(index<2){				
			$('header .background li').eq(index).show().siblings().hide();
			index++;
		}else{
			index=0
		}
	}
})