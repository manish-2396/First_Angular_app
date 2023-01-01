import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'https://dummyjson.com/products';

  constructor(private httpClient: HttpClient) {}

  getProduct() {
    return this.httpClient.get(this.url);
  }
}
