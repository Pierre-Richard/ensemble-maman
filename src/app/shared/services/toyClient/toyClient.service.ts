import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Toy } from '../../interfaces/Toy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToyClient {
  constructor(private http: HttpClient) {}

  listToys(): Observable<Toy[]> {
    return this.http.get<Toy[]>(environment.api_url_toy);
  }
}
