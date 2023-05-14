import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor()//public router: Router
  { }

  ngOnInit(): void {
  }

  /* redirectToHome() {
     this.router.navigateByUrl('dashboard/home');
   }
   redirectToAbout() {
     this.router.navigateByUrl('dashboard/about');
   }
   //redirectToProfil() {
   //this.router.navigateByUrl('dashboard/profil');
   //}
 
   logMeOut() {
     this.router.navigateByUrl('login');
   }
 */
}
