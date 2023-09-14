import { TestBed } from '@angular/core/testing';

import { AddTileService } from './add-tile.service';

describe('AddTileService', () => {
  let service: AddTileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
