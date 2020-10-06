import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTresColunasComponent } from './grid-tres-colunas.component';

describe('GridTresColunasComponent', () => {
  let component: GridTresColunasComponent;
  let fixture: ComponentFixture<GridTresColunasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTresColunasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTresColunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
