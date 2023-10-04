import {Component} from '@angular/core';
import {Todo} from "../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];

  addTodo(todo: string): void {
    if (todo.length < 3) {
      alert('Za krótki')
    }
    this.todos.push({name: todo, isComplete: false})
    console.log('Aktualna lista todo: ', this.todos);
  }

  changeTodoStatus(todo: Todo) {
    todo.isComplete = !todo.isComplete;

    console.log(this.todos)
  }
}
