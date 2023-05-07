
//Importamos el decorador Injectable, para inyectar clases de dependencias en los componentes 
import { Injectable } from '@angular/core';

//Este modulo es para conectarnos a cualquier API con peticiones HTTP
import { HttpClient } from '@angular/common/http';

//importar ruta de la api

import { Ruta } from '../config';

//Definimos el decorador Injectable
@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

public url: string;




  constructor(private http: HttpClient) { 

this.url=Ruta.url;
  }

getSlideShow(){


return this.http.get(`${this.url}/mostrar-slide`);


}



}
