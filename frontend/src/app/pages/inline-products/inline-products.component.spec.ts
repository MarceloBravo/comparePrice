import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineProductsComponent } from './inline-products.component';

describe('InlineProductsComponent', () => {
  let component: InlineProductsComponent;
  let fixture: ComponentFixture<InlineProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
