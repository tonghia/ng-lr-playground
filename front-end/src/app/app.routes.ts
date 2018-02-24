import {Routes} from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: 'app/pages/login/login.module#LoginModule'
    },
    {
        path: '**',
        component: ErrorComponent
    }
];