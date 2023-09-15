import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'app/services/local-storage.service';
import { ITile } from '../pinterest-container.interface';
import { AddTileService } from 'app/services/add-tile.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-tile',
  templateUrl: './create-tile.component.html',
  styleUrls: ['./create-tile.component.scss']
})
export class CreateTileComponent implements OnInit 
{
  public createTileForm!: FormGroup; 
  public name!: AbstractControl;
  public error = false;

  constructor(
    private readonly tileserviceContext: AddTileService,
    private readonly router: Router,
    private fb: FormBuilder
  ){}

  public tile!: ITile;

    public ngOnInit(): void 
    {
      this.tile = {
        label: '',
        imgUrl: '',
        isFavourite: false
      }

      this.createTileForm = this.fb.group(
        {
          label: ['', Validators.required],
          imgUrl : ['', Validators.required],
          isFavourite: [false]
        })
        this.name = this.createTileForm.controls['name'];
    }

    public CreateTile()
    { 
      
      if(this.createTileForm.valid)
      {
        this.error = false;
        this.tile = {
          label: this.createTileForm.value.label,
          imgUrl: this.createTileForm.value.imgUrl,
          isFavourite: false
        }
        this.tileserviceContext.addTile(this.tile);
        this.router.navigate(['home']);
      }
      else
      this.error = true;
    }

    public ResetTile(){
      this.createTileForm.reset();
    }
}
