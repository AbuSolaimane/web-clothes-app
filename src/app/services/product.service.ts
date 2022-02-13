import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    let host = environment.host;
    return this.http.get<Product[]>(host + "/products");
  }

  getSelectedProducts(): Observable<Product[]> {
    let host = environment.host;
    return this.http.get<Product[]>(host + "/products?selected=true");
  }

  getAvailableProducts(): Observable<Product[]> {
    let host = environment.host;
    return this.http.get<Product[]>(host + "/products?available=true");
  }

  searchProducts(keyword: string): Observable<Product[]> {
    let host = environment.host;
    return this.http.get<Product[]>(host + "/products?name_like=" + keyword);
  }

  getProductById(id: number): Observable<Product> {
    let host = environment.host;
    return this.http.get<Product>(host + "/products/" + id);
  }

  select(product: Product): Observable<Product> {
    let host = environment.host;
    product.selected = !product.selected;
    return this.http.put<Product>(host + "/products/" + product.id, product);
  }

  createProduct(product: Product) {

  }

  updateProduct(id: number, product: Product) {

  }

  deleteProduct(id: number) : Observable<void> {
    let host = environment.host;
    return this.http.delete<void>(host + "/products/" + id);
  }

}
