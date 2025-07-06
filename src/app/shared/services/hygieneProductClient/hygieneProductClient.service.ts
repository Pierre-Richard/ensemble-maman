import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HygieneProduct } from '../../interfaces/hygienesproducts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HygieneProductclient {
  constructor(private http: HttpClient) {}

  listHygienesProducts(): Observable<HygieneProduct[]> {
    // return mon url
    return this.http.get<HygieneProduct[]>(
      environment.api_url_hygienesproducts
    );
  }
}
