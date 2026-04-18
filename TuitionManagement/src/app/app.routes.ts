import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AdminComponent } from './modules/admin/admin.component';
import { ResultsComponent } from './modules/results/results.component';
import { FeesComponent } from './modules/fees/fees.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'fees',
    component: FeesComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
