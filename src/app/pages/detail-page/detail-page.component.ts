import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/Card';
import { CardsListComponent } from '../../shared/components/cards-list/cards-list.component';
import { CARD_UI_CONSTANT } from '../../shared/constants/card_Ui_Constant';

@Component({
  selector: 'em-detail-page',
  imports: [CardsListComponent],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss',
})
export class DetailPageComponent {
  tab: Card[] = CARD_UI_CONSTANT;
}
