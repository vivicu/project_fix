/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LuarListComponent } from './luar-list.component';

describe('LuarListComponent', () => {
  let component: LuarListComponent;
  let fixture: ComponentFixture<LuarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
