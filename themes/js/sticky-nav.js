jQuery(document).ready(function() {

	var navOffset = jQuery("#headerSection").offset().top;
	//alert(navOffset);
	
	jQuery("#headerSection").wrap('<div class="nav-placeholder"></div>');
	jQuery(".nav-placeholder").height(jQuery("#headerSection").outerHeight());

	jQuery(window).scroll(function() {
		var scrollPos = jQuery(window).scrollTop();
		//jQuery("#scrollStatus").html(scrollPos);

		if (scrollPos >= navOffset + 40)	{
			jQuery("#headerSection").addClass("sticky-nav");
			$('.menu').css('top',"-60px");
			$("#headerSection .navbar .brand").css("padding","0px 20px 0px");
		} else {
			jQuery("#headerSection").removeClass("sticky-nav");
			$('.menu').css('top',"0px");
			$("#headerSection .navbar .brand").css("padding","5px 20px 5px");
		}
	});
	
});