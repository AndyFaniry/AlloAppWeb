import { Component, OnInit } from '@angular/core';
import {RequetWebService} from '../../service/requet-web.service';
import {Router} from '@angular/router';
import {base_url} from '../../../environments/environment';

@Component({
  selector: 'app-deconnect',
  templateUrl: './deconnect.component.html',
  styleUrls: ['./deconnect.component.css']
})
export class DeconnectComponent implements OnInit {

  constructor(private reque:RequetWebService,private route:Router) { }
  message: String='';
  ngOnInit(): void {
  }
  deconnect(){
    const onSuccess = response => {
      if (response['code'] == 200) {
        localStorage.removeItem('tokenAdmin');
        sessionStorage.removeItem('nom');
        this.message="Deconnecter";
        this.route.navigateByUrl('/admin');
      } else {
        this.message = "";
      }
    }
    const onError = response => {
    }
    try {
      this.reque.post("admin/deconnect",null,localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
}
