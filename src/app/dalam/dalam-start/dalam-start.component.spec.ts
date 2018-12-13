/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DalamStartComponent } from './dalam-start.component';

describe('DalamStartComponent', () => {
  let component: DalamStartComponent;
  let fixture: ComponentFixture<DalamStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalamStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalamStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
