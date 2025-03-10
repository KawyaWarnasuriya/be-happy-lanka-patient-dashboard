import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APPOINMENTCONFIRMComponent } from './appoinment-confirm.component';

describe('APPOINMENTCONFIRMComponent', () => {
  let component: APPOINMENTCONFIRMComponent;
  let fixture: ComponentFixture<APPOINMENTCONFIRMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APPOINMENTCONFIRMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APPOINMENTCONFIRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
