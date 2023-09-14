import { Component, OnInit } from '@angular/core';
import { ITile } from './pinterest-container.interface';
import { LocalStorageService } from 'app/services/local-storage.service';
import { AddTileService } from 'app/services/add-tile.service';

@Component({
  selector: 'app-pinterest-container',
  templateUrl: './pinterest-container.component.html',
  styleUrls: ['./pinterest-container.component.scss']
})
export class PinterestContainerComponent implements OnInit 
{
  public tileList: Array<ITile> = [];
  isFilled: boolean = false;

  toggleHeart(tile: ITile) {
    tile.isFavourite = !tile.isFavourite;
    console.log(this.tileList);
    this.tileserviceContext.updateTiles(this.tileList);
  }

  constructor(
    private readonly tileserviceContext: AddTileService
  ){}

  public ngOnInit(): void {
    // this.tileList = [
    //   {id:1, label:'Tile 1', isFavourite: false, imgUrl:"https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    //   {id:2, label:'Tile 2', isFavourite: false, imgUrl:"https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    //   {id:3, label:'Tile 3', isFavourite: false, imgUrl:"https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    //   {id:4, label:'Tile 4', isFavourite: false, imgUrl:"https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    //   {id:5, label:'Tile 5', isFavourite: false, imgUrl:"https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    //   {id:6, label:'Tile 6', isFavourite: false, imgUrl:"https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    //   {id:7, label:'Tile 7', isFavourite: false, imgUrl:"https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    //   {id:8, label:'Tile 8', isFavourite: false, imgUrl:"https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    //]
    this.tileList = this.tileserviceContext.getTile();
  }

}


//npm install --save font-awesome