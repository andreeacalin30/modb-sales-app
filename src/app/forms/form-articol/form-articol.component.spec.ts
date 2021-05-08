import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArticolComponent } from './form-articol.component';

describe('FormArticolComponent', () => {
  let component: FormArticolComponent;
  let fixture: ComponentFixture<FormArticolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormArticolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArticolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
