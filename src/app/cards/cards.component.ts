import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'em-cards',
  imports: [MatCardModule, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  @Input() title = '';
  @Input() img = '';
  @Input() text = 'Par défaut';
  @Input() backgroundColor = 'red';
}
