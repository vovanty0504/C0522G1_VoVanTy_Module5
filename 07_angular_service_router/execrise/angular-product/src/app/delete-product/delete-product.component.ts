import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from "../product-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../model/product";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  product: Product;

  productForm: FormGroup;

  constructor(private productService: ProductServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.product = this.productService.finById(id);
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl()
    });
    this.productForm.patchValue(this.product)
  }

  deleteProduct() {
    const product = this.productForm.value;
    this.productService.deleteProduct(product.id);
    this.router.navigateByUrl('');
  }
}
