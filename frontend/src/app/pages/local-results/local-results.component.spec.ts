import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalResultsComponent } from './local-results.component';

describe('LocalResultsComponent', () => {
  let component: LocalResultsComponent;
  let fixture: ComponentFixture<LocalResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
