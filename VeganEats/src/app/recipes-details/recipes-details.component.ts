import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesIngredientsByIdService } from '../services/recipes-ingredients-by-id.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss']
})
export class RecipesDetailsComponent {

  // recipe's data
  recipeDetails?: any;
  title?:any;
  preparationTime?:any;
  pic?:any;
  sum?:any;
  directives?:any;
  ingridients?:any;
  serving?:any;
  winesArray?:any;
  ingridientsArray?:any;

  constructor(private route :ActivatedRoute, private _RecipesIngredientsByIdService: RecipesIngredientsByIdService) {}

  ngOnInit(): void {

    // Una volta scelta una ricetta dall'utente si viene indirizzati alla pagina di dettaglio
    // ovvero recipe-details dove per prima cosa viene registrto l'id grazie alla funzione
    // getRecipeId e dopodichè grazie al servizio _RecipesIngredientsByIdService e alla relativa
    // funzione getRecipesDetails vengono registrati tutti i dati necessari per la crezione della
    // pagina di dettaglio

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
        this.serving = this.recipeDetails.servings;
        this.winesArray = this.recipeDetails.winePairing.pairedWines.toString();
        this.ingridients = this.recipeDetails.extendedIngredients;
        this.ingridientsArray = this.ingridients.map(function(item:any) {
          return item['name'];
        });

      }
    );

  }

  // questa funzione si occupa di registrare l'id del 
  // lavoro selezionato dall'utente attraverso il routing
  getRecipeId(): number {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return id;
  }

  

}
