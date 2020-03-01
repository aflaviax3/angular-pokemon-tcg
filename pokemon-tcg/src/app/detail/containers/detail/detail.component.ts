import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PokemonTcgService } from './../../../shared/services/pokemon-tcg.service';
import { Location } from '@angular/common';

import { CardInfo, Card } from './../../interfaces/card-info';

@Component({
  selector: 'app-detail',
  template: `
  <div class="container h-100 pt-5" *ngIf="cardInfo; else loading">
    <h1 class="pt-4 text-center" *ngIf="cardInfo">{{cardInfo.name}}</h1>
    <app-card-info 
      [cardInfo]="cardInfo"
    >
    </app-card-info>
    <button type="button" class="btn btn-dark" (click)="goBack()">< Back</button>
  </div>
  <ng-template #loading>
    <app-loading></app-loading>
  </ng-template>
  `,
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public cardInfo : Card;
  public cardId;

  constructor(
    private pokemontcgService: PokemonTcgService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    
  }

  ngOnInit() {
    this.route.params.subscribe( params => this.cardId = params["cardId"] );

    this.pokemontcgService.getCard(this.cardId)
      .subscribe((data: CardInfo) => {
        this.cardInfo = data.card;
        console.log(data);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
