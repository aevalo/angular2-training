import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TodoService} from '../todo.service';
import {Item} from '../item';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  index: number;
  todo: Item;
  newTodo: Item;
  constructor(private route: ActivatedRoute, private router: Router, private todoService: TodoService) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['index']; // + converts string to number in JavaScript
      this.todo = this.todoService.getTodoItem(this.index);
      this.newTodo = Object.assign({}, this.todo);
    });
  }
  editTodo(): void {
    if (this.newTodo.name.length > 0) {
      this.todo.name = this.newTodo.name;
      this.newTodo.name = '';
    }
    if (this.newTodo.assignee && this.newTodo.assignee.length > 0) {
      this.todo.assignee = this.newTodo.assignee;
      this.newTodo.assignee = '';
    }
    if (this.newTodo.done !== this.todo.done) {
      this.todo.done = this.newTodo.done;
      this.newTodo.done = false;
    }
    this.router.navigate(['todos']);
  }
}
