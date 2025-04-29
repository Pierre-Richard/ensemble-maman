import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'em-home',
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title: string = "J'utilise le input";
}
