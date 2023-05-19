// app.component.ts
import { Component, OnInit } from '@angular/core';

import { Receta } from './recipes/Receta';
import { RecipeService } from './recipes/RecipeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public recetas: Receta[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getRecetas()
      .subscribe((recetas: Receta[]) => {
        this.recetas = recetas;
      });
  }
}
