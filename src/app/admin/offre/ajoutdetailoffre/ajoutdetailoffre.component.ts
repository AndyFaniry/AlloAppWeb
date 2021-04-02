import { Component, OnInit } from '@angular/core';
import {RequetWebService} from '../../../service/requet-web.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ajoutdetailoffre',
  templateUrl: './ajoutdetailoffre.component.html',
  styleUrls: ['./ajoutdetailoffre.component.css']
})
export class AjoutdetailoffreComponent implements OnInit {

  constructor(private reque:RequetWebService,private activeRoute: ActivatedRoute) { }
  id: String ='';
  message: String='';
  valeur: String='';
  puM: String ='';
  puA: String = '';
  mega: String ='';
  nbsms: String ='';
  appel: boolean=true;
  internet: boolean=true;
  sms: boolean =true;
  ngOnInit(): void {
    this.id =this.activeRoute.snapshot.paramMap.get('id');
  }
  ajouterAppel(){
    const input = {
      idOffre: this.id,
      valeurTTC:this.valeur,
      puMemeOp:this.puM,
      puAutreOp:this.puA
    };
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.message=response['message'];
        this.appel=false;
      } else {
        this.message = "Ajout echoué";
      }
    }
    const onError = response => {
    }
    try {
      this.reque.post("admin/offre/appel/insert",input,localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
  ajouterInternet(){
    const input = {
      idOffre:this.id,
      mo:this.mega
    };
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.message=response['message'];
        this.internet=false;
      } else {
        this.message = "Ajout echoué";
      }
    }
    const onError = response => {
    }
    try {
      this.reque.post("admin/offre/internet/insert",input,localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
  ajouterSms(){
    const input = {
      idOffre:this.id,
      nbrSms:this.nbsms
    };
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.message=response['message'];
        this.sms=false;
      } else {
        this.message = "Ajout echoué";
      }
    }
    const onError = response => {
    }
    try {
      this.reque.post("admin/offre/sms/insert",input,localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
}
