import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CotizarService } from '../../services/cotizar/cotizar.service';
import { ConfigSearch } from '../../class/configSearch/config-search';
import { Router } from '@angular/router';
import { SearchBarService } from '../../services/search-bar/search-bar.service';
@Component({
  selector: 'app-config-bar',
  templateUrl: './config-bar.component.html',
  styleUrls: ['./config-bar.component.scss']
})
export class ConfigBarComponent implements OnInit {
  opts: ConfigSearch = new ConfigSearch()
  form: FormGroup = new FormGroup({
    textoBusqueda: new FormControl(''),
    location: new FormControl(''),
    num: new FormControl('30')
  })
  showShadow: boolean = false
  showBar: Boolean = true

  constructor(
    private _cotizarService: CotizarService,
    private _searchBar: SearchBarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._searchBar.showSearchBar$.subscribe((res: Boolean) =>{
      this.showBar = res
      this.form.reset({textoBusqueda: '', location: '', num: 30})
    })

    if(this._cotizarService.dataChanged$)this.router.navigate(['/'])

    this._cotizarService.dataChanged$.subscribe((res: Boolean) => {
      this.router.navigate([res ? this.navigate() : '/'])
    })

    this.scrollPosition()
  }

  private scrollPosition(){
    window.addEventListener('scroll', (event)=> {
      this.showShadow = scrollY > 0
    })
  }

  private navigate(){
    let data = this._cotizarService.data
    if(data.inlineProducts.length > 0) return '/results/organic-results'
    if(data.inlineShopping.length > 0) return '/results/inline-shopping'
    if(data.inlineShoppingResults.length > 0)return '/results/inline-shopping-results'
    if(JSON.stringify(data.localAds) !== '{}')return '/results/local-ads'
    if(JSON.stringify(data.localResults) !== '{}')return '/results/map'
    if(JSON.stringify(data.mapa) !== '{}')return '/results/map'
    if(data.organicResults.length > 0)return '/results/organic-results'
    if(data.shoppingResults.length > 0)return '/results/shopping-results'
    return '/'
  }

  locationChange(){
    this.opts.location = this.form.value.location
  }

  cboItemsChange(){
    this.opts.num = this.form.value.num
  }

  busquedaClick(){
    this.efectuarBusqueda()
  }

  busquedaChange(){
    this.opts.textoBusqueda = this.form.value.textoBusqueda
    this.efectuarBusqueda()
  }

  private efectuarBusqueda(){
    if(
      this.opts.textoBusqueda.length > 0 &&
      this.opts.location.length > 0 &&
      this.opts.num
    ){
      this._cotizarService.getBuscar(this.opts)
    }
  }
}
