$(document).ready(function(){
  // 툴팁
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

})

// gsap
sectionTwoGsap();

let tl = sectionFourGsap();

let toggleCard = (arg) => {
  $(arg).parents(".section-card").toggleClass("on");

  tl.kill();
  tl = sectionFourGsap();
}

let goToElement = (id,isNav) => {
  if(isNav == "Y"){
    controlMenu();
  }
  
  window.scrollTo({
    top: $(`#${id}_section`).offset().top,
    behavior: 'smooth'
  });
}

let goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

let controlTab = (arg) => {
  let y = $(arg).attr("data-year");
  $(".section-5-sub-title span").each(function(){
    $(this).removeClass("on");
  })
  $(".blog-wrap").each(function(){
    $(this).removeClass("on");
  })

  $(arg).addClass("on");
  $(`.blog-wrap-${y}`).addClass("on");
}

let openBlogPop = (id,title) => {
  // var myFrame = document.getElementById('blog-iframe');
  // document.getElementById("blog-iframe").src = myFrame.src + id; 
  let frame_origin_url = $("#blog-frame-data").attr("data-url")
  let new_url = frame_origin_url + id;

  let frame_html = `<iframe id="blog-iframe" src="${new_url}" frameborder="0" width="100%" marginwidth="0" marginheight="0" style="border: 0px;height:70vh;" ></iframe>`;
  $("#blog-frame-data").html(frame_html)
  $("#blog-frame-title").html(title)

  $('#blogDetailModal').modal('show');

  // document.getElementById("blog-iframe").addEventListener('load', function() {
  //   console.log('iframe content loaded');
  //   console.log(this.contentWindow.document.body.scrollHeight)
  //   var iframeHeight= this.contentWindow.document.body.scrollHeight;
  //   this.height=iframeHeight;
  // });
}

function sectionTwoGsap(){
  let panels = gsap.utils.toArray(".section-2-title-wrap");

  panels.forEach((item, i) => {
    const contentElements = item.querySelectorAll(".section-2-animation");
  
    // Set initial state on the to be staggered elements
    gsap.set(contentElements, {
      y: 0,
      opacity: 0
    });
    
    ScrollTrigger.create({
      trigger: item,
      markers: false,
      pin: true,
      start: "top 30%",
      end: "bottom 30%",
      onEnter: ({ progress, direction, isActive }) => {
        // console.log("onEnter", progress, direction, isActive);
        gsap.fromTo(contentElements, { y: 80, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05 });
      },
      onLeave: ({ progress, direction, isActive }) => {
        // console.log("onLeave", progress, direction, isActive);
        gsap.fromTo(contentElements, { y: 0, opacity: 1 }, { y: -80, opacity: 0, stagger: 0.05 });
      },
      onLeaveBack: ({ progress, direction, isActive }) => {
        // console.log("onLeaveBack", progress, direction, isActive, i);
        gsap.fromTo(contentElements, { y: 0, opacity: 1 }, { y: -80, opacity: 0, stagger: 0.05 });
      },
      onEnterBack: ({ progress, direction, isActive }) => {
        // console.log("onEnterBack", progress, direction, isActive);
        gsap.fromTo(contentElements, { y: -80, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05 });
      }
    });
  });
}

function sectionFourGsap(){
  let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".section-4-container",
      start: "top 80%",
      end: "bottom 30%",
      scrub: 1,
      markers: false
    },
  });

  tl.to(".section-4-backgimg", { opacity: 0.7, duration: 2.5 });
  tl.to(".section-4-backgimg", { opacity: 0, duration: 2.5 });

  return tl;
}

function calcHeight(isTop) {
  var myFrame = document.getElementById('blog-iframe');
  myFrame.height = myFrame.contentWindow.document.body.scrollHeight;
  if(isTop == "Y"){
    window.scrollTo(0,0);
  }
  // top.location.href = "#";
}