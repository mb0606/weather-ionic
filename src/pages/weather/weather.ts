import { Component } from '@angular/core'
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
      
      <ion-content padding class="weather">
      <h2>Welcome to myWeather</h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus similique, voluptatibus! A at, atque deleniti deserunt distinctio eius eos excepturi fugiat ipsa perspiciatis placeat ratione similique sunt totam ut voluptatum.
      </ion-content>
`
})

export class WeatherComponent {

  constructor(private weatherService: WeatherService){}


}
