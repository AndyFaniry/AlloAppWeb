import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import {ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AcceuilComponent } from './page/acceuil/acceuil.component';
import { InscriptionComponent } from './page/inscription/inscription.component';
import { DisconnectComponent } from './page/disconnect/disconnect.component';
import { LoginadminComponent } from './admin/loginadmin/loginadmin.component';
import { NavigationComponent } from './admin/navigation/navigation.component';
import { CompteadminComponent } from './admin/compteadmin/compteadmin.component';
import { RetraitComponent } from './admin/retrait/retrait.component';
import { DepotComponent } from './admin/depot/depot.component';
import { ListeoffreComponent } from './admin/offre/listeoffre/listeoffre.component';
import { DetailoffreComponent } from './admin/offre/detailoffre/detailoffre.component';
import { AjoutdetailoffreComponent } from './admin/offre/ajoutdetailoffre/ajoutdetailoffre.component';
import { DeconnectComponent } from './admin/deconnect/deconnect.component';
import { StatComponent } from './admin/stat/stat.component';
import { CreditComponent } from './admin/credit/credit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceuilComponent,
    InscriptionComponent,
    DisconnectComponent,
    LoginadminComponent,
    NavigationComponent,
    CompteadminComponent,
    RetraitComponent,
    DepotComponent,
    ListeoffreComponent,
    DetailoffreComponent,
    AjoutdetailoffreComponent,
    DeconnectComponent,
    StatComponent,
    CreditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
