import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { CardImageComponent } from './components/card-image/card-image.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { DetailComponent } from './containers/detail/detail.component';


@NgModule({
  declarations: [
    CardImageComponent, 
    CardInfoComponent, 
    DetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DetailModule { }
