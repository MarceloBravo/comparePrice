import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  public showSearchBar$: EventEmitter<Boolean> = new EventEmitter<Boolean>()

  constructor() {
    this.showSearchBar$.emit(true)
  }

  showBar(){
    return this.showSearchBar$.emit(true)
  }

  hideBar(){
    return this.showSearchBar$.emit(false)
  }
}
