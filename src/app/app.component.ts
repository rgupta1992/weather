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
  todaysForecast: any;


  constructor(private weatherService: WeatherDataService){
    this.weatherService.getForecastForCurrentCity().subscribe(res =>{
      this.forecastForCurrentCity = res;
    });

    this.weatherService.getForecastForFiveDays().subscribe(res =>{
      this.fiveDayForecast = res;
      let todaysDate = new Date().getDate();
      this.todaysForecast = this.fiveDayForecast.list.filter(day => {
        
        let tempDate = new Date(day.dt * 1000).getDate();
        console.log('Inside filter' + todaysDate + 'temp Date' + tempDate);
        return tempDate == todaysDate;
      });
      console.log('Todays forecast:'+ JSON.stringify(this.todaysForecast) +'       length ' +this.todaysForecast.length);
    });

    this.weatherService.getForecastForSixteenDays().subscribe(res => {
      this.sixteenDayForecast =res;
    });
  }


  getFormattedDate(date){
    
    let time = new Date(date);
    
    return time.toLocaleString('en-US', { timeZone: 'Asia/Kolkata',month: 'short', day: 'numeric',year: 'numeric' });    
  }

  getTemperature(temp){
    return Math.trunc(temp);
  }

  selectTab(tabValue){
    this.currentTab = tabValue;
  }

  getFormattedHour(value){
    let date = new Date(value);   
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      let stringminutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + stringminutes + ' ' + ampm;
      return strTime;
    
  }

  getFormattedDateAndHour(value){
  let time = new Date(value);
    
    return time.toLocaleString('en-US', { timeZone: 'Asia/Kolkata',month: 'short', day: 'numeric',year: 'numeric', hour:'numeric', minute:'numeric' });
  }
}
