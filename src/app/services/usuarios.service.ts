import { Injectable } from '@angular/core';

//Este modulo es para conectarnos a cualquier API con peticiones HTTP
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Impotamos la ruta global de la API
import  { Ruta } from '../config';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

 public url: string;


  constructor(private http: HttpClient) { 
this.url=Ruta.url;

  }

  /*=============================================
  PETICION POST ANGULAR
  =============================================*/
  
  guardarUsuario(listaUsuario: any){

const headers= new HttpHeaders();

return this.http.post(`${this.url}/crear-usuario`,listaUsuario,{headers});

  }

  /*=============================================
 LOGIN ANGULAR Y NODE JS
  =============================================*/
  
  loginUsuario(listaUsuario: any){

const headers= new HttpHeaders();

return this.http.post(`${this.url}/login-usuario`,listaUsuario,{headers});

  }
  

  

//   getUsuarios(){


// return this.http.get(this.url);




// }
}