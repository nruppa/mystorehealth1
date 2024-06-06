import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateESVSComponent } from './create-esvs.component';

describe('CreateESVSComponent', () => {
  let component: CreateESVSComponent;
  let fixture: ComponentFixture<CreateESVSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateESVSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateESVSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
