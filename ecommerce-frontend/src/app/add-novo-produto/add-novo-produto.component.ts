import {Component, OnInit} from '@angular/core';
import {Produto} from "../_model/produto.model";
import {NgForm} from "@angular/forms";
import {ProductService} from "../_services/product.service";
import {HttpResponse} from "@angular/common/http";

@Component({
    selector: 'app-add-novo-produto',
    templateUrl: './add-novo-produto.component.html',
    styleUrls: ['./add-novo-produto.component.css']
})
export class AddNovoProdutoComponent implements OnInit {

    product: Produto = {
        productName: "",
        productDescription: "",
        productDiscountedPrice: 0,
        productActualPrice: 0
    }

    constructor(
        private productService: ProductService
    ) {
    }

    ngOnInit(): void {
    }

    addProduct(productForm: NgForm) {
        this.productService.addProduct(this.product).subscribe(
            (response: Produto) => {
                productForm.reset();
            },
            (error: HttpResponse<any>) => {
                console.log(error)
            }
        );
    }
}
