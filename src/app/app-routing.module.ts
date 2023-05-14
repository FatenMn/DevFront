import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { CompteComponent } from './compte/compte.component';



import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SingupComponent } from './singup/singup.component';
import { ChangerpasswordComponent } from './changerpassword/changerpassword.component';




import { AjouterpvComponent } from './components/pv/ajouterpv/ajouterpv.component';
import { AjouterreunionComponent } from './components/reunion/ajouterreunion/ajouterreunion.component';
import { AjouterutilisateurComponent } from './components/utilisateur/ajouterutilisateur/ajouterutilisateur.component';
import { RechercherpvComponent } from './components/pv/rechercherpv/rechercherpv.component';
import { RechercherreunionComponent } from './components/reunion/rechercherreunion/rechercherreunion.component';
import { RechercherdecisionComponent } from './components/desisions/rechercherdecision/rechercherdecision.component';
import { AjouterdecisionComponent } from './components/desisions/ajouterdecision/ajouterdecision.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListeutilisateurComponent } from './components/utilisateur/listeutilisateur/listeutilisateur.component';
import { EnteteComponent } from './entete/entete.component';
import { ListereunionComponent } from './components/reunion/listereunion/listereunion.component';
import { ListepvComponent } from './components/pv/listepv/listepv.component';
import { ListedecisionComponent } from './components/desisions/listedecision/listedecision.component';
import { RechercherutilisateurComponent } from './components/utilisateur/rechercherutilisateur/rechercherutilisateur.component';
import { ModifierreunionComponent } from './components/reunion/modifierreunion/modifierreunion.component';
import { ModifierdecisionComponent } from './components/desisions/modifierdecision/modifierdecision.component';
import { ModifierpvComponent } from './components/pv/modifierpv/modifierpv.component';

const routes: Routes = [

  {
    path: 'dashboard', component: HeaderComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },

    ]
  },


  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'entete', component: EnteteComponent },
  { path: 'compte', component: CompteComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: 'signup', component: SingupComponent },
  { path: 'changer', component: ChangerpasswordComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  //les ajouts (user,pv,reunion,decision)
  { path: 'ajoututilisateur', component: AjouterutilisateurComponent },
  { path: 'ajoutreunion', component: AjouterreunionComponent },
  { path: 'ajoutpv', component: AjouterpvComponent },
  { path: 'ajoutdecision', component: AjouterdecisionComponent },
  //les recherches(user,reunion,pv,decision)
  { path: 'recherchereunion', component: RechercherreunionComponent },
  { path: 'recherchepv', component: RechercherpvComponent },
  { path: 'rechercheuser', component: RechercherutilisateurComponent },
  { path: 'recherchedecision', component: RechercherdecisionComponent },

  //les listes (user,reunion,pv,decision)
  { path: 'listeutilisateur', component: ListeutilisateurComponent },
  { path: 'listereunion', component: ListereunionComponent },
  { path: 'listepv', component: ListepvComponent },
  { path: 'listedecision', component: ListedecisionComponent },
  //les modification 
  { path: 'modifierprofil', component: ProfilComponent },
  { path: 'modifierreunion/:idd', component: ModifierreunionComponent },
  { path: 'modifierdecision/:id', component: ModifierdecisionComponent },
  { path: 'modifierpv/:id', component: ModifierpvComponent },



  //404not found
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
