// import { Component, Input, input, OnChanges, OnInit } from '@angular/core';
// import { TodoItem } from '../../models/todo.model';

// @Component({
//   selector: 'app-todo-list',
//   templateUrl: './todo-list.component.html',
//   styleUrl: './todo-list.component.scss'
// })
// export class TodoListComponent implements OnChanges,OnInit {
//   @Input () todoList: TodoItem[]=[];
//   upcomingTodos:  TodoItem[]=[];
//   completedTodos: TodoItem[]=[];
//   constructor(){
    
//   }
//   ngOnChanges(): void{
//     this.handleTodoList();
//   }
//   ngOnInit(): void {
  
//   }
  
//   onToggleComplete (item: TodoItem){
//     item.isCompleted=!item.isCompleted; 
//     this.handleTodoList();
    
//   }

//   private handleTodoList(){
//     this.upcomingTodos= this.todoList.filter((item)=> !item.isCompleted);
//     this.completedTodos= this.todoList.filter((item)=> item.isCompleted);

//   }
// }


import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { TodoItem } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent  {
  @Input () todoList: TodoItem[]=[];
  @Output () toggleComplete = new EventEmitter();
  constructor(){
    
  }

  ngOnInit(): void {
  
  }
  
  onToggleComplete (item: TodoItem){
    this.toggleComplete.emit(item);

    
  }


}
