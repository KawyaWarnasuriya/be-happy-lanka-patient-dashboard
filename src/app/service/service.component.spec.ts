import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SERVICEComponent } from './service.component';

describe('SERVICEComponent', () => {
  let component: SERVICEComponent;
  let fixture: ComponentFixture<SERVICEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SERVICEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SERVICEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
