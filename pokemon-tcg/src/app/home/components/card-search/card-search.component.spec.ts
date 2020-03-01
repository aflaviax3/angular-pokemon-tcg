import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchComponent } from './card-search.component';
import { CardSearchPipe } from './../../pipes/card-search.pipe';

import { CommonModule } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../shared/shared.module';
import { FormsModule } from '@angular/forms';


describe('CardSearchComponent', () => {
  let component: CardSearchComponent;
  let fixture: ComponentFixture<CardSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSearchComponent, CardSearchPipe ],
      imports: [CommonModule, OrderModule, RouterModule, SharedModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should output search query', () => {
    const comp = new CardSearchComponent();
    const query = 'pikachu';
    
    comp.searchQuery.subscribe((myQuery: string) => expect(myQuery).toBe(query));

    comp.onKey(query);
  });
});
