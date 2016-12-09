import { Component } from '@angular/core';

import {WeatherComponent} from "../weather/weather";
import {SettingsComponent} from "../settings/settings";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  weatherRoot: any = WeatherComponent;
  settingsRoot: any = SettingsComponent;


  constructor() {

  }
}
