import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Text from 'ol/style/Text'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'
import Icon from 'ol/style/Icon';
import Feature from 'ol/Feature'
import { fromLonLat } from 'ol/proj.js'
import VectorSource from 'ol/source/Vector.js'
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import Point from 'ol/geom/Point';
//Creando un mapa con OpenLayers: https://medium.com/front-end-weekly/angular-9-create-an-interactive-map-with-openlayers-part-i-1b7c30d37ceb


@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements AfterViewInit  {
  @Input() lat: number = -35.418314545193276
  @Input() lon: number = -71.6407479221932
  @Input() marcadores: {lat: number, lon: number, text?: string, info?: Object}[] = []
  @Input() zoom: number = 17
  nombre: string = ''
  tipo: string = ''
  direccion: string = ''
  descripcion: string = ''
  horario: string = ''
  telefono: string = ''

  map: any

  constructor() { }

  ngAfterViewInit(): void {
    this.map = new Map({
      target: 'hotel_map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([this.lon,this.lat]),
        zoom: this.zoom
      })
    });
    this.addMarker()
  }


  addMarker(){
    this.marcadores.forEach((m: {lat: number, lon: number, text?: string}) => {
      let marcador = this.crearMarcador(m)

      let vectorSource = new VectorSource({
        features: [marcador]
      })

      let vectorLayer = new VectorLayer({
        source: vectorSource
      })

      this.map.addLayer(vectorLayer)

      this.showDatatEvent()

    })
  }

  private showDatatEvent(){
    this.map.on('pointermove', (e: any) => {

      this.nombre = ''; this.tipo = ''
      this.direccion = ''; this.descripcion = ''
      this.horario = ''; this.telefono = ''

      this.map.forEachFeatureAtPixel(e.pixel, (feature: any, layer: any) => {
        //if(feature.get('link'))window.open(feature.get('link'), 'blank')
        this.nombre = feature.get('info')['title'] ? feature.get('info')['title'] : ''
        this.tipo = feature.get('info')['type'] ? feature.get('info')['type'] : ''
        this.direccion = feature.get('info')['years_in_business'] ? feature.get('info')['years_in_business'] : ''
        this.descripcion = feature.get('info')['description'] ? feature.get('info')['description'] : ''
        this.horario = feature.get('info')['hours'] ? feature.get('info')['hours'] : ''
        this.telefono = feature.get('info')['phone'] ? feature.get('info')['phone'] : ''

        //let selectedName = feature.get('name')
        //let AddInfo = feature.get('info')
        //console.log('click info = ',selectedName, AddInfo)
      })
    })
  }


  private crearMarcador(coordenadas: {lat: number, lon: number, text?: string, info?: string}){
    let mark = new Feature({
      geometry: new Point(fromLonLat([coordenadas.lon,coordenadas.lat])),
      labelPoint: new Point(fromLonLat([coordenadas.lon,coordenadas.lat])),
      name: coordenadas.text,
      info: coordenadas.info
    });

    mark.setStyle(new Style({
      image: new Icon(
        {
          color: 'red',
          crossOrigin: 'anonymous',
          src: 'assets/jpg/Map_Location_Icon_SVG_lgnrbj.svg',
          imgSize: [25, 25],
        }
      ),
      text: new Text(
        {
          text: coordenadas.text ? coordenadas.text : '',
          font: 'bold 13px Calibri,sans-serif',
          overflow: true,
          fill: new Fill({
            color: 'white'
          }),
          stroke: new Stroke({
            color: '#a30303',
            width: 4
          }),
          backgroundFill: new Fill({
            color: '#a30303',
          }),
          offsetY: -25,
        }
      )
    }))

    return mark
  }
}
