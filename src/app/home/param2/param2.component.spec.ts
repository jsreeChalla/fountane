import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Param2Component } from './param2.component';

describe('Param2Component', () => {
  let component: Param2Component;
  let fixture: ComponentFixture<Param2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Param2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Param2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
