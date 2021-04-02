import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RequetWebService } from '../../service/requet-web.service';
import { options } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private reque: RequetWebService) { }
  num: any = '';
  mdp: any = '';
  token: any = '';
  message: string = '';

  ngOnInit(): void {
  }
  login() {
    const input = {
    num : this.num,
    mdp : this.mdp
  }
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.token=response['message'];
        localStorage.setItem('token',this.token);
      } else {
        this.message = "Numero ou mots de passe incorrect";
      }
    }
    const onError = response => {
    }
    try {
        this.reque.login("compte/login",input).subscribe(onSuccess, onError);
      } catch (err) {
        this.message = err;
      }
    }
}
