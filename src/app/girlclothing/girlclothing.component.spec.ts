import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlclothingComponent } from './girlclothing.component';

describe('GirlclothingComponent', () => {
  let component: GirlclothingComponent;
  let fixture: ComponentFixture<GirlclothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GirlclothingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GirlclothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
