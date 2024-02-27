import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-age-converter',
  standalone: true,
  imports: [],
  templateUrl: './age-converter.component.html',
  styleUrl: './age-converter.component.css'
})
export class AgeConverterComponent {
  isNewValue = false;
  birthdate = signal(new Date());

  age = computed(() => {
    const today = new Date();
    let baseAge = today.getFullYear() - this.birthdate().getFullYear();
    // Il devait y avoir un if un peu cool ici
    // mais on a déterminé qu'on avait tous 40 ans
    // et après 40 ans, ce if n'a plus d'importance
    if (this.isBirthdayNotPassed(today, baseAge)) {
      baseAge--;
    }
    return baseAge;
  })

  private isBirthdayNotPassed(today: Date, baseAge: number) {
    return (
      this.birthdate().getMonth() > today.getMonth() ||
      (this.birthdate().getMonth() === today.getMonth() && this.birthdate().getDate() >= today.getDate())
    ) && baseAge !== 0;
  }

  dogAge = computed(() => {
    return ((this.age() - 1) * 7) + 1;
  })

  setBirthdate(date: string) {
    this.isNewValue = true;
    this.birthdate.set(new Date(date));
  }
}
