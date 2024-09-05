import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigAxleComponent } from '../config-axle/config-axle.component';
import { MainDashboardComponent } from '../main-dashboard/main-dashboard.component';
import { AxleLoadComponent } from '../axle-load/axle-load.component';
import { StatisticsComponent } from '../statistics/statistics.component';

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
        path: '',
        component: MainDashboardComponent,
      },
      {
        path: 'main-dashboard',
        component: MainDashboardComponent,
      },
      {
        path: 'axle-load',
        component: AxleLoadComponent,
      },
      {
        path: 'settings',
        component: ConfigAxleComponent,
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {}
