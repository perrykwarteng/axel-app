import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigAxleComponent } from '../monitoring-officer/config-axle/config-axle.component';
import { MainDashboardComponent } from '../monitoring-officer/main-dashboard/main-dashboard.component';
import { AxleLoadComponent } from '../monitoring-officer/axle-load/axle-load.component';
import { AdminDashboardComponent } from '../admin/admin-dashboard/admin-dashboard.component';
import { MonitoringUsersComponent } from '../admin/monitoring-users/monitoring-users.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'main-dashboard',
        component: MainDashboardComponent,
      },
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'monitoring-officers',
        component: MonitoringUsersComponent,
      },
      {
        path: 'axle-load',
        component: AxleLoadComponent,
      },
      {
        path: 'settings',
        component: ConfigAxleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {}
