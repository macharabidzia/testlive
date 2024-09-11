import { Routes } from '@angular/router';
import { DialogComponent } from './components/dialog/dialog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TabGuard } from './guards/tab.guard';
import { DialogGuard } from './guards/dialog.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'ge/slot', pathMatch: 'full' },
  {
    path: ':lang/:tab',
    title: 'Home',
    pathMatch: 'full',
    canActivate: [TabGuard],
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: ':lang/:tab/:id',
    title: 'Home',
    pathMatch: 'full',
    canActivate: [TabGuard, DialogGuard],
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
