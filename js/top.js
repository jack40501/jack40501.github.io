  
  $(function(){
 //control display of goTop button and motion
    $("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });

    $(window).scroll(function() {
        if ( $(this).scrollTop() > 150){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
});

$(window).scroll(function() {
        if ( $(this).scrollTop() > 655){
            $('#nav').fadeIn("fast");
        } else {
            $('#nav').stop().fadeOut("fast");
        }
    });
;
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