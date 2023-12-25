import { Component } from '@angular/core';
import {Todo} from "../shared/interfaces/todo.interface";

@Component({
  selector: 'app-moj-todo-list',
  templateUrl: './moj-todo-list.component.html',
  styleUrls: ['./moj-todo-list.component.css']
})
export class MojTodoListComponent {

  todos: Todo[] = [];
  errorMessage = '';
  inputValue = '';

  addTodo(todo: string) {
    if (todo.length < 4) {
      this.errorMessage = "Todo is too short!";
      return;
    }
    this.todos.push({id: Math.random() * 1000, name: todo, isComplete: false});
    this.inputValue = '';
  }

  toggleTodo(todo: Todo) {
    todo.isComplete = !todo.isComplete;
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }
}
