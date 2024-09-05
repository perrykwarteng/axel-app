import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() label: string = 'Label';
  @Input() placeholder: string = 'Enter here ...';
  @Input() type: string = 'text';
  @Input() value: string | number = '';
  @Input() inputId: string = '';
}
