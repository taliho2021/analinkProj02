import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmsComponent } from './ams.component';

describe('AmsComponent', () => {
  let component: AmsComponent;
  let fixture: ComponentFixture<AmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
