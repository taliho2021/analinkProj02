import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsfNewComponent } from './isf-new.component';

describe('IsfNewComponent', () => {
  let component: IsfNewComponent;
  let fixture: ComponentFixture<IsfNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsfNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsfNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
