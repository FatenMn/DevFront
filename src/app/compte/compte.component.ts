import { Component, OnInit } from '@angular/core';
//import{Http} from '@angular/core';
//import { map } from 'rxjs/add/operator/map';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  constructor() {
    //(private http: Http,public compteservice : compteService)
  }

  ngOnInit(): void {

    //avec les services
    //this.compteservice.getcompte().
    //.subscribe(next:data{this.pagecompte=data;
    //},error.err{consol.log(err);
    //})
    //sans service
    //this.http.get(url "http://localhost:8081/...");

    //.map(resp)resp.json
    //.subscribe(next:data{this.pagecompte=data;
    //},error.err{consol.log(err);
    //})

  }

} 
