import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsfPartiesComponent } from './isf-parties.component';

describe('IsfPartiesComponent', () => {
  let component: IsfPartiesComponent;
  let fixture: ComponentFixture<IsfPartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsfPartiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsfPartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
