import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroGridComponent } from './filtro-grid.component';

describe('FiltroGridComponent', () => {
  let component: FiltroGridComponent;
  let fixture: ComponentFixture<FiltroGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
