import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Observer } from 'rxjs/RX';
import 'rxjs/Rx';

import{ API_KEY, GOOGLE_API_KEY } from '../key.config'


@Injectable()
export class WeatherService {

  public baseUrl = `http://localhost:8100/api/${API_KEY}/conditions/q/amw:`;
  public searchUrl = 'http://autocomplete.wunderground.com/aq?query='
  public googleApiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='

  constructor(private http: Http) {
  }

  getWeather(zmw){
    return this.http.get(this.baseUrl + zmw + '.json')
      .map(res => res.json());
  }

  searchCities(str){
    return this.http.get(this.searchUrl + str)
      .map(res => res.json());
  }
  getCity(lat,lng){
    return this.http.get(this.googleApiUrl + lat +',' + lng + '&key=' + GOOGLE_API_KEY)
      .map(res => res.json());
  }

  getCurrentPosition(): Observable<Position> {
    return new Observable((observer: Observer<Position>) => {
      // Invokes getCurrentPosition method of Geolocation API.
      navigator.geolocation.getCurrentPosition(
        // Success callback.
        (position: Position) => {
          observer.next(position);
          observer.complete();
        },
        // Error callback.
        (error: PositionError) => {
          console.log('Geolocation service: ' + error.message);
          observer.error(error);
        }
      );
    });
  }



}
