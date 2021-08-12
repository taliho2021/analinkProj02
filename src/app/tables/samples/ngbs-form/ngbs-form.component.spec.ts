import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbsFormComponent } from './ngbs-form.component';

describe('NgbsFormComponent', () => {
  let component: NgbsFormComponent;
  let fixture: ComponentFixture<NgbsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
