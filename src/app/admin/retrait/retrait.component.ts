import { Component, OnInit } from '@angular/core';
import {RequetWebService} from '../../service/requet-web.service';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {
  constructor(private  reque: RequetWebService) { }
  message: String='tsisy';
  liste: any;
  ngOnInit(): void {
    this.getList();
  }
  getList(){
    const onSuccess = response => {
      if (response['code'] == 200) {
          this.message=response['message'];
          this.liste=response['data'];
      } else {
        this.message = "Erreur de connexion";
      }
    }
    const onError = response => {
      this.message='erreur';
    }
    try {
      this.reque.get("admin/retrait",localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
  validation(id: number){
    const input = {
      idMouvement: id
    };
    const onSuccess = response => {
      if (response['code'] == 200) {
        this.message=response['message'];
        this.liste=this.getList();
      } else {
        this.message = "Validation echoué";
      }
    }
    const onError = response => {
    }
    try {
      this.reque.post("admin/valider/mouvement",input,localStorage.getItem('tokenAdmin')).subscribe(onSuccess, onError);
    } catch (err) {
      this.message = err;
    }
  }
}
