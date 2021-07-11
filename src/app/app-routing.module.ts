import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'almacen/:id/:lat/:long',///
    loadChildren: () => import('./almacen/almacen.module').then( m => m.AlmacenPageModule)
  },
  {
    path: 'almacen',///
    loadChildren: () => import('./almacen/almacen.module').then( m => m.AlmacenPageModule)
  },
  {
    path: 'mapa/:lat/:long',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
