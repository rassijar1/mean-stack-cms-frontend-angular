import { Component, OnInit } from '@angular/core';
//Se requiere para navegar entre paginas
import { ActivatedRoute } from '@angular/router';

//Se importa la clase service
import {ArticulosService} from '../../services/articulos.service';
//Se importa la clase service
import {UsuariosService} from '../../services/usuarios.service';

////Se requiere para trabajar con formularios
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit{

	//VARIABLES PUBLICAS

	public articuloJson:any;
	public renderArticulo:any;
	public contenidoArticulo:any;
	public login:boolean=false;
	public usuariosJson:any;
	public renderUsuario:any;
	public validarLogin:boolean=true;
	public listaUsuario:any;
	public mensajeLogin:string="";


	constructor(activateRoute:ActivatedRoute, private articulosService: ArticulosService,
		private usuariosService:UsuariosService){


			/*=============================================
			Recibiendo datos dinamicos
			=============================================*/





		this.articulosService.getArticuloShow().
		subscribe( respuesta=>{

		this.articuloJson=respuesta;
		//console.log("this.articuloJson", this.articuloJson);
		


     this.renderArticulo = this.articuloJson.data.find((result: { url: any; }) => {
     	//console.log("result", result);
  
          return result.url == activateRoute.snapshot.params["id"];
  
        }) 

    this.contenidoArticulo= this.renderArticulo.contenido;
    
	



		})

		/*=============================================
			Objeto lista usuario
			=============================================*/

			this.listaUsuario ={


				usuario:null,
				password:null
			}

	}

ngOnInit():void{





}


onSubmit(f: NgForm){

	   	this.usuariosService.loginUsuario(this.listaUsuario)
	   	.subscribe((respuesta: any) =>{
	  		
	   		this.usuariosJson = respuesta;
	   		

	   		if (this.usuariosJson["mensaje"]=="ok") {
	   				this.login = true;	
	   		}else{
	   			this.mensajeLogin=this.usuariosJson.mensaje;
	   			this.validarLogin = false;

	   		}

	   		

	   	})

	  	 console.log("f", f);


  	}


}
