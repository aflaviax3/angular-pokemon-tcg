import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoComponent } from './card-info.component';

import { Card } from './../../interfaces/card-info'

describe('CardInfoComponent', () => {
  let component: CardInfoComponent;
  let fixture: ComponentFixture<CardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInfoComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive input', () => {
    const comp = new CardInfoComponent();

    const card: Card = 
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
        
      };

    comp.cardInfo = card;
    expect(comp.cardInfo).toEqual(card);
  });
});
