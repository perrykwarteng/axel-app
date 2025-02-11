import { Component, input } from '@angular/core';

@Component({
  selector: 'app-fine-stat',
  imports: [],
  templateUrl: './fine-stat.component.html',
  styleUrl: './fine-stat.component.css',
})
export class FineStatComponent {
  title = input<string>();
  icon = input<string>();
  amount = input<number>();
  total = input<number>();
  bgColor = input<string>();
}
