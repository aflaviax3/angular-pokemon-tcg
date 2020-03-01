import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CardSearchComponent } from '../../components/card-search/card-search.component';
import { CardsListComponent } from '../../components/cards-list/cards-list.component';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { RouterModule } from '@angular/router';
import { CardSearchPipe } from '../../pipes/card-search.pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { PokemonTcgService } from './../../../shared/services/pokemon-tcg.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  // let tcgService = fixture.debugElement.injector.get(PokemonTcgService);
  // let tcgServiceStub: Partial<PokemonTcgService>;

  // tcgServiceStub = {
  //   getAllCards = function(){},
  //   getCard
  // };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, CardSearchComponent, CardsListComponent, CardSearchPipe, LoadingComponent ],
      imports: [ FormsModule, OrderModule, RouterModule.forRoot([]), HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set query to string', () => {
    const http = HttpClient;
    const pokemontcgservice = new PokemonTcgService(<any> http);
    const comp = new HomeComponent(pokemontcgservice);

    expect(comp.cardQuery).toBe(undefined, 'undefined at first');
    comp.queryReceiver('pikachu');
    expect(comp.cardQuery).toBe('pikachu', 'should set query to string');
  });
});
