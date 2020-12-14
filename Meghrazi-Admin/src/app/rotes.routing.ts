import { Routes, RouterModule } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: '', redirectTo: 'auth/login', pathMatch: 'full'
   },
   {
    path: 'auth', redirectTo: 'auth/login', pathMatch: 'full'
   },
   {
    path: 'auth/login', redirectTo: 'auth/login', pathMatch: 'full'
   },
   {
    path: 'auth/regsiter', redirectTo: 'auth/regsiter', pathMatch: 'full'
   },
   {
    path: 'regsiter', redirectTo: 'auth/regsiter', pathMatch: 'full'
   },
   {
    path: 'panel', redirectTo: '/panel', pathMatch: 'full'
   }
];
