import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CardSearchComponent } from '../../components/card-search/card-search.component';
import { CardsListComponent } from '../../components/cards-list/cards-list.component';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { RouterModule } from '@angular/router';
import { CardSearchPipe } from '../../pipes/card-search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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
});
