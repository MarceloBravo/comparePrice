import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() { }

  strFormatearPrecio(precio: number, signo: string = '$'): string{
    return precio ? `${signo} ${precio.toLocaleString('de-DE')}` : '$ 0'
  }
}
