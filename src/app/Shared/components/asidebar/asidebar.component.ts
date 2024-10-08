import { Component, OnInit } from '@angular/core';
import { NavlistComponent } from '../navlist/navlist.component';

@Component({
  selector: 'app-asidebar',
  standalone: true,
  imports: [NavlistComponent],
  templateUrl: './asidebar.component.html',
  styleUrl: './asidebar.component.css',
})
export class AsidebarComponent implements OnInit {
  mainDashboard: boolean = true;
  settings: boolean = false;
  axelLoad: boolean = false;
  statistics: boolean = true;
  monitoringOfficers: boolean = false;

  ngOnInit() {
    const activeNav = sessionStorage.getItem('activeNav');
    if (activeNav) {
      this.setNavActive(activeNav);
    } else {
      this.setNavActive('mainDashboard');
    }
  }

  setNavActive(nav: string) {
    sessionStorage.setItem('activeNav', nav);
    switch (nav) {
      case 'mainDashboard':
        this.mainDashboard = true;
        this.settings = false;
        this.axelLoad = false;
        this.statistics = false;
        this.monitoringOfficers = false;
        break;
      case 'settings':
        this.mainDashboard = false;
        this.settings = true;
        this.axelLoad = false;
        this.statistics = false;
        this.monitoringOfficers = false;
        break;
      case 'axelLoad':
        this.mainDashboard = false;
        this.settings = false;
        this.axelLoad = true;
        this.statistics = false;
        this.monitoringOfficers = false;
        break;
      case 'statistics':
        this.mainDashboard = false;
        this.settings = false;
        this.axelLoad = false;
        this.statistics = true;
        this.monitoringOfficers = false;
        break;
      case 'monitoring-officers':
        this.mainDashboard = false;
        this.settings = false;
        this.axelLoad = false;
        this.statistics = false;
        this.monitoringOfficers = true;
        break;
      default:
        this.mainDashboard = false;
        this.settings = false;
        this.axelLoad = false;
        this.statistics = false;
        this.monitoringOfficers = false;
    }
  }
}
