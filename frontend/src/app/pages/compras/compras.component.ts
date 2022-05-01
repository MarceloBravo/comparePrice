import { Component, OnInit } from '@angular/core';
import { CotizarService } from 'src/app/services/cotizar/cotizar.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {
  datos: any[] = []

  constructor(private _cotizarServie: CotizarService) { }

  ngOnInit(): void {
    this.datos = this._cotizarServie.data.inlineShopping.sort((a, b) => a.extracted_price - b.extracted_price)
  }
}
