import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input()
  errorMessageChild!: string;

  @Output()
  clearMessageChild = new EventEmitter<void>();

  clearErrorMessage() {
    this.clearMessageChild.emit();
  }
}
