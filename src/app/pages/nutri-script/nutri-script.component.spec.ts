import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutriScriptComponent } from './nutri-script.component';

describe('NutriScriptComponent', () => {
  let component: NutriScriptComponent;
  let fixture: ComponentFixture<NutriScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutriScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutriScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
