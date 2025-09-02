import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];
  producto: any = { nombre: '', precio: 0, stock: 0, _id: null };

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productoService.getProductos().subscribe(res => {
      this.productos = res;
    });
  }

  agregarProducto() {
    if (this.producto._id) {
      this.productoService.putProducto(this.producto).subscribe(() => {
        this.obtenerProductos();
        this.limpiarFormulario();
      });
    } else {
      this.productoService.postProducto(this.producto).subscribe(() => {
        this.obtenerProductos();
        this.limpiarFormulario();
      });
    }
  }

  editarProducto(prod: any) {
    this.producto = { ...prod };
  }

  eliminarProducto(id: string) {
    this.productoService.deleteProducto(id).subscribe(() => {
      this.obtenerProductos();
    });
  }

  limpiarFormulario() {
    this.producto = { nombre: '', precio: 0, stock: 0, _id: null };
  }
}