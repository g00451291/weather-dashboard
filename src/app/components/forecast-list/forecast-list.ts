import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast-list.html',
  styleUrl: './forecast-list.css'
})
export class ForecastListComponent {
  @Input() forecast: any[] = [];
}