import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private usuarioService: UsuarioService) {}

  registrarUsuario(form: NgForm) {
    if (form.valid) {
      this.usuarioService.register(this.usuario).subscribe(res => {
        form.reset();
        alert('Usuario registrado correctamente');
      }, err => {
        alert('Error al registrar usuario');
      });
    }
  }
}