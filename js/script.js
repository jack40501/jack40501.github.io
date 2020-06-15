$(function () {
	$("#s4 button").click(function () {
		var target = $(this).attr("value");
		$("#Products div").each(function () {
			$(this).animate({ opacity: 0 }, 300, function () {
				$(this).hide();
				if ($(this).hasClass(target) || target == "all") $(this).show();

				$(this).animate({ opacity: 1 }, 300);
			});
		});
	});
});
$(function () {
	var h = 0;
	var w = 0;
	var s4h = 0;
	$("#Products .menu-card").each(function () {
		if ($(this).height() > h) {
			h = $(this).height();
		}
	});
	$("#Products .menu-card").css("height", h + "px");

	$("#s4 button").each(function () {
		if ($(this).width() > w) {
			w = $(this).width();
		}
	});
	$("#s4 button").css("width", w + 50 + "px");

});
$(function () {
	$("#s0 img").removeClass("img");

	$("#s0 li a").click(function () {
		if (!$(this).hasClass("current")) {


			$("#s0 img").attr("src", $(this).attr("href"));

			$("#s0 img").fadeOut(500);
			$("#s0 img").fadeIn(500);

			$(".current").removeClass("current");
			$(this).addClass("current");
		}
		return false;

	});
});

$(window).scroll(function () {
	if ($(window).scrollTop() >= 300) {
		$("nav").addClass("navbg");
	} else {
		$("nav").removeClass("navbg");
	}
});
$(function () {
	$(".toggle").click(function () {
		$(".nav-a").slideToggle(200);
	});
	$(".nav-a a").click(function () {
		$(".nav-a").slideToggle(200);
	});
});
$(function () {
	$("#Products a").click(function () {

		document.getElementById('shop1').innerHTML = '<img src=' + $("#Products div img").attr("src") + " class='products-img'>"

		$("#shop1").addClass('shopsection')
		$("#shop1").animate({ bottom: 100 }, 800, function () {
			//callback
		});
		return false;
	});

	$(function () {
		var mh = 0
		$("#Products a").hover(function () {
			$(this).append("<div class='imghover'><p>" + $(this).children("img").attr("alt") + "</p></div>");
			$(this).children("div").stop().fadeIn(300);
			$(".menu-card-1 ").each(function () {
				if ($(".menu-card-1 ").height() > mh) {
					mh = $(".menu-card-1 ").height();

				}
				$("#Products .imghover").css("height", mh + "px");
				$("#Products .imghover p").css("line-height", mh + "px")


			});
			$(this).children("div").children("p").stop().animate({ "top": 0 }, 300);
		}, function () {
			$(this).children("div").stop().fadeOut(300);
			$(this).children("div").children("p").stop().animate({ "top": "0px" }, 300, function () {
				$(this).parent("div").remove();
			});
		});
	});
});
/*   $(function () {
$(".toggle").click(function () {


$(this).addClass("a1")


if ($(this).hasClass("a1")) {
$(".nav-a").show(200);
$(this).addClass("a2")
return;

}
if ($(this).hasClass("a2")) {


$(".nav-a").hide(200);
$(this).removeClass("a1")


}

});*/



/*   $(function () {
$("#Products a").click(function () {
$("body").append('<div id="bg">');
$("body").append('<div id="photo">');

$("#bg").hide();
$("#photo").hide();

$("#photo").html("<img>");
$("#photo img").attr("src", $(this).attr("href"));

$("#photo img").attr("width", 400);
$("#photo img").attr("height", 400);
$("#photo img").attr("alt", "photo");
$("#photo img").attr("background", "white")

$("#bg").fadeIn();
$("#photo").fadeIn();

$("#bg").click(function () {
$(this).fadeOut(function () {
$(this).remove();
});
$("#photo").fadeOut(function () {
$(this).remove();
});
});


return false;
});
});*/