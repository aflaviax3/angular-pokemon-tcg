import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { DetailComponent } from './containers/detail/detail.component';


@NgModule({
  declarations: [
    CardInfoComponent, 
    DetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DetailModule { }
