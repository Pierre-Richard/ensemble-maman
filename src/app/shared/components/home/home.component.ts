import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';

import { Card } from '../../interfaces/card';
import { CardsListComponent } from '../cards-list/cards-list.component';
import { CARD_UI_CONSTANT } from '../../constants/card-ui.constant';

@Component({
  selector: 'em-home',
  imports: [CommonModule, CarouselComponent, CardsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cards: Card[] = CARD_UI_CONSTANT;
}
