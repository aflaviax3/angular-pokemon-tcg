import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'cards-list', 
    loadChildren: './home/home.module#HomeModule'  
  },
  // { 
  //   path: 'pokemon-detail/:id', 
  //   loadChildren: './pokemon-detail/pokemon-detail.module#PokemonDetailModule'
  // },
  { 
    path: '', 
    redirectTo: '/cards-list', 
    pathMatch: 'full' 
  }

];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {   

}
