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
});
