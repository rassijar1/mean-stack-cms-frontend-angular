import { Component, OnInit } from '@angular/core';


declare var jQuery:any;
declare var $:any;

//Se requiere para navegar entre paginas
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

constructor(){}


ngOnInit():void{

/*=============================================
SCROLL UP
=============================================*/
 
jQuery.scrollUp({
  scrollText: "",
  scrollSpeed:2000,
  easingType: "easeOutQuint"
})
 
    jQuery("#scrollUp").css({
      bottom: "20px",
    right: "20px",
    width: "50px",
    height: "50px",
    background: "url(../assets/img/flecha.jpg)"
    })
 
 
/*=============================================
STICKY JS
=============================================*/
 
if(window.matchMedia("(min-width:992px)").matches){
 
  jQuery("#inicio").sticky({topSpacing:0, zIndex:1000});
 
}
	
}


}
