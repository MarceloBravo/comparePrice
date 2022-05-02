import { LIFECYCLE_HOOKS_VALUES } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Data } from 'src/app/class/data/data';
import { CotizarService } from '../../services/cotizar/cotizar.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, AfterViewInit {
  data: Data | null= null


  constructor(public _cotizarService: CotizarService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    let mnuItem: HTMLUListElement = <HTMLUListElement>document.getElementById('side-menu')
    let li: any = mnuItem.getElementsByClassName('nav-item')[0]
    if(li)li.className+= ' active'
  }

  mostrarUrl(object: Object){
    return JSON.stringify(object) !== '{}'
  }

  changeActive(e: HTMLElement){
    let colection = document.getElementsByTagName('li')
    for(let i = 0; i < colection.length; i++){
      colection[i].className = colection[i].className.replace(' active','')
    }
    e.className+=' active'
  }
}
