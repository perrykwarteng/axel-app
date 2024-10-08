import { Component } from '@angular/core';
import { ButtonIconComponent } from "../../../Shared/components/button-icon/button-icon.component";
import { SearchInputComponent } from "../../../Shared/components/search-input/search-input.component";
import { ModalComponent } from "../../../Shared/components/modal/modal.component";
import { InputComponent } from "../../../Shared/components/input/input.component";
import { ButtonNormalComponent } from "../../../Shared/components/button-normal/button-normal.component";
import { SelectComponent } from '../../../Shared/components/select/select.component';

@Component({
  selector: 'app-monitoring-users',
  standalone: true,
  imports: [ButtonIconComponent, SearchInputComponent, ModalComponent, InputComponent, ButtonNormalComponent, SelectComponent],
  templateUrl: './monitoring-users.component.html',
  styleUrl: './monitoring-users.component.css'
})
export class MonitoringUsersComponent {

  OfficerModal: boolean = false

  constructor(){}
  

  openAddNewOfficer(){
    this.OfficerModal = true
  }
  close(){
    this.OfficerModal = false
  }

}
