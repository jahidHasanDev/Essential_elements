$(document).ready(function () {


$(".nav_icon i").click(function(){
  $(".header .menu ul").slideToggle(1000);
  return false;
  display: block;
});
//blog-single carousel item

 $(document).ready(function () {
	$('.myCarousul').owlCarousel({
	items: 1,
		margin: 0,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		startPosition: 1,
		nav: false,
		dots: true,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 110,
		responsive: {
			767: {
				items: 1
			},
			575: {
				items: 1
			},
			320: {
				items: 1
			},
			
		},
})
})


// Masonary page
 $(document).ready(function () {
 	var macy = Macy({
			    container: '#grid_items',
			    trueOrder: false,
			    waitForImages: false,
			    margin: 50,
			    columns: 3,
			    breakAt: {
			        1200: 2,
			       	767: 1
			    }
			});
 })






});