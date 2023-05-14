import { Component, OnInit } from '@angular/core';
import { ReunionService } from 'src/app/services/réunion/reunion.service';

@Component({
  selector: 'app-ajouterreunion',
  templateUrl: './ajouterreunion.component.html',
  styleUrls: ['./ajouterreunion.component.css']
})
export class AjouterreunionComponent implements OnInit {

  reunion = {

    datereunion: '',
    heuredebut: '',
    heurefin: '',
    statut: '',
    sujet: '',
  }

  ajout() {
    this._reunion.createNewReunion(this.reunion)
      .subscribe(
        res => {
          this.reunion = {
            datereunion: '',
            heuredebut: '',
            heurefin: '',
            statut: '',
            sujet: '',

          };
          this.ngOnInit();

        },
        err => {
          console.log(err);
        }
      );
  }
  constructor(public _reunion: ReunionService) { }

  ngOnInit(): void {

  }

}
