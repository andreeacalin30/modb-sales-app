import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableArticolComponent } from './table-articol.component';

describe('TableArticolComponent', () => {
  let component: TableArticolComponent;
  let fixture: ComponentFixture<TableArticolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableArticolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableArticolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
