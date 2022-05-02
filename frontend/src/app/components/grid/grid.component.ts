import { Component, OnInit, Input } from '@angular/core';
import { FunctionsService } from '../../services/functions/functions.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() datos: any[] = []
  @Input() campos: any[] = []
  @Input() cabeceras: string[] = []
  @Input() tipoColumna: string[] = []  //['string','number','image','link','currency',,'percent']
  @Input() classColumn: string[] = []
  @Input() formatoMoneda: string = '$'

  constructor(private _functionsService: FunctionsService) { }

  ngOnInit(): void {
    console.log(this.tipoColumna, this.datos)
  }

  formatearNumero(numero: number){
    return new Intl.NumberFormat().format(numero).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  formatearMoneda(precio: number){
    return this._functionsService.strFormatearPrecio(precio, this.formatoMoneda)
  }

  //tipoColumna(colName: string, buscarEn: string[]){
  //  return buscarEn.find(e => e === colName) !== undefined
  //}
}
