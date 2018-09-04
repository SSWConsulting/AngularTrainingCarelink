import { Route } from '@angular/router';
import { CompletedComponent } from './completed/completed.component';
import { MyHomeComponent } from './home/home.component';

export const route: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MyHomeComponent
  },
  {
    path: 'completed',
    component: CompletedComponent
  }
];
