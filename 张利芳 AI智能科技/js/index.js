
$(function(){
	/*轮播图*/
	var index=0;
	var num=1;
	$('div.head div.background li').eq(index).find('div.f1-1').css('top','-100px').animate({top:'50px'},400)
	$('div.head div.background li').eq(index).find('div.f1-2').css('left','-500px').delay(400).animate({left:'0px'},400)
	$('div.head div.background li').eq(index).find('div.f1-4').css('right','-1000px').delay(400).animate({right:'0px',top:'-180px'},400)
	$('div.head div.background li').eq(index).find('div.f1-3').css('bottom','-100px').delay(800).animate({bottom:'100px'},400)
	function run(){
		$('div.head div.background div.dot').eq(num).css('background','rgb(93, 223, 254)').siblings().css('background','#fff');
		num++;
		if(num==3){num=0}	
		if($('div.head div.background li').eq(index).next().length == 0){
			$('div.head div.background li').first().show();
			$('div.head div.background li').last().hide();
			index = 0;
		}else{
			$('div.head div.background li').eq(index).hide().next().show();		
			$('div.head div.background li').eq(index).next().siblings().hide()	
			index++;
		}
		$('div.head div.background li').eq(index).find('div.f1-1').css('top','-100px').animate({top:'50px'},400)
		$('div.head div.background li').eq(index).find('div.f1-2').css('left','-500px').delay(500).animate({left:'0px'},400)
		$('div.head div.background li').eq(index).find('div.f1-3').css('bottom','-70px').delay(900).animate({bottom:'130px'},400)
		$('div.head div.background li').eq(0).find('div.f1-4').css('right','-2000px').delay(500).animate({right:'0px',top:'-180px'},600)
		$('div.head div.background li').eq(1).find('div.f1-4').css('right','-2000px').delay(500).animate({right:'-110px',top:'-70px'},600)
		$('div.head div.background li').eq(2).find('div.f1-4').css('right','-2000px').delay(500).animate({right:'-200px',top:'-30px'},600)
	}
	var timer=setInterval(run,12000)
	$('div.head div.background div.dot').mouseenter(function(){
		clearInterval(timer);
		var sub=$(this).index();
		index=sub-1;
		if(sub==0){
			$('div.head div.background li').eq(sub).show().siblings().hide()	
		}
		index=sub-1;
		num=sub;
		run()
	}).mouseleave(function(){
		timer=setInterval(run,12000)
	})

	//所有滚动条事件 
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop()
		/*主体内容 最新动态*/
		if(scrollTop>550){
			$('div.main div.bottom li:nth-child(1)').animate({'bottom':'0px'},800)
			$('div.main div.bottom li:nth-child(2)').delay(150).animate({'bottom':'0px'},800)
			$('div.main div.bottom li:nth-child(3)').delay(300).animate({'bottom':'0px'},800)
		}
		// 主体内容 行内新闻中的数据
		if(scrollTop>1400){
			$('div.mainMiddle div.bottom').animate({'bottom':'5px'},800)
			$('div.mainMiddle div.bottom div.info div').animate({'bottom':'25px'},800)
		}
		//主题内容中的研发团队
		if(scrollTop>2200){
			$('div.main div.teams li:nth-child(1)').animate({'bottom':'0px'},800)
			$('div.main div.teams li:nth-child(2)').delay(150).animate({'bottom':'0px'},800)
			$('div.main div.teams li:nth-child(3)').delay(300).animate({'bottom':'0px'},800)
			$('div.main div.teams li:nth-child(4)').delay(500).animate({'bottom':'0px'},800)
		}	
	})
	//主体内容  第一部分最新动态 
	$('div.mainTop div.bottom li').mouseenter(function(){
		$(this).find('div.word').animate({'bottom':'80px'},300)
		$(this).find('div.link').animate({'left':'310px'},300)
		$(this).find('div.mask').css('opacity',1)
	}).mouseleave(function(){
		$(this).find('div.mask').css('opacity',0)
		$(this).find('div.word').stop(true).animate({'bottom':'55px'},300)
		$(this).find('div.link').stop(true).animate({'left':'400px'},300)
	})

	/*主体内容 第二部分行内新闻*/
	//左边
	$('div.mainMiddle div.left').hover(function(){	
		$(this).find('div.line').stop().animate({width:'63px'}, 400)
		$(this).find('div.word').stop().animate({left:'105px'}, 400)
	}, function(){
		$(this).find('div.line').stop().animate({width:'0px'}, 400)
		$(this).find('div.word').stop().animate({left:'47px'}, 400)
    })
    //右边
    $('div.mainMiddle div.right li').mouseenter(function(){	
		$(this).find('div.word').stop().animate({left:'168px'}, 400)
	}).mouseleave(function(){
		$(this).find('div.word').stop().animate({left:'186px'}, 400)
	})
	


	//主体内容
	/*$('div.mainBottom div.teams li').mouseenter(function(){	
		$(this).find('div.frame').stop().animate({width:'90%',height:'95%',top:'2px',left:'3px'},300)
	}).mouseleave(function(){
		// $(this).find('div.frame').stop().animate({width:'101%',height:'105%'},300)

	})*/	
})

