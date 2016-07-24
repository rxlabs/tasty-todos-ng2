import { select } from 'ng2-redux';
import { Component } from '@angular/core'

import { TodoList } from '../../components/todo-list/todo-list.component'

@Component({
  directives: [TodoList],
  selector: 'visible-todo-list',
  template: `
    <todo-list [todos]="todos"></todo-list>
    `
})

export class VisibleTodoList {
  // todos = [{name: 'thing'}]
  @select() todos
}
