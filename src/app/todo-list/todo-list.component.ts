import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Todo} from "../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  errorMessage = '';

  changeStatus(index: number) {
    this.todos[index] = {
      ...this.todos[index],
      isComplete: !this.todos[index].isComplete
    }
  }

  addTodo(todo: string): void {
    if (todo.length < 3) {
      this.errorMessage = "Za krótki";
      return;
    }
    this.todos.push({name: todo, isComplete: false})
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }

  deleteTodo(i: number) {
    this.todos = this.todos.filter((todo, index) => index !== i)
  }

}
