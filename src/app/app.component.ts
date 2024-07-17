import { Component } from '@angular/core';
import { TodoItem } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  toDoList: TodoItem[] =[];
  title = 'To do List management app';

  isCompleted: boolean;
  constructor(){

  }

  onAddTodo(item: TodoItem){
    this.toDoList = [...this.toDoList, item]
  }

  onToggleComplete(changedItems: TodoItem){
    this.toDoList=this.toDoList.map((item) =>
      changedItems.id===item.id 
    ? {...item , isCompleted: !changedItems.isCompleted}: 
    item);
  }

}
