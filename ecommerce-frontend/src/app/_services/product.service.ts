import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produto} from "../_model/produto.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PATH_OF_API = 'http://localhost:9090';

  constructor(
      private httpClient: HttpClient
  ) {}

  public addProduct(product: Produto) {
    return this.httpClient.post<Produto>(this.PATH_OF_API + '/addNovoProduto', product)
  }
}
