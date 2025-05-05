import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'em-cards',
  imports: [MatCardModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  title = input.required<string>();
  img = input.required<string>();
  backgroundColor = input.required<string | number>();
  routerLink = input.required<string>();
}
