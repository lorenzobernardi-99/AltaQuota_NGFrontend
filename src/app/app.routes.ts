import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  // The login page
  { path: 'login', component: LoginComponent },

  // The protected dashboard
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [authGuard]
  },

  // Redirects
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Go to dashboard by default
  { path: '**', redirectTo: '/dashboard' } // Catch-all
];