import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsfExcelComponent } from './isf-excel.component';

describe('IsfExcelComponent', () => {
  let component: IsfExcelComponent;
  let fixture: ComponentFixture<IsfExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsfExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsfExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
