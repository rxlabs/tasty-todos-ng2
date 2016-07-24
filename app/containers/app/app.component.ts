import { NgRedux } from 'ng2-redux';
import { Component } from '@angular/core'

import { store } from '../../store'
import { VisibleTodoList } from '../visible-todo-list'

@Component({
  directives: [VisibleTodoList],
  selector: 'tasty-app',
  template: `
    <h1>{{title}}</h1>
    <visible-todo-list></visible-todo-list>
    `
})

export class App {
  constructor(private ngRedux: NgRedux) {
    this.ngRedux.provideStore(store)
  }
  title = 'Tasty Todos in Angular 2'
}
