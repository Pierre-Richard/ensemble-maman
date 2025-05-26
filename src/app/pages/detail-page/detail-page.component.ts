import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/Card';
import { CardsComponent } from '../../shared/components/cards/cards.component';

@Component({
  selector: 'em-detail-page',
  imports: [CardsComponent],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss',
})
export class DetailPageComponent {
  cards: Card = {
    title: 'Vêtements fille',
    img: 'assets/robe-rose.jpg',
    backgroundColor: 'green',
    link: '/detail',
  };
}
