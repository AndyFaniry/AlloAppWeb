import { Component, OnInit } from '@angular/core';
import {RequetWebService} from '../../../service/requet-web.service';

@Component({
  selector: 'app-listeoffre',
  templateUrl: './listeoffre.component.html',
  styleUrls: ['./listeoffre.component.css']
})
export class ListeoffreComponent implements OnInit {

  constructor(private reque:RequetWebService) { }
  message : String = '';
  offre: any;
  nom: String = '';
  code: String = '';
  prix: String = '';
  validite: String= '';
  id: number ;
  liste: boolean = true;
  add: boolean = false;
  upd: boolean = false;
  ngOnInit(): void {
    this.getList();
  }
  getList(){
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.message=response['message'];
        this.offre=response['data'];
      } else {
        this.message = "Erreur de connexion";
      }
    }
    const onError = response => {
      this.message='erreur';
    }
    try {
      this.reque.get("admin/offre",localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
  remove(id: number){
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.message=response['message'];
        this.offre=response['data'];
        this.getList();
      } else {
        this.message = "Erreur de connexion";
      }
    }
    const onError = response => {
      this.message='erreur';
    }
    try {
      this.reque.delete("admin/offre/"+id,localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
  updater(id:number,nom:String,code:String,prix:String,validite:String){
    this.id=id;
    this.liste=false;
    this.upd=true;
    this.nom=nom;
    this.code=code;
    this.prix=prix;
    this.validite=validite;
  }
  update(){
    const input = {
      idOffre: this.id,
      nom:this.nom,
      code:this.code,
      prix:this.prix,
      validite:this.validite
    };
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.message=response['message'];
        this.getList();
        this.upd=false;
        this.liste=true;
      } else {
        this.message = "Update echoué";
      }
    }
    const onError = response => {
    }
    try {
      this.reque.put("admin/offre",input,localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
  ajouter(){
    const input = {
      nom:this.nom,
      code:this.code,
      prix:this.prix,
      validite:this.validite
    };
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.message=response['message'];
        this.getList();
        this.add=false;
        this.liste=true;
      } else {
        this.message = "Ajout echoué";
      }
    }
    const onError = response => {
    }
    try {
      this.reque.post("admin/offre/ajout",input,localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
  ajout(){
    this.liste=false;
    this.add=true;
  }
}
