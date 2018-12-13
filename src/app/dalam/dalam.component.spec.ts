/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DalamComponent } from './dalam.component';

describe('DalamComponent', () => {
  let component: DalamComponent;
  let fixture: ComponentFixture<DalamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
