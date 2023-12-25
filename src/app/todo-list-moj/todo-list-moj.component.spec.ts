import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListMojComponent } from './todo-list-moj.component';

describe('TodoListMojComponent', () => {
  let component: TodoListMojComponent;
  let fixture: ComponentFixture<TodoListMojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListMojComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListMojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
