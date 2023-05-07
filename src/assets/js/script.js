
/*=============================================
NAVEGACIÓN SCROLL
=============================================*/


 $(document).ready(function () {

  	$(".nav-link").click(function(e){

 	e.preventDefault();

 	var target = $(this).attr("href");
	
 	$("html, body").animate({

 		scrollTop: $(target).offset().top

 	},1000, "easeOutBack")

 })
    
 });



 /*=============================================
EKKO LIGHTBOX
=============================================*/

  	$(document).on("click", "[data-toggle='lightbox']", function(e){

	e.preventDefault(); //Quitar eventos que vengan por defecto en el navegador
	$(this).ekkoLightbox(); //Activar la acción del plugin Ekko Lightbox

})
    


/*=============================================
SUPER SCROLLORAMA
=============================================*/

$(document).ready(function () {

var controller = $.superscrollorama();

controller.addTween("#articulos .container", TweenMax.from(

	$("#articulos .container"), .25, {css:{marginLeft:"-100%"}, ease:Quad.easeInOut}

));

 	
    
});


