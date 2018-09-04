import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToDo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  private todoSubject: BehaviorSubject<ToDo[]> = new BehaviorSubject(null);
  public readonly todos$: Observable<ToDo[]> = this.todoSubject.asObservable();

  private completedSubject: BehaviorSubject<ToDo[]> = new BehaviorSubject(null);
  public readonly completedTodos$: Observable<ToDo[]> = this.completedSubject.asObservable();

  private incompletedSubject: BehaviorSubject<ToDo[]> = new BehaviorSubject(null);
  public readonly incompletedTodos$: Observable<ToDo[]> = this.incompletedSubject.asObservable();

  private todos: ToDo[];
  constructor() {
    // initialize some fake data
    this.todos = [
      {
        description: 'sample task',
        completed: false
      }
    ];
    this.publishEvents();
  }

  addNew(itm: ToDo) {
    this.todos.push(itm);
    this.publishEvents();
  }

  markAsCompleted(itm: ToDo) {
    itm.completed = true;
    this.publishEvents();
  }

  markAllAs(completed: boolean) {
    this.todos.forEach(element => {
      element.completed = completed;
    });
    this.publishEvents();
  }

  markAsInCompleted(itm: ToDo) {
    itm.completed = false;
    this.publishEvents();
  }
  deleteTask(itm: ToDo) {
    this.todos.splice(this.todos.indexOf(itm), 1);
    this.publishEvents();
  }

  private publishEvents() {
    this.todoSubject.next(this.todos);
    this.incompletedSubject.next(this.todos.filter(x => !x.completed));
    this.completedSubject.next(this.todos.filter(x => x.completed));
  }
}
