import { Component } from '@angular/core';
import { Checkbox } from '../../interfaces/Checkbox';

@Component({
  selector: 'em-checkbox-list',
  imports: [],
  templateUrl: './checkbox-list.component.html',
  styleUrl: './checkbox-list.component.scss',
})
export class CheckboxListComponent {
  // si possible faire de task un signal
  task: Checkbox[] = [
    {
      name: '1an',
      completed: false,
    },
  ];
}
