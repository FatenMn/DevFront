import { Component, OnInit } from '@angular/core';
import { ReunionService, } from 'src/app/services/réunion/reunion.service';

@Component({
  selector: 'app-listereunion',
  templateUrl: './listereunion.component.html',
  styleUrls: ['./listereunion.component.css']
})
export class ListereunionComponent implements OnInit {
  reunions: any;

  constructor(public _reunion: ReunionService) {

  }
  ngOnInit(): void {
    this._reunion.findAllReunion()
      .subscribe(
        res => {
          this.reunions = res;

        },
        err => {
          console.log(err);
        }
      );
  }
  delete(id_reunion: any) {
    this._reunion.deleteReunion(id_reunion)
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

