import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'em-home',
  imports: [CardsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cardUI = CARD_UI_CONSTANT;
}
