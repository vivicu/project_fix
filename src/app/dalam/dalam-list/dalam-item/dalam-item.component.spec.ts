/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DalamItemComponent } from './dalam-item.component';

describe('DalamItemComponent', () => {
  let component: DalamItemComponent;
  let fixture: ComponentFixture<DalamItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalamItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalamItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
