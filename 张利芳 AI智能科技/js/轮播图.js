$(function(){
	var index=0;
	$('div.head div.background li').eq(index).find('div.f1-1').css('top','-100px').animate({top:'50px'},400)
	$('div.head div.background li').eq(index).find('div.f1-2').css('left','-500px').delay(400).animate({left:'0px'},400)
	$('div.head div.background li').eq(index).find('div.f1-4').css('right','-1000px').delay(400).animate({right:'58px'},400)
	$('div.head div.background li').eq(index).find('div.f1-3').css('bottom','-100px').delay(800).animate({bottom:'100px'},400)
	function run(){
		console.log(111)
		if($('div.head div.background li').eq(index).next().length == 0){
			$('div.head div.background li').first().show();
			$('div.head div.background li').last().hide();
			index = 0;
		}else{
			$('div.head div.background li').eq(index).hide().next().show();
			index++;
		}
		$('div.head div.background li').eq(index).find('div.f1-1').css('top','-100px').animate({top:'50px'},400)
		$('div.head div.background li').eq(index).find('div.f1-2').css('left','-500px').delay(500).animate({left:'0px'},400)
		$('div.head div.background li').eq(index).find('div.f1-3').css('bottom','-100px').delay(900).animate({bottom:'100px'},400)
		$('div.head div.background li').eq(0).find('div.f1-4').css('right','-500px').delay(500).animate({right:'58px'},400)
		$('div.head div.background li').eq(1).find('div.f1-4').css('right','-500px').delay(500).animate({right:'88px'},400)
		$('div.head div.background li').eq(2).find('div.f1-4').css('right','-2000px').delay(500).animate({right:'0px',top:'-180px'},600)
		$('div.head div.background li').eq(3).find('div.f1-4').css('right','-2000px').delay(500).animate({right:'-110px',top:'-70px'},600)
		$('div.head div.background li').eq(4).find('div.f1-4').css('right','-2000px').delay(500).animate({right:'-166px'},600)
	}
	var timer=setInterval(run,6000)
})