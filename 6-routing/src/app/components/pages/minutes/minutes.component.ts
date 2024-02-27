import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-minutes',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './minutes.component.html',
  styleUrl: './minutes.component.css'
})
export class MinutesComponent {

}
