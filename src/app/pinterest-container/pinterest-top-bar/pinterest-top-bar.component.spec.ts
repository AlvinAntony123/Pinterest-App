import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PinterestTopBarComponent } from './pinterest-top-bar.component';

fdescribe('PinterestTopBarComponent', () => {
  let component: PinterestTopBarComponent;
  let fixture: ComponentFixture<PinterestTopBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinterestTopBarComponent],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(PinterestTopBarComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to login', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.GotoLogin();
    expect(navigateSpy).toHaveBeenCalledWith(['login']);
  });

  it('should navigate to signup', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.GotoSignUp();
    expect(navigateSpy).toHaveBeenCalledWith(['signup']);
  });

  it('should navigate to create', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.GotoCreate();
    expect(navigateSpy).toHaveBeenCalledWith(['create']);
  });

  it('should navigate to home', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.GotoHome();
    expect(navigateSpy).toHaveBeenCalledWith(['home']);
  });

  it('should navigate to favorite', () => {
    const navigateSpy = spyOn(component['router'], 'navigate');
    component.GotoFavorite();
    expect(navigateSpy).toHaveBeenCalledWith(['favorite']);
  });
});
