import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetRatioCalculatorComponent } from './asset-ratio-calculator.component';

describe('AssetRatioCalculatorComponent', () => {
  let component: AssetRatioCalculatorComponent;
  let fixture: ComponentFixture<AssetRatioCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetRatioCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetRatioCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
