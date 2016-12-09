import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/RX';
import 'rxjs/Rx';

import{ API_KEY } from '../key.config'


@Injectable()
export class WeatherService {

  public baseUrl = `http://api.wunderground.com/api/${API_KEY}/conditions/q/`;

  constructor(private http: Http) {
  }


}
