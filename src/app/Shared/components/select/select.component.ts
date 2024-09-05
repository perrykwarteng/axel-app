import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  @Input() label: string = 'Select an option';
  @Input() options: string[] = [];
  @Input() placeholder: string = 'Select...';
  @Input() selected: string | null = null;
  @Output() optionSelected = new EventEmitter<string>();
  isOpen: boolean = false;

  constructor(private eRef: ElementRef) {}

  toggleOptions() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selected = option;
    this.isOpen = false;
    this.optionSelected.emit(this.selected);
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
