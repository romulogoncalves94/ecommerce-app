import {Component, OnInit} from '@angular/core';
import {Product} from "../_model/produto.model";
import {NgForm} from "@angular/forms";
import {ProductService} from "../_services/product.service";
import {HttpResponse} from "@angular/common/http";
import {FileHandle} from "../_model/file.handle.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-add-novo-produto',
    templateUrl: './add-novo-produto.component.html',
    styleUrls: ['./add-novo-produto.component.css']
})
export class AddNovoProdutoComponent implements OnInit {

    product: Product = {
        productName: "",
        productDescription: "",
        productDiscountedPrice: 0,
        productActualPrice: 0,
        productImages: []
    };

    constructor(
        private productService: ProductService,
        private sanitizer: DomSanitizer
    ) {
    }

    ngOnInit(): void {
    }

    addProduct(productForm: NgForm) {

        const productFormData = this.prepareFormData(this.product);

        this.productService.addProduct(productFormData).subscribe(
            (response: Product) => {
                productForm.reset();
            },
            (error: HttpResponse<any>) => {
                console.log(error)
            }
        );
    }

    prepareFormData(product: Product): FormData {
        const formData = new FormData();
        formData.append(
            'product',
            new Blob([JSON.stringify(product)], {type: 'application/json'})
        );

        for (var i = 0; i < product.productImages.length; i++) {
            formData.append(
                'imageFile',
                product.productImages[i].file,
                product.productImages[i].file.name
            )
        }
        return formData;
    }

    onFileSelected(event) {
        if (event.target.files) {
            const file = event.target.files[0];

            const fileHandle: FileHandle = {
               file: file,
               url:  this.sanitizer.bypassSecurityTrustUrl(
                   window.URL.createObjectURL(file)
               )
            }

            this.product.productImages.push(fileHandle)
        }
    }
}
