import { Component, inject, input, signal } from '@angular/core';
import { Checkbox } from '../../interfaces/Checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxLabel } from '../../interfaces/CheckboxLabel';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

const CheckboxLabelUi: CheckboxLabel = {
  ['oneToTwelve']: '1 à 12 mois',
  ['oneToThree']: '1 à 3 ans',
  ['fourToSixth']: '4 à 6 ans',
  ['sevenToNine']: '7 à 9 ans',
  ['nineAndMore']: '9 et plus',
};
@Component({
  selector: 'em-checkbox-list',
  imports: [ReactiveFormsModule, MatCheckboxModule],
  templateUrl: './checkbox-list.component.html',
  styleUrl: './checkbox-list.component.scss',
})
export class CheckboxListComponent {
  task = input.required<string[]>();

  tasks = signal<string[]>([]);
  checkboxLabelUi = CheckboxLabelUi;

  private formBuilder = inject(FormBuilder);

  sizeForm = this.formBuilder.group({
    oneToTwelve: [false],
    oneToThree: [false],
    fourToSixth: [false],
    sevenToNine: [false],
    nineAndMore: [false],
  });

  ngOnInit() {
    this.sizeForm.valueChanges.subscribe((x) => {
      console.log('sizeForm', x);
    });
    console.log('Value', Object.keys(this.sizeForm.value));
    this.tasks.set(Object.keys(this.sizeForm.value));
  }
}
