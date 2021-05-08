import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRaportComponent } from './form-raport.component';

describe('FormRaportComponent', () => {
  let component: FormRaportComponent;
  let fixture: ComponentFixture<FormRaportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRaportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRaportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
