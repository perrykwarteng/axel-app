import { Component, Input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() visible: boolean = true;
  @Input() Header: string = 'Header';
  @Input() styles = {
    width: '40vw',
    background: '#fff',
    padding: '10px 15px',
    borderRadius: '10px',
  };
}
