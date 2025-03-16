import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighContrastComponent } from './high-contrast.component';

describe('HighContrastComponent', () => {
  let component: HighContrastComponent;
  let fixture: ComponentFixture<HighContrastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighContrastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighContrastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
