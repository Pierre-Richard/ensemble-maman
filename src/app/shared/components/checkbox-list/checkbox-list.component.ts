import { Component, input } from '@angular/core';
import { Checkbox } from '../../interfaces/Checkbox';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'em-checkbox-list',
  imports: [MatCheckboxModule],
  templateUrl: './checkbox-list.component.html',
  styleUrl: './checkbox-list.component.scss',
})
export class CheckboxListComponent {
  // si possible faire de task un signal
  task = input.required<Checkbox[]>();
}
