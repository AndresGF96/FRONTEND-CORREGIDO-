import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credenciales = {
    email: '',
    password: ''
  };

  constructor(private usuarioService: UsuarioService) {}

  iniciarSesion(form: NgForm) {
    if (form.valid) {
      this.usuarioService.login(this.credenciales).subscribe(res => {
        alert('Login exitoso');
        form.reset();
      }, err => {
        alert('Error al iniciar sesión');
      });
    }
  }
}