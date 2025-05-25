import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClothesPageComponent } from './detail-clothes-page.component';

describe('GirlClothesPageComponent', () => {
  let component: DetailClothesPageComponent;
  let fixture: ComponentFixture<DetailClothesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailClothesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailClothesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
