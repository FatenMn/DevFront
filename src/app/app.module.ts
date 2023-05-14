import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ProfilComponent } from './profil/profil.component';


import { CompteComponent } from './compte/compte.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SingupComponent } from './singup/singup.component';
import { ChangerpasswordComponent } from './changerpassword/changerpassword.component';





import { HttpClientModule } from '@angular/common/http';

import { SupprimerpvComponent } from './components/pv/supprimerpv/supprimerpv.component';
import { ModifierpvComponent } from './components/pv/modifierpv/modifierpv.component';
import { AjouterpvComponent } from './components/pv/ajouterpv/ajouterpv.component';
import { AjouterreunionComponent } from './components/reunion/ajouterreunion/ajouterreunion.component';
import { ModifierreunionComponent } from './components/reunion/modifierreunion/modifierreunion.component';
import { SupprimerreunionComponent } from './components/reunion/supprimerreunion/supprimerreunion.component';
import { AjouterutilisateurComponent } from './components/utilisateur/ajouterutilisateur/ajouterutilisateur.component';
import { SupprimerutilisateurComponent } from './components/utilisateur/supprimerutilisateur/supprimerutilisateur.component';
import { ModifierutilisateurComponent } from './components/utilisateur/modifierutilisateur/modifierutilisateur.component';
import { AjouterdecisionComponent } from './components/desisions/ajouterdecision/ajouterdecision.component';
import { ModifierdecisionComponent } from './components/desisions/modifierdecision/modifierdecision.component';
import { SupprimerdecisionComponent } from './components/desisions/supprimerdecision/supprimerdecision.component';
import { RechercherdecisionComponent } from './components/desisions/rechercherdecision/rechercherdecision.component';
import { RechercherpvComponent } from './components/pv/rechercherpv/rechercherpv.component';
import { RechercherreunionComponent } from './components/reunion/rechercherreunion/rechercherreunion.component';
import { RechercherutilisateurComponent } from './components/utilisateur/rechercherutilisateur/rechercherutilisateur.component';
import { ListedecisionComponent } from './components/desisions/listedecision/listedecision.component';
import { ListepvComponent } from './components/pv/listepv/listepv.component';
import { ListereunionComponent } from './components/reunion/listereunion/listereunion.component';
import { ListeutilisateurComponent } from './components/utilisateur/listeutilisateur/listeutilisateur.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EnteteComponent } from './entete/entete.component';

const appRoutes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,

    ProfilComponent,

    CompteComponent,
    ForgotPasswordComponent,
    SingupComponent,
    ChangerpasswordComponent,





    SupprimerpvComponent,
    ModifierpvComponent,
    AjouterpvComponent,
    AjouterreunionComponent,
    ModifierreunionComponent,
    SupprimerreunionComponent,
    AjouterutilisateurComponent,
    SupprimerutilisateurComponent,
    ModifierutilisateurComponent,
    AjouterdecisionComponent,
    ModifierdecisionComponent,
    SupprimerdecisionComponent,
    RechercherdecisionComponent,
    RechercherpvComponent,
    RechercherreunionComponent,
    RechercherutilisateurComponent,
    ListedecisionComponent,
    ListepvComponent,
    ListereunionComponent,
    ListeutilisateurComponent,
    NotfoundComponent,
    EnteteComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
