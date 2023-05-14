import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PvService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8081/api/v1/';
  //pvs: any = [];

  createNewPv(pv: any) {
    return this.http.post(this.url + 'pv/save', pv);

  }
  findAllPv() {
    return this.http.get(this.url + 'pv/findAll');
  }
  deletePv(id: any) {
    return this.http.delete(this.url + 'pv/deleteById/' + id);

  }

}

