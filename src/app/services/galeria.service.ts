

import { Injectable } from '@angular/core';

//Este modulo es para conectarnos a cualquier API con peticiones HTTP
import { HttpClient } from '@angular/common/http';

//Impotamos la ruta global de la API
import  { Ruta } from '../config';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

public url: string;


  constructor(private http: HttpClient) { 
this.url=Ruta.url;

  }

  getGaleriaShow(){


return this.http.get(`${this.url}/mostrar-galeria`);


}
}
