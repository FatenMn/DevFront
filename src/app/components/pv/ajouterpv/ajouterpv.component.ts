import { Component, OnInit } from '@angular/core';
import { PvService } from 'src/app/services/pv/pv.service';

@Component({
  selector: 'app-ajouterpv',
  templateUrl: './ajouterpv.component.html',
  styleUrls: ['./ajouterpv.component.css']
})
export class AjouterpvComponent implements OnInit {

  pv = {
    action: '',
    date_pv: '',
    title: ''
  };

  ajout() {
    this._pv.createNewPv(this.pv)
      .subscribe(
        res => {
          this.pv = {

            action: '',
            date_pv: '',
            title: ''


          };
          this.ngOnInit();
        },
        err => {
          console.log(err);
        }
      );
  }
  constructor(public _pv: PvService) { }
  ngOnInit(): void {

  }
}
