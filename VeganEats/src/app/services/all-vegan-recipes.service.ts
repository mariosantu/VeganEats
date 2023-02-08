import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllVeganRecipesService {

  constructor(private _httpclient: HttpClient) { }

  // all vegan's recipes
  // questo servizio si occupa di creare e restituire l'url di ricerca di tutte le ricette vegane
  // presenti nell'api e renderlo disponibile dove serve
  getAllVeganRecipes(): Observable<any> {
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=41e90c80c7dc42f9b55640488a030238&diet=vegan&number=12`;

    return this._httpclient.get(url);
  }
}
