import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVanzariComponent } from './table-vanzari.component';

describe('TableVanzariComponent', () => {
  let component: TableVanzariComponent;
  let fixture: ComponentFixture<TableVanzariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVanzariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVanzariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
