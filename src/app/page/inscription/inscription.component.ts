import { Component, OnInit } from '@angular/core';
import {RequetWebService} from '../../service/requet-web.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private reque:RequetWebService) { }
  nom: String = '';
  mail: String = '';
  mdp: String ='';
  operateur: any;
  idOperateur: String ='';
  message: String = '';
  ngOnInit(): void {
    this.getOPerateurAll();
  }
  getOPerateurAll(){
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.operateur=response['data'];
      } else {
        this.message = "Numero ou mots de passe incorrect";
      }
    }
    const onError = response => {
    }
    try {
      this.reque.get("operateurs",null).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
  signup(){
    const input = {
      idoperateur : this.idOperateur,
      nom : this.nom,
      email : this.mail,
      mdp : this.mdp
    }
    const onSuccess = response => {
      if (response['code'] == 200) {
        localStorage.setItem('token',response['message']);
      } else {
        this.message = "insertion echouer";
      }
    }
    const onError = response => {
    }
    try {
      this.reque.login("compte/inscription",input).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
}
