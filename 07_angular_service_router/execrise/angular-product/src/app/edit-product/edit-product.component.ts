import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "../product-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/product";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;

  productForm: FormGroup;

  constructor(private productService: ProductServiceService,
             private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

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

  updateProduct() {
  const product = this.productForm.value;
  this.productService.editProduct(product.id,product);
  this.router.navigateByUrl('');
  }
}
