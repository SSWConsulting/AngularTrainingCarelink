import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { route } from './app.route';
import { CompletedComponent } from './completed/completed.component';
import { AddnewtodoinputComponent } from './home/addnewtodoinput/addnewtodoinput.component';
import { MyHomeComponent } from './home/home.component';
import { TodolistComponent } from './home/todolist/todolist.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [AppComponent, MyHomeComponent, CompletedComponent, NavigationComponent, TodolistComponent, AddnewtodoinputComponent],
  imports: [BrowserModule, RouterModule, RouterModule.forRoot(route), FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
