import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficCantitateJudeteComponent } from './grafic-cantitate-judete.component';

describe('GraficCantitateJudeteComponent', () => {
  let component: GraficCantitateJudeteComponent;
  let fixture: ComponentFixture<GraficCantitateJudeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficCantitateJudeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficCantitateJudeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
