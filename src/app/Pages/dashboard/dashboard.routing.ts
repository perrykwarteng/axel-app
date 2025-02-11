import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigAxleComponent } from '../admin/config-axle/config-axle.component';
import { MainDashboardComponent } from '../monitoring-officer/main-dashboard/main-dashboard.component';
import { AxleLoadComponent } from '../monitoring-officer/axle-load/axle-load.component';
import { AdminDashboardComponent } from '../admin/admin-dashboard/admin-dashboard.component';
import { UsersComponent } from '../admin/users/users.component';
import { FineManagementComponent } from '../admin/fine-management/fine-management.component';
import { AuditTrailComponent } from '../admin/audit-trail/audit-trail.component';
import { ReportsComponent } from '../admin/reports/reports.component';

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
      // Admin
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'fines',
        component: FineManagementComponent,
      },
      {
        path: 'auditTrail',
        component: AuditTrailComponent,
      },
      {
        path: 'reports',
        component: ReportsComponent,
      },
      {
        path: 'settings',
        component: ConfigAxleComponent,
      },

      // Monitoring Officer
      {
        path: 'main-dashboard',
        component: MainDashboardComponent,
      },
      {
        path: 'axle-load',
        component: AxleLoadComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {}
