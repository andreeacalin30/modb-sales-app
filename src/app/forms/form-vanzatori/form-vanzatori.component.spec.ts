import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVanzatoriComponent } from './form-vanzatori.component';

describe('FormVanzatoriComponent', () => {
  let component: FormVanzatoriComponent;
  let fixture: ComponentFixture<FormVanzatoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVanzatoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVanzatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
