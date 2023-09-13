import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestTopBarSigninComponent } from './pinterest-top-bar-signin.component';

describe('PinterestTopBarSigninComponent', () => {
  let component: PinterestTopBarSigninComponent;
  let fixture: ComponentFixture<PinterestTopBarSigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinterestTopBarSigninComponent]
    });
    fixture = TestBed.createComponent(PinterestTopBarSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
