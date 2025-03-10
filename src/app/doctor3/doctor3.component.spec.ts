import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doctor3Component } from './doctor3.component';

describe('Doctor3Component', () => {
  let component: Doctor3Component;
  let fixture: ComponentFixture<Doctor3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doctor3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doctor3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
