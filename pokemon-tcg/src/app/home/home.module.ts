import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AppBootstrapModule } from './../app-bootstrap/app-bootstrap.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './containers/home/home.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardSearchComponent } from './components/card-search/card-search.component';

import { CardSearchPipe } from './pipes/card-search.pipe';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule
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
