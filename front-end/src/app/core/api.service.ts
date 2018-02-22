import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    public authService: AuthService,
  ) {
  }

  get(resource: string) {
    let url = API_URL + resource;
    let options = this.getHeaderOptions(true);
    return this.http.get(url, options).delay(100);
  }

  post(resource: string, body: any, extendOptions) {
    let url = API_URL + resource;
    let options = this.getHeaderOptions(extendOptions);
    return this.http.post(url, body, options);
  }

  put(resource: string, body: string, extendOptions) {
    let url = API_URL + resource;
    let options = this.getHeaderOptions(extendOptions);
    return this.http.put(url, body, options);
  }

  delete(resource: string, extendOptions?) {
    let url = API_URL + resource;
    let options = this.getHeaderOptions(true);
    return this.http.delete(url, options);
  }


  getHeaderOptions(contentTypeRequired: boolean) {
    let token = this.authService.getToken();
    let headerOptions;

    if (!contentTypeRequired) {
      headerOptions = {
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': 3600,
        'Authorization': 'Bearer ' + token
      };
    } else {
      headerOptions = {
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': 3600,
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded'
      };
    }

    const httpOptions = {
      headers: new HttpHeaders(headerOptions)
    };

    return httpOptions;
  }
}