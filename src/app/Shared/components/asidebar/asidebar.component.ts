import { Component, Injector, OnInit } from '@angular/core';
import { NavlistComponent } from '../navlist/navlist.component';
import { AuthServicesService } from '../../../Core/Services/auth-services.service';

@Component({
  selector: 'app-asidebar',
  standalone: true,
  imports: [NavlistComponent],
  templateUrl: './asidebar.component.html',
  styleUrl: './asidebar.component.css',
})
export class AsidebarComponent implements OnInit {
  mainDashboard: boolean = true;
  statistics: boolean = true;
  settings: boolean = false;
  axelLoad: boolean = false;
  monitoringOfficers: boolean = false;

  constructor(private authService: AuthServicesService){}
  userDetails:any

  ngOnInit() {

    const user:any = this.authService.getUser() 
    this.userDetails = user


    const activeNav = sessionStorage.getItem('activeNav');
    if (activeNav) {
      this.setNavActive(activeNav);
    } else if(user.role === 'admin') {
      this.setNavActive('statistics');
    }else{
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
