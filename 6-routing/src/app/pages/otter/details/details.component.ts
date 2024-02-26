import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(private route: ActivatedRoute)  {
    // la paramMap est une map où la clé correspond au nom écris après les : dans notre url
    // et la valeur est celle qui la remplace.
    // Exemple: route : /otter/:id, url: /otter/5 => paramMap = { id: "5" }
    console.log('params', this.route.snapshot.paramMap);
    // Comme au-dessus mais pour les query params
    console.log('query params', this.route.snapshot.queryParamMap);
  }
}
