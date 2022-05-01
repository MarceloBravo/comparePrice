import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantesService {
  public endPoint: string = 'http://192.168.43.118:3001'

  constructor() { }
}
