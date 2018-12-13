/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LuarItemComponent } from './luar-item.component';

describe('LuarItemComponent', () => {
  let component: LuarItemComponent;
  let fixture: ComponentFixture<LuarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
