import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonTcgService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.pokemontcg.io/v1';
  }

  getAllCards() {
      return this.http.get(this.baseUrl  + '/cards?pageSize=1000');
  }

  getCard(cardId: string){
    return this.http.get(this.baseUrl  + '/cards/'+ cardId);
  } 

}
