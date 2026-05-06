import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lideres',
    loadChildren: () =>
      import('./features/lideres/lideres-module').then(m => m.LideresModule)
  }
];