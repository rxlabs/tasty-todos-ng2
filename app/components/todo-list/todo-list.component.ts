import { Component, Input } from '@angular/core'

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos">{{todo.name}}</li>
    <ul>
    `
})

export class TodoList {
  @Input() todos:array
}
