import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-length-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './length-converter.component.html',
  styleUrl: './length-converter.component.css'
})
export class LengthConverterComponent {
  meters: number = 0;
  feet: number = 0;

  convertMetersToFeet(): void {
    this.feet = parseFloat((this.meters * 3.28084).toFixed(2));
  }

  convertFeetToMeters(): void {
    this.meters = parseFloat((this.feet / 3.28084).toFixed(2));
  }
}
