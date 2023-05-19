import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from './RecipeService';
import { Receta } from './Receta';

@Component({
  selector: 'app-listar-recetas',
  templateUrl: './ListarRecetas.component.html',
  styleUrls: ['./listar-recetas.component.css']
})
export class ListarRecetasComponent implements OnInit {
  @Input() public recetas: Receta[] = [];
  public promedioCalificaciones: number = 0;
  public totalOpiniones: number = 0;
  public recetaSeleccionada: Receta | null = null;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecetas()
      .subscribe((recetas: Receta[]) => {
        this.recetas = recetas;
        this.calculateSummary(recetas);
      });
  }

  private calculateSummary(recetas: Receta[]): void {
    let sumCalificaciones = 0;
    let sumOpiniones = 0;

    for (let receta of recetas) {
      sumCalificaciones += receta.estrellas;
      sumOpiniones += receta.cantidadOpiniones;
    }

    this.promedioCalificaciones = sumCalificaciones / recetas.length;
    this.totalOpiniones = sumOpiniones;
  }

  mostrarDetalle(receta: Receta) {
    this.recetaSeleccionada = receta;
  }
}
