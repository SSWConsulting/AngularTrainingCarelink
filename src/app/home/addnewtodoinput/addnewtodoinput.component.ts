import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDo } from '../../model/todo';

@Component({
  selector: 'app-addnewtodoinput',
  templateUrl: './addnewtodoinput.component.html',
  styleUrls: ['./addnewtodoinput.component.css']
})
export class AddnewtodoinputComponent implements OnInit {
  @Output()
  newItemAdded = new EventEmitter<ToDo>();

  newToDoText: string;
  constructor() {}

  ngOnInit() {}

  newItemButtonClicked() {
    this.newItemAdded.emit({
      description: this.newToDoText,
      completed: false
    });

    this.newToDoText = '';
  }
}
