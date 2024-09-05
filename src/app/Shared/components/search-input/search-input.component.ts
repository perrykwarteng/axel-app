import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
})
export class SearchInputComponent {
  @Input() label: string = 'Label';
  @Input() placeholder: string = 'Enter here ...';
  @Input() type: string = 'text';
  @Input() value: string = '';
  @Input() inputId: string = '';
}
