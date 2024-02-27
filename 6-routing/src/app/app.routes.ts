import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OtterComponent } from './pages/otter/otter.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailsComponent } from './pages/otter/details/details.component';
import { dumbGuardGuard } from './dumb-guard.guard';
import { LizardComponent } from './components/pages/lizard/lizard.component';
import { MinLengthValidator } from '@angular/forms';
import { MinutesComponent } from './components/pages/minutes/minutes.component';
import { OddComponent } from './components/pages/minutes/odd/odd.component';
import { EvenComponent } from './components/pages/minutes/even/even.component';
import { isMinuteOddGuard } from './is-minute-odd.guard';
import { isMinuteEvenGuard } from './is-minute-even.guard';

export const routes: Routes = [{
    // redirige les requêtes de localhost:4200/ vers localhost:4200/home
    path: '',
    redirectTo: 'home',
    pathMatch: "full",
}, {
    path: 'home',
    component: HomeComponent,
}, { 
    path: 'otter',
    component: OtterComponent,
    canActivate: [dumbGuardGuard],
    children: [{
        path: ':id',
        component: DetailsComponent,
    }],
},{
    path: "lizard",
    component: LizardComponent
}, {
    path: 'minutes',
    component: MinutesComponent,
    children: [{
        path: 'odd',
        component: OddComponent,
        canActivate: [isMinuteOddGuard],
    }, {
        path: "even",
        component: EvenComponent,
        canActivate: [isMinuteEvenGuard],
    }]
}, {
    // Le chemin joker doit absolument être en dernier. Car s'il match un chemin, il ne
    // va pas voir les routes suivantes. CEEEEPENDAAAAAANT, toutes routes déclarées après,
    // n'est pas accessible.
    path: '**',
    component: NotFoundComponent
}, {
    path: 'innacessible',
    component: HomeComponent
}];
