import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojTodoListComponent } from './moj-todo-list.component';

describe('TodoListMojComponent', () => {
  let component: MojTodoListComponent;
  let fixture: ComponentFixture<MojTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojTodoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MojTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
