import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Toy } from '../../interfaces/toy';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ToyClient {
  constructor(private http: HttpClient) {}

  getlistToys(): Observable<Toy[]> {
    return this.http.get<Toy[]>(environment.API_URL.TOY);
  }
}
