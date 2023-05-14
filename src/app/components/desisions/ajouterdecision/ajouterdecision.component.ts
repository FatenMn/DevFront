import { Component } from '@angular/core';
import { DecisionsService } from 'src/app/services/decisions/decisions.service';

@Component({
  selector: 'app-ajouterdecision',
  templateUrl: './ajouterdecision.component.html',
  styleUrls: ['./ajouterdecision.component.css']
})
export class AjouterdecisionComponent {
  decision = {

    content: '',
    texte: '',

    //id_pv: '',
  }

  ajout() {
    this._decision.createNewDecision(this.decision)
      .subscribe(
        res => {
          this.decision = {
            content: '',
            texte: '',
            // id_pv: '',



          }
        },
        err => {
          console.log(err);
        }
      );
  }
  constructor(public _decision: DecisionsService) { }
  ngOnInit(): void {

  }

}

