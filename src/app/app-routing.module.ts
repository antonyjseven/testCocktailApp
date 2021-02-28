import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   //   path: 'home',
  //   //   loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  //   // },
  {
    path: '',
    redirectTo: 'cocktail-db',
    pathMatch: 'full'
  },
  {
    path: 'cocktail-db',
    loadChildren: () => import('./cocktail-db/cocktail-db.module').then(m => m.CocktailDBPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./cocktail-db/filters/filters.module').then(m => m.FiltersPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
