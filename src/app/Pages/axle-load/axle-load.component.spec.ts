import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxleLoadComponent } from './axle-load.component';

describe('AxleLoadComponent', () => {
  let component: AxleLoadComponent;
  let fixture: ComponentFixture<AxleLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AxleLoadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AxleLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
