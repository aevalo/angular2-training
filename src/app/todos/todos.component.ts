import {Component, OnInit} from '@angular/core';
import {Item} from '../item';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  newTodo: string;
  todos: Item[];
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.todos = this.todoService.getTodoList();
  }
  addNewTodo() {
    if (this.newTodo && this.newTodo.length > 0) {
      this.todos.push({name: this.newTodo, done: false, active: true});
    }
  }
}
