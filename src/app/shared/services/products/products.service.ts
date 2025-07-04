import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  listProducts() {
    const url = 'assets/products.json';
    return this.http.get(url);
  }
}
