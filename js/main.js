$(document).ready(function(){

	$('.photo__slider').slick({

		prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
		nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>'
	});
	

    $('.menu__btn').click(function(){
        $('.menu__list').addClass('nav-open').slideToggle('300');
    });



      new WOW().init();




 /*  $("a.menu__list__link").click(function(){
				$("html, body").animate({
					scrollTop: $($(this).attr("href")).offset().top + "px"
				}, {
					duration: 1000,
					easing: "swing"
				});
				return false;
			});*/


  $('.about__bus__slider, .dragobrat__reason__slider').slick({
      
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      arrows: false,
      
  });

  $("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!\nНаш консультант свяжится с Вами в ближайшее время.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

  

});




