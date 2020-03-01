import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListComponent } from './cards-list.component';
import { CardSearchComponent } from './../card-search/card-search.component';
import { CardSearchPipe } from './../../pipes/card-search.pipe'
import { CommonModule } from '@angular/common';
import { OrderModule} from 'ngx-order-pipe';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('CardsListComponent', () => {
  let component: CardsListComponent;
  let fixture: ComponentFixture<CardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsListComponent, CardSearchComponent, CardSearchPipe ],
      imports: [CommonModule, OrderModule, RouterModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set input values', () => {
    const comp = new CardsListComponent();
    const cardList =     
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
      ];
    const cardQuery = 'pikachu';
    
    comp.cardList = cardList;
    comp.cardQuery = cardQuery;

    comp.ngOnInit();

    expect(comp.cardList).toEqual(cardList);
    expect(comp.cardQuery).toEqual(cardQuery);
    expect(comp.cardFilteredList).toEqual(cardList);
  });
});
