import {TodosComponent} from './todos/todos.component';
import {EditTodoComponent} from './edit-todo/edit-todo.component';

export const routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos'
  },
  {
    path: 'todos',
    children: [
      {
        path: '',
        component: TodosComponent
      },
      {
        path: ':index',
        component: EditTodoComponent
      }
    ]
  }
];
