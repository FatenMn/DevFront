import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private url = 'http://localhost:8081/api/v1/'; //http://localhost:8081/api/v1/

  createNewUtilisateur(utilisateur: any) {
    return this.http.post(this.url + 'utilisateur/save', utilisateur);

  }
  findAllUtilisateur() {

    return this.http.get(this.url + 'utilisateur/findAll');//http://localhost:8081/api/v1/utilisateur/findAll
  }
  deleteUtilisateur(id: any) {
    return this.http.delete(this.url + 'utilisateur/deleteById/' + id);

  }



  constructor(private http: HttpClient) { }
}
