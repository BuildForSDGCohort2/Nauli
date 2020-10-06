import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayToConductorComponent } from './pay-to-conductor.component';

describe('PayToConductorComponent', () => {
  let component: PayToConductorComponent;
  let fixture: ComponentFixture<PayToConductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayToConductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayToConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
