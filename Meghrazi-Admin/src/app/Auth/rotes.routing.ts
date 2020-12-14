import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './Auth.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';

export const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
   },
];
