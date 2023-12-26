import { Component } from '@angular/core';
import {Todo} from "../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos: Todo[] = [];
  displaySomething = false;
  isRed = false;
  useClass = false;
  errorMessageHere = '';

  addTodo(todo: string): void {
    if (todo.length < 4) {
      this.errorMessageHere = 'Zadanie powinno miec min 4 znaki!';
      return;
    }
    this.todos.push({id: Math.random(),name: todo, isComplete: false});
  }

  displaySomethingFunction(): void {
    this.displaySomething = !this.displaySomething;
    this.isRed = !this.isRed;
    this.useClass = !this.displaySomething;
  }

  clearErrorMessageHere() {
    this.errorMessageHere = '';
  }
}
