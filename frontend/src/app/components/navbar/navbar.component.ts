import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CotizarService } from '../../services/cotizar/cotizar.service';
import { ConfigSearch } from '../../class/configSearch/config-search';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchBarService } from '../../services/search-bar/search-bar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _searchBarService: SearchBarService) { }

  ngOnInit(): void {
  }

  displayBar(visible: Boolean){
    if(visible){
      this._searchBarService.showBar()
    }else{
      this._searchBarService.hideBar()
    }
  }
}
