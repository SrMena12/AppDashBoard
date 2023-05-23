/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FacgastosComponent } from './facgastos.component';

describe('FacgastosComponent', () => {
  let component: FacgastosComponent;
  let fixture: ComponentFixture<FacgastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacgastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacgastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
