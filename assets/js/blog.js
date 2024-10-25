function go_detail(url){
  document.location.href = url;
}

function blog_drop(f){
  if(confirm("삭제 하시겠습니까?")){
    f.submit();
  }
}

function calcHeight(isTop) {
  var myFrame = document.getElementById('blog-iframe');
  myFrame.height = myFrame.contentWindow.document.body.scrollHeight;
  if(isTop == "Y"){
    window.scrollTo(0,0);
  }
  // top.location.href = "#";
}

$(document).ready(function(){

  if($("#blog-iframe").length > 0){
    $(window).scroll(function(){
      var scrollT = $(this).scrollTop();
      if(scrollT > 50 && scrollT < 200){
        calcHeight('N')
      }
    });
  }
  
})