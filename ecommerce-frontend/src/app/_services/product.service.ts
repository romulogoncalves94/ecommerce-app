import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../_model/produto.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PATH_OF_API = 'http://localhost:9090';

  constructor(
      private httpClient: HttpClient
  ) {}

  public addProduct(product: FormData) {
    return this.httpClient.post<Product>("http://localhost:9090/addNewProduct", product);
  }
}
