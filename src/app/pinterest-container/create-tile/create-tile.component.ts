import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'app/services/local-storage.service';
import { ITile } from '../pinterest-container.interface';
import { AddTileService } from 'app/services/add-tile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tile',
  templateUrl: './create-tile.component.html',
  styleUrls: ['./create-tile.component.scss']
})
export class CreateTileComponent implements OnInit {

  constructor(
    private readonly tileserviceContext: AddTileService,
    private readonly router: Router
  ){}

  public tile!: ITile;

    public ngOnInit(): void {
      this.tile = {
        label: '',
        imgUrl: '',
        isFavourite: false
      }
    }

    public CreateTile(){
      this.tileserviceContext.addTile(this.tile);
      this.router.navigate(['home']);
    }

    public ResetTile(){
      this.tile = {
        label: '',
        imgUrl: '',
        isFavourite: false
      }
    }
}
