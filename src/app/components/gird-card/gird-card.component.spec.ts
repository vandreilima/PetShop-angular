import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirdCardComponent } from './gird-card.component';

describe('GirdCardComponent', () => {
  let component: GirdCardComponent;
  let fixture: ComponentFixture<GirdCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirdCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
