import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterContentInit{
  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  @ContentChildren('modalDiv') modalDiv!: ElementRef;

  ngAfterContentInit(): void {
    console.log(this.modalDiv);
  }

  onClose() {
    this.close.emit();
  }

}
