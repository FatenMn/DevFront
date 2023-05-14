import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-ajouterutilisateur',
  templateUrl: './ajouterutilisateur.component.html',
  styleUrls: ['./ajouterutilisateur.component.css']
})
export class AjouterutilisateurComponent implements OnInit {
  roles: string[] = ['employe', 'assistant', 'responsable', 'administrateur'];

  utilisateur = {
    adresse: '',
    cin: '',
    email: '',
    nom: '',
    prenom: '',
    role: '',
    telephone: '',
    motdepasse: ''
  };

  ajout() {
    this._utilisateur.createNewUtilisateur(this.utilisateur)
      .subscribe(
        res => {
          this.utilisateur = {
            adresse: '',
            cin: '',
            email: '',
            nom: '',
            prenom: '',
            role: '',
            telephone: '',
            motdepasse: ''
          };
          this.ngOnInit();
        },
        err => {
          console.log(err);
        }
      );
  }

  constructor(public _utilisateur: UtilisateurService) { }

  ngOnInit(): void {
  }
}







