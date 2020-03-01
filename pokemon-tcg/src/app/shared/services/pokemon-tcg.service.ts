import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonTcgService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.pokemontcg.io/v1/';
  }

  getAllCards() {
      return this.http.get(this.baseUrl  + '/cards');
  }

  getCard(cardId: string){
    return this.http.get(this.baseUrl  + '/cards/'+ cardId);
  } 

}
