import { Routes } from '@angular/router';
import { HealthDashboardComponent } from './health-dashboard.component';

/**
 * Routes for the application.
 * Default route renders the Health Dashboard demo using health-ui-lib components.
 */
export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HealthDashboardComponent,
    title: 'Health Dashboard • Demo'
  },
  {
    path: 'dashboard',
    component: HealthDashboardComponent,
    title: 'Health Dashboard • Demo'
  },
  { path: '**', redirectTo: '' }
];
