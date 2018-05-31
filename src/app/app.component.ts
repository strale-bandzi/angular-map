import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Init } from './init';
import { MarkerManager } from '@agm/core';
import { MarkerService } from './services/marker.service';

interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkerService]
})
export class AppComponent {
  title = 'My first AGM Project :)';

  zoom = 9;

  lat = 43.89139;
  lng = 20.34972;

  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDragbl: string;

  markers: marker[];
  constructor(private _markerService: MarkerService) {
    this.markers = this._markerService.getMarkers(); // load service method to get markers data
  }


  clickedMarker( m: marker, i: Number) {
    console.log('clicked at ' + i);
  }

  mapClicked($event: any) {

    var newMarker = {
      name: 'NoTitle',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    };
    console.log(newMarker.lat);
    this.markers.push(newMarker);
  }

  markerDrag(m: any, $event: any) {

    let updateMarker = {
        name: m.name,
        lat: parseFloat(m.lat),
        lng: parseFloat(m.lng),
        draggable: false
      };

      var newLat = $event.coords.lat;
      var newLng = $event.coords.lng;

      this._markerService.updateMarker(updateMarker, newLat, newLng);

  }

  addMarker() {
    let isDraggable;
    if (this.markerDragbl === 'yes') {
      isDraggable = true;
    } else {
      isDraggable = false;
    }

    const newMarker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    };
    console.log(newMarker);
    this.markers.push(newMarker);
    this._markerService.addMarker(newMarker);
  }

  removeMarker(m) {
    for (var i = 0; i < this.markers.length; i++) {
      if (m.lat == this.markers[i].lat && m.lng == this.markers[i].lng) {
        this.markers.splice(i, 1);
      }
    }

    this._markerService.removeMarker(m);
  }
}

