import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Galeria } from './pages/galeria/galeria';
import { Cv } from './pages/cv/cv';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'galeria', component: Galeria },
  { path: 'cv', component: Cv },
];
