import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateTileComponent } from './create-tile.component';
import { AddTileService } from 'app/services/add-tile.service';
import { Router } from '@angular/router';

describe('CreateTileComponent', () => {
  let component: CreateTileComponent;
  let fixture: ComponentFixture<CreateTileComponent>;
  let addTileService: jasmine.SpyObj<AddTileService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const addTileServiceSpy = jasmine.createSpyObj('AddTileService', ['addTile']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [CreateTileComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [
        { provide: AddTileService, useValue: addTileServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    fixture = TestBed.createComponent(CreateTileComponent);
    component = fixture.componentInstance;
    addTileService = TestBed.inject(AddTileService) as jasmine.SpyObj<AddTileService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize createTileForm', () => {
    component.ngOnInit();
    expect(component.createTileForm).toBeDefined();
  });

  it('should create a tile when CreateTile is called with valid form data', () => {
    const validFormData = {
      label: 'Test Label',
      imgUrl: 'test-image-url',
      isFavourite: false,
    };
    component.createTileForm.setValue(validFormData);

    component.CreateTile();

    expect(addTileService.addTile).toHaveBeenCalledWith(validFormData);
    expect(router.navigate).toHaveBeenCalledWith(['home']);
    expect(component.error).toBe(false);
  });

  it('should set error flag when CreateTile is called with invalid form data', () => {
    const invalidFormData = {
      label: '',
      imgUrl: '',
      isFavourite: false,
    };
    component.createTileForm.setValue(invalidFormData);

    component.CreateTile();

    expect(addTileService.addTile).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
    expect(component.error).toBe(true);
  });

  it('should reset the form when ResetTile is called', () => {
    component.createTileForm.setValue({
      label: 'Test Label',
      imgUrl: 'test-image-url',
      isFavourite: false,
    });

    component.ResetTile();

    expect(component.createTileForm.value).toEqual({
      label: '',
      imgUrl: '',
      isFavourite: false,
    });
  });
});
