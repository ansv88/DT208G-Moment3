import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LengthConverterComponent } from './length-converter/length-converter.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LengthConverterComponent, TemperatureConverterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Converter';
}
