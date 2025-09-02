import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from "../services/empleado.service";
import { NgForm } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado';

declare var M: any;

@Component ({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})

export class EmpleadosComponent implements OnInit {
  constructor(public empleadoService: EmpleadoService) { }

ngOnInit(): void {
  this.getEmpleados();
}

getEmpleados() {
  this.empleadoService.getEmpleados().subscribe(res => {
    this.empleadoService.empleados = res;
  });
}

editarEmpleado(empleado: Empleado) {
  this.empleadoService.selectedEmpleado = Object.assign({}, empleado);
}

agregarEmpleado(form: NgForm) {
  if (form.value._id) {
    this.empleadoService.putEmpleado(form.value).subscribe(res => {
      this.getEmpleados();
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
      M.toast({html: 'Empleado actualizado'});
    });
  } else {
    this.empleadoService.PostEmpleado(form.value).subscribe(res => {
      this.getEmpleados();
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
      M.toast({html: 'Empleado guardado'});
    });
  }
}

resetForm(form: NgForm) {
  form.reset();
  this.empleadoService.selectedEmpleado = new Empleado();
}

eliminarEmpleado(_id: string) {
  if(confirm('¿Seguro que deseas eliminar este empleado?')) {
    this.empleadoService.deleteEmpleado(_id).subscribe(res => {
      this.getEmpleados();
      M.toast({html: 'Empleado eliminado'});
    });
  }
}

}