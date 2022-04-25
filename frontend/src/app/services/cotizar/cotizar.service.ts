import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigSearch } from '../../class/configSearch/config-search';
import { ConstantesService } from '../constantes/constantes.service'


@Injectable({
  providedIn: 'root'
})
export class CotizarService {
  public resultadoBusquedaChange$: EventEmitter<Object | Error> = new EventEmitter<Object | Error>() //Observable
  
  constructor(
    private http: HttpClient,
    private _const: ConstantesService
  ) { }

  getBuscar(params: ConfigSearch){
    return this.http.get(`
          ${this._const.endPoint}
          engine=${params.engine}&
          q=${params.textoBusqueda}&
          location=${params.location}&
          hl=${params.hl}&
          gl=${params.gl}&
          google_domain=${params.google_domain}}&
          num=${params.num}&
          start=${params.start}&
          safe=${params.safe}&
          api_key=${this._const.apiKey}`).subscribe(res => {
            console.log('RESULT',res)
            this.resultadoBusquedaChange$.emit(res)
          }, error => {
            console.log('ERROR', error)
            this.resultadoBusquedaChange$.emit({error: error, mensaje: error.message})
          });
    }
}
