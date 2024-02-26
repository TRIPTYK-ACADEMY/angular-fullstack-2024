import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtterComponent } from './otter.component';

describe('OtterComponent', () => {
  let component: OtterComponent;
  let fixture: ComponentFixture<OtterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
