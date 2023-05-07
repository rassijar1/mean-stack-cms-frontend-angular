import { Component, OnInit} from '@angular/core';

//Se importa la clase service
import {ArticulosService} from '../../../services/articulos.service';

//Se importa ruta
import { Ruta } from '../../../config';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

	//VARIABLES PUBLICAS O GLOBALES

	public articulosJson:any;
	public url=Ruta.url;

		constructor(private articulosService: ArticulosService){

/*=============================================
RECIBIENDO DATOS DINAMICOS
=============================================*/

this.articulosService.getArticuloShow().subscribe((respuesta : any) =>{
  //console.log("respuesta", respuesta.data);

  this.articulosJson=respuesta.data;


})



}

ngOnInit():void{

	}

	}
