import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuperComponentsComponent } from './super-components/super-components.component';
import { ZippyComponent } from './zippy/zippy.component';
import { BananaInABoxComponent } from './banana-in-a-box/banana-in-a-box.component';
import { TrucComponent } from './truc/truc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SuperComponentsComponent, ZippyComponent, BananaInABoxComponent, TrucComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'banana';

  alertTruc(value: string) {
    alert(value);
  }

  consoleTruc(value: string) {
    console.log(value);
  }
}
