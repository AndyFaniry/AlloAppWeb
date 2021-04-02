import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './page/login/login.component';
import {AcceuilComponent} from './page/acceuil/acceuil.component';
import {InscriptionComponent} from './page/inscription/inscription.component';
import {LoginadminComponent} from './admin/loginadmin/loginadmin.component';
import {CompteadminComponent} from './admin/compteadmin/compteadmin.component';
import {RetraitComponent} from './admin/retrait/retrait.component';
import {DepotComponent} from './admin/depot/depot.component';
import {ListeoffreComponent} from './admin/offre/listeoffre/listeoffre.component';
import {DetailoffreComponent} from './admin/offre/detailoffre/detailoffre.component';
import {AjoutdetailoffreComponent} from './admin/offre/ajoutdetailoffre/ajoutdetailoffre.component';
import {CreditComponent} from './admin/credit/credit.component';
const routes: Routes = [
  { path: '', component: AcceuilComponent},
  { path: 'admin', component: LoginadminComponent},
  { path: 'admin/compte', component: CompteadminComponent},
  { path: 'admin/retrait', component: RetraitComponent},
  { path: 'admin/depot', component: DepotComponent},
  { path: 'admin/credit', component: CreditComponent},
  { path: 'admin/offre', component: ListeoffreComponent},
  { path: 'admin/offre/detail/:id', component: DetailoffreComponent},
  { path: 'admin/offre/ajoutdetail/:id', component: AjoutdetailoffreComponent},
  { path: 'login', component: LoginComponent},
  { path: 'inscription', component: InscriptionComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
