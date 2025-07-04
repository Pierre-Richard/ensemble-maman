import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxListComponent } from '../../shared/components/checkbox-list/checkbox-list.component';
import { CheckboxLabel } from '../../shared/interfaces/CheckboxLabel';
import { CouchesService } from '../../shared/services/couches/couches.service';
import { ToysService } from '../../shared/services/toys/toys.service';
import { ProductsService } from '../../shared/services/products/products.service';

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
  dataFromJson: any;

  sizeForm = this.formBuilder.group({
    oneToTwelve: [false],
    oneToThree: [false],
    fourToSixth: [false],
    sevenToNine: [false],
    nineAndMore: [false],
  });
  tasks = signal<string[]>([]);

  constructor(
    private couchesService: CouchesService,
    private toysService: ToysService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.sizeForm.valueChanges.subscribe((x) => {
      console.log('sizeForm', x);
    });
    console.log('Value', Object.keys(this.sizeForm.value));
    this.tasks.set(Object.keys(this.sizeForm.value));

    this.couchesService.listCouches().subscribe((couche) => {
      this.dataFromJson = couche;
      console.log('Couches:', this.dataFromJson);
    });

    this.toysService.lstToys().subscribe((toy) => {
      console.log('Jouets:', toy);
    });
    this.productsService.listProducts().subscribe((product) => {
      console.log('Produits', product);
    });
  }
}
