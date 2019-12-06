import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Param3Component } from './param3.component';

describe('Param3Component', () => {
  let component: Param3Component;
  let fixture: ComponentFixture<Param3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Param3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Param3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
