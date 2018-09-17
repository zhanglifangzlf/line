$(function(){
	$('div.main div.left').animate({left:'5%'},800)
	$('div.main div.right').animate({bottom:'0.5%'},800)
	$('div.main div.right li').mouseenter(function(){
		$(this).find('div.title').stop().animate({left:'25px'},400)
	}).mouseleave(function(){
		$(this).find('div.title').stop().animate({left:'10px'},400)
	})
	
})