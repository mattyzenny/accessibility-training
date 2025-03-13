import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedDesignsComponent } from './advanced-designs.component';

describe('AdvancedDesignsComponent', () => {
  let component: AdvancedDesignsComponent;
  let fixture: ComponentFixture<AdvancedDesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedDesignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
