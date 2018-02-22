import {Routes} from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        // path: 'home', loadChildren: './home/home.module#HomeModule',
        // canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: ErrorComponent
    }
];