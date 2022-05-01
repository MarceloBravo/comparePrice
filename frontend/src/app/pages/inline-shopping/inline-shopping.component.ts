import { Component, OnInit } from '@angular/core';
import { CotizarService } from 'src/app/services/cotizar/cotizar.service';

@Component({
  selector: 'app-inline-shopping',
  templateUrl: './inline-shopping.component.html',
  styleUrls: ['./inline-shopping.component.scss']
})
export class InlineShoppingComponent implements OnInit {
  datos: any[] = []

  constructor(private _cotizarServie: CotizarService) { }

  ngOnInit(): void {
    this.datos = this._cotizarServie.data.inlineShopping.sort((a, b) => a.extracted_price - b.extracted_price)
  }

}
