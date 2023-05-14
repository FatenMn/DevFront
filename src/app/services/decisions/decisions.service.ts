import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DecisionsService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8081/api/v1/';

  createNewDecision(decision: any) {
    return this.http.post(this.url + 'decision/save', decision);
  }

  findAlldesicion() {
    return this.http.get(this.url + 'decision/findAll');
  }
  finddecisionById(id: any): Observable<any> {
    return this.http.get<any>(this.url + 'decision/findById/' + id);
  }

  //finddecisionById(id: any) {
  //return this.http.get(this.url + 'decision/findById/' + id);
  //}

  //modifierDecision(id: any, decision: any) {
  //return this.http.put(this.url + 'decision/update/' + id, decision);
  //}

  deleteDecision(id: any) {
    return this.http.delete(this.url + 'decision/deleteById/' + id);
  }
}



  ////deleteDecision(id: any) {
    //return this.http.delete(this.url + 'decision/deleteById/' + id);

 // }



/*finddecisionById(id: any): Observable<any> {
  return this.http.get('/api/decisions/' + id);
}
*/


