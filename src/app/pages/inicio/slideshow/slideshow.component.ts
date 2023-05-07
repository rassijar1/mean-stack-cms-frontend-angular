import { Component, OnInit } from '@angular/core';
//Se importa la clase service
import {SlideshowService} from '../../../services/slideshow.service';
//Se importa ruta
import { Ruta } from '../../../config';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  //Variables publicas o globales
  public slideJson:any;
  public renderSlide: boolean= true;
  public url=Ruta.url;

	constructor(private slideshowService: SlideshowService){

/*=============================================
RECIBIENDO DATOS DINAMICOS
=============================================*/

this.slideshowService.getSlideShow().subscribe((respuesta : any) =>{
  //console.log("respuesta", respuesta.data);

  this.slideJson = respuesta.data;


})


	}

	ngOnInit():void{
 
    

	}

   callback(){

if (this.renderSlide) {
  

  this.renderSlide=false;
 /*=============================================
JD SLIDER
=============================================*/
    jQuery('.slideshow').jdSlider({
 
  wrap:'.slide-inner', //Especificar el slide que vamos a usar
  isAuto: true, //Inicia la animación automáticamente
  isLoop: true, //Al finalizar vuelve a comenzar
  interval: 7000, //Tiempo por cada slide
  isCursor:true //Pausar animación con el mouse
 
});

}
       



     }

}
