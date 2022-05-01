import { Component, OnInit } from '@angular/core';
import { CotizarService } from '../../services/cotizar/cotizar.service';

@Component({
  selector: 'app-local-results',
  templateUrl: './local-results.component.html',
  styleUrls: ['./local-results.component.scss']
})
export class LocalResultsComponent implements OnInit {
  marcadores: {lat: number, lon: number, text?: string}[] = []
  lat: number = 0
  lon: number = 0

  constructor(private _cotizarService: CotizarService) { }

  ngOnInit(): void {
    this._cotizarService.data.localResults.forEach(element => {
      if(this.lat === 0)this.lat = element.gps_coordinates.latitude
      if(this.lon === 0)this.lon = element.gps_coordinates.longitude
      this.marcadores.push(
        {
          lat: element.gps_coordinates.latitude,
          lon: element.gps_coordinates.longitude,
          text: element.title
        })
    });
    console.log(this.marcadores, this.lat, this.lon);

    /*
    this.marcadores = [
      {
        lat: -35.418314545193276,
        lon: -71.6407479221932,
        text: 'Mi domicilio particular'
      },
      {
        lat: -35.42663781817757,
        lon: -71.66611089091718,
        text: 'Plaza de Armas de Talca'
      },
      {
        lat: -35.4290157381714,
        lon: -71.65636910758127,
        text: 'Plaza 2 SUR'
      }
    ]
    */
  }


}
