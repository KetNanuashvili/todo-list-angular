import { Component } from '@angular/core';
import { TodoItem } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  toDoList: TodoItem[] = [];
  title = 'To do List management app';

  onAddTodo(item: TodoItem) {
    this.toDoList = [...this.toDoList, item];
  }

  onToggleComplete(changedItem: TodoItem) {
    this.toDoList = this.toDoList.map(item =>
      item.id === changedItem.id 
        ? { ...item, isCompleted: !item.isCompleted } 
        : item
    );
  }
}
