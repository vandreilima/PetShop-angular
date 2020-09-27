import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadFiltroComponent } from './cad-filtro.component';

describe('CadFiltroComponent', () => {
  let component: CadFiltroComponent;
  let fixture: ComponentFixture<CadFiltroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadFiltroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
