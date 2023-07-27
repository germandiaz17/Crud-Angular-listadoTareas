import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './tareas/tareas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TareaService } from './tareaSerivce.service';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
