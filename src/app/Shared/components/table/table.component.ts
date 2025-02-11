import { Component, Input, input, output, ViewChild } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-table',
  imports: [
    TableModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    TagModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @ViewChild('dt1') dt1!: {
    filterGlobal: (arg0: string, arg1: string) => void;
  };
  tableHead: any = input();
  tableData: any = input();
  statusColor = input<string>();
  edit = output();
  openData = output();
  delete = output();
  @Input() filterNames: string[] = [];
  @Input() isSearch = false;
  @Input() isSorting = false;

  filterGlobal(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    if (this.dt1) {
      this.dt1.filterGlobal(value, 'contains');
    }
  }

  editData(data: Event) {}
  deleteData(data: Event) {}
  openDataDetails(data: Event) {}
}
