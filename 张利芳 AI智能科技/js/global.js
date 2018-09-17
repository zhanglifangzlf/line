$(function(){
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop()
		//锚点回到顶部
		$('div.rightNav div.totop').on('click',function(){			
			$('body,html').stop().animate({ scrollTop:0},500);	
		})
		/*$('div.rightNav div.login-pic').on('click',function(){			
			$('body,html').stop().animate({ scrollTop:0},300);	
		})*/
	})

	/*右边固定导航栏*/
	$('div.rightNav li').mouseenter(function(){
		$(this).css('background','rgba(20,32,56,1)')
		$(this).find('div.active').stop().animate({left:'-80px'},400).css('background','rgba(20,32,56,1)')
		$(this).find('img').fadeIn(400)
	})
	$('div.rightNav li').mouseleave(function(){
		$(this).css('background','rgb(36, 46, 71)')
		$(this).find('div.active').stop().animate({left:'0px'},400).css('background','rgb(36, 46, 71)')
		$(this).find('img').fadeOut(400)
	})
	
	// 登录注册
	$(' div.rightNav div.login-pic').on('click',function(){
		$('div.login').show()
		$('div.overlay').show()
	})
	$('div.login div.close').on('click',function(){
		$('div.login').hide()
		$('div.overlay').hide()
	})
	//表单提交
	$('input#submitxx').on('click',function(){
		$('div.login div.tips').html('')
		if($('input#user').val()==''){		
			$('div.login div.tips').text('*请输入手机/邮箱/用户名')
			return false;
		}else if($('input#code').val()==''){
			$('div.login div.tips').text('*请输入密码')
			return false;
		}else{			
			window.location.reload()
		}		
	})
})