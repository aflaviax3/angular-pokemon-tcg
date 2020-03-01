import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { PokemonTcgService } from './services/pokemon-tcg.service';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule
  ],
  exports: [LoadingComponent],
  providers: [PokemonTcgService]
})
export class SharedModule { }
