import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { PinterestTopBarSigninComponent } from './pinterest-top-bar-signin.component';
import { AuthService } from 'app/services/auth.service';
import { LocalStorageService } from 'app/services/local-storage.service';

describe('PinterestTopBarSigninComponent', () => {
  let component: PinterestTopBarSigninComponent;
  let fixture: ComponentFixture<PinterestTopBarSigninComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let localStorageService: jasmine.SpyObj<LocalStorageService>;

  beforeEach(() => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['authenticateUser']);
    const localStorageServiceSpy = jasmine.createSpyObj('LocalStorageService', ['setStorage']);

    TestBed.configureTestingModule({
      declarations: [PinterestTopBarSigninComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: LocalStorageService, useValue: localStorageServiceSpy },
      ],
    });

    fixture = TestBed.createComponent(PinterestTopBarSigninComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    localStorageService = TestBed.inject(LocalStorageService) as jasmine.SpyObj<LocalStorageService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the SigninForm', () => {
    component.ngOnInit();
    expect(component.SigninForm).toBeDefined();
  });

  it('should call AuthService.authenticateUser and navigate on SignIn', () => {
    const response = 'jwt-token'; // Replace with your expected response
    authService.authenticateUser.and.returnValue(of(response));
    component.ngOnInit();
    component.SignIn();

    expect(authService.authenticateUser).toHaveBeenCalledWith(JSON.stringify(component.SigninForm.value));
    expect(localStorageService.setStorage).toHaveBeenCalledWith('jwt', response);
    expect(fixture.debugElement.nativeElement.querySelector('a[href="/home"]')).toBeTruthy();
  });

  // it('should navigate to "signup" on SignUp', () => {
  //   const navigateSpy = spyOn(component.router, 'navigate');
  //   component.SignUp();
  //   expect(navigateSpy).toHaveBeenCalledWith(['signup']);
  // });
});
