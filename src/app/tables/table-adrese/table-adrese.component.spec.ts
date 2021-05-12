import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAdreseComponent } from './table-adrese.component';

describe('TableAdreseComponent', () => {
  let component: TableAdreseComponent;
  let fixture: ComponentFixture<TableAdreseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAdreseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAdreseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
