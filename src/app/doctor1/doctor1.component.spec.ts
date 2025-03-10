import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doctor1Component } from './doctor1.component';

describe('Doctor1Component', () => {
  let component: Doctor1Component;
  let fixture: ComponentFixture<Doctor1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doctor1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doctor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
