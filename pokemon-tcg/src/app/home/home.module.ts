import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardSearchComponent } from './components/card-search/card-search.component';

import { CardSearchPipe } from './pipes/card-search.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    CardsListComponent,    
    CardSearchPipe, 
    CardSearchComponent
  ],
  exports: [
    CardSearchPipe
  ]
})
export class HomeModule { }
