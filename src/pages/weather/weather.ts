import { Component, OnInit } from '@angular/core'
import {WeatherService} from "../../app/services/weather.service";



@Component({
  selector: 'my-weather',
  template: `
      <ion-header>
        <ion-navbar>
          <ion-title>
            Weather
          </ion-title>
        </ion-navbar>
      </ion-header>
      
      <ion-content  padding class="weather">
        <ion-grid *ngIf="weather">
          <ion-row>
            <ion-col width-60>
               <h2 class="location" >{{weather.display_location.full }}</h2>
               <div class="icon"><img src="{{weather.icon_url}}" alt=""></div> 
                   <h3 class="desc">{{weather.weather}}</h3>
                   <h1 class="temp">{{weather.temp_f}}&deg;</h1>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col width-100>
              <ion-list>
                <ion-item class="centered">
                    <strong>Temp: </strong>{{weather.temperature_string}}
                </ion-item>
                <ion-item class="centered">
                    <strong>Relative Humidity: </strong>{{weather.relative_humidity}}
                </ion-item>
                <ion-item class="centered">
                    <strong>Dewpoint: </strong>{{weather.dewpoint_string}
                </ion-item>
                <ion-item class="centered">
                    <strong>Visibility: </strong>{{weather.visibility_mi}}
                </ion-item>
                <ion-item class="centered">
                    <strong>Wind: </strong>{{weather.wind_mph}}MPH
                </ion-item>
                <ion-item class="centered">
                    <strong>Wind Direction: </strong>{{weather.wind_dir}}
                </ion-item>
                <ion-item class="centered">
                    <strong>Heat Index: </strong>{{weather.heat_index_string}}
                </ion-item>
              </ion-list><!-- Item List -->
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
`
})

export class WeatherComponent implements OnInit {

  weather;

  city = 'Boston';
  state = 'MA';

  constructor(private weatherService: WeatherService){}

  ngOnInit(){
    this.weatherService.getWeather(this.city, this.state).subscribe(
      data => {
        console.log(data);
        this.weather = data.current_observation;
      }
    )
  }

}
