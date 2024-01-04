import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {from, interval, map, of, Subscription} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  sub!: Subscription;
  obs$ = interval(1000)

  onClose() {
    this.close.emit();
  }

  ngOnInit(): void {
    this.sub = from([1,2,3]).subscribe({
      next: value => console.log(value),
      error: err => console.log(err),
      complete: () => console.log("test")
    })
    of(1,2,3).pipe(map(numb => numb * 2))
      .subscribe(
        (numb) => console.log(numb)
      )
    console.log(this.sub);

  }

  ngOnDestroy(): void {
    console.log(this.sub);
    this.sub.unsubscribe();
  }


}
