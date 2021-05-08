import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLinieVanzareComponent } from './update-linie-vanzare.component';

describe('UpdateLinieVanzareComponent', () => {
  let component: UpdateLinieVanzareComponent;
  let fixture: ComponentFixture<UpdateLinieVanzareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLinieVanzareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLinieVanzareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
