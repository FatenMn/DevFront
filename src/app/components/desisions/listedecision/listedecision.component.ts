import { Component, OnInit } from '@angular/core';
import { DecisionsService } from 'src/app/services/decisions/decisions.service';

@Component({
  selector: 'app-listedecision',
  templateUrl: './listedecision.component.html',
  styleUrls: ['./listedecision.component.css']
})
export class ListedecisionComponent implements OnInit {
  decisions: any = [];

  constructor(public _desision: DecisionsService) {

  }
  ngOnInit(): void {
    this._desision.findAlldesicion()
      .subscribe(
        res => {
          this.decisions = res;

        },
        err => {
          console.log(err);
        }
      );
  }
  delete(id: any) {
    this._desision.deleteDecision(id)
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
}
