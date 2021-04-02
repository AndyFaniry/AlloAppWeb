import { Component, OnInit } from '@angular/core';
import {RequetWebService} from '../../service/requet-web.service';

@Component({
  selector: 'app-compteadmin',
  templateUrl: './compteadmin.component.html',
  styleUrls: ['./compteadmin.component.css']
})
export class CompteadminComponent implements OnInit {

  constructor(private reque : RequetWebService) { }
  operateur: any ;
  id: number ;
  nom: String = '';
  prefixe: String = '';
  mdp: String = '';
  message: String = '';
  etat: boolean=true;
  update: boolean=false;
  check: boolean=false;
  ngOnInit(): void {
    this.getOperateur();
  }
  getOperateur(){
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.message=response['message'];
        this.operateur=response['data'];
        this.id = this.operateur['idOperateur'];
        this.nom = this.operateur['nom'];
        this.prefixe = this.operateur['prefixe'];
      } else {
        this.message = "Erreur de connexion";
      }
    }
    const onError = response => {
      this.message='erreur';
    }
    try {
      this.reque.get("admin/operateur",localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
  displayCheck() {
    this.etat=false;
    this.check=true;
  }
  checkMdp(){
    const  input ={
      mdp : this.mdp
    }
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.check=false;
        this.update=true;
      } else {
        this.message = "Erreur de connexion";
      }
    }
    const onError = response => {
      this.message='erreur';
    }
    try {
      this.reque.post("admin/check",input,localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
  updateO(){
    const  input = {
      nom : this.nom,
      prefixe: this.prefixe,
      mdp : this.mdp
    };
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.update=false;
        this.getOperateur();
        this.etat=true;
      } else {
        this.message = "Erreur de connexion";
      }
    }
    const onError = response => {
      this.message='erreur';
    }
    try {
      this.reque.put("admin/update",input,localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
}
