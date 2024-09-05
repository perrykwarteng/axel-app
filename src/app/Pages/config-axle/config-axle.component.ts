import { Component } from '@angular/core';
import { ButtonIconComponent } from '../../Shared/components/button-icon/button-icon.component';
import { ModalComponent } from '../../Shared/components/modal/modal.component';
import { InputComponent } from '../../Shared/components/input/input.component';
import { SelectComponent } from '../../Shared/components/select/select.component';

@Component({
  selector: 'app-config-axle',
  standalone: true,
  templateUrl: './config-axle.component.html',
  styleUrl: './config-axle.component.css',
  imports: [
    ButtonIconComponent,
    ModalComponent,
    InputComponent,
    SelectComponent,
  ],
})
export class ConfigAxleComponent {
  openAxleType: boolean = false;
  openAxel() {
    this.openAxleType = !this.openAxleType;
  }

  selectedOption: string = '';
  handleOptionSelected(option: string) {
    this.selectedOption = option;
  }
  axleType: boolean = true;
  commodity: boolean = false;
  setPage(page: string) {
    this.axleType = false;
    this.commodity = false;
    switch (page) {
      case 'alex-type':
        this.axleType = true;
        this.commodity = false;
        break;
      case 'commodity':
        this.axleType = false;
        this.commodity = true;
        break;
      default:
        this.axleType = false;
        this.commodity = false;
    }
  }
}
