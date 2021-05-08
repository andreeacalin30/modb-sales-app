import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVanzatoriComponent } from './table-vanzatori.component';

describe('TableVanzatoriComponent', () => {
  let component: TableVanzatoriComponent;
  let fixture: ComponentFixture<TableVanzatoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVanzatoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVanzatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
