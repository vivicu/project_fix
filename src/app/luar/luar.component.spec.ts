/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LuarComponent } from './luar.component';

describe('LuarComponent', () => {
  let component: LuarComponent;
  let fixture: ComponentFixture<LuarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
