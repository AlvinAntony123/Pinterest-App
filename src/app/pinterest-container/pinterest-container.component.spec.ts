import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestContainerComponent } from './pinterest-container.component';

describe('PinterestContainerComponent', () => {
  let component: PinterestContainerComponent;
  let fixture: ComponentFixture<PinterestContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinterestContainerComponent]
    });
    fixture = TestBed.createComponent(PinterestContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
