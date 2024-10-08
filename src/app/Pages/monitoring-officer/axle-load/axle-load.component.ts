import { Component } from '@angular/core';
import { ButtonIconComponent } from '../../../Shared/components/button-icon/button-icon.component';
import { ModalComponent } from '../../../Shared/components/modal/modal.component';
import { InputComponent } from '../../../Shared/components/input/input.component';
import { SelectComponent } from '../../../Shared/components/select/select.component';
import { SearchInputComponent } from '../../../Shared/components/search-input/search-input.component';

@Component({
  selector: 'app-axle-load',
  standalone: true,
  imports: [
    ButtonIconComponent,
    ModalComponent,
    InputComponent,
    SelectComponent,
    SearchInputComponent,
  ],
  templateUrl: './axle-load.component.html',
  styleUrl: './axle-load.component.css',
})
export class AxleLoadComponent {}
