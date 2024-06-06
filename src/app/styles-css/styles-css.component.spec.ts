import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesCssComponent } from './styles-css.component';

describe('StylesCssComponent', () => {
  let component: StylesCssComponent;
  let fixture: ComponentFixture<StylesCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylesCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylesCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
