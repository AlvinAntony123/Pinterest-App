import { TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';

describe('AppModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AppModule);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
