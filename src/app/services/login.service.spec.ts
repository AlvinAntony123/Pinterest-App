import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';

describe('LoginService', () => {
  let service: LoginService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        LoginService,
        HttpClient,
      ]
    });
    service = TestBed.inject(LoginService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
