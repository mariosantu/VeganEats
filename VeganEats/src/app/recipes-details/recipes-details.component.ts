import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesIngredientsByIdService } from '../services/recipes-ingredients-by-id.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss']
})
export class RecipesDetailsComponent {

  // recipeId?:any;
  recipeDetails?: any;

  // recipe's data
  title?:any;
  preparationTime?:any;
  pic?:any;
  sum?:any;
  directives?:any;
  ingridients?:any;

  constructor(private route :ActivatedRoute, private _RecipesIngredientsByIdService: RecipesIngredientsByIdService) {}

  ngOnInit(): void {

    const id = this.getRecipeId();

    this._RecipesIngredientsByIdService.getRecipesDetails(id).subscribe(
      data=> {
        this.recipeDetails = data;
        // console.log(this.recipeDetails);

        // recipe's data
        this.title = this.recipeDetails.title;
        this.preparationTime = this.recipeDetails.readyInMinutes;
        this.pic = this.recipeDetails.image;
        this.sum = this.recipeDetails.summary;
        this.directives = this.recipeDetails.instructions;

        this.ingridients = this.recipeDetails.extendedIngredients;
      }
    );

    // console.log(this.recipeDetails.title);

  }

  getRecipeId(): number {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return id;
  }

  

}
