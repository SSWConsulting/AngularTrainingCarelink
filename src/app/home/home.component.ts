import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../model/todo';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class MyHomeComponent implements OnInit {
  incompleteTodos$: Observable<ToDo[]>;
  constructor(private todoService: TodoserviceService) {}
  ngOnInit() {
    this.incompleteTodos$ = this.todoService.incompletedTodos$;
  }

  addNewItem(itm: ToDo) {
    this.todoService.addNew(itm);
  }

  markItemAsCompleted(itm: ToDo) {
    this.todoService.markAsCompleted(itm);
  }

  markAllCompleted() {
    this.todoService.markAllAs(true);
  }
}
