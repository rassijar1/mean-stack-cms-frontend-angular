import { Component,OnInit } from '@angular/core';

//Se importa la clase service
import {GaleriaService} from '../../../services/galeria.service';
//Se importa ruta
import { Ruta } from '../../../config';

declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {


//VARIABLES PUBLICAS

public galeriaJson:any;
public renderGaleria:boolean=true;
public url=Ruta.url;


	constructor(private galeriaService: GaleriaService){
    
/*=============================================
RECIBIENDO DATOS DINAMICOS
=============================================*/

this.galeriaService.getGaleriaShow().subscribe((respuesta : any) =>{
  //console.log("respuesta", respuesta.data);

  this.galeriaJson=respuesta.data;


})



	}


ngOnInit():void{



}


callback(){


  if (this.renderGaleria) {

    this.renderGaleria=false;
     /*=============================================
PINTEREST GRID
=============================================*/

jQuery('.pinterest_grid').pinterest_grid({
  no_columns: 4, //Número de columnas
  padding_x: 10, //Márgenes internas horizontal
  padding_y: 10, //Márgenes internas vertical
  margin_bottom: 50, //Márgen externa inferor
  single_column_breakpoint: 769 //Punto de quiebre para una sola columna
});


  }
}

}
