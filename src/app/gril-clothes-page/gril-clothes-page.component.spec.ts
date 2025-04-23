import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrilClothesPageComponent } from './gril-clothes-page.component';

describe('GrilClothesPageComponent', () => {
  let component: GrilClothesPageComponent;
  let fixture: ComponentFixture<GrilClothesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrilClothesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrilClothesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
