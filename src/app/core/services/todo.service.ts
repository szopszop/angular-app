import { Injectable } from '@angular/core';
import { Todo } from "../../shared/interfaces/todo.interface";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todos: Todo[] = JSON.parse(localStorage.getItem('todos')!) ?? [];
  todoChanged = new Subject<Todo[]>();

  constructor() { }

  public get getTodos() {
    return this._todos.slice();
  }


  addTodo(name: string): void {
    this._todos.push({ name, isComplete: false });
    this.saveToLocalStorage();

    this.todoChanged.next(this.getTodos);
  }

  deleteTodo(i: number) {
    this._todos = this.getTodos.filter((todo, index) => index !== i);
    this.saveToLocalStorage();
    this.todoChanged.next(this.getTodos);
  }

  changeTodoStatus(index: number) {
    this._todos[index] = {
      ...this.getTodos[index],
      isComplete: !this.getTodos[index].isComplete
    };
    this.saveToLocalStorage();
    this.todoChanged.next(this.getTodos);
  }

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.getTodos));
  }
}
