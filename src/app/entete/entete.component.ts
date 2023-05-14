import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent implements OnInit {
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  redirectToHome() {
    this.router.navigateByUrl('/header');
  }
  //redirectToAbout() {
  ////this.router.navigateByUrl('dashboard/about');
  // }
  //redirectToProfil() {
  //this.router.navigateByUrl('dashboard/profil');
  //}

  logMeOut() {
    this.router.navigateByUrl('login');
  }



}
