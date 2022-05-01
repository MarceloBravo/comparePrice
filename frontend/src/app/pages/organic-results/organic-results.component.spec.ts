import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicResultsComponent } from './organic-results.component';

describe('OrganicResultsComponent', () => {
  let component: OrganicResultsComponent;
  let fixture: ComponentFixture<OrganicResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganicResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
