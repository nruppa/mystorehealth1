import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionValueComponent } from './selection-value.component';

describe('SelectionValueComponent', () => {
  let component: SelectionValueComponent;
  let fixture: ComponentFixture<SelectionValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
