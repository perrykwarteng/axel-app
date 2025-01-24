import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
    selector: 'app-top-bar',
    imports: [CardComponent],
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.css'
})
export class TopBarComponent {}
