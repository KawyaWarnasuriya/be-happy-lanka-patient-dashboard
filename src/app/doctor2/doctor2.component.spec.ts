import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doctor2Component } from './doctor2.component';

describe('Doctor2Component', () => {
  let component: Doctor2Component;
  let fixture: ComponentFixture<Doctor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doctor2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doctor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
