import { Component, input, signal, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Card } from '../../interfaces/Card';

@Component({
  selector: 'em-cards',
  imports: [MatCardModule, RouterLink, RouterOutlet],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  card = input.required<Card>();
}
