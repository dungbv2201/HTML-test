$(document).ready(function() {
 	var owl = $("#app-mobi");
  owl.owlCarousel({
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
        
		pagination:false,
        indicators:true,
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  var ow = $(".owl-carousel").data('owlCarousel');
  $('.owl-page').on('click',function(){
  	// owl.trigger('to.gTo.carousel', [$(this).index(), 300]);
  	// alert($(this).index());
  	// owl.trigger('owl.goTo($(this).index())');
  	ow.goTo($(this).index()) ;
  		$('.owl-page').removeClass('active');
  	$(this).addClass('active');


  });
});
$(document).ready(function() {

	var owl = $("#owl-demo");

	owl.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,5], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	responsiveClass: true,
    responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        }
    }
	});

	// Custom Navigation Events
	$(".next").click(function(){
	owl.trigger('owl.next');
	})
	$(".prev").click(function(){
	owl.trigger('owl.prev');
	})
	$(".play").click(function(){
	owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
	})
	$(".stop").click(function(){
	owl.trigger('owl.stop');
	})

});
$(document).ready(function() {

	var owl = $("#slider-2");

	owl.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,5], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	nav:true,
	dots:false,
	navText:true,
	responsiveClass: true,
    responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        }
    }
	  
	});

	// Custom Navigation Events
	$(".next-slider-2").click(function(){
	owl.trigger('owl.next');
	})
	$(".prev-slider-2").click(function(){
	owl.trigger('owl.prev');
	})
});
$(document).ready(function() {

	var owl = $("#slider-3");

	owl.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,5], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	nav:true,
	dots:false,
	navText:true,
	responsiveClass: true,
    responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        }
    }
	  
	});

	// Custom Navigation Events
	$(".next-slider-3").click(function(){
	owl.trigger('owl.next');
	})
	$(".prev-slider-3").click(function(){
	owl.trigger('owl.prev');
	})
});
$(document).ready(function() {

	var owl = $("#event");

	owl.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,5], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	nav:true,
	dots:false,
	navText:true,
	responsiveClass: true,
    responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        }
    }
	  
	});

	// Custom Navigation Events
	$(".next-event").click(function(){
	owl.trigger('owl.next');
	})
	$(".prev-event").click(function(){
	owl.trigger('owl.prev');
	})
});
$(document).ready(function() {

	var owl = $("#movie");

	owl.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,5], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	nav:true,
	dots:false,
	navText:true,
	responsiveClass: true,
    responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        }
    }
	  
	});

	// Custom Navigation Events
	$(".next-movie").click(function(){
	owl.trigger('owl.next');
	})
	$(".prev-movie").click(function(){
	owl.trigger('owl.prev');
	})
});
$(document).ready(function() {
 
  $("#mobii").owlCarousel({
 
      slideSpeed : 300,
      paginationSpeed : 400,
      itemsDesktop : [1000,1], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,1], // betweem 900px and 601px
		itemsTablet: [600,1], 
      items : 1, 
 		responsiveClass: true,
    	responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        },
        768:{
          items: 1
        },
         1024:{
          items: 1
        }
    }
  });
})
$(document).ready(function() {
 
  var owl = $("#download-right");
 
  owl.owlCarousel({
      items : 2, //10 items above 1000px browser width
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [768,2], //2 items between 600 and 0
      itemsMobile : false,// itemsMobile disabled - inherit from itemsTablet option
      	responsiveClass: true,
    responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        },
        768:{
          items: 2
        }
    }
  });
 
  // Custom Navigation Events
  $(".next-app").click(function(){
    $('#download-right').trigger('owl.next');
  })

});
$(document).ready(function() {

	var owl = $("#museum");

	owl.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,5], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	responsiveClass: true,
    responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        }
    }
	});

	// Custom Navigation Events
	$(".next-museum").click(function(){
	owl.trigger('owl.next');
	});
	$(".prev-museum").click(function(){
	owl.trigger('owl.prev');
	})

});
$(document).ready(function() {

	var owl = $("#bar");

	owl.owlCarousel({
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,5], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,3], // betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0
	responsiveClass: true,
    responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        }
    }
	});

	// Custom Navigation Events
	$(".next-bar").click(function(){
	owl.trigger('owl.next');
	});
	$(".prev-bar").click(function(){
	owl.trigger('owl.prev');
	})

});
$(document).ready(function() {
 var owl = $("#testerminal");
  $("#testerminal").owlCarousel({
 
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,autoPlay:true
 
  });
  $(".cl-next").click(function(){
	owl.trigger('owl.next');
	});
	$(".cl-prev").click(function(){
	owl.trigger('owl.prev');
	})
 
});