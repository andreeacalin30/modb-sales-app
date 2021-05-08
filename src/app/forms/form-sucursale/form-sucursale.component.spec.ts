import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSucursaleComponent } from './form-sucursale.component';

describe('FormSucursaleComponent', () => {
  let component: FormSucursaleComponent;
  let fixture: ComponentFixture<FormSucursaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSucursaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSucursaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
