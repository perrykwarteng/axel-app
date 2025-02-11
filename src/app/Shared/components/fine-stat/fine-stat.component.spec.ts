import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineStatComponent } from './fine-stat.component';

describe('FineStatComponent', () => {
  let component: FineStatComponent;
  let fixture: ComponentFixture<FineStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FineStatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FineStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
