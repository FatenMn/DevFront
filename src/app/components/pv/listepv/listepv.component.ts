import { Component, OnInit } from '@angular/core';
import { PvService } from 'src/app/services/pv/pv.service';

@Component({
  selector: 'app-listepv',
  templateUrl: './listepv.component.html',
  styleUrls: ['./listepv.component.css']
})
export class ListepvComponent implements OnInit {
  pvs: any;

  constructor(public _pv: PvService) { }

  ngOnInit(): void {
    this._pv.findAllPv().subscribe(
      (res: any) => {
        this.pvs = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  delete(id: any) {
    this._pv.deletePv(id)
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
