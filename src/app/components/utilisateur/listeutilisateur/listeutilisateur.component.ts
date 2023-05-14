import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-listeutilisateur',
  templateUrl: './listeutilisateur.component.html',
  styleUrls: ['./listeutilisateur.component.css']
})
export class ListeutilisateurComponent implements OnInit {
  utilisateurs: any;

  ngOnInit(): void {
    this._utilisateur.findAllUtilisateur()
      .subscribe(
        res => {
          console.log(res);
          this.utilisateurs = res;

        },
        err => {
          console.log(err);
        }
      );
  }
  delete(id: any) {
    this._utilisateur.deleteUtilisateur(id)
      .subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        err => {
          console.log(err);
        }
      );
  }
  constructor(public _utilisateur: UtilisateurService) {

  }
}
