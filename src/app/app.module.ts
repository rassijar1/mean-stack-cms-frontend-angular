
//importamos la clase NgModule que es el modulo raiz
import { NgModule } from '@angular/core';

//importamos la clase BrowserModule, para buscar modulos en angular
import { BrowserModule } from '@angular/platform-browser';

//importamos los modulos de ruta
import { AppRoutingModule } from './app-routing.module';

//importamos los modulos de peticiones HTTP
import {HttpClientModule} from '@angular/common/http';

//importamos los modulos para trabajar con formularios en angular
import { FormsModule } from '@angular/forms';

//App component es el componente principal
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/inicio/header/header.component';
import { SlideshowComponent } from './pages/inicio/slideshow/slideshow.component';
import { GaleriaComponent } from './pages/inicio/galeria/galeria.component';
import { MouseComponent } from './pages/inicio/mouse/mouse.component';
import { ArticulosComponent } from './pages/inicio/articulos/articulos.component';
import { FormularioComponent } from './pages/inicio/formulario/formulario.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';

//Los decoradores son funciones que modifican clases de javascript
@NgModule({
	//Las declaraciones son las clases de vista que pertenecen a este modulo
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideshowComponent,
    GaleriaComponent,
    MouseComponent,
    ArticulosComponent,
    FormularioComponent,
    InicioComponent,
    ArticuloComponent
  ],
  //Importamos otros modulos cuyas clases exportadas sean necesarias para las plantillas de componentes declaradas en este modulo.
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  //Los proveedores son los creadores de servicios que este modulo contribuye a la recoleccion global del servicios; Se vuelven accesibles en todas las partes de la aplicacion. Esto lo habilitamos cuando invocamos servicios desde una base de datos.
  providers: [],
  bootstrap: [AppComponent]
})

//Exportamos la clase del modulo raiz para poder ser invocada  en otros archivos.
export class AppModule { }
