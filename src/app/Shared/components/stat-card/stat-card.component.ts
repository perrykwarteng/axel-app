import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [],
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.css',
})
export class StatCardComponent {
  @Input() backgroundColor: string = '';
  @Input() textValueStyles: string = '';
  @Input() textStyles: string = '';
  @Input() valueLabel: string = '';
  @Input() value: number = 0;
}
