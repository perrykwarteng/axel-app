import { Component } from '@angular/core';
import { StatCardComponent } from '../../../Shared/components/stat-card/stat-card.component';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [StatCardComponent],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css',
})
export class MainDashboardComponent {}
