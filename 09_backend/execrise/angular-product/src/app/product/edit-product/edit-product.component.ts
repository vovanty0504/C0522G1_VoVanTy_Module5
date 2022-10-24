import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product;
  productForm: FormGroup;
  categoryList: Category[] = [];

  getAllCategory() {
    this.categoryService.getAll().subscribe(value => {
      this.categoryList = value
    })
  }

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.productService.findById(id).subscribe(value => {
      this.product = value;
      this.productForm.patchValue(this.product)
    });
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
    this.getAllCategory();
  }

  updateProduct() {
    const productObj = this.productForm.value;
    console.log("a");
    this.productService.update(productObj).subscribe(() => {
      this.router.navigateByUrl('product/list')
    })
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
