import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  imports: [],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.css',
})
export class ButtonIconComponent {
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() bgStyles: string = '';
}
