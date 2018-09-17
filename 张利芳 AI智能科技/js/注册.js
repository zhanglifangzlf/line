$(function(){
	var user_flag=false;
	var pass_flag=false;
	var confirm_flag=false;
	var phone_flag=false;
	//用户名聚焦失焦事件
	$('input#user').focusout(function(){
		if($(this).val()==''){
			$('div.tips').find('p.tips1').text('* 用户名不能为空').css('color','red')
			user_flag=false;
		}else{
			var pattern = /^\w{6,}$/;
			if(pattern.test(this.value)){
				$('div.tips').find('p.tips1').text('√').css('color','green');
				user_flag=true;
			}else{
				$('div.tips').find('p.tips1').text('× 用户名不符合规范').css('color','red');
				user_flag=false;
			}
		}
	}).focusin(function(){
		$('div.tips').find('p.tips1').text('由六位以上的数字、字母、下划线组成').css('color','#888')
	})
	//设置密码聚焦失焦事件
	$('input#setcode').focusout(function(){
		if($(this).val()==''){
			$('div.tips').find('p.tips2').text('× 密码不能为空').css('color','red');
			pass_flag=false;
		}else{
			var pattern = /^\w{6,}$/;
			if(pattern.test(this.value)){
				$('div.tips').find('p.tips2').text('√').css('color','green');
				pass_flag=true;
			}else{
				$('div.tips').find('p.tips2').text('*密码不能少于6位字符').css('color','red');
				pass_flag=false;
			}
		}
	}).focusin(function(){
		$('div.tips').find('p.tips2').text('长度为6-16位，建议由字母、数字或符号组合，区分大小写。').css('color','#888')
	})
	//确定密码聚焦失焦
	$('input#confirm').focusout(function(){
		if($('input#setcode').val()!=$('input#confirm').val()){
			$('div.tips').find('p.tips3').text('× 两次输入的密码不一致').css('color','red')
			confirm_flag=false;
		}else if($('input#setcode').val()==''){
			$('div.tips').find('p.tips3').text('× 两次输入的密码不一致').css('color','red')
			confirm_flag=false;
		}else{
			$('div.tips').find('p.tips3').text('√').css('color','green');
			confirm_flag=true;
		}
	}).focusin(function(){
		$('div.tips').find('p.tips3').text('请再次输入密码').css('color','#888')
	})
	//手机号失焦聚焦
	$('input#phonenumber').focusout(function(){
		if($(this).val()==''){
			$('div.tips').find('p.tips4').text('* 手机号不能为空').css('color','red');
			phone_flag=false;
		}else{
			var pattern = /^\d{11,}$/;
			if(pattern.test(this.value)){
				$('div.tips').find('p.tips4').text('√').css('color','green');
				phone_flag=true;
			}else{
				$('div.tips').find('p.tips4').text('× 手机号码不正确').css('color','red');
				phone_flag=false;
			}
		}
	}).focusin(function(){
		$('div.tips').find('p.tips3').text('请再次输入密码').css('color','#888')
	})	
	//判断是否提交
	$('input#register').on('click',function(){
		if(user_flag&&pass_flag&&confirm_flag&&phone_flag){
			$(window).attr('location','index.html')
		}else if(user_flag==false){
			$('div.tips').find('p.tips1').text('× 用户名不正确').css('color','red');
			return false;
		}else if(pass_flag==false){
			$('div.tips').find('p.tips2').text('× 密码不正确').css('color','red');
			return false;
		}else if(confirm_flag==false){
			$('div.tips').find('p.tips3').text('× 两次输入的密码不一致').css('color','red');
			return false;
		}else if(phone_flag==false){
			$('div.tips').find('p.tips4').text('× 手机号码不正确').css('color','red');
			return false;
		}
	})
		
})