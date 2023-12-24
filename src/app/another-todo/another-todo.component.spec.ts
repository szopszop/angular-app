import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherTodoComponent } from './another-todo.component';

describe('AnotherTodoComponent', () => {
  let component: AnotherTodoComponent;
  let fixture: ComponentFixture<AnotherTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
