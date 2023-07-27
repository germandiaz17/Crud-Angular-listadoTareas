import { Injectable } from "@angular/core";
import { Tarea } from "./Tarea.model";
import { TareasComponent } from "./tareas/tareas.component";
@Injectable({
    providedIn: TareasComponent
})

export class TareaService {
    tareas: Tarea[] = [];

    agregarTareas(tarea: Tarea) {
        this.tareas.push(tarea);
    }
    editarTareaService(nuevaTarea: string, indice: number) {
        const nuevoValor : Tarea = new Tarea(nuevaTarea)
        this.tareas.splice(indice, 1, nuevoValor)
    }
    eliminarTarea(indice: number) {
        this.tareas.splice(indice, 1);
    }
}