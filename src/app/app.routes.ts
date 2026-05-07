import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'lideres',
    pathMatch: 'full'
  },
  {
    path: 'lideres',
    loadComponent: () =>
      import('./features/lideres/components/lideres.component')
        .then(m => m.LideresComponent)
  }
];