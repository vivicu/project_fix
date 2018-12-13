/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LuarEditComponent } from './luar-edit.component';

describe('LuarEditComponent', () => {
  let component: LuarEditComponent;
  let fixture: ComponentFixture<LuarEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuarEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
