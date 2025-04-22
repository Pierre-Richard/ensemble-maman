import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrilClothePageComponent } from './gril-clothe-page.component';

describe('GrilClothePageComponent', () => {
  let component: GrilClothePageComponent;
  let fixture: ComponentFixture<GrilClothePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrilClothePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrilClothePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
