import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineShoppingComponent } from './inline-shopping.component';

describe('InlineShoppingComponent', () => {
  let component: InlineShoppingComponent;
  let fixture: ComponentFixture<InlineShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineShoppingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
