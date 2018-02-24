import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule }   from '@angular/forms';

import { LoginComponent } from "./login.component";

const loginRoutes: Routes = [
    { path: '', component: LoginComponent },
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(loginRoutes),
        FormsModule,
    ],
})
export class LoginModule { }
