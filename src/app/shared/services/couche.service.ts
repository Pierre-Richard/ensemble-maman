import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoucheService {
  constructor(private http: HttpClient) {}

  listCouche() {
    //recuperer URL des couches
    const url = 'assets/couches.jpg';
    // return mon url
    return this.http.get(url, { responseType: 'text' });
  }
}
