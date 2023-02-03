import { Component, OnInit} from '@angular/core';
import { AllVeganRecipesService } from '../services/all-vegan-recipes.service';
import { UserQueryResearchService } from '../services/user-query-research.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  userChoice:string = '';
  allVeganRecipes?: any[];
  userRecipesSearched?: any[];

  constructor(private _GetAllVeganRecipes:AllVeganRecipesService, private _GetUserQueryRecipes:UserQueryResearchService) {}

  ngOnInit(): void {
    
    // all'avvio dell'applicazione il recipes component chiama il servizio _GetAllVeganRecipes e con la funzione getAllVeganRecipes
    // ritorna un oggetto json
    // this._GetAllVeganRecipes.getAllVeganRecipes().subscribe(
    //   data=>
    //   {
    //     this.allVeganRecipes = data.results;
    //     // console.log(this.allVeganRecipes);
    //   }
    // )

    
  }

  

  search() {
    // alert(this.userChoice);

    this._GetUserQueryRecipes.getRecipesByUserQuery(this.userChoice).subscribe(
      data=>
      {
        this.userRecipesSearched = data.results;
        console.log(this.userRecipesSearched);
      }
    )
  }
}
