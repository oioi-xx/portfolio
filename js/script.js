$(function(){
	var n=0;
	var t=0;
	var containerH=700;
	var moving=false;

	$(".controller li").eq(n).find("a").addClass("on");
	$(".controller li a").click(function(e){
		e.preventDefault();
		n=$(this).parent().index();
		if(n>0){
			t=$(".sub").eq(n-1).offset().top;
		}else{
			t=0;
		}

		$("html, body").stop().animate({scrollTop:t}, 800, function(){
			$(".controller li").find("a").removeClass("on");
			$(".controller li").eq(n).find("a").addClass("on");
		});
	});
	$(".container").mousewheel(function(e, delta){
		if(!moving){
			if(delta > 0){
				// console.log("up");
				if(n > 0){
					n=n-1;
				}
			}else{
				// console.log("down");
				if(n < 5){
					n=n+1;
				}
			}
			// console.log("n : "+n);

			if(n > 0){
				t=$(".sub").eq(n-1).offset().top;
			}else{
				t=0;
			}
			// console.log("t : "+t);

			moving=true;
			$("html, body").stop().animate({scrollTop:t}, 800, function(){
				moving=false;
				$(".controller li").find("a").removeClass("on");
				$(".controller li").eq(n).find("a").addClass("on");
			});
		}
	});
	$(window).resize(function(){
		var h=$(this).height();
		$(".main_area").css({height:h+"px"});
	});

	$(window).trigger("resize");
    
   /* $(function(){
	   $('[data-toggle="tooltip"]').tooltip()
    });*/


});