import { Component, inject, signal } from '@angular/core';
import { Card } from '../../shared/interfaces/Card';
import { CardsListComponent } from '../../shared/components/cards-list/cards-list.component';
import { CARD_UI_CONSTANT } from '../../shared/constants/card-Ui.constant';
import { CheckboxListComponent } from '../../shared/components/checkbox-list/checkbox-list.component';
import { CHECKBOX_TASK_CONSTANT } from '../../shared/constants/checkbox-task.constant';
import {
  FormBuilder,
  ReactiveFormsModule,
  FormControl,
  FormControlName,
} from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxLabel } from '../../shared/interfaces/CheckboxLabel';

//1 creer interface pour CheckboxLabelUi
// 2 mettre le form dans le la page checkobx et importer le composant checklist dans le detail compoent et que tout marche

@Component({
  selector: 'em-detail-page',
  imports: [ReactiveFormsModule, MatCheckboxModule, CheckboxListComponent],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss',
})
export class DetailPageComponent {
  test = [];
}
