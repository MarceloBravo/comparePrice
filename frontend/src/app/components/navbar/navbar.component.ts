import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CotizarService } from '../../services/cotizar/cotizar.service';
import { ConfigSearch } from '../../class/configSearch/config-search';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
