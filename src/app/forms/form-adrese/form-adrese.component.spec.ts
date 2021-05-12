import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdreseComponent } from './form-adrese.component';

describe('FormAdreseComponent', () => {
  let component: FormAdreseComponent;
  let fixture: ComponentFixture<FormAdreseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAdreseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAdreseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
