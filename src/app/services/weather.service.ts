import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/RX';
import 'rxjs/Rx';

import{ API_KEY } from '../key.config'


@Injectable()
export class WeatherService {

  public baseUrl = `http://localhost:8100/api/${API_KEY}/conditions/q/`;
  public searchUrl = 'http://localhost:8100/search/aq?query='

  constructor(private http: Http) {
  }

  getWeather(zmw){
    return this.http.get(`http://api.wunderground.com/api/${API_KEY}/conditions/q/zmw:` + zmw + '.json')
      .map(res => res.json());
  }

  searchCities(str){
    return this.http.get('http://autocomplete.wunderground.com/aq?query=' + str)
      .map(res => res.json());
  }


}
