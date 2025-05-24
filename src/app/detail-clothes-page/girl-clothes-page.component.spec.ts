import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlClothesPageComponent } from './girl-clothes-page.component';

describe('GirlClothesPageComponent', () => {
  let component: GirlClothesPageComponent;
  let fixture: ComponentFixture<GirlClothesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GirlClothesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GirlClothesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
