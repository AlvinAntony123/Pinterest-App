import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { PinterestTopBarSigninComponent } from './pinterest-top-bar-signin.component';
import { UserService } from 'app/services/user.service';
import { LoginService } from 'app/services/login.service';
import { LocalStorageService } from 'app/services/local-storage.service';
import { Router } from '@angular/router';

class MockLoginService {
  authenticateUser(credentials: any) {
    return of('mock-jwt-token');
  }
}

class MockLocalStorageService {
  setStorage(key: string, value: any) {}
}

fdescribe('PinterestTopBarSigninComponent', () => {
  let component: PinterestTopBarSigninComponent;
  let fixture: ComponentFixture<PinterestTopBarSigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinterestTopBarSigninComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [
        UserService,
        FormBuilder,
        {
          provide: LoginService,
          useClass: MockLoginService,
        },
        {
          provide: LocalStorageService,
          useClass: MockLocalStorageService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinterestTopBarSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should call loginService.authenticateUser and navigate to home on successful sign-in', () => {
    const loginService = TestBed.inject(LoginService);
    const storageService = TestBed.inject(LocalStorageService);
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
    const setStorageSpy = spyOn(storageService, 'setStorage');

    const mockResponse = 'mock-jwt-token';
    spyOn(loginService, 'authenticateUser').and.returnValue(of(mockResponse));

    component.SignIn();

    expect(loginService.authenticateUser).toHaveBeenCalledWith(
      JSON.stringify({ username: '', password: '' })
    );
    expect(setStorageSpy).toHaveBeenCalledWith('jwt', mockResponse);
    expect(navigateSpy).toHaveBeenCalledWith(['home']);
    expect(component.inValid).toBeFalse();
  });


});
