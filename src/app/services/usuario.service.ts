import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario'; // Asegúrate de tener este modelo

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  readonly URL_API = 'http://localhost:3000/api/usuarios';
  usuarios: Usuario[] = [];
  selectedUsuario: Usuario = new Usuario();

  constructor(private http: HttpClient) {}

  register(usuario: any): Observable<any> {
    return this.http.post(this.URL_API + '/register', usuario);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(this.URL_API + '/login', credentials);
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.URL_API);
  }

  postUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.URL_API, usuario);
  }

  putUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.URL_API}/${usuario._id}`, usuario);
  }

  deleteUsuario(_id: string): Observable<any> {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
