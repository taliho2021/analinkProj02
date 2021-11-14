import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrySComponent } from './entry-s.component';

describe('EntrySComponent', () => {
  let component: EntrySComponent;
  let fixture: ComponentFixture<EntrySComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrySComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrySComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
