import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  readonly URL_API = 'http://localhost:3000/api/productos';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any> {
    return this.http.get(this.URL_API);
  }

  getProducto(id: string): Observable<any> {
    return this.http.get(`${this.URL_API}/${id}`);
  }

  postProducto(producto: any): Observable<any> {
    return this.http.post(this.URL_API, producto);
  }

  putProducto(producto: any): Observable<any> {
    return this.http.put(`${this.URL_API}/${producto._id}`, producto);
  }

  deleteProducto(id: string): Observable<any> {
    return this.http.delete(`${this.URL_API}/${id}`);
  }
}
