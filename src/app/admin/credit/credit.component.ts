import { Component, OnInit } from '@angular/core';
import {RequetWebService} from '../../service/requet-web.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  constructor(private reque:RequetWebService) { }
  message: String = '';
  valeur: String='';
  credit: any;
  add: boolean=false;
  ngOnInit(): void {
    this.getList();
  }
  getList(){
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.credit=response['data'];
      } else {
        this.message = "Erreur de connexion";
      }
    }
    const onError = response => {
      this.message='erreur';
    }
    try {
      this.reque.get("admin/credit",localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
  remove(id: number){
    console.log(id);
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.credit=response['data'];
        this.getList();
      } else {
        this.message = "Erreur de connexion";
      }
    }
    const onError = response => {
      this.message='erreur';
    }
    try {
      this.reque.delete("admin/credit/"+id,localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
  ajout(){
    this.add=true;
  }
  ajouter(){
    const input = {
      valeur:this.valeur
    };
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.message=response['message'];
        this.getList();
        this.add=false;
      } else {
        this.message = "Ajout echoué";
      }
    }
    const onError = response => {
    }
    try {
      this.reque.post("admin/credit/ajout",input,localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
}
