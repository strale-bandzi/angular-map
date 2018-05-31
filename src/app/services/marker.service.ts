import { Injectable } from '@angular/core';
import { Init } from '../init';

@Injectable()

export class MarkerService extends Init {

    constructor() {
        super(); // goes to parent class
        this.load(); // load parent method
        console.log('MarkerService ready to serve master.. All Hail Bandzi');
    }

    getMarkers() {
        let markers  = JSON.parse(localStorage.getItem('markers'));
        return markers;
    }

    addMarker(newMarker) {
        let markers  = JSON.parse(localStorage.getItem('markers')); // grab markers
        markers.push(newMarker); // push new object to array
        localStorage.setItem('markers', JSON.stringify(markers)); // save to local storage
    }

    updateMarker(marker, newLat, newLng) {
        let markers  = JSON.parse(localStorage.getItem('markers')); // grab markers

        for(var i = 0; i < markers.length; i++) {
            if (marker.lat == markers[i].lat && marker.lng == markers[i].lng) {
                markers[i].lat = newLat;
                markers[i].lng = newLng;
            }
        }

        localStorage.setItem('markers', JSON.stringify(markers)); // save to local storage

    }

    removeMarker(marker) {
        let markers  = JSON.parse(localStorage.getItem('markers')); // grab markers

        for (var i = 0; i < markers.length; i++) {
            if (marker.lat == markers[i].lat && marker.lng == markers[i].lng) {
               markers.splice(i, 1);
            }
        }

        localStorage.setItem('markers', JSON.stringify(markers)); // save to local storage

    }

}
