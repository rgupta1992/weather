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
  fiveDayForecast: any;
  sixteenDayForecast: any;
  currentTab: any = 'Today';


  constructor(private weatherService: WeatherDataService){
    this.weatherService.getForecastForCurrentCity().subscribe(res =>{
      this.forecastForCurrentCity = res;
    });

    this.weatherService.getForecastForFiveDays().subscribe(res =>{
      this.fiveDayForecast = res;
    });

    this.weatherService.getForecastForSixteenDays().subscribe(res => {
      this.sixteenDayForecast =res;
    });
  }


  getFormattedDate(date){
    console.log('Date :' + date);
    let time = new Date(date);
    console.log('Time :' + time);
    return time.toLocaleString('en-US', { timeZone: 'Asia/Kolkata',month: 'short', day: 'numeric',year: 'numeric' });    
  }

  getTemperature(temp){
    return Math.trunc(temp);
  }

  selectTab(tabValue){
    this.currentTab = tabValue;
  }

}
