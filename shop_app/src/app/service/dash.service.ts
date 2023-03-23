import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(private http:HttpClient) { }

   private apiUrl = 'http://localhost:8080/api/news'
   getNews():Observable<any>{
    return this.http.get<any>(this.apiUrl)
   }

   searchnews(query:string){
    return this.http.get<any>(`${this.apiUrl}?q=${query}`)
   }


}