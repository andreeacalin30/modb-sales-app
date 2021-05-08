import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormParteneriComponent } from './form-parteneri.component';

describe('FormParteneriComponent', () => {
  let component: FormParteneriComponent;
  let fixture: ComponentFixture<FormParteneriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormParteneriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormParteneriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
