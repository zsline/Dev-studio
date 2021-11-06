

$(function () {
  var slider = $(".main__slider");
  var scrollCount = null;
  var scroll = null;


  slider
    .slick({
      dots: true,
      arrows: false,
      infinite: true,
      fade: true,
      cssEase: 'linear',
      dotsClass: 'dev-dots',
      responsive: [
        {
          breakpoint: 900,
          settings: "unslick"
        }
      ]
    });


  slider.on('wheel', (function (e) {
    e.preventDefault();



    scroll = setTimeout(function () { scrollCount = 0; }, 200);
    if (scrollCount) return 0;
    scrollCount = 1;



    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }));
})





if(!localStorage.theme) localStorage.theme = ""
document.body.className = localStorage.theme
checkboxLabel.onclick = () => {
  document.body.classList.toggle("light")
  localStorage.theme = document.body.className || ""
}

$('.services__slider-info').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.services__slider-nav'
});
$('.services__slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.services__slider-info',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});


