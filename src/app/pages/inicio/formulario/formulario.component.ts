import { Component, OnInit} from '@angular/core';

import { UsuariosService } from '../../../services/usuarios.service';


////Se requiere para trabajar con formularios
import {NgForm} from '@angular/forms';


declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

public listaUsuario:any;
public usuarioCreado:any;
public validarCreacionUsuario:boolean=true;
public mensajeApi:string="";


constructor(private usuariosService: UsuariosService){

  this.listaUsuario={
    usuario:null,
    password:null,
    email:null


  }
}

ngOnInit():void{

/*=============================================
VALIDAR FORMULARIO
=============================================*/
 
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event: { preventDefault: () => void; stopPropagation: () => void; }) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
 
/*=============================================
ICHECK
=============================================*/
 
jQuery(".icheck").iCheck({
 
  checkboxClass: "icheckbox_flat-blue",
  radioClass: "iradio_flat-blue"
})

	
}

/*=============================================
Recibir formulario login
=============================================*/
 

 guardarUsuario(f: NgForm){

this.usuariosService.guardarUsuario(this.listaUsuario).subscribe((respuesta: any)=>{
  this.usuarioCreado=respuesta;
  console.log("this.usuarioCreado", this.usuarioCreado);
  
if (this.usuarioCreado.status == 200) {

console.log("entro al if");

$("validarCreacionUsuarios").removeClass("d-none");
$("validarCreacionUsuarios").addClass("d-block");
$("validarCreacionUsuarios").html(this.usuarioCreado.mensaje);
}else{

  this.mensajeApi=this.usuarioCreado.mensaje;
  this.validarCreacionUsuario= false;
  
  
}


})

   //console.log("f", this.listaUsuario);



 }


}
