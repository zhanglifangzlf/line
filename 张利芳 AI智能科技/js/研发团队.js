$(function(){
	$('div.main div.team').eq(0).animate({left:'5%'},400)
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop()
		if(scrollTop>100){
			$('div.main div.team').eq(1).animate({left:'5%'},400)
		}
		if(scrollTop>400){
			$('div.main div.team').eq(2).animate({left:'5%'},400)
		}
		if(scrollTop>800){
			$('div.main div.team').eq(3).animate({left:'5%'},400)
		}
	})
	$('div.main div.team').mouseenter(function(){
		$(this).find('div.mask').stop().animate({height:'100%'},300)
		$(this).find('div.line').stop().animate({width:'60px'},300)
		$(this).find('h4').stop().animate({left:'90px'},300)
	}).mouseleave(function(){
		$(this).find('div.mask').stop().animate({height:0},200)
		$(this).find('div.line').stop().animate({width:'0px'},300)
		$(this).find('h4').stop().animate({left:'0px'},300)
	})
})