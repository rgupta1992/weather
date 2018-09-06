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
    });
  }


  getFormattedDate(date){
    console.log('Date :' + date);
    let time = new Date(date);
    console.log('Time :' + time);
    return time.toLocaleString('en-US', { timeZone: 'Asia/Kolkata',month: 'short', day: 'numeric',year: 'numeric' });
    //return time.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    //return time;
  }

  getTemperature(temp){
    return Math.trunc(temp);
  }
}
