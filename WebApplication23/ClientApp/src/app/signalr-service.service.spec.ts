import { TestBed, inject } from '@angular/core/testing';

import { SignalrServiceService } from './signalr-service.service';

describe('SignalrServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignalrServiceService]
    });
  });

  it('should be created', inject([SignalrServiceService], (service: SignalrServiceService) => {
    expect(service).toBeTruthy();
  }));
});
