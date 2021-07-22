import { CountryService } from './country.service';
import { TestBed } from '@angular/core/testing';

describe('CountryserviceService', () => {
  let service: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
