import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from "../product-service.service";
import {Product} from "../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductServiceService) { }

  getAll() {
    this.products = this.productService.getAll();
  }

  ngOnInit(): void {
    this.getAll();
  }

}
