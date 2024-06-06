import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HdphoneticketComponent } from './hdphoneticket.component';

describe('HdphoneticketComponent', () => {
  let component: HdphoneticketComponent;
  let fixture: ComponentFixture<HdphoneticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HdphoneticketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HdphoneticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
