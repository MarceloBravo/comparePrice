import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CotizarService } from '../../services/cotizar/cotizar.service';
import { ConfigSearch } from '../../class/configSearch/config-search';

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
    num: new FormControl('')
  })

  constructor(private _cotizarService: CotizarService) { }

  ngOnInit(): void {
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
    debugger
    if(
      this.opts.textoBusqueda.length > 0 &&
      this.opts.location.length > 0 &&
      this.opts.num ){
      this._cotizarService.getBuscar(this.opts)
    }
  }
}
