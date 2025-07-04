import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CouchesService {
  constructor(private http: HttpClient) {}

  listCouches() {
    //recuperer URL des couches
    const url = 'assets/clothes.json';
    // return mon url
    return this.http.get(url);
  }
}
