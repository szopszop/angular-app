import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-alert2',
  templateUrl: './alert2.component.html',
  styleUrls: ['./alert2.component.css']
})
export class Alert2Component {
  @Input()
  errorMessageChild!: string;
  @Output()
  clearErrorMessageChild = new EventEmitter<void>();

  clearErrorMessage() {
    this.clearErrorMessageChild.emit();
  }
}
