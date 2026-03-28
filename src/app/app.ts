import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './services/weather';
import { WeatherCardComponent } from './components/weather-card/weather-card';
import { ForecastListComponent } from './components/forecast-list/forecast-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, WeatherCardComponent, ForecastListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  city = '';
  weather: any = null;
  forecast: any[] = [];
  error = '';
  loading = false;

  constructor(private weatherService: WeatherService) {}

  search() {
    if (!this.city.trim()) return;
    this.loading = true;
    this.error = '';
    this.weather = null;
    this.forecast = [];

    this.weatherService.getCurrentWeather(this.city).subscribe({
      next: (data: any) => {
        this.weather = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'City not found. Please try again.';
        this.loading = false;
      }
    });

    this.weatherService.getForecast(this.city).subscribe({
      next: (data: any) => {
        this.forecast = data.list.filter((_: any, i: number) => i % 8 === 0);
      },
      error: () => {}
    });
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') this.search();
  }
}