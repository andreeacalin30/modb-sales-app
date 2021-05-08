import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProiecteComponent } from './table-proiecte.component';

describe('TableProiecteComponent', () => {
  let component: TableProiecteComponent;
  let fixture: ComponentFixture<TableProiecteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableProiecteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProiecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
