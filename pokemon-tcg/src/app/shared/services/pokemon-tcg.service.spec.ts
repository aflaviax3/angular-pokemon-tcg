import { TestBed, async, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PokemonTcgService } from './pokemon-tcg.service';
import { CommonModule } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CardsListComponent } from '../../home/components/cards-list/cards-list.component';
import { CardSearchComponent } from '../../home/components/card-search/card-search.component';
import { CardSearchPipe } from '../../home/pipes/card-search.pipe';
import { FormsModule } from '@angular/forms';
import { CardList, ListedCard } from './../../home/models/card-list.model';

import { defer } from 'rxjs';
import { CardInfo } from '../../detail/interfaces/card-info';

/** Create async observable that emits-once and completes
 *  after a JS engine turn */
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

/** Create async observable error that errors
 *  after a JS engine turn */
export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

describe('PokemonTcgService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let tcgservice, service: PokemonTcgService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      declarations: [CardsListComponent, CardSearchComponent, CardSearchPipe],
      imports: [CommonModule,OrderModule, HttpClientModule, RouterModule, FormsModule, HttpClientTestingModule],
      providers: [PokemonTcgService]
    });

    tcgservice = new PokemonTcgService(<any> httpClientSpy);
  });

  it('should be created', () => {
    expect(tcgservice).toBeTruthy();
  });

  it('should return expected cards (HttpClient called once)', () => {
    const expectedCards: CardList = 
      {  
        "cards":
        [  
          {
            "id": "base5-20",
            "name": "Dark Blastoise",
            "imageUrl": "https://images.pokemontcg.io/base5/20.png",
            "types": [
                "Water"
            ]
          },
          {
            "id":"dp6-90",
            "name":"Cubone",
            "imageUrl":"https://images.pokemontcg.io/dp6/90.png",
            "types":[
              "Fighting"
            ]
          }
        ]
    };
  
    httpClientSpy.get.and.returnValue(asyncData(expectedCards));
  
    tcgservice.getAllCards().subscribe(
      cards => expect(cards).toEqual(expectedCards, 'expected cards'),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return expected card', () => {
    const expectedCard: CardInfo = 
      {
        "card":
        {
          "id":"ex16-1",
          "name":"Aggron",
          "imageUrlHiRes":"https://images.pokemontcg.io/ex16/1_hires.png",
          "types":["Metal"],
          "number":"1",
          "attacks":[
            {
              "cost":["Colorless","Colorless","Colorless"],
              "name":"Metal Claw",
              "text":"",
              "damage":"50",
              "convertedEnergyCost":'3'
            },
            {
              "cost":["Metal","Metal","Colorless","Colorless"],
              "name":"Mix-Up",
              "text":"Your opponent discards the top card of his or her deck.",
              "damage":"70",
              "convertedEnergyCost":'4'
            }
          ],
          "resistances":[
            {
              "type":"Grass","value":"-30"
            }
          ],
          "weaknesses":[
            {
              "type":"Fire","value":"×2"
            }
          ]
        }
      };

      httpClientSpy.get.and.returnValue(asyncData(expectedCard));
  
      tcgservice.getCard('ex16-1').subscribe(
        cards => expect(cards).toEqual(expectedCard, 'expected card'),
        fail
      );
  
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');

    
  });

});
