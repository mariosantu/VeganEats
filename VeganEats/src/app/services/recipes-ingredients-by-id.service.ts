import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesIngredientsByIdService {

  constructor(private _httpclient: HttpClient) { }

  getRecipesDetails(id:number): Observable<any> {
    let url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=41e90c80c7dc42f9b55640488a030238&includeNutrition=false`;

    return this._httpclient.get(url);
  }
}
