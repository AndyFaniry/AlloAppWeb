import {Component, Input, OnInit} from '@angular/core';
import {CompteadminComponent} from '../compteadmin/compteadmin.component';
import {base_url} from 'src/environments/environment';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  nom : String ='';
  url: String =base_url;
  constructor() { }

  ngOnInit(): void {
    this.nom=sessionStorage.getItem('nom');
  }

}
