import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'em-cards',
  imports: [MatCardModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  @Input() img = '';
  @Input() text = 'Par défaut';
  @Input() backgroundColor = '';
}
