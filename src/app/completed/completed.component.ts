import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../model/todo';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  todos$: Observable<ToDo[]>;
  constructor(private todoService: TodoserviceService) {}

  ngOnInit() {
    this.todos$ = this.todoService.completedTodos$;
  }

  markAsIncomplete(itm: ToDo) {
    this.todoService.markAsInCompleted(itm);
  }
}
