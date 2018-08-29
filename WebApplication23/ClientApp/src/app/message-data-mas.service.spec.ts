import { TestBed, inject } from '@angular/core/testing';

import { MessageDataMasService } from './message-data-mas.service';

describe('MessageDataMasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageDataMasService]
    });
  });

  it('should be created', inject([MessageDataMasService], (service: MessageDataMasService) => {
    expect(service).toBeTruthy();
  }));
});
