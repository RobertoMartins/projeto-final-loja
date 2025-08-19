import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private api = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.api}/products`);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.api}/products/categories`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.api}/products/${id}`);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.api}/products/${id}`);
  }
}
