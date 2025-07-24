import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxListComponent } from '../../shared/components/checkbox-list/checkbox-list.component';
import { CheckboxLabel } from '../../shared/interfaces/checkboxLabel';
import { ProductClient } from '../../shared/client/productClient/productClient.client';
import { ToyClient } from '../../shared/client/toyClient/toyClient.client';
import { HygieneProductClient } from '../../shared/client/hygieneProduct/hygieneProduct.client';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../shared/interfaces/product';
import {
  selectProductsList,
  selectProductsLoading,
} from '../../store/product.selector';
import { loadProduct } from '../../store/product.actions';

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
  private store = inject(Store);
  productList$: Observable<Product[]> = this.store.select(selectProductsList);
  loading$: Observable<boolean> = this.store.select(selectProductsLoading);
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

    console.log(
      'Porducts',
      this.productList$.subscribe((e) => e)
    );

    console.log(
      'Users !!!!!!s',
      this.users.findIndex((user) => {
        user.name === 'Alice';
      })
    );
    //this.modifiedName();
    //this.pairOrImpair(1);
    //this.findIndexPair();
    //this.findUserWithEmail();
    //his.deleteUserViaIndex(1);
    this.AddElementToArray('cerise');
  }

  //1. Modifier un name via findIndex

  users = [
    { id: 1, name: 'Alice' },
    { id: 3, name: 'Bob' },
    { id: 5, name: 'Charlie' },
  ];

  //je veux modifier la key name par une nouvelle valeur
  public modifiedName() {
    // 1- recuperer la valeur du name que je veux modifier
    let findIndex = this.users.findIndex((value) => value.name === 'Alice');
    let modifiedName = (this.users[findIndex].name = 'Pierre');
    console.log('FindIndex', modifiedName);
    console.log('FindIndex', this.users);
  }

  //2. Trouver l’index du premier nombre pair

  numbers = [1, 3, 7, 10, 15];
  public findIndexPair() {
    this.numbers.findIndex((index) => {
      if (index % 2 === 0) {
        console.log(index + 'est pair');
      }
    });
  }

  //3. Trouver un utilisateur avec un email

  userss = [
    { id: 1, email: 'alice@test.com' },
    { id: 2, email: 'bob@test.com' },
  ];

  findUserWithEmail() {
    let result = this.userss.find((user) => user.email);
    console.log('result', result);
  }

  //4. Supprimer un objet via son index
  items = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' },
  ];

  deleteUserViaIndex(id: number) {
    let result = this.items.filter((user) => user.id !== id);
    console.log('deleteUserViaIndex', result);
  }

  //5. Ajouter un élément s’il n’existe pas

  fruits = ['pomme', 'banane', 'orange'];
  fruitToAdd = 'kiwi';

  AddElementToArray(value: string) {
    let includes = this.fruits.includes(value);
    if (includes === true) {
      console.log('valeur existe deja dans le tableau');
    } else {
      let result = this.fruits.push(value);
      console.log('Nombres de fruits', result);
      console.log('fruits', this.fruits);
    }
  }
}
