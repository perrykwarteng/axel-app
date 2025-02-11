import { Component } from '@angular/core';
import { ButtonIconComponent } from '../../../Shared/components/button-icon/button-icon.component';
import { ModalComponent } from '../../../Shared/components/modal/modal.component';
import { InputComponent } from '../../../Shared/components/input/input.component';
import { SelectComponent } from '../../../Shared/components/select/select.component';
import { ButtonNormalComponent } from '../../../Shared/components/button-normal/button-normal.component';
import { TableComponent } from '../../../Shared/components/table/table.component';

@Component({
  selector: 'app-config-axle',
  templateUrl: './config-axle.component.html',
  styleUrl: './config-axle.component.css',
  imports: [
    ButtonIconComponent,
    ModalComponent,
    InputComponent,
    ButtonNormalComponent,
    TableComponent,
  ],
})
export class ConfigAxleComponent {
  openAxleType: boolean = false;
  openCommodity: boolean = false;

  axleTypeHead = [
    { Heading: 'Axle Type', Data: 'axleType' },
    { Heading: 'Axle Weight', Data: 'allowedWeight' },
    { Heading: 'A 1', Data: 'axle1' },
    { Heading: 'A 2', Data: 'axle2' },
    { Heading: 'A 3', Data: 'axle3' },
    { Heading: 'A 4', Data: 'axle4' },
    { Heading: 'A 5', Data: 'axle5' },
    { Heading: 'A 6', Data: 'axle6' },
    { Heading: 'A 7', Data: 'axle7' },
    { Heading: 'A 8', Data: 'axle8' },
    { Heading: 'A 9', Data: 'axle9' },
    { Heading: 'Action', Data: '' },
  ];
  commodityHead = [
    { Heading: 'ID', Data: 'commodityId' },
    { Heading: 'Commodity', Data: 'commodity' },
    { Heading: 'Action', Data: '' },
  ];

  axleTypeData = [
    {
      axleType: '7C',
      allowedWeight: 21000,
      axle1: 14000,
      axle2: 0,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '3C',
      allowedWeight: 41000,
      axle1: 14000,
      axle2: 12000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '2B',
      allowedWeight: 31000,
      axle1: 15000,
      axle2: 20000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '3C',
      allowedWeight: 41000,
      axle1: 14000,
      axle2: 12000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '2B',
      allowedWeight: 31000,
      axle1: 15000,
      axle2: 20000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '3C',
      allowedWeight: 41000,
      axle1: 14000,
      axle2: 12000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '2B',
      allowedWeight: 31000,
      axle1: 15000,
      axle2: 20000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '3C',
      allowedWeight: 41000,
      axle1: 14000,
      axle2: 12000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '2B',
      allowedWeight: 31000,
      axle1: 15000,
      axle2: 20000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '3C',
      allowedWeight: 41000,
      axle1: 14000,
      axle2: 12000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '2B',
      allowedWeight: 31000,
      axle1: 15000,
      axle2: 20000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '3C',
      allowedWeight: 41000,
      axle1: 14000,
      axle2: 12000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '2B',
      allowedWeight: 31000,
      axle1: 15000,
      axle2: 20000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '3C',
      allowedWeight: 41000,
      axle1: 14000,
      axle2: 12000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '2B',
      allowedWeight: 31000,
      axle1: 15000,
      axle2: 20000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '3C',
      allowedWeight: 41000,
      axle1: 14000,
      axle2: 12000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '2B',
      allowedWeight: 31000,
      axle1: 15000,
      axle2: 20000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '3C',
      allowedWeight: 41000,
      axle1: 14000,
      axle2: 12000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
    {
      axleType: '2B',
      allowedWeight: 31000,
      axle1: 15000,
      axle2: 20000,
      axle3: 0,
      axle4: 0,
      axle5: 0,
      axle6: 0,
      axle7: 0,
      axle8: 0,
      axle9: 0,
    },
  ];

  commodityData = [{ commodityId: 1, commodity: 'Agric Products' }];

  openAxel() {
    this.openAxleType = true;
  }
  createCommodity() {
    this.openCommodity = true;
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

  close() {
    this.openAxleType = false;
    this.openCommodity = false;
  }
}
