import { Component } from '@angular/core';
import { WeatherDataService } from './weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  forecastForCurrentCity: any;
  constructor(private weatherService: WeatherDataService){
    this.weatherService.getForecastForCurrentCity().subscribe(res =>{
      this.forecastForCurrentCity = res;
    })
  }
}
