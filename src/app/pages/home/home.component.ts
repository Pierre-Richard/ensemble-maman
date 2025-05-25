import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { CARD_UI_CONSTANT } from '../../shared/constants/card_Ui_Constant';

@Component({
  selector: 'em-home',
  imports: [CardsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cardUI = CARD_UI_CONSTANT;
}
