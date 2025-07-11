import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxListComponent } from '../../shared/components/checkbox-list/checkbox-list.component';
import { CheckboxLabel } from '../../shared/interfaces/checkboxLabel';
import { ProductClient } from '../../shared/client/productClient/productClient.client';
import { ToyClient } from '../../shared/client/toyClient/toyClient.client';
import { HygieneProductClient } from '../../shared/client/hygieneProduct/hygieneProduct.client';

const CheckboxLabelUi: CheckboxLabel = {
  ['oneToTwelve']: '1 à 12 mois',
  ['oneToThree']: '1 à 3 ans',
  ['fourToSixth']: '4 à 6 ans',
  ['sevenToNine']: '7 à 9 ans',
  ['nineAndMore']: '9 et plus',
};

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

  constructor(
    private hygieneProductClient: HygieneProductClient,
    private toyClient: ToyClient,
    private productClient: ProductClient
  ) {}

  ngOnInit() {
    this.sizeForm.valueChanges.subscribe((x) => {
      console.log('sizeForm', x);
    });
    console.log('Value', Object.keys(this.sizeForm.value));
    this.tasks.set(Object.keys(this.sizeForm.value));

    this.hygieneProductClient
      .getHygieneProduct()
      .subscribe((hygieneProduct) => {
        console.log(
          'hygieneProduct:',
          hygieneProduct.map((hygiene) => hygiene.title)
        );
      });

    this.toyClient.getlistToys().subscribe((toy) => {
      console.log(
        'Jouets:',
        toy.map((a) => a.actif)
      );
    });
    this.productClient.getlistProducts().subscribe((productClient) => {
      console.log(
        'Produits - Client',
        productClient.map((product) => product.title)
      );
    });
  }
}
