import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationsFormsComponent } from './validations-forms.component';

describe('ValidationsFormsComponent', () => {
  let component: ValidationsFormsComponent;
  let fixture: ComponentFixture<ValidationsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationsFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
