import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListarRecetasComponent } from './recipes/ListarRecetas.component';
import { DetalleRecetaComponent } from './detalle-receta/detalle-receta.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarRecetasComponent,
    DetalleRecetaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
