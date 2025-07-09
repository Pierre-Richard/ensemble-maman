import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductClient {
  constructor(private http: HttpClient) {}

  getlistProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.API_URL.PRODUCT);
  }
}
