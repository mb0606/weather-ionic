import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {WeatherComponent} from "../pages/weather/weather";
import {SettingsComponent} from "../pages/settings/settings";
import {WeatherService} from "./services/weather.service";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WeatherComponent,
    SettingsComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WeatherComponent,
    SettingsComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, WeatherService]
})
export class AppModule {}
