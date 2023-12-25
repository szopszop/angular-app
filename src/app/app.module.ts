import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FooterComponent } from './footer/footer.component';
import { TodoListMojComponent } from './todo-list-moj/todo-list-moj.component';
import { AnotherTodoComponent } from './another-todo/another-todo.component';
import { SzymekComponent } from './szymek/szymek.component';
import {FormsModule} from "@angular/forms";
import { AlertComponent } from './shared/components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    FooterComponent,
    TodoListMojComponent,
    AnotherTodoComponent,
    SzymekComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
