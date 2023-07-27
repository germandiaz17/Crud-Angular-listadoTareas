import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Tarea } from '../Tarea.model';
import { TareaService } from '../tareaSerivce.service';
//import { FormularioComponent } from '../formulario/formulario.component';
//import { TareaService } from '../tareaSerivce.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  @Input() tarea: Tarea;
  @Input() indice: number;
  constructor(private servicio: TareaService) {}

  editarRegistro() {
    
    const nuevaTarea: string|null = prompt("Escriba la nueva tarea: ");
    const enunciado: string = nuevaTarea !== null ? nuevaTarea: "Null";
    const numeroIndice = this.indice;
    this.servicio.editarTareaService(enunciado, numeroIndice)
  }
  eliminarRegistro() {
    alert(this.indice)
    const numeroIndice = this.indice;
    this.servicio.eliminarTarea(numeroIndice)
  }
  ngOnInit(): void { }
}
