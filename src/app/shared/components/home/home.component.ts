import { Component } from '@angular/core';
import { CARD_UI_CONSTANT } from '../../../shared/constants/card_Ui_Constant';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';

@Component({
  selector: 'em-home',
  imports: [CommonModule, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cardUI = CARD_UI_CONSTANT;
}
