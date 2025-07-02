import { CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CheckboxListComponent } from '../../shared/components/checkbox-list/checkbox-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxLabel } from '../../shared/interfaces/CheckboxLabel';

//1 creer interface pour CheckboxLabelUi
// 2 mettre le form dans le la page checkobx et importer le composant checklist dans le detail compoent et que tout marche
const CheckboxLabelUi: CheckboxLabel = {
  ['oneToTwelve']: '1 à 12 mois',
  ['oneToThree']: '1 à 3 ans',
  ['fourToSixth']: '4 à 6 ans',
  ['sevenToNine']: '7 à 9 ans',
  ['nineAndMore']: '9 et plus',
};
// Pour les garçons ajouter deux taille supplementaire
// Faire en sorte que checkboxLabelUi soit dans le dossier partagé  (shared)
@Component({
  selector: 'em-detail-page',
  imports: [ReactiveFormsModule, MatCheckboxModule, CheckboxListComponent],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss',
})
export class DetailPageComponent {
  private formBuilder = inject(FormBuilder);

  checkboxLabelUi = CheckboxLabelUi;

  sizeForm = this.formBuilder.group({
    oneToTwelve: [false],
    oneToThree: [false],
    fourToSixth: [false],
    sevenToNine: [false],
    nineAndMore: [false],
  });
  tasks = signal<string[]>([]);

  ngOnInit() {
    this.sizeForm.valueChanges.subscribe((x) => {
      console.log('sizeForm', x);
    });
    console.log('Value', Object.keys(this.sizeForm.value));
    this.tasks.set(Object.keys(this.sizeForm.value));
  }
}
