import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../../model/category";

@Component({
  selector: 'app-edit-category',
  templateUrl:'./edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  categoryForm: FormGroup;
  categoryId: number;
  category: Category;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      this.categoryId = Number(value.get("id"))
    });
    this.categoryService.findById(this.categoryId).subscribe(value => {
      this.category = value;
      this.categoryForm.patchValue(this.category);
    });
    this.categoryForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl()
    })
  }

  submit(): void {
    const categoryObj = this.categoryForm.value;
    categoryObj.id = this.categoryId;
    this.categoryService.updateCategory(categoryObj).subscribe(value => {
    }, error => {

    }, () => {
      this.router.navigateByUrl('category/list')
    })
  }
}
