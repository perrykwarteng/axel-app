import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navlist',
    imports: [RouterLink],
    templateUrl: './navlist.component.html',
    styleUrl: './navlist.component.css'
})
export class NavlistComponent {
  @Input() active: boolean = false;
  @Input() iconActSrc: string = '';
  @Input() iconSrc: string = '';
  @Input() label: string = '';
  @Input() page: string = '';

}
