import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProiecteComponent } from './form-proiecte.component';

describe('FormProiecteComponent', () => {
  let component: FormProiecteComponent;
  let fixture: ComponentFixture<FormProiecteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProiecteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProiecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
