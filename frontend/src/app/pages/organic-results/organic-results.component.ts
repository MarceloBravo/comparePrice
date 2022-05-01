import { Component, OnInit } from '@angular/core';
import { CotizarService } from 'src/app/services/cotizar/cotizar.service';
import { FunctionsService } from 'src/app/services/functions/functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organic-results',
  templateUrl: './organic-results.component.html',
  styleUrls: ['./organic-results.component.scss']
})
export class OrganicResultsComponent implements OnInit {
  datos: any[] = []

  constructor(
    private _cotizarService: CotizarService,
    private _functions: FunctionsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    console.log('DATOS ACTUALIZADOS',this._cotizarService.dataChanged$)
    if(this._cotizarService.data.organicResults.length > 0){
      this.datos = this._cotizarService.data.organicResults.sort((a, b) => (a.precio - b.precio))
    }else{
      this.router.navigate(['/'])
    }
  }

  formatearPrecio(numero: number){
    return this._functions.strFormatearPrecio(numero, '$')
  }

}
