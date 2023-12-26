import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {Todo} from "../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos: Todo[] = [];
  finishedTodos: Todo[] = [];
  errorMessage = '';



  addTodo(todo: string): void {
    if(todo.length <= 3) {
      this.errorMessage = 'Zadanie powinno mieć co najmniej 4 znaki!';
      return;
    }

    this.todos.push({ name: todo, isComplete: false});
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }

  deleteTodo(i: number) {
    this.finishedTodos.push(this.todos[i]);
    this.todos = this.todos.filter((todo, index) => index !== i)
  }

  resurrectTodo(i: number) {
    this.todos.push(this.finishedTodos[i]);
    this.finishedTodos = this.finishedTodos.filter((todo, index) => index !== i)
  }

  changeTodoStatus(index: number) {
    this.todos[index] = {
      ...this.todos[index], // kopia obiektu
      isComplete: !this.todos[index].isComplete
    }
  }
}
