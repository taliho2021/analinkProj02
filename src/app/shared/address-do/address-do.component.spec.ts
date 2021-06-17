import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDoComponent } from './address-do.component';

describe('AddressDoComponent', () => {
  let component: AddressDoComponent;
  let fixture: ComponentFixture<AddressDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
