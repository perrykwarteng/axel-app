import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAxleComponent } from './config-axle.component';

describe('ConfigAxleComponent', () => {
  let component: ConfigAxleComponent;
  let fixture: ComponentFixture<ConfigAxleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigAxleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigAxleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
