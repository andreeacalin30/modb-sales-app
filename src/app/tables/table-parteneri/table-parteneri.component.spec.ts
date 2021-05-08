import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableParteneriComponent } from './table-parteneri.component';

describe('TableParteneriComponent', () => {
  let component: TableParteneriComponent;
  let fixture: ComponentFixture<TableParteneriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableParteneriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableParteneriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
