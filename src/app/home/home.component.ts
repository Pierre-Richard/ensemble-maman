import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { CARD_UI_CONSTANT } from '../constants/constant';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'em-home',
  imports: [CardsComponent, CommonModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cards = CARD_UI_CONSTANT;
}
