import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Todo} from "../../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Input() action!: string;
  @Output() delete = new EventEmitter<void>();
  @Output() changeStatus = new EventEmitter<number>();
  titleDelete = 'Czy chcesz usunać to zadanie?';

  titleResurrect = 'Czy chcesz przwrócić to zadanie?';
  titleExtraDelete = 'Czy aby na pewno chcesz usunąć to zadanie?'
  titleExtraResurrect = 'Czy aby na pewno chcesz przywrócić to zadanie?'
  openModal = false;
  openExtraModal = false;

  changeTodoStatus() {
    this.changeStatus.emit(this.i);
  }

  toggleModal() {
    this.openModal = !this.openModal;
  }

  toggleExtraModal() {
    this.openExtraModal = !this.openExtraModal;
  }

  deleteTodo() {
    this.delete.emit();
  }
}
