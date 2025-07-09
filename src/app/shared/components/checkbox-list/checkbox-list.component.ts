import { Component, inject, Input, input, signal } from '@angular/core';
import { Checkbox } from '../../interfaces/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxLabel } from '../../interfaces/checkboxLabel';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  checkboxLabelUi = CheckboxLabelUi;
  @Input() form!: FormGroup;
  tasks = input.required<string[]>();
}
