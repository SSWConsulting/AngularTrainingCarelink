import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from '../../model/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  @Input()
  todolist: ToDo[];

  @Output()
  completeItem = new EventEmitter<ToDo>();

  constructor() {}

  ngOnInit() {}

  markAsCompleted(itm: ToDo) {
    this.completeItem.emit(itm);
  }
}
