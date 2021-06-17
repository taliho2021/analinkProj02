import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsfHtsComponent } from './isf-hts.component';

describe('IsfHtsComponent', () => {
  let component: IsfHtsComponent;
  let fixture: ComponentFixture<IsfHtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsfHtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsfHtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
