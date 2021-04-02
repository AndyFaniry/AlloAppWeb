import { Component, OnInit } from '@angular/core';
import {RequetWebService} from '../../../service/requet-web.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detailoffre',
  templateUrl: './detailoffre.component.html',
  styleUrls: ['./detailoffre.component.css']
})
export class DetailoffreComponent implements OnInit {

  constructor(private reque: RequetWebService,private activeRoute: ActivatedRoute) { }
  details: any;
  appels: any;
  internets:any;
  smss:any;
  message: String ='';
  id: number;
  idO: number;
  valeur: String='';
  puM: String ='';
  puA: String = '';
  mega: String ='';
  nbsms: String ='';
  appel: boolean=true;
  internet: boolean=true;
  sms: boolean =true;
  ngOnInit(): void {
    this.idO=Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.getDetail(this.idO);
  }
  getDetail(idoffre:number){
    //const idoffre =this.activeRoute.snapshot.paramMap.get('idofrre');
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.message=response['message'];
        this.details=response['data'];
        this.appels=response['data']['appel'];
        this.internets=response['data']['internet'];
        this.smss=response['data']['sms'];
      } else {
        this.message = "Erreur de connexion";
      }
    }
    const onError = response => {
      this.message='erreur';
    }
    try {
      this.reque.get("admin/offre/details/"+idoffre,localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
}
updaterAppel(id:number){
  this.id=id;
  this.appel=false;
}
updateAppel(){
  const input = {
    idOAppel: this.id,
    valeurTTC:this.valeur,
    puMemeOp:this.puM,
    puAutreOp:this.puA
  };
  const onSuccess = response => {
    if (response['code'] == 200) {
      this.message=response['message'];
      this.getDetail(this.idO);
      this.appel=true;
    } else {
      this.message = "Update echoué";
    }
  }
  const onError = response => {
  }
  try {
    this.reque.put("admin/offre/appel",input,localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
  } catch (err) {
    this.message = err;
  }
}
  updaterInternet(id:number){
    this.id=id;
    this.internet=false;
  }
  updateInternet(){
    const input = {
      idOInternet:this.id,
      mo:this.mega
    };
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.message=response['message'];
        this.getDetail(this.idO);
        this.internet=true;
      } else {
        this.message = "Update echoué";
      }
    }
    const onError = response => {
    }
    try {
      this.reque.put("admin/offre/internet",input,localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
  updaterSms(id:number){
    this.id=id;
    this.sms=false;
  }
  updateSms(){
    const input = {
      idOSms:this.id,
      nbrSms:this.nbsms
    };
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.message=response['message'];
        this.getDetail(this.idO);
        this.sms=true;
      } else {
        this.message = "Update echoué";
      }
    }
    const onError = response => {
    }
    try {
      this.reque.put("admin/offre/sms",input,localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
remove(lien: String){
  const onSuccess = response => {
    if (response['code'] == 200) {
      this.message=response['message'];
      this.getDetail(this.idO);
    } else {
      this.message = "Erreur de connexion";
    }
  }
  const onError = response => {
    this.message='erreur';
  }
  try {
    this.reque.delete(lien,localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
  } catch (err) {
    this.message = err;
  }
}
}
