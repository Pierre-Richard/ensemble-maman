import { Component, input, signal, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Card } from '../../interfaces/Card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'em-cards',
  imports: [MatCardModule, RouterLink, RouterOutlet, CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  card = input.required<Card>();
}
