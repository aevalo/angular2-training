import {Injectable} from '@angular/core';
import {Item} from './item';

@Injectable()
export class TodoService {
  todos: Item[];
  constructor() {
    this.todos = [
      {name: 'Clean your room', done: false, active: true},
      {name: 'Do the laundry', done: true, active: false}
    ];
  }
  getTodoList() {
    return this.todos;
  }
  getTodoItem(index: number) {
    return this.todos[index];
  }
}
