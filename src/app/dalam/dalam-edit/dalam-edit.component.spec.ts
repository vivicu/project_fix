/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DalamEditComponent } from './dalam-edit.component';

describe('DalamEditComponent', () => {
  let component: DalamEditComponent;
  let fixture: ComponentFixture<DalamEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalamEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalamEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
