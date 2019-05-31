//menu mobile
$(".button-collapse").sideNav();
//paralax
$(document).ready(function(){
	$('.parallax').parallax();
});							

//float button		
$(document).ready(function(){
	$('.fixed-action-btn').floatingActionButton();		
});				

//topo
$(document).ready(function(){
	$('.tooltipped').tooltip({delay: 50});
});		

//fade elements inicialization
AOS.init();

//scroll fire numbers
$(document).ready(function(){
	var options = [
	{selector: '.fire,.fire1,.fire2,.fire3', offset: 200, callback: function() {
		$('.Count').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 2000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});
	} },
	];
	Materialize.scrollFire(options);	
});