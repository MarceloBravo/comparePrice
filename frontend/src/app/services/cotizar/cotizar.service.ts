import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigSearch } from '../../class/configSearch/config-search';
import { ConstantesService } from '../constantes/constantes.service'
import { Data } from 'src/app/class/data/data';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CotizarService {
  public dataChanged$: EventEmitter<Boolean> = new EventEmitter<Boolean>() //Observable
  data: Data = new Data()

  constructor(
    private http: HttpClient,
    private _const: ConstantesService,
  ) { }

  getBuscar(params: ConfigSearch){
    this.dataChanged$.emit(false)
    return this.http.post(this._const.endPoint, params).subscribe((res: any) => {
            this.getOrganicResults(res.result)
            this.getInlineProducts(res.result)
            this.getInlineShopping(res.result)
            this.getLocalAds(res.result)
            this.getLocalResults(res.result)
            this.getShoppingResults(res.result)
            this.getPagination(res.result)
            this.dataChanged$.emit(true)
            console.log('trayendo datos', this.data)
          }, error => {
            console.log('ERROR', error)
            //this.resultadoBusquedaChange$.emit({error: error, mensaje: error.message})
          });
    }



    private getOrganicResults(results: Record<string, any>){
      this.data.organicResults = []
      if(results.organic_results){
        results.organic_results.forEach((i: any) => {
          if(i.rich_snippet?.top?.detected_extensions?.price){
            this.data.organicResults.push({
              posicion: i.position ,
              nombre: i.title,
              imagen: i.thumbnail,
              link: i.link,
              precio: i.rich_snippet.top.detected_extensions.price,
            })
          }
        })
      }
    }


    private getInlineProducts(results: Record<string, any>){
        this.data.inlineProducts = results.inline_productos ? results.inline_productos : []
    }


    private getInlineShopping(results: Record<string, any>){
      this.data.inlineShopping = results.shopping_results ? results.shopping_results : []
    }

    private getLocalAds(results: Record<string, any>){
      this.data.localAds = results.local_ads ? results.local_ads : {}
    }

    private getLocalResults(results: Record<string, any>){
      this.data.localResults = results.local_results ? results.local_results : {}
      this.data.mapa = results.local_map ? results.local_map : {}
    }

    private getShoppingResults(results: Record<string, any>){
      this.data.inlineShoppingResults = results.inline_shopping_results ? results.inline_shopping_results : []
      this.data.shoppingResults = results.shopping_results ? results.shopping_results : []
    }

    private getPagination(results: Record<string, any>){
      this.data.pagination = results.serpapi_pagination ? results.serpapi_pagination : []
    }

}
