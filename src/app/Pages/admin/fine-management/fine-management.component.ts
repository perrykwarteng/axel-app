import { Component, signal } from '@angular/core';
import { FineStatComponent } from '../../../Shared/components/fine-stat/fine-stat.component';
import { TableComponent } from '../../../Shared/components/table/table.component';

@Component({
  selector: 'app-fine-management',
  imports: [FineStatComponent, TableComponent],
  templateUrl: './fine-management.component.html',
  styleUrl: './fine-management.component.css',
})
export class FineManagementComponent {
  filterName = ['status', 'fineId', 'issuedBy'];

  userTable = signal([
    { Heading: 'Fine ID', Data: 'fineId' },
    { Heading: 'Fine Type', Data: 'fineType' },
    { Heading: 'Amount (GHS)', Data: 'amount' },
    { Heading: 'Issued Date', Data: 'issuedDate' },
    { Heading: 'Due Date', Data: 'dueDate' },
    { Heading: 'Status', Data: 'status' },
  ]);

  // { Heading: 'Total Amount Due (GHS)', Data: 'totalAmountDue' },
  // { Heading: 'Issued By', Data: 'issuedBy' },
  // { Heading: 'Payment Date', Data: 'paymentDate' },
  // { Heading: 'Payment Method', Data: 'paymentMethod' },
  // { Heading: 'Penalty Applied', Data: 'penaltyApplied' },
  data = signal([
    {
      fineId: 'F-1001',
      fineType: 'Parking',
      amount: 200.0,
      issuedDate: '2025-01-15',
      dueDate: '2025-02-01',
      status: 'Paid',
      paymentDate: '2025-01-20',
      paymentMethod: 'Mobile Money',
      penaltyApplied: false,
      totalAmountDue: 200.0,
      issuedBy: 'Officer A',
    },
    {
      fineId: 'F-1002',
      fineType: 'Speeding',
      amount: 500.0,
      issuedDate: '2025-02-05',
      dueDate: '2025-02-15',
      status: 'Overdue',
      paymentDate: null,
      paymentMethod: null,
      penaltyApplied: true,
      totalAmountDue: 750.0,
      issuedBy: 'Officer B',
    },
    {
      fineId: 'F-1003',
      fineType: 'No Helmet',
      amount: 300.0,
      issuedDate: '2025-02-10',
      dueDate: '2025-02-25',
      status: 'Unpaid',
      paymentDate: null,
      paymentMethod: null,
      penaltyApplied: false,
      totalAmountDue: 300.0,
      issuedBy: 'Officer C',
    },
    {
      fineId: 'F-1004',
      fineType: 'Red Light Violation',
      amount: 400.0,
      issuedDate: '2025-02-12',
      dueDate: '2025-02-28',
      status: 'Paid',
      paymentDate: '2025-02-15',
      paymentMethod: 'Bank Transfer',
      penaltyApplied: false,
      totalAmountDue: 400.0,
      issuedBy: 'Officer D',
    },
    {
      fineId: 'F-1005',
      fineType: 'Expired License',
      amount: 800.0,
      issuedDate: '2025-01-25',
      dueDate: '2025-02-10',
      status: 'Overdue',
      paymentDate: null,
      paymentMethod: null,
      penaltyApplied: true,
      totalAmountDue: 1100.0,
      issuedBy: 'Officer E',
    },
  ]);
}
