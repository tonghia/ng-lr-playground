import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  
  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }

  onLogin() {
    this.apiService.post('login', {email: this.email, password: this.password}, false)
                    .subscribe(response => console.log(response));
  }

}
