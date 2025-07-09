import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HygieneProduct } from '../../interfaces/hygiene-product';

@Injectable({
  providedIn: 'root',
})
export class HygieneProductClient {
  constructor(private http: HttpClient) {}

  getHygieneProduct(): Observable<HygieneProduct[]> {
    // return mon url
    return this.http.get<HygieneProduct[]>(environment.API_URL.HYGIENE_PRODUCT);
  }
}
