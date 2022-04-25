import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantesService {
  public endPoint: string = 'https://serpapi.com/search.json?'
  public apiKey: string = '6bc1b3e3c8def4a3be1d0f884813aa67d24ef6a66f93ecbfc90003e3d36fec52'

  constructor() { }
}
