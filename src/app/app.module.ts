import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FooterComponent } from './footer/footer.component';
import { MojTodoListComponent } from './todo-list-moj/moj-todo-list.component';
import {FormsModule} from "@angular/forms";
import { AlertComponent } from './shared/components/alert/alert.component';
import { Alert2Component } from './shared/components/alert2/alert2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    FooterComponent,
    MojTodoListComponent,
    AlertComponent,
    Alert2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
