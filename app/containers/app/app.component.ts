import { Component } from '@angular/core'

@Component({
  selector: 'tasty-app',
  template: '<h1>{{title}}</h1>',
})

export class App {
  title = 'Tasty Todos in Angular 2'
}
