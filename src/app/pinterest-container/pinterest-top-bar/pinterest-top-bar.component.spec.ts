import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestTopBarComponent } from './pinterest-top-bar.component';

describe('PinterestTopBarComponent', () => {
  let component: PinterestTopBarComponent;
  let fixture: ComponentFixture<PinterestTopBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinterestTopBarComponent]
    });
    fixture = TestBed.createComponent(PinterestTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
