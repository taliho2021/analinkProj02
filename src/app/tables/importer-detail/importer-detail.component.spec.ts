import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImporterDetailComponent } from './importer-detail.component';

describe('ImporterDetailComponent', () => {
  let component: ImporterDetailComponent;
  let fixture: ComponentFixture<ImporterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImporterDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImporterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
