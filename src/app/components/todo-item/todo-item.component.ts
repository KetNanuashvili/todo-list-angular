import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent implements OnInit{
@Input() item: TodoItem | null =null;
@Output() toggleComplete = new EventEmitter();

ngOnInit(): void {
  
}
onToggleComplete(){
  this.toggleComplete.emit();
}
}
