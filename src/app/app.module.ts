import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FilterByStatusPipe } from './pipes/filter-by-status.pipe';
import { StatusHighlightDirective } from './directives/status-highlight.directive';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppProductComponent } from './components/app-product/app-product.component';
import { ListingComponent } from './components/listing/listing.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    AddTodoComponent,
    TodoListComponent,
    FilterByStatusPipe,
    StatusHighlightDirective,
    AppProductComponent,
    ListingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
