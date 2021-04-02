import {Component, Input, OnInit} from '@angular/core';
import {RequetWebService} from '../../service/requet-web.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { options } from 'src/environments/environment';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-disconnect',
  templateUrl: './disconnect.component.html',
  styleUrls: ['./disconnect.component.css']
})
export class DisconnectComponent implements OnInit {
  message: string = '';
  constructor(private reque: RequetWebService,private  router: Router) { }
  @Input() log: LoginComponent
  ngOnInit(): void {
  }
  disconnect(){
    localStorage.removeItem('token');
  }
}
