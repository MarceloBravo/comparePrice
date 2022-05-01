import { Component, OnInit } from '@angular/core';
import { CotizarService } from 'src/app/services/cotizar/cotizar.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {}


  /*
  organicResults: any[] = []
  inlineProducts: any[] = []
  inlineShopping: any[] = []
  localAds: Object = {}  //Anuncios locales
  localResults: Object = {}
  inlineShoppingResults: any[] = []
  shoppingResults: any[] = []
  pagination: any[] = []
  mapa: Object = {}

  constructor(private _cotizarService: CotizarService) { }

  ngOnInit(): void {
    this._cotizarService.resultadoBusquedaChange$.subscribe((res: any) => {
      console.log('RESULT = ',res.result)
      this.getOrganicResults(res.result)
      this.getInlineProducts(res.result)
      this.getInlineShopping(res.result)
      this.getLocalAds(res.result)
      this.getLocalResults(res.result)
      this.getShoppingResults(res.result)
      this.getPagination(res.result)
      console.log(
        'organicResults', this.organicResults,
        'inlineProducts',this.inlineProducts,
        'inlineShopping', this.inlineShopping,
        'localAds', this.localAds,
        'localResults',this.localResults,
        'inlineShoppingResults', this.inlineShoppingResults,
        'shoppingResults',this.shoppingResults,
        'pagination', this.pagination,
        'mapa',this.mapa
      )
    })
  }


  private getOrganicResults(results: Record<string, any>){
    this.organicResults = []
    if(results.organic_results){
      results.organic_results.forEach((i: any) => {
        if(i.rich_snippet?.top?.detected_extensions?.price){
          this.organicResults.push({
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
      this.inlineProducts = results.inline_productos ? results.inline_productos : []
  }


  private getInlineShopping(results: Record<string, any>){
    this.inlineShopping = results.shopping_results ? results.shopping_results : []
  }

  private getLocalAds(results: Record<string, any>){
    this.localAds = results.local_ads ? results.local_ads : {}
  }

  private getLocalResults(results: Record<string, any>){
    this.localResults = results.local_results ? results.local_results : {}
    this.mapa = results.local_map ? results.local_map : {}
  }

  private getShoppingResults(results: Record<string, any>){
    this.inlineShoppingResults = results.inline_shopping_results ? results.inline_shopping_results : []
    this.shoppingResults = results.shopping_results ? results.shopping_results : []
  }

  private getPagination(results: Record<string, any>){
    this.pagination = results.serpapi_pagination ? results.serpapi_pagination : []
  }
  */
}
