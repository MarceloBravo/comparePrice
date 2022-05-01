import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/class/data/data';
import { CotizarService } from '../../services/cotizar/cotizar.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  data: Data | null= null


  constructor(public _cotizarService: CotizarService) { }

  ngOnInit(): void {
  }

  mostrarUrl(object: Object){
    return JSON.stringify(object) !== '{}'
  }

}
