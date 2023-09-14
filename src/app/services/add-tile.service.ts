import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ITile } from 'app/pinterest-container/pinterest-container.interface';

@Injectable({
  providedIn: 'root'
})
export class AddTileService {

  constructor(
    private readonly localStorageContext: LocalStorageService
  ) { }

  public tileList!: Array<ITile>

  public addTile(tile: ITile) : void{
    this.tileList = this.localStorageContext.getStorage('tiles') || [];
    this.tileList.push(tile);
    this.localStorageContext.setStorage('tiles', this.tileList);
  }

  public updateTiles(tiles: Array<ITile>): void{
    this.localStorageContext.setStorage('tiles', tiles);
  }

  public getTile(): Array<ITile>{
    return this.localStorageContext.getStorage('tiles');
  }
}
