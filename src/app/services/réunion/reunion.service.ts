import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ReunionService {


  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8081/api/v1/'; //http://localhost:8081/api/v1/

  createNewReunion(reunion: any) {
    return this.http.post(this.url + 'reunion/save', reunion);

  }
  findAllReunion() {
    return this.http.get(this.url + 'reunion/findAll');
  }
  deleteReunion(id: any) {
    return this.http.delete(this.url + 'reunion/deleteById/' + id);

  }
}
