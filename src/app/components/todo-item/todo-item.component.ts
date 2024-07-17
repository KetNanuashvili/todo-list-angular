import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
@Input() item: TodoItem | null =null;
@Output() toggleComplete = new EventEmitter();


onToggleComplete(){
  this.toggleComplete.emit();
}
}
