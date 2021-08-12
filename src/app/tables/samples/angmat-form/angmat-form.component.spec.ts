import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngmatFormComponent } from './angmat-form.component';

describe('AngmatFormComponent', () => {
  let component: AngmatFormComponent;
  let fixture: ComponentFixture<AngmatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngmatFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngmatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
