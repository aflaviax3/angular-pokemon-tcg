import { Component, OnInit } from '@angular/core';
import { CardList, ListedCard } from './../../models/card-list.model';
import { PokemonTcgService } from '../../../shared/services/pokemon-tcg.service';

@Component({
  selector: 'app-home',
  template: `
  <div *ngIf="cardList?.length; else loading" class="pt-4">
    <app-card-search 
      (searchQuery)="queryReceiver($event)"
    >
    </app-card-search>    
    <app-cards-list 
      [cardList]="cardList"
      [cardQuery]="cardQuery"
    >
    </app-cards-list>
  </div>
  <ng-template #loading>
    <app-loading></app-loading>
  </ng-template>
  `,
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  cardList: ListedCard[];
  cardQuery: string;

  constructor(private pokemonTcgService : PokemonTcgService) { }

  ngOnInit(): void {
    this.pokemonTcgService.getAllCards()
    .subscribe((data: CardList) => {
        this.cardList = data.cards;
    });  

  }

  queryReceiver(search) {
    this.cardQuery = search;
    console.log('Foi emitido o evento e chegou no pai >>>> ', search);
  }



}
