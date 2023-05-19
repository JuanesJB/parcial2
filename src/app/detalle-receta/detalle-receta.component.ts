import { Component, Input } from '@angular/core';

import { Receta } from '../recipes/Receta';

@Component({
  selector: 'app-detalle-receta',
  templateUrl: './detalle-receta.component.html',
  styleUrls: ['./detalle-receta.component.css']
})
export class DetalleRecetaComponent {
  @Input() receta!: Receta;
}
