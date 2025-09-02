import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service'; // ← Corrige la ruta
import { Usuario } from '../models/usuario'; // ← Corrige la ruta

declare var M: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  constructor(public usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(res => {
      this.usuarioService.usuarios = res;
    });
  }

  agregarUsuario(form: NgForm) {
    if (form.value._id) {
      this.usuarioService.putUsuario(form.value).subscribe(res => {
        this.getUsuarios();
        form.reset();
        this.usuarioService.selectedUsuario = new Usuario();
        M.toast({html: 'Usuario actualizado'});
      });
    } else {
      this.usuarioService.postUsuario(form.value).subscribe(res => {
        this.getUsuarios();
        form.reset();
        this.usuarioService.selectedUsuario = new Usuario();
        M.toast({html: 'Usuario guardado'});
      });
    }
  }

  editarUsuario(usuario: Usuario) {
    this.usuarioService.selectedUsuario = Object.assign({}, usuario);
  }

  eliminarUsuario(_id: string) {
    if(confirm('¿Seguro que deseas eliminar este usuario?')) {
      this.usuarioService.deleteUsuario(_id).subscribe(res => {
        this.getUsuarios();
        M.toast({html: 'Usuario eliminado'});
      });
    }
  }

  resetForm(form: NgForm) {
    form.reset();
    this.usuarioService.selectedUsuario = new Usuario();
  }
}
