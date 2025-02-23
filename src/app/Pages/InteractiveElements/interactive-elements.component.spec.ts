import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveElementsComponent } from './interactive-elements.component';

describe('InteractiveElementsComponent', () => {
  let component: InteractiveElementsComponent;
  let fixture: ComponentFixture<InteractiveElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
