import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';



let baseUrl = 'http://localhost:8080/restaurant';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  constructor(private http: HttpClient) {}

    getRandom(): Observable<any> {

          var header = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
  });


    let baseUrl1 = 'http://localhost:8080/restaurant/random';
    return this.http.get(baseUrl1,{responseType: "text"}
      );
  }

  create(data: any): Observable<any> {

    var header = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
  });
  
  
   let baseUrl1 = 'http://localhost:8080/restaurant/add';
    return this.http.post(baseUrl1, JSON.stringify(data),{    
      headers: header
    });
  }

}
