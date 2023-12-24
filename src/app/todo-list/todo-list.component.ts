import { Component } from '@angular/core';
import {Todo} from "../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos: Todo[] = [];
  inputValue = '';
  displaySomething = false;
  isRed = false;
  useClass = false;
  errorMessage = '';

  addTodo(todo: string): void {
    if (todo.length < 4) {
      this.errorMessage = 'Zadanie powinno miec min 4 znaki!';
      return;
    }
    this.todos.push({id: Math.random(),name: todo, isComplete: false});
    this.inputValue = '';
  }

  toggleTodo(todo: Todo) {
    todo.isComplete = !todo.isComplete;
  }

  displaySomethingFunction(): void {
    this.displaySomething = !this.displaySomething;
    this.isRed = !this.isRed;
    this.useClass = !this.displaySomething;
  }


  changeTodoStatus(todo: Todo) {
    todo.isComplete = !todo.isComplete;
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }
}
