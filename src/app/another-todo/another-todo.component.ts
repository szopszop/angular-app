import { Component } from '@angular/core';
import {Todo} from "../shared/interfaces/todo.interface";

@Component({
  selector: 'app-another-todo',
  templateUrl: './another-todo.component.html',
  styleUrls: ['./another-todo.component.css']
})
export class AnotherTodoComponent {

  jobList: Todo[] = [];
  inputValue = '';


  addJob(job: string) {
    this.jobList.push({id: Math.random(), name: job, isComplete: false});
    this.inputValue = '';
  }

  toggleJob(job: Todo) {
    job.isComplete = !job.isComplete;
  }

}
