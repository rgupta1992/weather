import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) {

   }

   getForecastForCurrentCity(): Observable<any>{
    let url = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=048c43a2f7e00f37c3b4044df2ec3128";
     return this.http.get(url);
   }

   getForecastForFiveDays():Observable<any>{
    let url = "http://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=048c43a2f7e00f37c3b4044df2ec3128";
    return this.http.get(url);
   }

   getForecastForSixteenDays():Observable<any>{
     let url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=16&appid=048c43a2f7e00f37c3b4044df2ec3128";
     return this.http.get(url);
   }





}
