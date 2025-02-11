import { Component, signal } from '@angular/core';
import { ButtonIconComponent } from '../../../Shared/components/button-icon/button-icon.component';
import { TableComponent } from '../../../Shared/components/table/table.component';

@Component({
  selector: 'app-reports',
  imports: [ButtonIconComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent {
  reportPage: boolean = true;
  axelReport: boolean = false;
  fineReport: boolean = false;

  setReportPage(page: string) {
    switch (page) {
      case 'axelReport':
        this.reportPage = false;
        this.fineReport = false;
        this.axelReport = true;
        break;
      case 'fineReport':
        this.reportPage = false;
        this.axelReport = false;
        this.fineReport = true;
        break;
      default:
        break;
    }
  }

  fineBack() {
    this.reportPage = true;
    this.axelReport = false;
    this.fineReport = false;
  }
  axelBack() {
    this.reportPage = true;
    this.axelReport = false;
    this.fineReport = false;
  }
}
