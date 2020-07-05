$(function () {
    $(".btnclick button").click(function () {
        var target = $(this).attr("value");
        $(".menu-card").each(function () {
            $(this).animate({ opacity: 0 }, 300, function () {
                $(this).hide();
                if ($(this).hasClass(target) || target == "all") $(this).show();

                $(this).animate({ opacity: 1 }, 300);
            });
        });
    });
});

$(document).ready(function () {

    $(".nav-a a").click(function () {
        var targetId = $(this).attr("href");
        var linkScroll = $(targetId).offset().top;

        $("html,body").animate({
            scrollTop: linkScroll
        }, 1000);
        $(".togglenav-2").slideToggle(300)

        $(".toggle").toggleClass("toggleopen")

    });

});


$(function () {
    var h = 0;
    var w = 0;
    var s3h = 0;
    var shoph = 0;
    $("#Products .menu-card").each(function () {
        if ($(this).height() > h) {
            h = $(this).height();
        }
    });
    $("#Products .menu-card").css("height", h + "px");

    $("#s3 button").each(function () {
        if ($(this).width() > w) {
            w = $(this).width();
        }
    });
    $("#s3 button").css("width", w + 50 + "px");

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
$(function () {
    $("td a").click(function () {

        document.getElementById('new').innerHTML = '<div class="col-12">' + "<button id='productsbtn'>" + "X" + "</button>" + '</div>' + '<div class="col-md-6">' + '<img src="">' + '</div>' + '<div class="col-md-6"><h2></h2><br><h4></h4><br><h5></h5></div>'

        var tdimg = $(this).attr("name")
        var title = $(this).attr("title")
        var newp = $(this).attr("alt")
        var time = $(this).attr("value")
        $("#new img").attr("src", "img/文宣/" + tdimg + ".png")
        $("#new .col-12").css("background", "#B3967B")
        $("#new h2").append(title)
        $("#new h4").append(time)
        $("html,body").addClass("over")
        $("#new h5").append(newp)
        $("#new").addClass('newsection')
        $("#new").animate({ bottom: 50 }, 800, function () {

        });
        return false;
    });
});

$(function () {
    var sh = 0
    $("#Products a").click(function () {
        $("#cart").animate({ left: -100 + "%" }, 1000, function () {
        });
        document.getElementById('shop1').innerHTML =
            '<form id="from" name="form" class="row"><div class="col-12 Productstitle">' + "<button id='productsbtn'>" + "X" + "</button>" + '</div>' + '<div class="col-md-5">' + '<img src="" class="products-img">' + '</div>' + '<div class="col-md-7 shopcontent"><h1></h1><h2></h2><h3></h3><h6></h6><h7></h7><h4></h4><h5 id="pppp"></h5><p></p></div>' + '<div class="col-12 menubtndiv"><button class="menubtn" id="mbtn">加入購物車</button></form>'
        var iages = $($(this).children("img")).attr("name")
        var title = $(this).attr("title")
        var shopp = $(this).attr("content")
        var money = $(this).attr("value")
        var contain = $(this).attr("contain")
        $('#siz').on('change', function () {

            var country = form.ooo.value;
            document.getElementById("pppp").innerHTML = country

        });
        $("#shop1").css("z-index", "10")
        if ($($(this)).parentsUntil("menu-card").hasClass("cream")) {
            $("#shop1 h7").append("保存方式：冷藏保存最長2日，室溫建議不超過1小時").css("font-size", "1.3rem")
        } else {
            $("#shop1 h7").css("display", "none")
        }

        if ($($(this)).parentsUntil("menu-card").hasClass("cake")) {
            $("#shop1 h6").append("尺寸：9吋(建議人數：10~12人)").css("font-size", "1.3rem")
        } else {
            $("#shop1 h6").css("display", "none")
        }
        $("#shop1 h2").append("品名：" + title).css("font-size", "1.2rem").attr("value", title)
        $("#shop1 h3").append("內含物：" + contain).css("font-size", "1.2rem")
        $("#shop1 h5").append("價格：" + "$" + money).css("font-size", "1.2rem")
        $("#shop1 h5").attr("value", money)
        $("html,body").addClass("over")
        $(".Productstitle").css("background", "#B3967B")
        $("#from").css("margin", 0, "px")
        $(".shopcontent").css("padding-top", 0, "px")

        $("#shop1 p").append(shopp).css("font-size", "1.2rem")
        $($("#shop1 img").attr("src", "img/去背/" + iages + ".png").attr("value", iages))

        /*$("#shop1").each(function () {
            if ($("#shop1").height() > sh) {
                sh = $("#shop1 ").height();
 
            }
            $("#shop1").css("height", sh + 100 + "px")
 
        });*/

        $("#shop1").addClass('shopsection').css("padding-bottom", 200, "px")
        $("#shop1").animate({ bottom: 0 }, 800, function () {
            //callback
        });
        return false;

    });
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


$(window).scroll(function () {
    if ($(window).scrollTop() >= 500) {
        $("nav").addClass("navbg");
        $(".toggle").show(500)
    } else {
        $("nav").removeClass("navbg");
        $(".toggle").hide(500)
    }
});

$(function () {



    if ($(".toggleopen div span").hasClass("togglewhite")) {

        $(".toggle").click(function () {
            // $(".nav-a").slideToggle(200);
            $(this).toggleClass("toggleopen")

            $(".togglenav-2").slideToggle(300).css("opacity", "1")
        });
    }
    else {
        $(".toggle").click(function () {
            // $(".nav-a").slideToggle(200);
            $(this).toggleClass("toggleopen")

            $(".togglenav-2").slideToggle(300).css("opacity", "1")
        });
    }



});
var c = -1

$(function () {




    $("#cart button").click(function () {
        $("#cart").animate({ left: -100 + "%" }, 1000, function () {
        });

    });
    $(".nav-a #navbtn").click(function () {
        $("#cart").animate({ left: 0 + "px" }, 1000, function () {
        });
        $(".togglenav-2").slideToggle(300)
    });
    return false;

});
$(".cart-2").on("click", "#remove", function () {
    $($($(this)).parent()).parent().css("display", "none")

});
$("#shop1").on("click", "#productsbtn", function () {
    $("#shop1").animate({ bottom: -200 + "%" }, 800, function () {
        //callback
    });
    $("html,body").removeClass("over")
    return false;

});

$("#new").on("click", "#productsbtn", function () {
    $("#new").animate({ bottom: -200 + "%" }, 800, function () {
        //callback
    });
    $("html,body").removeClass("over")

});
$("#s4 button").click(function () {
    $("#login").addClass("logindiv")
    $(".logindiv").animate({ bottom: 0 + "px" }, 800, function () {
    });
    $("html,body").addClass("over")
    document.getElementById("login").innerHTML =
        "<div class='logincontent'><div class='col-12'><div class='row'><div class='col-5'>登入</div><div class='col-5 signup select'>註冊</div><div class='col-2'><button id='loginoff'>X</button></div></div></div></div><form class='row justify-content-center' id='form'><div class='col-10'><div class='col-12'><div class='col-2 icon'><i class='fa fa-user fa-2x'></i></div><input class='col-10' type='email'  required placeholder='請填入您的電子郵件'></div><div class='col-12'><div class='col-2 icon'><i class='fa fa-lock fa-2x'></i></div><input class='col-10' type='password' placeholder='請填入您的密碼' required></div><div class='row justify-content-center loginbtn'><input class='col-8' type='submit' value=' 登入' id='submit'></div></div></from>"
});
$("#login").on("click", "#loginoff", function () {
    // if (!$(this).hasClass("select")) {

    //     $(".select").removeClass("select");
    //     $(this).addClass("select");
    // }
    // return false;
    $(".logindiv").animate({ bottom: -200 + "%" }, 800, function () {
    });
    $("html,body").removeClass("over")

});

$("#login").on("click", "#submit", function () {

    $("html,body").removeClass("over")
    $(".logindiv").animate({ bottom: -200 + "%" }, 800, function () {
    });
    alert("登入成功")

});

$('#shop1').on("click", ".menubtn", function () {
    //callback

    $("html,body").removeClass("over")

    $("#cart").animate({ left: 0 + "px" }, 1300, function () {
    });
    y += 1
    document.getElementById("mbtn").innerHTML = " ✔"
    $(this).animate({ width: 70 + "px" }, 500).css("font-size", 20, "px").css("background", "rgba(179, 150, 123,1)").css("color", "#fff")

    $("#shop1").animate({ bottom: -200 + "%" }, 1000, function () {
    });
    $("#cart-2").append('<div class="row"><div class="col-md-5"><img src=""></div><div class="col-md-5"><div class="col-12" id="name"></div><div class="col-12" id="price" ></div></div><div class="col-md-2"><button id="remove"></button></div>')

    var price = $($($($($($(".menubtn").parent()).parent()).children(".shopcontent"))).children("h5")).attr("value")
    var iages = $($($($($(this).parent()).parent()).children(".col-md-5")).children("img")).attr("value")
    $($($("#cart-2 img")).last().attr("src", "img/去背/" + iages + ".png").attr("value", iages))
    $($("#cart-2 #name")).last().append($($($($($($(this).parent()).parent()).children(".shopcontent"))).children("h2")).attr("value"))
    $("#cart-2 #price").last().append("NT$&nbsp;" + price).attr("value", price)

    // alert($($($($($($(this).parent()).parent()).children(".shopcontent"))).children("h5")).attr("value"))

    var total = 0;
    yy = parseInt(price)
    total = parseInt(total)
    total += yy;

    // alert(total)
    document.getElementById("cartmoney").innerHTML = total


    // 相加所有input的值

    // $('#price').each(function () {

    //     var v = parseInt($("#price").filter("#price").attr("value"));




    //     $("#cartmoney").attr("value", v);

    //     s = parseInt($("#cartmoney").attr("value"));


    //     alert("5")





    // });
    // yy = parseInt(price)
    // total += yy;
    // alert(total)
    // document.getElementById("cartmoney").innerHTML = total

    // var v = document.getElementById("pppp")
    // var s = v.innerHTML
    // s = s / 1
    // $("#cartmoney").append('<p id="ppp">' + s + '</p>')
    // $("#ppp").css("display", "none")
    // b = 0
    // if (y < 2) {
    //     b = 0
    //     c = 0
    //     yy = s
    // }
    //  {


    //     $("#ppp").eq(y).css("background", "yellow");

    //     var a = document.getElementById("ppp")
    //     var b = a.innerHTML;
    //     b = b / 1
    //     var c = $($("#cartmoney #ppp").last()).attr("value", b);


    // }

    // total = c + s

    // $("#cartmoney").append('<p id="pp">' + total + '</p>')




    return false;
});

