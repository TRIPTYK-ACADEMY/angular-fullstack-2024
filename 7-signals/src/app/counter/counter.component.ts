import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 0;
  worstBoolean = false;
  private signalCounter = signal(0);
  readonly signalCounterAsReadonly = this.signalCounter.asReadonly();
  tenTimesSignalCounter = computed(() => {
    if (this.worstBoolean) {
      // S'il n'y a pas l'apelle de signalCounter ici,
      // ma computed ne se remet pas automatiquement à jour
      // à chaque fois que signalCounter change de valeur
      console.log(this.signalCounter());
      return 100 * Math.floor(Math.random() * 5);
    }
    // C'est le fait d'utiliser la valeur de signalCounter()
    // qui enregistre ma computed comme devant être mise à jour
    // à chaque que la valeur de signalCounter change.
    // utiliser signalCounter() = le rajouter 
    // en dépendance de la computed.
    return this.signalCounter() * 10;
  })

  setSignalAsIs() {
    // Si la "nouvelle" valeur d'un signal est la même
    // que son ancienne valeur. Alors il ne "settera" pas
    // réellement une nouvelle valeur. Donc, les computed
    // et effect dépendant du signalCounter ne se
    // déclencheront pas non plus.
    this.signalCounter.set(this.signalCounter());
  }

  signalCounterSideEffect = effect(() => {
    console.log(`La nouvelle valeur du compteur est : ${this.signalCounter()}`);
  })





  signalIncrement() {
    // On apelle la méthode set de nos signaux car
    // c'est dans cette méthode "set" qu'est caché 
    // la magie derrière les signaux. Alors que si
    // on réassigne une valeur à signalCounter, on
    // ne fait que remplacer notre signal par un
    // nombre
    this.signalCounter.set(this.signalCounter() + 1);
  }

  signalDecrement() {
    this.signalCounter.set(this.signalCounter() - 1);
  }

  basicIncrement() {
    this.counter++;
  }

  basicDecrement() {
    this.counter--;
  }
}
