import { Routes } from '@angular/router';
import { AppLayout } from './shared/components/app-layout/app-layout';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
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
    ]
  }
];