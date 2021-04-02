import { Component, OnInit } from '@angular/core';
import {RequetWebService} from '../../service/requet-web.service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  constructor(private reque: RequetWebService,private route:Router) { }
  nom: any = '';
  mdp: any = '';
  token: any = '';
  etat: boolean= false;
  message: string = '';
  operateur: any ;
  ngOnInit(): void {
  }
  login(){
    const input = {
      nom : this.nom,
      mdp : this.mdp
    }
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.etat=true;
        this.token=response['message'];
        this.operateur=response['data'];
        localStorage.setItem('tokenAdmin',this.token);
        sessionStorage.setItem('nom',this.operateur['nom']);
        this.message="Connecter";
        this.route.navigateByUrl('admin/compte');
      } else {
        this.message = "Numero ou mots de passe incorrect";
      }
    }
    const onError = response => {
    }
    try {
      this.reque.login("admin/login",input).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
}
