import { Component } from '@angular/core';

import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'em-home',
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
