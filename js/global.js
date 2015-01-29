/**************************************************
	
	Global
	
	Coded by Park.C.Y. & Kim.N.Y.
	
**************************************************/
//Align elements
function alignElements_func(type,parent,element){
	if($(element).length<1){
		return;
	}
	if(type=='x'){
		var prtWidth = $(parent).width();
		var eleWidth = $(element).width();
		$(element).css({
			'left':(prtWidth/2)-(eleWidth/2)
		});
	}else if(type=='y'){
		var prtHeight = $(parent).height();
		var eleHeight = $(element).height();
		$(element).css({
			'top':(prtHeight/2)-(eleHeight/2)
		});
	}
}



//Top banner
$(window).load(function(){
	alignElements_func('y','#top_banner','#top_banner .close');
	$('#top_banner .close').click(function(e){
		e.preventDefault();
		$('#top_banner').hide();
	});
});
$(window).resize(function(){
	alignElements_func('y','#top_banner','#top_banner .close');
});

//Section Navagator
$(window).load(function(){
	alignElements_func('x',window,'.slidesjs-pagination');
});
$(window).resize(function(){
	alignElements_func('x',window,'.slidesjs-pagination');
});

//Sorting Bar
function sortingBar_resizing(){
	var $slt = $('.__sortingBar select.slt');
	var windowWidth = $(window).width();
	var btnWidth = 90;
	$slt.css({
		'width':windowWidth-btnWidth
	});
}
$(window).load(sortingBar_resizing);
$(window).resize(sortingBar_resizing);

//Count range
$(document).ready(function(){
	$('.__count_range input[count_range]').click(function(e){
		e.preventDefault();
		var type = $(this).attr('count_range');
		var $count = $(this).parent().children('input.count');
		var count_val = $count.val(); // 1
		if(type=='m'){
			if(count_val<1){
				return;
			}
			$count.val(parseInt(count_val)-1);
		}else if(type=='p'){
			$count.val(parseInt(count_val)+1);
		}
	});
});

//checkbox style
$(document).ready(function(){
	$('input[type=checkbox]').each(function(){
		if($(this).is(':checked')==true){
			$(this).parent('label.__checkboxArea').addClass('active');
		}else{
			$(this).parent('label.__checkboxArea').removeClass('active');
		}
	});
	$(document).on('click','input[type=checkbox]',function(){
		if($(this).is(':checked')==true){
			$(this).parent('label.__checkboxArea').addClass('active');
		}else{
			$(this).parent('label.__checkboxArea').removeClass('active');
		}
	});
});

//radio style
$(document).ready(function(){
	$('input[type=radio]').each(function(){
		if($(this).is(':checked')==true){
			$(this).parent('label.__radioArea').addClass('active');
		}else{
			$(this).parent('label.__radioArea').removeClass('active');
		}
	});
	$(document).on('click','input[type=radio]',function(){
		var radio_name = $(this).attr('name');
		$('input[type=radio][name='+radio_name+']').parent('label.__radioArea').removeClass('active');
		if($(this).is(':checked')==true){
			$(this).parent('label.__radioArea').addClass('active');
		}else{
			$(this).parent('label.__radioArea').removeClass('active');
		}
	});
});

//tab scrolling
$(document).ready(function(){
	if($('.__tab_sliding').length>0){
		$('.__tab_sliding').touchSlider({
			mode : 'index',
			single : true,
			prevLink : $(".__tab_sliding a.l_btn"),
			nextLink : $(".__tab_sliding a.r_btn")
		});
	}
});

//customer list toggle
$(document).ready(function(){
	$('.__customer_list > li > a').attr('toggle','off');
	$('.__customer_list > li > a').click(function(a){
		a.preventDefault();
		$('.__customer_list p.text').hide();
		if($(this).attr('toggle')=='off'){
			$('p.text',$(this).parent()).slideDown();
			$('.__customer_list > li > a').attr('toggle','off').removeClass('active');
			$(this).attr('toggle','on').addClass('active');
		}else{
			$('p.text',$(this).parent()).hide();
			$(this).attr('toggle','off').removeClass('active');
		}
	});
});

/**************************************************
	main
**************************************************/
//main visual rolling
$(document).ready(function(){
	$('#main .visual .imgs').slidesjs({
		width:$(window).width(),
		height:$(window).width()/1.98,
		navigation:false
	});
});

//hot brand rolling
$(document).ready(function(){
	$('#main .hotBrand .item_container').slidesjs({
		width:$(window).width(),
		height:$(window).width()/1.55,
		navigation:false,
		pagination:false
	});
});

/**************************************************
	brand
**************************************************/
$(document).ready(function(){
	$('#brand .hotBrand > div').show();		
	$('#brand .hotBrand > h4').click(function(){
		$(this).next('.item').slideToggle('fast');
		$(this).css({
			'border-bottom':'1px solid #bababa'
		});
		$(this).toggleClass('btn_up');		
	});
});

/**************************************************
	itemView
**************************************************/
//brands good rolling 
$(document).ready(function(){
	$('#itemView .brandsGood .item_container').slidesjs({
		width:$(window).width(),
		height:$(window).width()/2.0,
		navigation:false
	});
});

/**************************************************
	edit_card
**************************************************/
$(document).ready(function(){
	$('#edit_card .cards > li > a').click(function(e){
		e.preventDefault();
		$('#edit_card .cards > li').removeClass('active');
		$(this).parent('li').addClass('active');
	});
});

/**************************************************
	buy_product
**************************************************/
//Toggle menu
$(document).ready(function(){
	$('#buy_product ul[toggleBtns] > li').click(function(e){
		e.preventDefault();
		$('#buy_product ul[toggleBtns] >  li').removeClass('active');
		$(this).addClass('active');
		$('#buy_product span[toggle]').hide();
		$('#buy_product span[toggle='+$(this).attr('toggle')+']').show();
	});
});

