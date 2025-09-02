import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // <-- AGREGA ESTA LÍNEA
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ProductosComponent } from './productos/productos.component';

// ...resto del código...

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    RegistroComponent,
    LoginComponent,
    BienvenidaComponent,
    EmpleadosComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule// <-- AGREGA ESTA LÍNEA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
