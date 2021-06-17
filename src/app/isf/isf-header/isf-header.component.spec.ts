import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsfHeaderComponent } from './isf-header.component';

describe('IsfHeaderComponent', () => {
  let component: IsfHeaderComponent;
  let fixture: ComponentFixture<IsfHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsfHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
