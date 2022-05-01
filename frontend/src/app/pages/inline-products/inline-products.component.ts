import { Component, OnInit } from '@angular/core';
import { CotizarService } from 'src/app/services/cotizar/cotizar.service';
import { FunctionsService } from '../../services/functions/functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inline-products',
  templateUrl: './inline-products.component.html',
  styleUrls: ['./inline-products.component.scss']
})
export class InlineProductsComponent implements OnInit {
  datos: any[] = []

  constructor(
    private _cotizarService: CotizarService,
    private _functionsService: FunctionsService,
    private router: Router
  ) { }


  ngOnInit(): void {
    if(this._cotizarService.data.inlineProducts.length > 0){
      this.datos = this._cotizarService.data.inlineProducts
      console.log('RESULTADOS EN LINEA',this._cotizarService.data)
    }else{
      this.router.navigate(['/'])
    }
  }


  formatearPrecio(moneda: string, precio: number){
    return this._functionsService.strFormatearPrecio(precio, moneda)
  }

  calcularDescuento(precioActual: number, precioOriginal: number | null){
    return precioOriginal ? precioOriginal * 100 / precioActual :  precioActual
  }

}
