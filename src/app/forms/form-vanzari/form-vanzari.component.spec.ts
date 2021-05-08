import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVanzariComponent } from './form-vanzari.component';

describe('FormVanzariComponent', () => {
  let component: FormVanzariComponent;
  let fixture: ComponentFixture<FormVanzariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVanzariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVanzariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
