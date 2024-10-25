$(document).ready(function(){

  $(window).scroll(function(){
    var scrollT = $(this).scrollTop();
    if(scrollT <= 50){
      if($("header").hasClass("active")){
        $("header").removeClass("active");
      }
    }else if(50 < scrollT && scrollT <= 600){
      if(!$("header").hasClass("active")){
        $("header").addClass("active");
      }
      
      if($(".quick-top-icon").hasClass("on")){
        $(".quick-top-icon").removeClass("on");
      }
    }else if(600 < scrollT){
      if(!$(".quick-top-icon").hasClass("on")){
        $(".quick-top-icon").addClass("on");
      }
    }
  });
})

let controlMenu = () => {
  $(".mobile-nav").toggleClass("active");
}