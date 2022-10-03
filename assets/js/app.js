$(document).ready(function () {
  // sticky navbar
  $(window).on("scroll", function () {
    const scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".navbar").addClass("stickynav");
    } else {
      $(".navbar").removeClass("stickynav");
    }
  });

  // typing animation in baner section

  var typed = new Typed(".element", {
    // Waits 1000ms after typing "First"
    strings: [
      "I'am a Designer",
      "I'am a Developer,",
      "I'am a Programmer",
      "I'am a Ui/ux Designer",
      "I'am a Coder",
      "I'am a Freelancer",
      "I'am a Computer Operator",
      "I'am a Gamer",
    ],
    Loop: true,
    typeSpeed: 80,
    startDelay: 100,
    backSpeed: 100,
    smartBackspace: true,
    backDelay: 700,
  });

  // smooth scroll
  $("html").smoothScroll(600);

  // kursor style
  new kursor({
    type: 3,
    color: "#FF2C6F",
  });

  //scroll to top
  $("body").materialScrollTop();

  // aos
  AOS.init();

  // page loader
  $(".preloader").fadeOut();;
});
