import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temperature-converter.component.html',
  styleUrl: './temperature-converter.component.css'
})
export class TemperatureConverterComponent {

  celsius: number = 0;
  fahrenheit: number = 32;

  convertCelsiusToFahrenheit(): void {
    this.fahrenheit = parseFloat(((this.celsius * 9/5) + 32).toFixed(2));
  }

  convertFahrenheitToCelsius(): void {
    this.celsius = parseFloat(((this.fahrenheit - 32) * 5/9).toFixed(2));
  }

}
