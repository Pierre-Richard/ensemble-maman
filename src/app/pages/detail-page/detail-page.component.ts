import { Component } from '@angular/core';
import { Card } from '../../shared/interfaces/Card';
import { CardsListComponent } from '../../shared/components/cards-list/cards-list.component';
import { CARD_UI_CONSTANT } from '../../shared/constants/card-Ui.constant';
import { CheckboxListComponent } from '../../shared/components/checkbox-list/checkbox-list.component';
import { CHECKBOX_TASK_CONSTANT } from '../../shared/constants/checkbox-task.constant';

@Component({
  selector: 'em-detail-page',
  imports: [CheckboxListComponent],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss',
})
export class DetailPageComponent {
  task = CHECKBOX_TASK_CONSTANT;
}
