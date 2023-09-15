import { Component, OnInit } from '@angular/core';
import { AddTileService } from 'app/services/add-tile.service';
import { ITile } from '../pinterest-container.interface';



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit
{
    constructor(private readonly tileServiceContext : AddTileService)
    {

    }

    public tileList: Array<ITile> = [];

    public ngOnInit(): void 
    {
        this.tileList = this.tileServiceContext.getTile();
    }

    toggleHeart(tile: ITile) {
      tile.isFavourite = !tile.isFavourite;
      console.log(this.tileList);
      this.tileServiceContext.updateTiles(this.tileList);
    }
}
