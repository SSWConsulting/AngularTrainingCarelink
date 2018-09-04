import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Company } from './api.generated';
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
  constructor(private httpClient: HttpClient) {
    // initialize some fake data
    this.todos = [
      {
        description: 'sample task',
        completed: false
      }
    ];
    this.publishEvents();
  }

  getCompanies(): Observable<Company> {
    return this.httpClient.get<Company>('http://localhost:5000/api/Companies').pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  createCompany(data: Company): Observable<Company> {
    return this.httpClient.post<Company>('http://localhost:5000/api/Companies', data).pipe(catchError(this.handleError));
  }

  deleteCompany(id: number): Observable<void> {
    return this.httpClient.delete<void>('http://localhost:5000/api/Companies/' + id).pipe(catchError(this.handleError));
  }

  putCompany(id: number, data: Company): Observable<Company> {
    return this.httpClient.put<Company>('http://localhost:5000/api/Companies/' + id, data).pipe(catchError(this.handleError));
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
