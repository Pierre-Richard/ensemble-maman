import { Component } from '@angular/core';
import { MessageModule } from 'primeng/message';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'em-carousel',
  imports: [MessageModule, CarouselModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  images: any[] = [
    {
      previewImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png',
      thumbnailImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      previewImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
      thumbnailImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
      alt: 'Description for Image 2',
      title: 'Title 2',
    },
    {
      previewImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/Java.png',
      thumbnailImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/Java.png',
      alt: 'Description for Image 3',
      title: 'Title 3',
    },
    {
      previewImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png',
      thumbnailImageSrc:
        'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png',
      alt: 'Description for Image 4',
      title: 'Title 4',
    },
  ];
}
