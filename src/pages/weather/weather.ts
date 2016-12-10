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
         <ion-row>
            <ion-col width-100>
              <ion-list>
                <ion-item>
                  <ion-label fixed>City</ion-label>
                  <ion-input (keyup)="getQuery(searchStr) "[(ngModel)]="searchStr" type="text" value=""></ion-input>
                 </ion-item>
              </ion-list>
              <ion-list>
                <ion-item *ngFor="let result of results">
                  <span (click)="chooseCity(result)">{{result.name}} </span> 
                </ion-item>
              </ion-list>
            </ion-col>
          </ion-row>
      
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
                    <strong>Dewpoint: </strong>{{weather.dewpoint_string}}
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
  searchStr:string;
  weather: any;
  results:any;
  zmw:string;

  city = 'Boston';
  state = 'MA';

  constructor(private weatherService: WeatherService){}

  ngOnInit(){
    this.getDefaultCity()
    this.weatherService.getWeather(this.zmw).subscribe(
      data => {
        console.log(data);
        this.weather = data.current_observation;
      }
    )
  }
  getQuery(str:string){
    this.weatherService.searchCities(str).subscribe(
      res => {
        console.log(res);
        this.results = res.RESULTS;
      }
    )
  }

  chooseCity(city){
    this.results = [];
    this.weatherService.getWeather(city.zmw).subscribe(
      data => {
        console.log(data);
        this.weather = data.current_observation;
      }
    )

  }
  getDefaultCity(){
    if(localStorage.getItem("city") !== undefined ) {
      this.zmw = JSON.parse(localStorage.getItem("city")).zmw;
      console.log("this is the zmw", this.zmw)
    } else {
      this.zmw = "90001.1.99999"
    }
  }


}
