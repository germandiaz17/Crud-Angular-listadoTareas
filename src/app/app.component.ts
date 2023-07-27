import { Component, OnInit } from '@angular/core';
import { Tarea } from './Tarea.model';
import { TareaService } from './tareaSerivce.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de tareas';
  tareas: Tarea[] = [];
  constructor(private tareaService: TareaService){}

  ngOnInit():void{
    this.tareas = this.tareaService.tareas;
  }
}
