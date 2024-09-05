import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsidebarComponent } from '../../../Shared/components/asidebar/asidebar.component';
import { TopBarComponent } from '../../../Shared/components/top-bar/top-bar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, AsidebarComponent, TopBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
