   $(function() { // DOM ready to be manipulated 

            $(window).on("scroll resize", function() {
                if ($(this).scrollTop() > 655) {
                    $("#nav").css('background-color', "rgba(138,114,95,0.9)");
                    document.getElementById("nav").style.borderBottom = "none";
                    div.style.height = height + "px";
                } else {
                    $("#nav").css('background-color', "#A69E9E");
                    document.getElementById("nav").style.borderBottom = "2px solid #ffffff";
                }
            });

        });
  
  $(function(){
 //control display of goTop button and motion
    $("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });



  $(function(){
 //control display of goTop button and motion
    $("#go1").click(function(){
        jQuery("html,body").animate({
            scrollTop:$('#a1107')
        },1000);
    });},)
   $(function(){
 //control display of goTop button and motion
    $("#go2").click(function(){
        jQuery("html,body").animate({
            scrollTop:1300
        },1000);
    });},)
    $(function(){
 //control display of goTop button and motion
    $("#go3").click(function(){
        jQuery("html,body").animate({
            scrollTop:2300
        },1000);
    });},)
     $(function(){
 //control display of goTop button and motion
    $("#go4").click(function(){
        jQuery("html,body").animate({
            scrollTop:4500
        },1000);
    });},)