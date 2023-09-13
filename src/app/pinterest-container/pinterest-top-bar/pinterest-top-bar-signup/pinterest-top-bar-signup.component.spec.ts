import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestTopBarSignupComponent } from './pinterest-top-bar-signup.component';

describe('PinterestTopBarSignupComponent', () => {
  let component: PinterestTopBarSignupComponent;
  let fixture: ComponentFixture<PinterestTopBarSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinterestTopBarSignupComponent]
    });
    fixture = TestBed.createComponent(PinterestTopBarSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
