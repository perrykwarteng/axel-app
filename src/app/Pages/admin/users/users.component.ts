import { Component, signal } from '@angular/core';
import { ButtonIconComponent } from '../../../Shared/components/button-icon/button-icon.component';
import { ButtonNormalComponent } from '../../../Shared/components/button-normal/button-normal.component';
import { InputComponent } from '../../../Shared/components/input/input.component';
import { ModalComponent } from '../../../Shared/components/modal/modal.component';
import { TableComponent } from '../../../Shared/components/table/table.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [
    ButtonIconComponent,
    ModalComponent,
    InputComponent,
    ButtonNormalComponent,
    TableComponent,
    CheckboxModule,
    FormsModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  userModal: boolean = false;
  filterName = ['userName', 'fullName', 'email', 'station'];
  userTable = signal([
    { Heading: 'UserName', Data: 'userName' },
    { Heading: 'Full Name', Data: 'fullName' },
    { Heading: 'Email', Data: 'email' },
    { Heading: 'Phone Number', Data: 'phoneNumber' },
    { Heading: 'Station', Data: 'station' },
    { Heading: 'Action', Data: '' },
  ]);
  data = signal([
    {
      userName: 'user123',
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phoneNumber: '+1234567890',
      station: 'New York',
    },
    {
      userName: 'jane_smith',
      fullName: 'Jane Smith',
      email: 'jane.smith@example.com',
      phoneNumber: '+9876543210',
      station: 'Los Angeles',
    },
    {
      userName: 'mike_brown',
      fullName: 'Mike Brown',
      email: 'mike.brown@example.com',
      phoneNumber: '+1122334455',
      station: 'Chicago',
    },
    {
      userName: 'anna_white',
      fullName: 'Anna White',
      email: 'anna.white@example.com',
      phoneNumber: '+9988776655',
      station: 'Houston',
    },
    {
      userName: 'robert_johnson',
      fullName: 'Robert Johnson',
      email: 'robert.johnson@example.com',
      phoneNumber: '+2233445566',
      station: 'San Francisco',
    },
    {
      userName: 'lisa_adams',
      fullName: 'Lisa Adams',
      email: 'lisa.adams@example.com',
      phoneNumber: '+6677889900',
      station: 'Seattle',
    },
    {
      userName: 'david_clark',
      fullName: 'David Clark',
      email: 'david.clark@example.com',
      phoneNumber: '+5544332211',
      station: 'Boston',
    },
    {
      userName: 'emily_watson',
      fullName: 'Emily Watson',
      email: 'emily.watson@example.com',
      phoneNumber: '+1122113344',
      station: 'Denver',
    },
    {
      userName: 'mark_taylor',
      fullName: 'Mark Taylor',
      email: 'mark.taylor@example.com',
      phoneNumber: '+8899001122',
      station: 'Atlanta',
    },
    {
      userName: 'susan_moore',
      fullName: 'Susan Moore',
      email: 'susan.moore@example.com',
      phoneNumber: '+7766554433',
      station: 'Dallas',
    },
  ]);

  selectedCategories: String[] = [];

  categories: any[] = [
    { name: 'Sub-Admin' },
    { name: 'Monitoring Officer' },
    { name: 'Auditor' },
    { name: 'Cashier ' },
  ];

  openAddNewUser() {
    this.userModal = true;
  }
  close() {
    this.userModal = false;
  }
}
