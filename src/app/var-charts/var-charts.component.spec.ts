import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarChartsComponent } from './var-charts.component';

describe('VarChartsComponent', () => {
  let component: VarChartsComponent;
  let fixture: ComponentFixture<VarChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
