import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// Observables provide support for passing messages between parts of your application. 
// They are used frequently in Angular and are the recommended technique for event handling, 
// asynchronous programming, and handling multiple values. https://angular.io/guide/observables-in-angular
import { Observable, observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // URL which returns list of JSON items (API end-point URL)
  private readonly URL = 'https://localhost:44305/api';

  constructor(private http: HttpClient) { }

  // create a method named: resolveItems()
  // this method returns list-of-items in form of Observable
  // every HTTTP call returns Observable object
  GetGymList(): Observable<any[]> {
    // this.http is a HttpClient library provide by @angular/common
    // we are calling .get() method over this.http object
    // this .get() method takes URL to call API
    return this.http.get<any>(this.URL+'/Gym');
  }

  AddGym(val: any): Observable<any[]>{
    //alert('Request AddGym is sent!');
    return this.http.post<any[]>(this.URL+'/Gym',val);
  }

  UpdateGym(val: any){
    alert('Request UpdateGym is sent!');
    let PathParameterId = `/Gym/${val.id}`;
    return this.http.put<any>(this.URL+PathParameterId,val)
  }
  DeleteGym(id: any, teste:any){
    alert('Request DeleteGym is sent!');
    let PathParameterId = `/Gym/${id}`;
    return this.http.delete<any>(this.URL+PathParameterId, teste)
  }
}
