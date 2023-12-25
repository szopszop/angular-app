import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent {

  @Output()
  addTodoEE = new EventEmitter<string>();

  addTodo(todoName: string) {
    this.addTodoEE.emit(todoName);
  }
}
