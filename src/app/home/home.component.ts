import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { CARD_UI_CONSTANT } from '../constants/constant';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'em-home',
  imports: [CardsComponent, CommonModule, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cardUI = CARD_UI_CONSTANT;
}
