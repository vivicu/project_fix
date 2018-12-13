/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DalamListComponent } from './dalam-list.component';

describe('DalamListComponent', () => {
  let component: DalamListComponent;
  let fixture: ComponentFixture<DalamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
