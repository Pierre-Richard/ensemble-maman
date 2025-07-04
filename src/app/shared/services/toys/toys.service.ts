import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToysService {
  constructor(private http: HttpClient) {}

  lstToys() {
    const url = 'assets/toys.json';
    return this.http.get(url);
  }
}
