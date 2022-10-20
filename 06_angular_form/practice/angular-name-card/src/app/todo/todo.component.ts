import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';

// tslint:disable-next-line:variable-name


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private id = 1;

  todos: Todo[] = [];

  content = new FormControl();


  constructor() {
  }

  ngOnInit(): void {
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
    console.log(i);
  }

  change() {
    const value = this.content.value;
    console.log(value);
    if (value) {
      const todo: Todo = {
        id: this.id++,
        content: value,
        complete: false
      };
      console.log(this.id);
      this.todos.push(todo);
      this.content.reset();
    }
  }

}
