import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Param4Component } from './param4.component';

describe('Param4Component', () => {
  let component: Param4Component;
  let fixture: ComponentFixture<Param4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Param4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Param4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
