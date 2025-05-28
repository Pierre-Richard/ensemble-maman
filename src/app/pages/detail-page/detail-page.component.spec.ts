import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPageComponent } from './detail-page.component';

describe('GirlClothesPageComponent', () => {
  let component: DetailPageComponent;
  let fixture: ComponentFixture<DetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
