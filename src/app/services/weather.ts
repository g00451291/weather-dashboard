import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiKey = 'd77d9108c49ed30cb15c608e38eba5a8';
  private base = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<any> {
    return this.http.get<any>(
      `${this.base}/weather?q=${city}&appid=${this.apiKey}&units=metric`
    );
  }

  getForecast(city: string): Observable<any> {
    return this.http.get<any>(
      `${this.base}/forecast?q=${city}&appid=${this.apiKey}&units=metric`
    );
  }
}