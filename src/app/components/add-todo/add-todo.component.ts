import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItem } from '../../models/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent implements OnInit {
  toDoItemname = '';
  idCounter: 0;

  @Output() addToDo= new EventEmitter<TodoItem>();
  constructor(){

  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.addToDo.emit({
      id: this.idCounter,
      title: this.toDoItemname,
      isCompleted: false,
   
    });
    this.idCounter++;
    this.toDoItemname='';
  }

}
