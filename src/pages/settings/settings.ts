import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../app/services/weather.service";
import { NavController } from 'ionic-angular';
import {WeatherComponent} from "../weather/weather";

@Component({
  selector: 'my-settings',
  template: `
      <ion-header>
        <ion-navbar>
          <ion-title>
            Settings
          </ion-title>
        </ion-navbar>
      </ion-header>
      
      <ion-content padding class="settings">
      <h2>Settings</h2>
        <ion-grid>
          <ion-row>
            <ion-col width-100>
              <ion-list>
                <ion-item>
                  <ion-label fixed>City</ion-label>
                  <ion-input (keyup)="getQuery(searchStr) "[(ngModel)]="searchStr" type="text" value=""></ion-input>
                 </ion-item>
                 <p *ngIf="defaultCity" class="current">Current City: {{defaultCity}}</p>
                 <button (click)="saveChanges()" ion-button color="light" block>Save Changes</button>
                </ion-list>  
                 <h5>We have guested you current location click on it if you would like to make it your default city. <span>
                  If not find city above.
                  </span></h5>
                <ion-list>
                  <ion-item *ngFor="let result of results">
                    <span (click)="setDefaultCity(result)">{{result.name}} </span> 
                  </ion-item>
                </ion-list>
              </ion-col>
            </ion-row>
        </ion-grid>    
      </ion-content>

`
})

export class SettingsComponent implements OnInit {
    results:any;
    defaultCity:any;
    searchStr: string;
    lat:string;
    lng:string;
    geoLocation:string;

    constructor(private navCtl: NavController,
                private weatherService: WeatherService){


    }

    ngOnInit(){
      this.getDefaultCity()
    }

    getQuery(str:string){
      this.weatherService.searchCities(str).subscribe(
        res => {
          console.log(res);
          this.results = res.RESULTS;
        }
    )
  }

  getDefaultCity(){
    if(localStorage.getItem("city") !== undefined &&  localStorage.getItem("city") !== null){
      this.defaultCity = JSON.parse(localStorage.getItem("city")).name;
    } else {

      this.weatherService.getCurrentPosition().subscribe(
        position => {
          this.lat = "" + position.coords.latitude;
          this.lng = "" + position.coords.longitude;
          console.log(this.lat, this.lng)
          this.weatherService.getCity(this.lat, this.lng).subscribe(
            data => {
              this.getQuery(data.results[0].address_components[2].long_name);

            }
          )
        }
      )

      // this.defaultCity= '';
    }

  }

  setDefaultCity(city){
    this.results = [];
    if(typeof(Storage) !== "undefined") {
      localStorage.setItem("city", JSON.stringify(city));
      this.searchStr = city.name;
      this.getDefaultCity();
    } else {
      console.log('local storage not supported')
    }
  }

  saveChanges(){
    this.navCtl.push(WeatherComponent)

  }

}
