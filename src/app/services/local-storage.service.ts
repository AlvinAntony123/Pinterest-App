import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  public setStorage(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getStorage(key: string){
    return JSON.parse(localStorage.getItem(key) as string);
  }
}
