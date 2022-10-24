import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";
import {valueReferenceToExpression} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categoryList: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  getAll() {
    this.categoryService.getAll().subscribe(value => {
      this.categoryList = value;
    }, error => {
      console.log(error);
    })
  }


  ngOnInit(): void {
    this.getAll();
  }

}
