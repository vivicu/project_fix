/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LuarStartComponent } from './luar-start.component';

describe('LuarStartComponent', () => {
  let component: LuarStartComponent;
  let fixture: ComponentFixture<LuarStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuarStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuarStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
