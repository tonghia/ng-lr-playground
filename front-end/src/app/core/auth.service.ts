// import { Injectable, Inject } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import {Subject, Observable} from 'rxjs';

// @Injectable()
// export class AuthService {
//     constructor( ) { }
//     loginCompleteEvent = new Subject();
//     logoutCompleteEvent = new Subject();

//     get isLoggedIn() {
//         return tokenNotExpired(null, this.getToken());
//     }

//     onLoginComplete(): Observable<any> {
//         return this.loginCompleteEvent.asObservable();
//     }
//     onLogoutComplete(): Observable<any> {
//         return this.logoutCompleteEvent.asObservable();
//     }

//     get isTokenExpired() {
//         return !tokenNotExpired(null, this.getToken());
//     }

//     get user() {
//         return JSON.parse(localStorage.getItem('user'));
//     }

//     login(email: string, response: any) {
//         localStorage.setItem('user', JSON.stringify(response.json()));
//         this.loginCompleteEvent.next();
//     }

//     // logout() {
//     //     let language = localStorage.getItem('language');
//     //     if (language == null) {
//     //         language = this.defaultLanguage;
//     //     }
//     //     this.logoutCompleteEvent.next();
//     //     localStorage.removeItem('user');
//     //     localStorage.setItem('language', language);
//     // }

//     getToken() {
//         return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['token'] : null;
//     }

// }
