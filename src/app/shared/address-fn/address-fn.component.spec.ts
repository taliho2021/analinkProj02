import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFnComponent } from './address-fn.component';

describe('AddressFnComponent', () => {
  let component: AddressFnComponent;
  let fixture: ComponentFixture<AddressFnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressFnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
