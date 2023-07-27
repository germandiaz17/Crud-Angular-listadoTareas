import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { Tarea } from '../Tarea.model';
import { TareaService } from '../tareaSerivce.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @ViewChild('tareaInput') tareaInput: ElementRef;
  @Input() indice: number;
  constructor(private tareaService: TareaService) {

  }
  agregarTarea() {
    let newTarea = new Tarea(
      this.tareaInput.nativeElement.value
    );
    this.tareaService.agregarTareas(newTarea)
    const resetInputTarea = document.getElementById('tareas') as HTMLInputElement;
    resetInputTarea.value = '';
  }
}
