$(window).load(function(){
	resultD = 0;
	stepD = 1;
	
	$(".landing-section,.start-section").one("click",function(){
		stepD++
		$(".step-btn").attr("data-src",stepD)
		$(".step-btn").html(stepD)		
		$(".section-block").removeClass("active")
		$(".section-"+stepD).addClass("active")
	
	})
	
	$(".correct-anw").each(function(){
		$(this).one("click",function(){
			resultD++;
			$(".data-result").attr("data-src",resultD)
			$(".data-result").html(resultD)
			$(".quiz").fadeOut()
			$(this).parent().parent().find(".true").addClass("active")
			

		})
	})
	
	$(".wrong-anw").each(function(){
		$(this).one("click",function(){
			$(".data-result").attr("data-src",resultD)
			$(".data-result").html(resultD)
			$(".quiz").fadeOut()
			$(this).parent().parent().find(".false").addClass("active")			

		})
	})




	$(".false").each(function(){
		$(this).on("click",function(){
		if($(this).hasClass("active")){
				stepD++
				$(".step-btn").attr("data-src",stepD)
				$(".step-btn").html(stepD)
				$(".section-block").removeClass("active")
				$(".section-"+stepD).addClass("active")	
		}
		})
	})

	$(".true").each(function(){
		$(this).on("click",function(){
		if($(this).hasClass("active")){
				stepD++
				$(".step-btn").attr("data-src",stepD)
				$(".step-btn").html(stepD)
				$(".section-block").removeClass("active")
				$(".section-"+stepD).addClass("active")	
		}
		})
	})
$(".anw-btn").on({
    mouseenter: function () {
	    dataSrc = $(this).attr("data-src")
        $(this).parent().find(".hover-btn").css("background-image", "url("+dataSrc+")");
        $(".hover-btn").addClass("active")
    },
    mouseleave: function () {
        $(this).parent().find(".hover-btn").css("background-image", "none");
        $(".hover-btn").removeClass("active")
    }
});

$(".next-btn").on({
    mouseenter: function () {
	    dataSrc = $(this).attr("data-src")
        $(this).parent().find(".hover-btn").css("background-image", "url("+dataSrc+")");
        $(".hover-btn").addClass("active")
    },
    mouseleave: function () {
        $(this).parent().find(".hover-btn").css("background-image", "none");
        $(".hover-btn").removeClass("active")
    }
});

$(".first-btn").on({
    mouseenter: function () {
	    dataSrc = $(this).attr("data-src")
        $(this).parent().find(".hover-btn").css("background-image", "url("+dataSrc+")");
        $(".hover-btn").addClass("active")
    },
    mouseleave: function () {
        $(this).parent().find(".hover-btn").css("background-image", "none");
        $(".hover-btn").removeClass("active")
    }
});

	
	$(".result-btn").on("click",function(){
		
		
		
	if(resultD < 1 ){
		$(".result1").addClass("active")
	}else if(resultD > 0 &&  resultD < 3){
		$(".result2").addClass("active")
	}else if(resultD > 2 &&  resultD < 5){
		$(".result3").addClass("active")
	}else if(resultD > 4 &&  resultD < 7){
		$(".result4").addClass("active")
	}
	
	
	})
	
	$(".result-screen").on("click",function(){
		window.location.href = "index.html";
	})
$(document).mousemove(function(e) {
    window.x = e.pageX;
    window.y = e.pageY;
    $(".center-img").css("left", x * .02);

});

	
})