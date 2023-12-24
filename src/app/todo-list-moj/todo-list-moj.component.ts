import { Component } from '@angular/core';
import {Message} from "../shared/interfaces/message.interface";

@Component({
  selector: 'app-todo-list-moj',
  templateUrl: './todo-list-moj.component.html',
  styleUrls: ['./todo-list-moj.component.css']
})
export class TodoListMojComponent {

  messages : Message[] = [];

  addMessage(message: string) {
    this.messages.push({text: message, number: Math.random() * 1000, isOkay: true})
  }
}
