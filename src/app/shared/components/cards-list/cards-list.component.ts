import { Component, input } from '@angular/core';
import { Card } from '../../interfaces/card';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'em-cards-list',
  imports: [CommonModule, CardsComponent],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent {
  cardList = input.required<Card[]>();
}
