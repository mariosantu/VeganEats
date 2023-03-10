import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserQueryResearchService {

  constructor(private _httpclient: HttpClient) { }

  // questo servizio si occupa di creare e restituire l'url di ricerca in base 
  // alla query inserita dall'utente 
  getRecipesByUserQuery(query:string): Observable<any> {
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=41e90c80c7dc42f9b55640488a030238&diet=vegan&query=${query}`;

    return this._httpclient.get(url);
  }
}
