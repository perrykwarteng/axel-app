import { Component } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js/auto';
import { LoaderComponent } from '../../../Shared/components/loader/loader.component';
import { StatCardComponent } from "../../../Shared/components/stat-card/stat-card.component";




@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [LoaderComponent, StatCardComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  loader:boolean = false

  constructor(){}


  ngOnInit(): void {
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
      this.renderChart();
    }, 3000);
  }



  chartOne: any;
  engagementData: ChartConfiguration = {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'], 
      datasets: [
        {
          label: 'Registered Officers',
          data: [10, 25, 15, 40, 30, 20], 
          backgroundColor: '#00AEEF',
          hoverBackgroundColor: '#33C0FF',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false, 
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
          beginAtZero: true,
        },
      },
    },
  };
  chartTwo: any;
engagementDataTwo: ChartConfiguration = {
    type: 'pie',
    data: {
      labels: ['Commodities'],
      datasets: [
        {
          label: 'Commodities',
          data: [5], 
          backgroundColor: [
            '#00395d',
          ],
          hoverBackgroundColor: [
            '#00466B',
          ],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true, 
        },
        tooltip: {
          enabled: true,
        },
      },
    },
  };
  
  

  renderChart(): void {
    const ctx = document.getElementById('chartOne') as HTMLCanvasElement;
    this.chartOne = new Chart(ctx, this.engagementData);
    const ctx2 = document.getElementById('chartTwo') as HTMLCanvasElement;
    this.chartTwo = new Chart(ctx2, this.engagementDataTwo);
   }

}
