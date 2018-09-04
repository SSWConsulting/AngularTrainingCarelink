import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { GenereatedClient } from '../api.generated';
import { ToDo } from '../model/todo';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class MyHomeComponent implements OnInit {
  incompleteTodos$: Observable<ToDo[]>;
  constructor(private todoService: TodoserviceService, private api: GenereatedClient) {}
  ngOnInit() {
    this.incompleteTodos$ = this.todoService.incompletedTodos$;

    this.api
      .companies_Get()
      .pipe(filter(x => x !== null))
      .subscribe(x => console.log(x[0].companyName));
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
