import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button-normal',
    imports: [],
    templateUrl: './button-normal.component.html',
    styleUrl: './button-normal.component.css'
})
export class ButtonNormalComponent {
  @Input() text: string = '';
  @Input() bgStyles: string = '';
}
