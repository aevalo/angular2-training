import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() inputTodo: Item;
  @Input() index: number;
  constructor() {}
  ngOnInit(): void {}
}
